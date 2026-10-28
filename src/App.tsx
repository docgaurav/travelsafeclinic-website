import { useState, useEffect, useRef } from "react";
import { 
  Globe2, GraduationCap, Compass, ShieldAlert, CheckCircle2, 
  Clock, MapPin, Phone, MessageCircle, Mail,
  HeartHandshake, Sparkles, FileText, ChevronDown, ChevronUp,
  Mountain, Stethoscope, ArrowRight, ShieldCheck, Bug, Droplet, 
  UserCheck, Calendar, Award, ThermometerSnowflake, Shield, 
  PlaneTakeoff, Info, BookOpen, Syringe, HeartPulse, Video, 
  ExternalLink, Play, Pause, Volume2, VolumeX, Maximize2, X,
  AlertCircle, Activity, ChevronRight, Sliders, Check, FileCheck
} from "lucide-react";

const CLINIC_WHATSAPP = "919653010203";
const CLINIC_PHONE = "+918010777722";
const CLINIC_EMAIL = "charakclinics@gmail.com";
const VIDEO_CONSULT_FEE = "INR 1,000";
const GOV_YELLOW_FEVER_URL = "https://ihpoe.mohfw.gov.in/";

interface VideoEpisode {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  seconds: number;
  poster: string;
  badge: string;
  tagline: string;
  chapters: { time: string; title: string; sec: number }[];
  takeaways: string[];
  ctaText: string;
  ctaMessage: string;
}

const VIDEO_EPISODES: VideoEpisode[] = [
  {
    id: "univ-clearance",
    title: "The 48-Hour University Immunization Clearance Protocol",
    subtitle: "Decoding AAMC, Stanford, Columbia & Oxford health requirements without delays",
    duration: "02:45",
    seconds: 165,
    poster: "/images/video-university-clearance.jpg",
    badge: "Student Essential",
    tagline: "100% acceptance rate across Ivy League, UK, and Canadian universities.",
    chapters: [
      { time: "00:00", title: "Why US/UK Health Forms Get Rejected", sec: 0 },
      { time: "00:45", title: "TB IGRA Blood Test vs False-Positive BCG Mantoux", sec: 45 },
      { time: "01:25", title: "Fast-Tracking Antibody Titers (MMR, Varicella, Hep B)", sec: 85 },
      { time: "02:10", title: "Official Physician Signature & Institutional Stamp", sec: 130 }
    ],
    takeaways: [
      "Childhood BCG vaccination frequently causes false-positive Mantoux skin tests; US universities strictly mandate IGRA (QuantiFERON-TB Gold Plus) blood tests.",
      "Missing documentation or late vaccine doses can block university dorm move-in and class registration.",
      "Dr. Gaurav Gupta audits every form personally, cross-references antibody titers, and signs official medical clearances."
    ],
    ctaText: "Book Student Clearance",
    ctaMessage: "Hello TravelSafe Clinic, I have university immunization clearance forms that require Dr. Gaurav Gupta's review, IGRA/titer testing, and official physician signature. Please guide me with an appointment."
  },
  {
    id: "cold-chain",
    title: "Cold-Chain Integrity: Inside the 4.2°C Biologics Vault",
    subtitle: "Why WHO-grade continuous digital temperature logging guarantees vaccine potency",
    duration: "03:15",
    seconds: 195,
    poster: "/images/video-cold-chain-integrity.jpg",
    badge: "Clinical Standard",
    tagline: "A compromised cold chain renders sensitive travel biologics completely ineffective.",
    chapters: [
      { time: "00:00", title: "The Hidden Danger of Spoiled Vaccines", sec: 0 },
      { time: "00:50", title: "The 2°C to 8°C Biologics Window Explained", sec: 50 },
      { time: "01:40", title: "Continuous Digital Data Loggers & Cloud Alerting", sec: 100 },
      { time: "02:35", title: "Why Retail Pharmacy Counter Storage Often Fails", sec: 155 }
    ],
    takeaways: [
      "Rabies, Yellow Fever, Shingrix, and Gardasil 9 are delicate proteins that lose immunogenic potency if exposed to temperature excursions.",
      "Standard pharmacy domestic refrigerators suffer frequent thermal cycling and freeze-thaw damage.",
      "TravelSafe Clinic operates calibrated medical cold-storage chambers with unbroken continuous monitoring."
    ],
    ctaText: "Check Vaccine Availability",
    ctaMessage: "Hello TravelSafe Clinic, I want to inquire about verified cold-chain vaccine availability for my upcoming travel."
  },
  {
    id: "altitude-expedition",
    title: "High Altitude & Remote Expedition Medicine",
    subtitle: "Ladakh, Everest Base Camp & Kilimanjaro acclimatization protocol",
    duration: "02:50",
    seconds: 170,
    poster: "/images/video-high-altitude-medicine.jpg",
    badge: "Expedition Advisory",
    tagline: "Prevent Acute Mountain Sickness (AMS), HAPE, and GI distress before departure.",
    chapters: [
      { time: "00:00", title: "AMS vs HAPE vs HACE: Recognizing Red Flags", sec: 0 },
      { time: "00:40", title: "Acetazolamide (Diamox) Prophylactic Dosing Protocol", sec: 40 },
      { time: "01:30", title: "Emergency Oximetry & Dexamethasone Rescue Guidelines", sec: 90 },
      { time: "02:15", title: "Remote Travel Water Safety & Diarrhea Starter Packs", sec: 135 }
    ],
    takeaways: [
      "Acetazolamide (Diamox) must be started 24 hours prior to crossing 2,800m elevation—never when severe hypoxia has already set in.",
      "Strict ascent profile: maximum 500m sleeping altitude gain per 24 hours once above 3,000m.",
      "Carry personalized physician-prescribed expedition emergency packs tailored to your trek itinerary."
    ],
    ctaText: "Get Altitude Protocol",
    ctaMessage: "Hello TravelSafe Clinic, I am planning a high-altitude expedition (Ladakh/EBC/Kilimanjaro) and need Dr. Gaurav Gupta's medical acclimatization consultation and prescription kit."
  },
  {
    id: "invisible-shield",
    title: "The Invisible Shield: Why Healthy Adults Need Vaccines",
    subtitle: "Dr. Gaurav Gupta's clinical blueprint for adult immunization (Ages 19 to 65+)",
    duration: "03:30",
    seconds: 210,
    poster: "/images/video-invisible-shield-adults.jpg",
    badge: "Author's Masterclass",
    tagline: "Childhood immunity wanes. Modern adult vaccines prevent devastating disease.",
    chapters: [
      { time: "00:00", title: "The Myth of Lifetime Immunity", sec: 0 },
      { time: "00:55", title: "Shingrix: 97% Defense Against Debilitating Nerve Pain", sec: 55 },
      { time: "01:50", title: "Prevnar 20: Lifelong Conjugate Lung Protection", sec: 110 },
      { time: "02:40", title: "Tdap Cocooning: Protecting Newborns & Elders", sec: 160 }
    ],
    takeaways: [
      "1 in 3 adults will develop Shingles in their lifetime. Shingrix offers over 97% protection against unbearable postherpetic neuralgia.",
      "Invasive pneumococcal pneumonia is preventable in adults with a single conjugate dose of PCV20.",
      "Adult whooping cough often masquerades as a stubborn chronic cough and is easily transmitted to unprotected infants."
    ],
    ctaText: "Adult Vaccine Teleconsult",
    ctaMessage: "Hello TravelSafe Clinic, I am interested in an Adult Vaccine Assessment with Dr. Gaurav Gupta based on 'The Invisible Shield' recommendations."
  }
];

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
    keyVaccines: ["MenACWY & MenB (Bexsero)", "MMR & Varicella", "Tdap Booster", "QuantiFERON-TB Gold Plus (IGRA)"],
    medicalKit: "Standard personal OTC pack, certified copy of immunization transcripts.",
    expertAdvisory: "Most US universities require MenACWY within 5 years of matriculation and strict Serogroup B compliance. BCG history requires IGRA blood test to bypass false-positive chest X-rays."
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
    expertAdvisory: "Official Yellow Fever cards in Punjab are issued at Civil Hospital Phase 6 Mohali. We provide the clinical pre-screening, contraindication waivers, and administer co-scheduled typhoid and rabies vaccines."
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
    expertAdvisory: "Monkeys at Bali and Phuket temples and stray dogs carry severe rabies risk. A 2-dose pre-exposure rabies vaccine simplifies emergency post-exposure management dramatically."
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
    expertAdvisory: "Avoid raw salads and street water. Start Typhoid Conjugate Vaccine (TCV) at least 14 days before landing in Delhi or Mumbai for robust enteric protection."
  }
};

