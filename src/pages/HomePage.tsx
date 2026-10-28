import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Globe2, ShieldCheck, Clock, ArrowRight, MessageCircle, 
  MapPin, Phone, Award, Compass, Bug, Mountain, Droplet, 
  Stethoscope, CheckCircle2, ShieldAlert, BookOpen, ChevronDown, ChevronUp, Sliders, Play
} from "lucide-react";
import { VideoStudio } from "../components/VideoStudio";
import { Calculator } from "../components/Calculator";
import { ClinicGallery } from "../components/ClinicGallery";
import { BookingSection } from "../components/BookingSection";
import { CLINIC_WHATSAPP, CLINIC_PHONE, VIDEO_CONSULT_FEE, DOCTOR_REG_NO } from "../components/Navbar";

interface DestinationProfile {
  name: string;
  flag: string;
  category: string;
  urgencyBadge: string;
  vectorRisk: "None" | "Low" | "Moderate" | "High";
  altitudeRisk: "None" | "Extreme";
  waterborneRisk: "Low" | "High";
  entryMandate: string;
  keyVaccines: string[];
  medicalKit: string;
  expertAdvisory: string;
}

const DESTINATIONS: Record<string, DestinationProfile> = {
  "USA / Canada / UK": {
    name: "USA, Canada & United Kingdom",
    flag: "🎓",
    category: "University & Work Clearance",
    urgencyBadge: "Document Audit Required",
    vectorRisk: "None",
    altitudeRisk: "None",
    waterborneRisk: "Low",
    entryMandate: "Mandatory University Immunization Form & TB Screening",
    keyVaccines: ["MenACWY & MenB (Bexsero)", "MMR & Varicella Titers", "Tdap Booster", "QuantiFERON-TB Gold Plus (IGRA)"],
    medicalKit: "Personal prescription medications with doctor attestation letter, certified copy of immunization transcripts.",
    expertAdvisory: "Most US universities require MenACWY within 5 years of matriculation and strict Serogroup B compliance. Infant BCG history requires IGRA blood test to bypass false-positive chest X-rays."
  },
  "Kenya & East Africa Safari": {
    name: "Kenya, Tanzania & East Africa",
    flag: "🦁",
    category: "Wildlife & Safari Travel",
    urgencyBadge: "Border Regulations Active",
    vectorRisk: "High",
    altitudeRisk: "None",
    waterborneRisk: "High",
    entryMandate: "Yellow Fever transit card & Malaria chemoprophylaxis",
    keyVaccines: ["Typhoid Conjugate (TCV)", "Hepatitis A & B", "Rabies Pre-Exposure (PrEP)", "Polio Booster (IPV)"],
    medicalKit: "Atovaquone-Proguanil (Malarone) or Doxycycline, 30% DEET insect repellent, Azithromycin emergency diarrhea course.",
    expertAdvisory: "Official Yellow Fever cards in Punjab are issued at Civil Hospital Phase 6 Mohali. We provide clinical pre-screening, contraindication waivers, and administer co-scheduled typhoid and rabies vaccines."
  },
  "Ladakh & Everest Base Camp": {
    name: "Himalayas (Ladakh, EBC, Kilimanjaro)",
    flag: "🏔️",
    category: "High Altitude & Remote Expedition",
    urgencyBadge: "Hypoxia Pre-Screening",
    vectorRisk: "None",
    altitudeRisk: "Extreme",
    waterborneRisk: "High",
    entryMandate: "Medical Fitness & Emergency High Altitude Kit",
    keyVaccines: ["Tetanus/Tdap", "Hepatitis A", "Typhoid", "Influenza"],
    medicalKit: "Acetazolamide (Diamox 125mg/250mg), Dexamethasone 4mg standby, Fingertip Pulse Oximeter, Chlorine dioxide purification tablets.",
    expertAdvisory: "Ascending over 3,000m requires scheduled Diamox prophylaxis started 24 hours prior to ascent. Never push higher with unresolving morning headache or resting pulse oximetry below 75%."
  },
  "Thailand & Southeast Asia": {
    name: "Thailand, Vietnam & Bali",
    flag: "🏝️",
    category: "Tropical Leisure & Backpacking",
    urgencyBadge: "Vector & Animal Bite Alert",
    vectorRisk: "High",
    altitudeRisk: "None",
    waterborneRisk: "High",
    entryMandate: "Routine border clearance; Rabies bite protocol",
    keyVaccines: ["Hepatitis A & Typhoid (TCV)", "Rabies Pre-Exposure (PrEP)", "Japanese Encephalitis", "Tdap"],
    medicalKit: "Picaridin or DEET repellent (daytime Dengue mosquito prevention), Oral Rehydration Salts (ORS), Loperamide + Ciprofloxacin.",
    expertAdvisory: "Monkeys at Bali and Phuket temples and street dogs carry severe rabies risk. A 2-dose pre-exposure rabies vaccine simplifies emergency post-exposure management dramatically."
  },
  "Saudi Arabia (Hajj & Umrah)": {
    name: "Saudi Arabia (Mecca & Medina)",
    flag: "🕋",
    category: "Pilgrimage / Mass Gathering",
    urgencyBadge: "Mandatory Visa Rule",
    vectorRisk: "Low",
    altitudeRisk: "None",
    waterborneRisk: "Low",
    entryMandate: "Quadrivalent Meningococcal ACWY Stamped Certificate (within 3 yrs)",
    keyVaccines: ["Quadrivalent Meningococcal ACWY", "Seasonal Influenza", "Pneumococcal (PCV20 for age 50+)"],
    medicalKit: "Hydration electrolytes, blister tape for long walks, broad spectrum throat lozenges and masks.",
    expertAdvisory: "Saudi Ministry of Health requires ACWY certification issued no less than 10 days before arrival. Seniors with diabetes or respiratory conditions must receive pneumococcal protection."
  },
  "Visiting India (Inbound Partner)": {
    name: "India (Foreign Tourists & Expats)",
    flag: "🇮🇳",
    category: "Inbound International Travel",
    urgencyBadge: "Food & Water Acclimatization",
    vectorRisk: "Moderate",
    altitudeRisk: "None",
    waterborneRisk: "High",
    entryMandate: "Routine visa; Enteric fever protection",
    keyVaccines: ["Hepatitis A & Typhoid Conjugate", "Rabies Pre-Exposure (PrEP)", "Tdap Booster", "Polio Booster"],
    medicalKit: "Pepto-Bismol / bismuth subsalicylate, Azithromycin 500mg (prescribed), Hand sanitizer, Electrolytes.",
    expertAdvisory: "Avoid raw salads and street tap water. Start Typhoid Conjugate Vaccine (TCV) at least 14 days before landing in India for robust enteric protection."
  }
};

export function HomePage() {
  const [selectedDestinationKey, setSelectedDestinationKey] = useState<string>("USA / Canada / UK");
  const [adultMatrixTab, setAdultMatrixTab] = useState<"shingrix" | "pcv20" | "tdap" | "gardasil">("shingrix");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const selectedDest = DESTINATIONS[selectedDestinationKey];

  // Canvas particle / flight trajectory dynamics
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const points = Array.from({ length: 26 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.16 * (1 - dist / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(16, 185, 129, 0.55)";
        ctx.shadowColor = "rgba(16, 185, 129, 0.8)";
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const sendWhatsApp = (customMsg?: string) => {
    const text = customMsg || `Hello TravelSafe Clinic team, I would like to book a Video Consultation (${VIDEO_CONSULT_FEE}) with Dr. Gaurav Gupta. Please share available appointment slots.`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="space-y-0 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISTM Certified Travel Medicine Practice • Punjab Medical Council Reg: {DOCTOR_REG_NO}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Cross-Border Medical Clearance & Travel Health. <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Clinical Rigor First.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Structured pre-travel medical evaluations, international university immunization clearance, cold-chain vaccine administration, altitude sickness prophylaxis, and adult immunology by <strong className="text-white font-semibold">Dr. Gaurav Gupta, DCH, DNB, CTH®</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#calculator"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all flex items-center gap-2"
                >
                  <Sliders className="w-4 h-4" />
                  <span>Launch Timeline Calculator</span>
                </a>

                <a
                  href="#video-studio"
                  className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-xs border border-white/10 transition-colors flex items-center gap-2"
                >
                  <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  <span>Watch Clinical Videos (4)</span>
                </a>
              </div>

              {/* Factual Aggregate Trust Metrics (NMC Compliant) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                  <div className="text-xl font-bold text-white">30+</div>
                  <div className="text-[11px] text-slate-400">Years Clinical Practice</div>
                </div>
                <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                  <div className="text-xl font-bold text-emerald-400">50 hrs</div>
                  <div className="text-[11px] text-slate-400">Vaccine fridge holdover without power</div>
                </div>
                <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                  <div className="text-xl font-bold text-cyan-400">{VIDEO_CONSULT_FEE}</div>
                  <div className="text-[11px] text-slate-400">Video Teleconsultation</div>
                </div>
                <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                  <div className="text-xl font-bold text-amber-400">CTH®</div>
                  <div className="text-[11px] text-slate-400">ISTM Certified Specialist</div>
                </div>
              </div>
            </div>

            {/* Right Physician Spotlight */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden border border-white/15 bg-slate-900/90 shadow-2xl shadow-emerald-500/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/student-abroad-departure.jpg" 
                    alt="University student preparing international immunization clearance forms" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1222] via-[#0a1222]/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500/90 text-slate-950 font-bold text-xs shadow">
                    Verified Protocol
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/images/dr-gaurav-gupta.jpg" 
                      alt="Dr. Gaurav Gupta, DCH, DNB, CTH®" 
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-400/50"
                    />
                    <div>
                      <div className="font-bold text-white text-base">Dr. Gaurav Gupta, DCH, DNB</div>
                      <div className="text-xs text-emerald-400 font-medium">ISTM Certified Travel Health Specialist</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    "Pre-travel health is preventive clinical medicine. From decoding university forms and TB IGRA testing to administering temperature-monitored biologics, our protocols ensure evidence-based compliance."
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs border-t border-white/10">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      Mon - Sat · 10:30-2, 4:30-7
                    </span>
                    <Link 
                      to="/about-dr-gupta"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                    >
                      <span>Physician Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature 1: Clinical Video Studio */}
      <VideoStudio />

      {/* Feature 2: Interactive Departure Calculator */}
      <Calculator />

      <ClinicGallery />

      {/* Feature 3: Destination Health Threat Radar */}
      <section id="radar" className="py-24 md:py-32 bg-[#09111e] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>Destination Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Destination Health Threat Radar
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Select your travel destination to inspect vector activity, altitude strain, mandatory border certificates, and medical kit recommendations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {Object.keys(DESTINATIONS).map((key) => {
              const dest = DESTINATIONS[key];
              const isSelected = key === selectedDestinationKey;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedDestinationKey(key)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                    isSelected
                      ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20 scale-105"
                      : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/20 hover:bg-slate-800"
                  }`}
                >
                  <span className="text-base">{dest.flag}</span>
                  <span>{key}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-slate-900/90 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">{selectedDest.category}</span>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mt-0.5">
                      <span>{selectedDest.flag}</span>
                      <span>{selectedDest.name}</span>
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                    {selectedDest.urgencyBadge}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Bug className="w-3.5 h-3.5 text-amber-400" />
                      Vector / Malaria
                    </div>
                    <div className={`text-sm font-bold ${selectedDest.vectorRisk === "High" ? "text-red-400" : selectedDest.vectorRisk === "Moderate" ? "text-amber-400" : "text-emerald-400"}`}>
                      {selectedDest.vectorRisk} Risk
                    </div>
                  </div>

                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Mountain className="w-3.5 h-3.5 text-cyan-400" />
                      Altitude (AMS)
                    </div>
                    <div className={`text-sm font-bold ${selectedDest.altitudeRisk === "Extreme" ? "text-cyan-400" : "text-slate-400"}`}>
                      {selectedDest.altitudeRisk} Risk
                    </div>
                  </div>

                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Droplet className="w-3.5 h-3.5 text-blue-400" />
                      Waterborne / Enteric
                    </div>
                    <div className={`text-sm font-bold ${selectedDest.waterborneRisk === "High" ? "text-amber-400" : "text-emerald-400"}`}>
                      {selectedDest.waterborneRisk} Risk
                    </div>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-amber-300">Border Entry & Institutional Requirement</div>
                    <div className="text-xs text-slate-300 mt-0.5">{selectedDest.entryMandate}</div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-emerald-400" />
                    Clinical Guidance by Dr. Gaurav Gupta
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-white/5">
                    {selectedDest.expertAdvisory}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950/70 border border-white/10 rounded-xl p-6 space-y-5">
                <div>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Required & Recommended Biologics</div>
                  <ul className="mt-3 space-y-2">
                    {selectedDest.keyVaccines.map((vax, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-medium">{vax}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-2">
                  <div className="text-xs font-bold text-teal-400 uppercase tracking-wider">Prescribed Medical Travel Kit</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedDest.medicalKit}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-3">
                  <button
                    type="button"
                    onClick={() => sendWhatsApp(`Hello TravelSafe Clinic, I am traveling to ${selectedDest.name} and would like to schedule a Video Consultation (${VIDEO_CONSULT_FEE}) for pre-travel vaccinations and medical clearance.`)}
                    className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>WhatsApp Staff</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Feature 4: The Invisible Shield & Adult Vaccines */}
      <section id="invisible-shield" className="theme-warm py-24 md:py-32 bg-[#070d18] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Adult Immunization Authority</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Invisible Shield: Modern Vaccines for Adults
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Childhood immunity wanes over time. Dr. Gaurav Gupta’s comprehensive guide details how modern adult vaccines defend against shingles, invasive pneumonia, whooping cough, and cancer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/90 border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl">
            
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative group max-w-xs rounded-xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-white/20">
                <img 
                  src="/images/invisible-shield-cover.jpg" 
                  alt="The Invisible Shield: An Adult's Guide to Vaccines by Dr. Gaurav Gupta"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">The Invisible Shield</h4>
                <p className="text-xs text-amber-400 font-medium">An Adult’s Guide to Vaccines • Dr. Gaurav Gupta</p>
              </div>

              <div className="pt-2">
                <Link
                  to="/shingrix-adult-vaccines"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Explore Adult Vaccine Guide</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "shingrix", label: "Shingrix (Shingles)", sub: "Age 50+ & Diabetes" },
                  { id: "pcv20", label: "Prevnar 20 (Lung)", sub: "1 Lifelong Dose" },
                  { id: "tdap", label: "Boostrix (Tdap)", sub: "Cocooning Protection" },
                  { id: "gardasil", label: "Gardasil 9 (HPV)", sub: "Cancer Prevention" }
                ].map((item) => {
                  const active = adultMatrixTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAdultMatrixTab(item.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        active 
                          ? "bg-amber-500/20 border-amber-400 text-white shadow-md ring-1 ring-amber-400" 
                          : "bg-slate-800/40 border-white/5 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight">{item.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{item.sub}</div>
                    </button>
                  );
                })}
              </div>

              <div className="bg-slate-950/70 border border-white/10 rounded-xl p-6 space-y-4">
                {adultMatrixTab === "shingrix" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="font-bold text-white text-sm">Shingrix (Recombinant Zoster Vaccine)</div>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">97%+ Efficacy</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Protects against Shingles and agonizing postherpetic neuralgia. 2-dose series (0 and 2-6 months) for adults aged 50 and above.
                    </p>
                  </div>
                )}

                {adultMatrixTab === "pcv20" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="font-bold text-white text-sm">Prevnar 20 (Pneumococcal 20-Valent Conjugate)</div>
                      <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-bold">1 Single Dose</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Conjugate vaccine defending against invasive pneumococcal pneumonia and bacteremia in seniors, diabetics, and smokers.
                    </p>
                  </div>
                )}

                {adultMatrixTab === "tdap" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="font-bold text-white text-sm">Boostrix (Tdap: Tetanus, Diphtheria, Pertussis)</div>
                      <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-bold">Every 10 Years</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Adult whooping cough immunity wanes every decade. Cocooning immunization shields newborn grandchildren from lethal pertussis.
                    </p>
                  </div>
                )}

                {adultMatrixTab === "gardasil" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="font-bold text-white text-sm">Gardasil 9 (9-Valent HPV Vaccine)</div>
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-bold">Cancer Shield</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Defends women and men up to age 45 against 9 oncogenic HPV types causing cervical, anal, and head/neck cancers.
                    </p>
                  </div>
                )}

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Video Consult: <strong className="text-white">{VIDEO_CONSULT_FEE}</strong></span>
                  <Link
                    to="/shingrix-adult-vaccines"
                    className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                  >
                    <span>Read Full Adult Vaccine Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Feature 5: Yellow Fever Punjab Center */}
      <section id="yellow-fever" className="py-24 md:py-32 bg-[#09111e] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-yellow-400" />
              <span>Official Regulatory Guidance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Yellow Fever Vaccination Card in Punjab: The Clear Protocol
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Under Government of India and WHO mandates, the official Yellow Card (ICVP) is strictly issued by designated government centers in Punjab: Civil Hospital, Phase 6, Mohali and AIIMS Bathinda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-slate-900/90 border border-yellow-500/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-bold">
                  Official Issuing Authority
                </span>
                <Award className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Civil Hospital, Phase 6, Mohali</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Designated by the Ministry of Health & Family Welfare (MoHFW). Operating Tuesdays and Thursdays (10:00 AM – 1:00 PM). Original passport mandatory.
              </p>
              <div className="pt-2">
                <Link
                  to="/yellow-fever-card-punjab"
                  className="text-xs text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-1"
                >
                  <span>Read Complete Punjab Yellow Fever Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                  Clinical Pre-Screening
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">TravelSafe Clinic Pre-Travel Clearance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Medical contraindication waivers for seniors (60+) and immunosuppressed travelers, plus co-scheduled Typhoid, Hepatitis, and Malaria prophylaxis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 6: DPDP Compliant Booking Section */}
      <BookingSection />

      {/* Feature 7: Plain Text FAQs */}
      <section className="py-16 bg-[#09111e] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2 mb-10">
            <h3 className="text-2xl font-bold text-white">Frequently Asked Clinical Questions</h3>
            <p className="text-xs text-slate-400">Clear factual guidance for students, families, and international travelers.</p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Why do US and Canadian universities reject the Mantoux skin test?",
                a: "In India, widespread infant BCG vaccination causes false-positive cross-reactions on the Mantoux tuberculin skin test. North American universities require an IGRA blood assay (such as QuantiFERON-TB Gold Plus), which specifically targets M. tuberculosis antigens and is unaffected by BCG."
              },
              {
                q: "Can multiple travel vaccines be administered during one visit?",
                a: "Yes. In accordance with WHO and CDC guidelines, most inactivated travel vaccines (such as Hepatitis A, Typhoid Conjugate, Tdap, and Meningococcal ACWY) can be administered concurrently at separate anatomical injection sites."
              },
              {
                q: "How does the INR 1,000 Video Teleconsultation work?",
                a: "You submit your university forms or travel itinerary to our clinical staff on WhatsApp. We schedule a dedicated video call with Dr. Gaurav Gupta where he audits your records, orders required blood titers, and outlines your immunization sequence."
              },
              {
                q: "Where is Yellow Fever administered in Punjab?",
                a: "Under Government of India regulations, the official Yellow Fever vaccination and International Certificates (ICVP) in Punjab are issued at Civil Hospital, Phase 6, Mohali (and AIIMS Bathinda). TravelSafe Clinic provides pre-travel clinical triage, contraindication waiver certificates, and complementary vaccines."
              }
            ].map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="bg-slate-900/60 border border-white/5 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