export default function App() {
  // Navigation & Interactive States
  const [activeVideo, setActiveVideo] = useState<VideoEpisode>(VIDEO_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [isTheatreOpen, setIsTheatreOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Departure Readiness Calculator State
  const [calcPersona, setCalcPersona] = useState<string>("Student (USA/Canada/UK)");
  const [calcWeeks, setCalcWeeks] = useState<number>(3);
  const [calcPreviousVaccines, setCalcPreviousVaccines] = useState<string>("Complete Childhood Records");

  // Selected Destination Radar
  const [selectedDestinationKey, setSelectedDestinationKey] = useState<string>("USA / Canada / UK");
  const selectedDest = DESTINATIONS[selectedDestinationKey];

  // Adult Vaccine Interactive Matrix Tab
  const [adultMatrixTab, setAdultMatrixTab] = useState<"shingrix" | "pcv20" | "tdap" | "gardasil">("shingrix");

  // Quick Booking Form State
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingType, setBookingType] = useState("University Immunization Form Clearance");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingNotes, setBookingNotes] = useState("");

  // Hero Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Video playback simulation timer
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, activeVideo.seconds * 10);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeVideo]);

  // Ambient fluid flight canvas
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

  // WhatsApp Helper
  const sendWhatsApp = (customMsg?: string) => {
    const text = customMsg || `Hello TravelSafe Clinic team, I would like to book a Video Consultation (${VIDEO_CONSULT_FEE}) with Dr. Gaurav Gupta. Name: ${bookingName || "Traveler"}, Travel Type: ${bookingType}, Departure: ${bookingDate || "Upcoming"}. Please share available slots.`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Notification Bar */}
      <div className="bg-emerald-950/80 border-b border-emerald-500/20 text-emerald-300 text-xs py-2 px-4 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium">Direct Video Consultations with Dr. Gaurav Gupta (ISTM Certified) • Standard Fee: {VIDEO_CONSULT_FEE}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> Sector 69, Mohali</span>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {CLINIC_PHONE}</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation */}
      <header className="border-b border-white/5 bg-[#0a1222]/80 backdrop-blur-xl sticky top-8 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 ring-1 ring-white/20 group-hover:scale-105 transition-transform">
              <Globe2 className="w-5 h-5 text-slate-950 font-bold" />
            </div>
            <div>
              <div className="font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                TravelSafe <span className="text-emerald-400 font-medium text-sm px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">CLINIC</span>
              </div>
              <div className="text-[11px] text-slate-400">Dr. Gaurav Gupta, MD • ISTM Travel Health Expert</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#video-studio" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <Video className="w-4 h-4 text-emerald-400" /> Clinical Videos
            </a>
            <a href="#calculator" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-teal-400" /> Timeline Calculator
            </a>
            <a href="#radar" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-400" /> Destination Radar
            </a>
            <a href="#invisible-shield" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-400" /> Adult Vaccines
            </a>
            <a href="#yellow-fever" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-yellow-400" /> Punjab Yellow Fever
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => sendWhatsApp()}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp</span>
            </button>
            <a 
              href="#booking"
              className="hidden sm:flex px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-colors"
            >
              Book Video Consult ({VIDEO_CONSULT_FEE})
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Ambient Canvas */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISTM Certified Travel Medicine Authority • 2026 Standards</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Cross-Border Health Clearance, <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Engineered Without Friction.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Avoid university admissions rejection, airport quarantine, and avoidable infections. Led by <strong className="text-white font-semibold">Dr. Gaurav Gupta</strong>, we deliver university form clearance, continuous cold-chain vaccine administration, altitude prophylaxis, and adult immunization.
              </p>

              {/* Fast Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#calculator"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all flex items-center gap-2 group"
                >
                  <Sliders className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  <span>Launch Timeline Calculator</span>
                </a>

                <a
                  href="#video-studio"
                  className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm border border-white/10 transition-colors flex items-center gap-2"
                >
                  <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  <span>Watch Clinical Videos (4)</span>
                </a>

                <button
                  onClick={() => sendWhatsApp()}
                  className="px-5 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-semibold text-sm border border-emerald-500/30 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                  <div className="text-xl font-bold text-white">100%</div>
                  <div className="text-[11px] text-slate-400">US/UK Form Approval</div>
                </div>
                <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                  <div className="text-xl font-bold text-emerald-400">4.2°C</div>
                  <div className="text-[11px] text-slate-400">WHO Cold-Chain Vault</div>
                </div>
                <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                  <div className="text-xl font-bold text-cyan-400">{VIDEO_CONSULT_FEE}</div>
                  <div className="text-[11px] text-slate-400">Video Consultation</div>
                </div>
                <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                  <div className="text-xl font-bold text-amber-400">ISTM</div>
                  <div className="text-[11px] text-slate-400">Certified Specialist</div>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden border border-white/15 bg-slate-900/90 shadow-2xl shadow-emerald-500/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/student-abroad-departure.jpg" 
                    alt="Student with international university clearance form at airport" 
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
                      alt="Dr. Gaurav Gupta" 
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-400/50"
                    />
                    <div>
                      <div className="font-bold text-white text-base">Dr. Gaurav Gupta, MD</div>
                      <div className="text-xs text-emerald-400 font-medium">ISTM Certified Travel Health Expert</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    "Whether you are heading to Harvard, trekking through the Karakoram, or protecting older family members with modern adult vaccines, travel health requires proactive clinical precision, not last-minute guesswork."
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs border-t border-white/10">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      Appointments Mon - Sat
                    </span>
                    <button 
                      onClick={() => sendWhatsApp()}
                      className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                    >
                      <span>WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURE 1: 2026 INTERACTIVE VIDEO STUDIO */}
      <section id="video-studio" className="py-20 bg-[#09111e] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
              <Video className="w-3.5 h-3.5 text-teal-400" />
              <span>Interactive Clinical Cinema • 2026 Digital Flagship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Clinical Video Briefings by Dr. Gaurav Gupta
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Short, high-impact video briefings explaining complex medical protocols, cold-chain standards, altitude strategies, and adult immunization.
            </p>
          </div>

          {/* Interactive Cinema Player Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Video Screen */}
            <div className="lg:col-span-8 bg-slate-900 rounded-2xl border border-white/15 overflow-hidden shadow-2xl relative">
              
              {/* Video Screen Area */}
              <div className="relative aspect-video bg-black overflow-hidden group">
                <img 
                  src={activeVideo.poster} 
                  alt={activeVideo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-slate-950 font-bold text-xs backdrop-blur-md">
                    {activeVideo.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 text-slate-300 text-xs border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    {activeVideo.duration}
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/90 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all ring-4 ring-white/20"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950" />
                    ) : (
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 ml-1" />
                    )}
                  </button>
                </div>

                {/* Bottom Timeline Controls */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 to-transparent space-y-2">
                  
                  {/* Scrubber Progress Bar */}
                  <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden cursor-pointer">
                    <div 
                      className="bg-emerald-400 h-full transition-all duration-300"
                      style={{ width: `${isPlaying ? videoProgress : 35}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="hover:text-emerald-400 transition-colors font-medium flex items-center gap-1"
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{isPlaying ? "Playing" : "Preview"}</span>
                      </button>

                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="hover:text-emerald-400 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>

                      <span className="text-slate-400 text-[11px]">
                        {isPlaying ? `${Math.floor((videoProgress / 100) * activeVideo.seconds)}s / ${activeVideo.duration}` : `00:45 / ${activeVideo.duration}`}
                      </span>
                    </div>

                    <button 
                      onClick={() => setIsTheatreOpen(true)}
                      className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 text-xs"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Theatre & Notes</span>
                    </button>
                  </div>

                </div>
              </div>

              {/* Active Video Meta Information */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {activeVideo.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-1">
                    {activeVideo.subtitle}
                  </p>
                </div>

                {/* Chapter Scrubbers */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {activeVideo.chapters.map((chap, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setVideoProgress(Math.floor((chap.sec / activeVideo.seconds) * 100));
                        setIsPlaying(true);
                      }}
                      className="text-left p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-all text-xs"
                    >
                      <div className="text-emerald-400 font-mono text-[10px]">{chap.time}</div>
                      <div className="text-slate-200 truncate font-medium text-[11px]">{chap.title}</div>
                    </button>
                  ))}
                </div>

                {/* Clinical Takeaways */}
                <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-4 space-y-2">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Key Clinical Protocol Highlights
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {activeVideo.takeaways.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10">
                  <div className="text-xs text-slate-400">
                    Physician Fee: <strong className="text-white">{VIDEO_CONSULT_FEE}</strong> for individual video review
                  </div>
                  <button
                    onClick={() => sendWhatsApp(activeVideo.ctaMessage)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shadow"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                    <span>WhatsApp</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Video Playlist Column */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                Select Episode ({VIDEO_EPISODES.length})
              </div>

              {VIDEO_EPISODES.map((ep) => {
                const isCurrent = ep.id === activeVideo.id;
                return (
                  <div
                    key={ep.id}
                    onClick={() => {
                      setActiveVideo(ep);
                      setVideoProgress(0);
                      setIsPlaying(false);
                    }}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex gap-3.5 items-center ${
                      isCurrent 
                        ? "bg-emerald-500/10 border-emerald-500/40 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30" 
                        : "bg-slate-900/60 border-white/5 hover:bg-slate-800/80 hover:border-white/15"
                    }`}
                  >
                    <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-black">
                      <img 
                        src={ep.poster} 
                        alt={ep.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isCurrent ? "bg-emerald-400 text-slate-950" : "bg-white/80 text-slate-950"}`}>
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 text-[9px] bg-black/80 px-1 rounded text-white font-mono">
                        {ep.duration}
                      </span>
                    </div>

                    <div className="overflow-hidden space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${isCurrent ? "bg-emerald-400 text-slate-950" : "bg-white/10 text-slate-300"}`}>
                          {ep.badge}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white leading-tight truncate">
                        {ep.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {ep.tagline}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-[#0e192c] border border-white/10 space-y-3 mt-4">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                  <Award className="w-4 h-4" />
                  <span>Custom Patient Briefings</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have a specific destination or complex medical history? Dr. Gaurav Gupta prepares custom pre-travel risk analyses with precise immunization schedules.
                </p>
                <button
                  onClick={() => sendWhatsApp()}
                  className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Staff</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURE 2: INTERACTIVE DEPARTURE TIMELINE & VACCINE CALCULATOR */}
      <section id="calculator" className="py-20 bg-[#070d18] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive Decision Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Departure Timeline & Vaccine Sequencing Calculator
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Interactive timeline estimation. Adjust your profile and departure date to see the required clinical milestones and urgent action steps.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Controls Column */}
              <div className="lg:col-span-6 space-y-8">
                
                {/* Step 1: Traveler Profile */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-[10px] font-bold">1</span>
                    Select Your Travel or Health Category
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: "Student (USA/Canada/UK)", label: "University Clearance", icon: GraduationCap },
                      { id: "Wildlife Safari (Africa)", label: "Safari & Africa (YF/Malaria)", icon: Globe2 },
                      { id: "Himalayan Expedition", label: "High Altitude Trek (AMS)", icon: Mountain },
                      { id: "Pilgrimage (Hajj/Umrah)", label: "Hajj / Umrah (ACWY)", icon: Compass },
                      { id: "Adult Longevity (50+)", label: "The Invisible Shield (Adults)", icon: ShieldCheck }
                    ].map((item) => {
                      const Icon = item.icon;
                      const active = calcPersona === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setCalcPersona(item.id)}
                          className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                            active 
                              ? "bg-emerald-500/20 border-emerald-400 text-white shadow-md ring-1 ring-emerald-400" 
                              : "bg-slate-800/60 border-white/5 text-slate-300 hover:bg-slate-800 hover:border-white/10"
                          }`}
                        >
                          <Icon className={`w-4 h-4 shrink-0 ${active ? "text-emerald-400" : "text-slate-400"}`} />
                          <span className="text-xs font-semibold">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Departure Timeline Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-[10px] font-bold">2</span>
                      Time Remaining Until Departure
                    </label>
                    <span className="text-base font-bold text-emerald-400 bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-500/20">
                      {calcWeeks} {calcWeeks === 1 ? "Week" : "Weeks"}
                    </span>
                  </div>

                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value={calcWeeks}
                    onChange={(e) => setCalcWeeks(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />

                  <div className="flex justify-between text-[11px] text-slate-400 px-1 font-mono">
                    <span>1 Wk (Urgent)</span>
                    <span>3 Wks (Optimal)</span>
                    <span>6 Wks (Ideal)</span>
                    <span>10+ Wks</span>
                  </div>
                </div>

                {/* Step 3: Prior Vaccination Status */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-[10px] font-bold">3</span>
                    Childhood Vaccine Record Availability
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      "Complete Childhood Records",
                      "Partial Records",
                      "No Records (Need Titers)"
                    ].map((rec) => {
                      const active = calcPreviousVaccines === rec;
                      return (
                        <button
                          key={rec}
                          onClick={() => setCalcPreviousVaccines(rec)}
                          className={`p-2.5 rounded-xl border text-center text-xs transition-all ${
                            active 
                              ? "bg-teal-500/20 border-teal-400 text-white font-bold" 
                              : "bg-slate-800/40 border-white/5 text-slate-400 hover:bg-slate-800"
                          }`}
                        >
                          {rec}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Dynamic Live Results Output Card */}
              <div className="lg:col-span-6 bg-slate-950/80 border border-emerald-500/30 rounded-xl p-6 sm:p-7 space-y-6 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <div className="text-[11px] text-emerald-400 font-mono uppercase tracking-wider">Calculated Sequencing Pathway</div>
                      <div className="text-lg font-bold text-white">{calcPersona}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      calcWeeks <= 2 
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" 
                        : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    }`}>
                      {calcWeeks <= 2 ? "Accelerated Fast-Track" : "Standard Timeline"}
                    </span>
                  </div>

                  {/* Calculated Milestones */}
                  <div className="space-y-3.5">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Recommended Protocol Timeline
                    </div>

                    <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                      <div className="relative">
                        <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-slate-950"></div>
                        <div className="text-xs font-bold text-emerald-300">Day 0 (Immediate Action)</div>
                        <div className="text-xs text-slate-300">
                          Video Consultation with Dr. Gupta ({VIDEO_CONSULT_FEE}). Form audit and blood lab requisition for TB IGRA & antibody titers.
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-teal-400 ring-4 ring-slate-950"></div>
                        <div className="text-xs font-bold text-teal-300">Day 3 – 5 (Biologics Window)</div>
                        <div className="text-xs text-slate-300">
                          Lab antibody results reviewed. Administration of Day 0 primary vaccines under strict cold-chain verification.
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-slate-950"></div>
                        <div className="text-xs font-bold text-cyan-300">
                          {calcWeeks <= 2 ? "Day 10 (Rapid Completion)" : `Week ${Math.max(2, calcWeeks - 1)} (Final Stamp)`}
                        </div>
                        <div className="text-xs text-slate-300">
                          {calcWeeks <= 2 
                            ? "Accelerated schedule booster documentation issued; official doctor attestation signed and sealed."
                            : "Booster completions, official university medical clearance stamped and certified."}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Target Vaccines Checklist */}
                  <div className="bg-slate-900/90 border border-white/10 rounded-xl p-4 space-y-2">
                    <div className="text-xs font-bold text-slate-300">Priority Medical Form Clearances</div>
                    <div className="flex flex-wrap gap-1.5">
                      {calcPersona.includes("Student") ? (
                        <>
                          <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-medium border border-emerald-500/30">MenACWY & MenB</span>
                          <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-medium border border-emerald-500/30">QuantiFERON-TB Gold Plus</span>
                          <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-medium border border-emerald-500/30">MMR & Varicella Titers</span>
                          <span className="px-2 py-1 rounded bg-white/10 text-slate-300 text-[11px]">Tdap Booster</span>
                        </>
                      ) : calcPersona.includes("Safari") ? (
                        <>
                          <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-300 text-[11px] font-medium border border-yellow-500/30">Civil Hospital Mohali YF Card</span>
                          <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-medium border border-emerald-500/30">Malarone Prophylaxis</span>
                          <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-medium border border-emerald-500/30">Typhoid (TCV)</span>
                          <span className="px-2 py-1 rounded bg-white/10 text-slate-300 text-[11px]">Rabies PrEP</span>
                        </>
                      ) : calcPersona.includes("Altitude") ? (
                        <>
                          <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[11px] font-medium border border-cyan-500/30">Diamox Acclimatization Kit</span>
                          <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[11px] font-medium border border-cyan-500/30">Pulse Oximetry Protocol</span>
                          <span className="px-2 py-1 rounded bg-white/10 text-slate-300 text-[11px]">Tetanus Booster</span>
                        </>
                      ) : (
                        <>
                          <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-medium border border-emerald-500/30">Shingrix (Shingles)</span>
                          <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-medium border border-emerald-500/30">Prevnar 20 (Pneumonia)</span>
                          <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-medium border border-emerald-500/30">Tdap (Pertussis)</span>
                          <span className="px-2 py-1 rounded bg-white/10 text-slate-300 text-[11px]">Gardasil 9 (HPV)</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Action */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-400 text-center sm:text-left">
                    Teleconsultation Fee: <strong className="text-emerald-400">{VIDEO_CONSULT_FEE}</strong>
                  </div>
                  <button
                    onClick={() => sendWhatsApp(`Hello Dr. Gaurav Gupta's team, I ran the Departure Calculator: Category: ${calcPersona}, Time remaining: ${calcWeeks} weeks, Vaccine records: ${calcPreviousVaccines}. I would like to book a Video Consultation (${VIDEO_CONSULT_FEE}) to initiate this protocol.`)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>WhatsApp</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURE 3: INTERACTIVE GLOBAL HEALTH THREAT RADAR */}
      <section id="radar" className="py-20 bg-[#09111e] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>Global Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Destination Health Threat Radar
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Select your travel destination to inspect vector activity, altitude strain, mandatory border certificates, and medical kit recommendations.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {Object.keys(DESTINATIONS).map((key) => {
              const dest = DESTINATIONS[key];
              const isSelected = key === selectedDestinationKey;
              return (
                <button
                  key={key}
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

          {/* Radar Bento Showcase */}
          <div className="bg-slate-900/90 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Metrics & Indicators */}
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

                {/* Threat Indicators */}
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

                {/* Regulatory Border Mandate */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-amber-300">Border Entry & Institutional Requirement</div>
                    <div className="text-xs text-slate-300 mt-0.5">{selectedDest.entryMandate}</div>
                  </div>
                </div>

                {/* Expert Advisory Note */}
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

              {/* Right Column: Prescribed Kit & Vaccines */}
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
                  <div className="text-[11px] text-slate-400">
                    Need customized prescriptions and official stamped certificates?
                  </div>
                  <button
                    onClick={() => sendWhatsApp(`Hello TravelSafe Clinic, I am traveling to ${selectedDest.name} and would like to schedule a Video Consultation (${VIDEO_CONSULT_FEE}) for pre-travel vaccinations and medical clearance.`)}
                    className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURE 4: THE INVISIBLE SHIELD & ADULT VACCINES */}
      <section id="invisible-shield" className="py-20 bg-[#070d18] relative">
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
              Childhood immunity fades over time. Dr. Gaurav Gupta’s comprehensive guide details how contemporary adult vaccines defend against shingles, invasive pneumonia, whooping cough, and cancer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/90 border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl">
            
            {/* Book Cover Showcase */}
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
                <p className="text-[11px] text-slate-400 max-w-xs">
                  Evidence-based adult immunization protocols for seniors, frequent travelers, and families.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => sendWhatsApp("Hello TravelSafe Clinic, I would like to order a copy of Dr. Gaurav Gupta's book 'The Invisible Shield' and discuss adult vaccination recommendations.")}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Order Book / Inquire</span>
                </button>
              </div>
            </div>

            {/* Interactive Adult Vaccine Selector */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Tab Selector */}
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

              {/* Tab Details Content */}
              <div className="bg-slate-950/70 border border-white/10 rounded-xl p-6 space-y-4">
                {adultMatrixTab === "shingrix" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="text-base font-bold text-white">Shingrix (Recombinant Zoster Vaccine)</div>
                        <div className="text-xs text-amber-400">Target: Adults 50+ & Immunocompromised 19+</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                        97%+ Clinical Efficacy
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      1 in 3 adults experience Shingles due to the reactivation of the dormant chickenpox virus. The resulting postherpetic neuralgia can cause months of excruciating nerve burning that does not respond to painkillers. Shingrix is a non-live recombinant 2-dose series (0 and 2-6 months) providing superior long-term neural immunity.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-900/60 p-3 rounded-lg border border-white/5">
                      <div><strong className="text-white">Dosing:</strong> 2 intramuscular doses at 0 and 2 to 6 months.</div>
                      <div><strong className="text-white">Storage:</strong> Strict 2°C to 8°C cold chain verification.</div>
                    </div>
                  </div>
                )}

                {adultMatrixTab === "pcv20" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="text-base font-bold text-white">Prevnar 20 / PCV20 (Pneumococcal 20-Valent Conjugate)</div>
                        <div className="text-xs text-teal-400">Target: Adults 50+, Smokers, Diabetics, Asthmatics</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold">
                        1 Single Lifetime Dose
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Streptococcus pneumoniae is the leading bacterial cause of adult hospitalization, bacteremia, and invasive pneumonia. The 20-valent conjugate vaccine (PCV20) stimulates lasting T-cell dependent immune memory in a single injection without requiring booster cycles.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-900/60 p-3 rounded-lg border border-white/5">
                      <div><strong className="text-white">Dosing:</strong> Single lifetime injection.</div>
                      <div><strong className="text-white">Indication:</strong> Chronic heart/lung disease, diabetes, or age 50+.</div>
                    </div>
                  </div>
                )}

                {adultMatrixTab === "tdap" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="text-base font-bold text-white">Boostrix (Tdap: Tetanus, Diphtheria, Acellular Pertussis)</div>
                        <div className="text-xs text-cyan-400">Target: Every Adult Every 10 Years & New Grandparents</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold">
                        Cocooning Defense
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Most adults believe tetanus shots only matter after rusty nail injuries. In reality, pertussis (whooping cough) immunity wanes every 7–10 years. Adults develop mild chronic coughs and inadvertently transmit severe, life-threatening pertussis to unvaccinated infants.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-900/60 p-3 rounded-lg border border-white/5">
                      <div><strong className="text-white">Dosing:</strong> Booster every 10 years.</div>
                      <div><strong className="text-white">Key Role:</strong> Cocooning protection around newborns & pregnant mothers.</div>
                    </div>
                  </div>
                )}

                {adultMatrixTab === "gardasil" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="text-base font-bold text-white">Gardasil 9 (9-Valent Human Papillomavirus Vaccine)</div>
                        <div className="text-xs text-purple-400">Target: Females & Males up to Age 45</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold">
                        90%+ Oncogenic Protection
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Gardasil 9 protects against 9 oncogenic HPV types responsible for cervical, anal, vaginal, vulvar, and head/neck oropharyngeal cancers, as well as genital warts. Approved for both women and men up to age 45.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-900/60 p-3 rounded-lg border border-white/5">
                      <div><strong className="text-white">Dosing:</strong> 3-dose series at 0, 2, and 6 months.</div>
                      <div><strong className="text-white">Gender:</strong> Equally protective for men and women.</div>
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Video Consultation: <strong className="text-white">{VIDEO_CONSULT_FEE}</strong>
                  </span>
                  <button
                    onClick={() => sendWhatsApp(`Hello TravelSafe Clinic, I would like to schedule a Video Consultation (${VIDEO_CONSULT_FEE}) with Dr. Gaurav Gupta regarding adult vaccines: ${adultMatrixTab}.`)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                    <span>WhatsApp</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURE 5: OFFICIAL YELLOW FEVER PUNJAB NAVIGATOR */}
      <section id="yellow-fever" className="py-20 bg-[#09111e] border-t border-white/5 relative">
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
              Do not get misled by non-authorized providers. Under WHO International Health Regulations and Government of India mandates, the official Yellow Card (ICVP) is strictly issued by designated government centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Government Authorized Centre Card */}
            <div className="bg-slate-900/90 border border-yellow-500/30 rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-bold border border-yellow-500/30">
                    Official Issuing Authority
                  </span>
                  <Award className="w-5 h-5 text-yellow-400" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  Civil Hospital, Phase 6, Mohali
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  In Punjab, official WHO International Certificates of Vaccination or Prophylaxis (ICVP Yellow Card) are issued by the designated government center at <strong className="text-white">Civil Hospital, Phase 6, SAS Nagar (Mohali)</strong>, as well as AIIMS Bathinda.
                </p>

                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Designated inoculation days: Tuesdays & Thursdays (10:00 AM – 1:00 PM).</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <FileCheck className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Original International Passport is mandatory for entry.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <AlertCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Card becomes legally valid 10 days post-vaccination.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={GOV_YELLOW_FEVER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <span>MoHFW Official Government Directory</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* TravelSafe Clinic's Complementary Role */}
            <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                    Pre-Travel Clinical Evaluation
                  </span>
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  TravelSafe Clinic’s Pre-Travel Role
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Before reporting to the government center, patients consult with Dr. Gaurav Gupta to evaluate risk, rule out contraindications, and receive vaccines not provided at government centers.
                </p>

                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Medical Contraindication Waivers:</strong> Official exemption certificates for seniors (60+) or immunosuppressed travelers.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Complementary Biologics:</strong> Administering co-indicated Typhoid (TCV), Hepatitis A, and Rabies PrEP under unbroken cold chain.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Malaria Prophylaxis:</strong> Prescribing Malarone or Doxycycline for African safari game reserves.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Pre-Travel Consult: <strong className="text-white">{VIDEO_CONSULT_FEE}</strong></span>
                <button
                  onClick={() => sendWhatsApp("Hello TravelSafe Clinic, I am traveling to a Yellow Fever endemic country (Africa/South America) and need a pre-travel risk assessment, malaria prophylaxis, and guidance regarding the Civil Hospital Mohali YF card.")}
                  className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURE 6: INTERACTIVE APPOINTMENT CONCIERGE */}
      <section id="booking" className="py-20 bg-[#070d18] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="bg-gradient-to-br from-slate-900 to-[#0e192c] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
            
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                Direct Clinic Coordination
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Schedule Your Travel Medicine Consultation
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
                Consult with Dr. Gaurav Gupta via Video Teleconsultation ({VIDEO_CONSULT_FEE}) or visit our physical facility at Charak Clinics, Sector 69, Mohali.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  placeholder="e.g. Aarav Sharma"
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Phone / WhatsApp Number</label>
                <input 
                  type="tel" 
                  value={bookingPhone}
                  onChange={(e) => setBookingPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Service Required</label>
                <select
                  value={bookingType}
                  onChange={(e) => setBookingType(e.target.value)}
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option>University Immunization Form Clearance</option>
                  <option>International Travel Risk & Vaccine Planning</option>
                  <option>The Invisible Shield Adult Vaccine Consultation</option>
                  <option>High Altitude & Trekking Expedition Kit</option>
                  <option>Yellow Fever Pre-Travel Clearance</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Target Departure Date</label>
                <input 
                  type="date" 
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Specific Notes / Universities / Itinerary</label>
              <textarea 
                rows={3}
                value={bookingNotes}
                onChange={(e) => setBookingNotes(e.target.value)}
                placeholder="e.g. Stanford University form due in 2 weeks; prior BCG taken at birth; need blood titers and official seal."
                className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <div className="text-xs text-slate-300">
                Video Consultation: <strong className="text-emerald-400 font-bold">{VIDEO_CONSULT_FEE}</strong> (Conducted via Google Meet / WhatsApp Video)
              </div>
              <button
                onClick={() => sendWhatsApp(`Hello TravelSafe Clinic team, I am requesting a Video Consultation (${VIDEO_CONSULT_FEE}). Name: ${bookingName || "Traveler"}, Phone: ${bookingPhone || "N/A"}, Service: ${bookingType}, Departure: ${bookingDate || "Upcoming"}, Notes: ${bookingNotes || "None"}.`)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>WhatsApp Staff</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-[#09111e] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2 mb-10">
            <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-400">Clear clinical answers for students, families, and international travelers.</p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Why does my US university reject my Mantoux skin test?",
                a: "In India, almost all individuals received the BCG vaccine at birth. The Mantoux skin test (tuberculin PPD) cross-reacts with BCG antigens, leading to false-positive readings that trigger unnecessary chest X-rays or rejected forms. US universities mandate an IGRA blood test (QuantiFERON-TB Gold Plus), which does not cross-react with BCG."
              },
              {
                q: "Can I receive all required vaccines in a single visit?",
                a: "Yes. Most travel vaccines (such as Hepatitis A, Typhoid, Tdap, and MenACWY) can be administered simultaneously at different anatomical injection sites without immunological interference."
              },
              {
                q: "How does the INR 1,000 Video Consultation work?",
                a: "You send your university forms, itinerary, or health questions to our staff on WhatsApp. We schedule a dedicated video call with Dr. Gaurav Gupta where he reviews your documents, orders appropriate laboratory blood tests, and outlines your immunization sequence."
              },
              {
                q: "Where is Yellow Fever administered in Punjab?",
                a: "Under Government of India regulations, official Yellow Fever vaccination and International Certificates (ICVP) in Punjab are issued at Civil Hospital, Phase 6, Mohali (and AIIMS Bathinda). TravelSafe Clinic provides the pre-travel risk assessment, contraindication waivers, and complementary vaccines."
              }
            ].map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="bg-slate-900/60 border border-white/5 rounded-xl overflow-hidden">
                  <button
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

      {/* THEATRE VIEW MODAL FOR CLINICAL VIDEOS */}
      {isTheatreOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-white/20 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setIsTheatreOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-video bg-black">
              <img 
                src={activeVideo.poster} 
                alt={activeVideo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold text-xs">
                    {activeVideo.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{activeVideo.title}</h3>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Detailed Physician Clinical Briefing</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeVideo.subtitle}. Led personally by Dr. Gaurav Gupta, MD, holding certification from the International Society of Travel Medicine (ISTM).
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="text-xs font-bold text-white">Clinical Takeaways & Next Steps:</div>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  {activeVideo.takeaways.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400">Physician Fee: <strong className="text-white">{VIDEO_CONSULT_FEE}</strong></span>
                <button
                  onClick={() => {
                    setIsTheatreOpen(false);
                    sendWhatsApp(activeVideo.ctaMessage);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#050912] border-t border-white/10 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <Globe2 className="w-5 h-5 text-emerald-400" />
              <span>TravelSafe Clinic</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md text-xs">
              Specialist travel medicine, student immunization clearance, and adult vaccination center directed by Dr. Gaurav Gupta, MD. ISTM Certified. Located at Charak Clinics, Mohali.
            </p>
            <div className="text-[11px] text-slate-500">
              Disclaimer: Medical information provided is for educational and travel preparation purposes. Individual vaccination requirements depend on formal clinical evaluation.
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-white text-xs uppercase tracking-wider">Quick Navigation</div>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#video-studio" className="hover:text-emerald-400 transition-colors">Clinical Video Briefings</a></li>
              <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">Timeline Calculator</a></li>
              <li><a href="#radar" className="hover:text-emerald-400 transition-colors">Destination Radar</a></li>
              <li><a href="#invisible-shield" className="hover:text-emerald-400 transition-colors">The Invisible Shield (Book)</a></li>
              <li><a href="#yellow-fever" className="hover:text-emerald-400 transition-colors">Civil Hospital Mohali YF Guide</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-white text-xs uppercase tracking-wider">Contact & Inquiries</div>
            <div className="space-y-1 text-xs">
              <div>Charak Clinics, Sector 69, Mohali</div>
              <div>Phone: <strong className="text-white">{CLINIC_PHONE}</strong></div>
              <div>WhatsApp: <strong className="text-emerald-400">+{CLINIC_WHATSAPP}</strong></div>
              <div>Video Consult Fee: <strong className="text-white">{VIDEO_CONSULT_FEE}</strong></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <div>© {new Date().getFullYear()} TravelSafe Clinic • Dr. Gaurav Gupta. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href={GOV_YELLOW_FEVER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">
              MoHFW Yellow Fever Directory
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
