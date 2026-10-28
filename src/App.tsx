import { useState, useEffect, useRef } from "react";
import { 
  Globe2, GraduationCap, Compass, ShieldAlert, CheckCircle2, 
  Clock, MapPin, Phone, MessageCircle, Mail,
  HeartHandshake, Sparkles, FileText, ChevronDown, ChevronUp,
  Mountain, Stethoscope, ArrowRight, ShieldCheck, Bug, Droplet, 
  UserCheck, Calendar, Play, Pause, Volume2, VolumeX, Award,
  ThermometerSnowflake, Shield, PlaneTakeoff, Info, Check
} from "lucide-react";

const CLINIC_WHATSAPP = "919653010203";
const CLINIC_PHONE = "+918010777722";
const CLINIC_EMAIL = "charakclinics@gmail.com";

type TabMode = "outbound" | "inbound" | "special";

interface DestinationProfile {
  name: string;
  flag: string;
  riskCategory: "High Altitude & Tropical" | "University & Urban" | "Vector & Foodborne" | "Pilgrimage / Mass Gathering" | "Inbound India Travel";
  keyVaccines: string[];
  malaria: string;
  specialAdvice: string;
}

const DESTINATIONS: Record<string, DestinationProfile> = {
  "USA / Canada / UK": {
    name: "USA, Canada & United Kingdom",
    flag: "🎓",
    riskCategory: "University & Urban",
    keyVaccines: ["MenACWY & MenB (Bexsero)", "MMR & Varicella", "Tdap Booster", "QuantiFERON-TB Gold Plus (IGRA)"],
    malaria: "No malaria risk in urban university campuses.",
    specialAdvice: "Strict ACHA & university immunization forms required. TB IGRA blood test avoids false positives from childhood BCG."
  },
  "Kenya & East Africa Safari": {
    name: "Kenya, Tanzania & East Africa",
    flag: "🦁",
    riskCategory: "Vector & Foodborne",
    keyVaccines: ["Typhoid Conjugate (TCV)", "Hepatitis A & B", "Rabies PrEP", "Polio Booster (IPV)"],
    malaria: "High risk in safari parks & coast. Atovaquone-Proguanil (Malarone) or Doxycycline prescribed.",
    specialAdvice: "Verify Yellow Fever requirements based on transit countries. Avoid untreated ice and street salads."
  },
  "Ladakh & Everest Base Camp": {
    name: "Himalayas (Ladakh, EBC, Kilimanjaro)",
    flag: "🏔️",
    riskCategory: "High Altitude & Tropical",
    keyVaccines: ["Tetanus/Tdap", "Hepatitis A", "Typhoid", "Influenza"],
    malaria: "No malaria above 2,500m.",
    specialAdvice: "Acetazolamide (Diamox) prophylaxis regimen prescribed. Strict gradual ascent profile (max 500m elevation gain per day above 3,000m)."
  },
  "Thailand & Southeast Asia": {
    name: "Thailand, Vietnam & Bali",
    flag: "🏝️",
    riskCategory: "Vector & Foodborne",
    keyVaccines: ["Hepatitis A & Typhoid", "Rabies Pre-Exposure (PrEP)", "Japanese Encephalitis", "Tdap"],
    malaria: "Low in major cities (Bangkok/Bali); prophylaxis required for rural jungle trekking.",
    specialAdvice: "High street animal rabies risk (monkeys & stray dogs). Use 20-30% DEET against daytime Dengue vectors."
  },
  "Saudi Arabia (Hajj & Umrah)": {
    name: "Saudi Arabia (Mecca & Medina)",
    flag: "🕋",
    riskCategory: "Pilgrimage / Mass Gathering",
    keyVaccines: ["Quadrivalent Meningococcal ACWY", "Seasonal Influenza", "Pneumococcal (for seniors)"],
    malaria: "Not required for Holy sites.",
    specialAdvice: "Quadrivalent Meningococcal ACWY vaccination is a mandatory visa requirement issued with stamped certification."
  },
  "Visiting India (Inbound Partner)": {
    name: "India (Foreign Partners & Tourists)",
    flag: "🇮🇳",
    riskCategory: "Inbound India Travel",
    keyVaccines: ["Hepatitis A & Typhoid (TCV)", "Rabies Pre-Exposure (PrEP)", "Routine Tdap / MMR Boosters"],
    malaria: "Variable by season and region. Chemoprophylaxis tailored to itinerary.",
    specialAdvice: "The Delhi Belly Defense: Sealed bottled water, peel-it or cook-it rules, oral rehydration salts & prescription diarrhea starter kit."
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabMode>("outbound");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<string>("USA / Canada / UK");

  // Video State
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);

  // Canvas Ref for ambient fluid flight dynamics
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Interactive Booking Form State
  const [travelerName, setTravelerName] = useState("");
  const [travelerPhone, setTravelerPhone] = useState("");
  const [category, setCategory] = useState("Study Abroad (University Form Clearance)");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [consultMode, setConsultMode] = useState("In-Person (Phase 3B2, Mohali)");
  const [notes, setNotes] = useState("");

  // Canvas particle / flight trajectory dynamics
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes representing global travel waypoints
    const points = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connective flight lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${0.18 * (1 - dist / 140)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update and draw points
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(45, 212, 191, 0.45)";
        ctx.shadowColor = "rgba(45, 212, 191, 0.8)";
        ctx.shadowBlur = 6;
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

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsVideoMuted(videoRef.current.muted);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getStructuredMessage = () => {
    return (
      `*TravelSafe Clinic — Travel Health Consultation Request*\n\n` +
      `👤 *Traveler:* ${travelerName.trim() || "Not specified"}\n` +
      `📞 *Phone:* ${travelerPhone.trim() || "Not specified"}\n` +
      `🧭 *Category:* ${category}\n` +
      `📍 *Destination / University:* ${destination.trim() || "Not specified"}\n` +
      `🗓️ *Target Travel / Deadline Date:* ${travelDate.trim() || "Flexible"}\n` +
      `🏥 *Preferred Mode:* ${consultMode}\n` +
      (notes.trim() ? `📝 *Specific Needs / Vaccines:* ${notes.trim()}\n\n` : `\n`) +
      `_I would like to schedule a consultation with Dr. Gaurav Gupta and team._`
    );
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(getStructuredMessage());
    const url = `https://wa.me/${CLINIC_WHATSAPP}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEmailBooking = () => {
    const subject = encodeURIComponent(`Travel Health Consultation Request: ${travelerName || "New Traveler"}`);
    const body = encodeURIComponent(getStructuredMessage());
    window.location.href = `mailto:${CLINIC_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleQuickFormUploadWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi TravelSafe Clinic team! I have a university immunization form that needs clearance review. Sharing my form details here:"
    );
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const destInfo = DESTINATIONS[selectedDestination];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 shadow-lg shadow-teal-500/20">
              <Compass size={24} className="animate-spin-slow" />
            </div>
            <div>
              <a href="/" className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-serif">TravelSafe</span>
                <span className="text-xs uppercase font-bold tracking-wider text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded-md border border-teal-700/60 shadow-xs">
                  Clinic
                </span>
              </a>
              <p className="text-xs text-slate-400 hidden sm:block">
                Authoritative Travel Medicine & Student Immunizations · Mohali & Tricity
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href={`tel:${CLINIC_PHONE}`}
              className="hidden md:flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <Phone size={16} className="text-teal-400" />
              <span>+91 8010 777722</span>
            </a>
            <a
              href={`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent("Hello Dr. Gaurav Gupta & TravelSafe Clinic team! I have a question regarding travel / student vaccines.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-teal-500/25 hover:shadow-teal-500/40"
            >
              <MessageCircle size={17} />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Interactive Canvas Flight Dynamics */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 border-b border-slate-800">
        {/* Dynamic Flight Canvas in Background */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0"
        />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-700/70 text-teal-300 text-xs font-semibold tracking-wide shadow-sm">
                <Sparkles size={14} className="text-teal-400" />
                <span>ISTM & ASTMH Credentialed Travel Health Clinic</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif leading-[1.12]">
                Cross-Border Travel Medicine & University Immunizations.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Whether you are an ambitious student heading to the US/UK/Canada, an adventurer planning a high-altitude expedition, or an international partner landing in India for the first time — receive personalized pre-travel prophylaxis, cold-chain assured vaccines, and rapid form clearance.
              </p>

              {/* Verified Clinical Credentials Pill Bar */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 font-medium flex items-center gap-1.5 shadow-xs">
                  <Award size={14} className="text-teal-400" />
                  <span>Member, International Society of Travel Medicine (ISTM)</span>
                </span>
                <span className="bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 font-medium flex items-center gap-1.5 shadow-xs">
                  <ShieldCheck size={14} className="text-teal-400" />
                  <span>ASTMH & IAMAT Certified Center</span>
                </span>
                <span className="bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 font-medium flex items-center gap-1.5 shadow-xs">
                  <ThermometerSnowflake size={14} className="text-teal-400" />
                  <span>2°C–8°C Digital Cold-Chain Verified</span>
                </span>
              </div>

              {/* Call to Actions */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
                <a
                  href="#book-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold px-7 py-4 rounded-xl text-base transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
                >
                  <span>Book Consultation via WhatsApp</span>
                  <ArrowRight size={18} />
                </a>
                <button
                  onClick={handleQuickFormUploadWhatsApp}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold px-6 py-4 rounded-xl text-base transition-all cursor-pointer backdrop-blur-sm"
                >
                  <FileText size={18} className="text-teal-400" />
                  <span>Upload University Form for Review</span>
                </button>
              </div>
            </div>

            {/* Visual Hero Feature — Video & Dynamic Spotlight */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800/90 bg-slate-900/90 shadow-2xl backdrop-blur-xl">
                {/* Fluid Video Card */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden group">
                  <video
                    ref={videoRef}
                    src="/videos/clinic-intro.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Video Overlay Controls */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
                    <button
                      onClick={toggleVideoPlay}
                      className="p-2 rounded-lg bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700/60 backdrop-blur-md transition-all cursor-pointer"
                      aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isVideoPlaying ? <Pause size={14} /> : <Play size={14} />}
                    </button>
                    <button
                      onClick={toggleVideoMute}
                      className="p-2 rounded-lg bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700/60 backdrop-blur-md transition-all cursor-pointer"
                      aria-label={isVideoMuted ? "Unmute Video" : "Mute Video"}
                    >
                      {isVideoMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                  </div>

                  {/* Live Status Pill */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 z-20">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-semibold text-emerald-300 tracking-wide bg-slate-950/80 px-2.5 py-1 rounded-md border border-emerald-800/60 backdrop-blur-md">
                      Live Pre-Travel Clinic · Mohali
                    </span>
                  </div>
                </div>

                {/* Quick Profile Summary Below Video */}
                <div className="p-5 space-y-3.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                    <span className="font-mono text-teal-400">Dr. Gaurav Gupta · MD (Peds)</span>
                    <span>Tricity & Pan-India Video</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <span className="block text-slate-400">Zero-Hold Clearance</span>
                      <strong className="text-white font-medium">US/UK/Canada Forms</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <span className="block text-slate-400">TB Screening</span>
                      <strong className="text-white font-medium">QuantiFERON IGRA</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Destination Risk & Vaccine Matcher Widget */}
      <section className="py-16 md:py-24 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-800 text-teal-300 text-xs font-semibold">
              <PlaneTakeoff size={14} />
              <span>Interactive Travel Risk Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white">
              Where Are You Traveling?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Select your travel destination to instantly view mandatory vaccine clearance, malaria risk, and specialized medical advice.
            </p>
          </div>

          {/* Destination Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {Object.keys(DESTINATIONS).map((destKey) => (
              <button
                key={destKey}
                onClick={() => setSelectedDestination(destKey)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer border ${
                  selectedDestination === destKey
                    ? "bg-teal-500 text-slate-950 border-teal-400 shadow-lg shadow-teal-500/20"
                    : "bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                <span>{DESTINATIONS[destKey].flag}</span>
                <span>{destKey}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Result Card */}
          <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-teal-400">Destination Profile</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">{destInfo.name}</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300">
                <Info size={14} className="text-teal-400" />
                <span>{destInfo.riskCategory}</span>
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Recommended & Mandatory Vaccines
                </h4>
                <div className="space-y-2">
                  {destInfo.keyVaccines.map((vax, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-sm text-slate-200">
                      <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                      <span>{vax}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                    <Bug size={14} />
                    <span>Malaria & Vector Protection</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {destInfo.malaria}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Shield size={14} />
                    <span>Travel Health Expert Advisory</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {destInfo.specialAdvice}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Need customized clearance for this itinerary?
              </span>
              <a
                href={`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(`Hi Dr. Gaurav Gupta! I am traveling to ${destInfo.name} and would like to review my vaccination plan.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md"
              >
                <MessageCircle size={16} />
                <span>Consult for {selectedDestination} on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Cross-Border Compass with Editorial Visuals */}
      <section className="py-16 md:py-24 border-b border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white">
              The Cross-Border Travel Health Compass
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore specialized protocols for students heading abroad, partners visiting India, and high-altitude adventurers.
            </p>

            <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 max-w-full overflow-x-auto">
              <button
                onClick={() => setActiveTab("outbound")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "outbound"
                    ? "bg-teal-500 text-slate-950 shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <GraduationCap size={18} />
                <span>Going Abroad (Students & Explorers)</span>
              </button>

              <button
                onClick={() => setActiveTab("inbound")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "inbound"
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <HeartHandshake size={18} />
                <span>Coming to India (Visiting Partners)</span>
              </button>

              <button
                onClick={() => setActiveTab("special")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "special"
                    ? "bg-sky-500 text-slate-950 shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Mountain size={18} />
                <span>Special Situations & Treks</span>
              </button>
            </div>
          </div>

          {/* TAB 1: OUTBOUND STUDENTS & TRAVELERS */}
          {activeTab === "outbound" && (
            <div className="mt-12 space-y-10 animate-fadeIn">
              {/* Feature Hero Card with Editorial Photo */}
              <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 overflow-hidden">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider">
                    <GraduationCap size={16} />
                    <span>Study Abroad Immunization Center</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                    Zero-Hold University Clearance for USA, Canada, UK & Australia
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Overseas colleges strictly prohibit students from attending classes or entering university dormitories until every immunization requirement is verified. We decode complex university forms, administer required vaccines, and provide official doctor-signed certifications.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                      <span><strong>MenACWY & MenB (Bexsero):</strong> Required for on-campus housing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                      <span><strong>MMR, Varicella & Tdap:</strong> Childhood catch-up documentation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                      <span><strong>Hepatitis B Surface Antibody Titers:</strong> Blood verification</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <button
                      onClick={handleQuickFormUploadWhatsApp}
                      className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all cursor-pointer"
                    >
                      <FileText size={16} />
                      <span>WhatsApp Your University Form for Free Pre-Check</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative aspect-[4/3] group">
                    <img 
                      src="/images/student-abroad-departure.jpg" 
                      alt="Student departure lounge with passport and immunization forms"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-xs text-slate-200">
                      <span className="font-semibold text-white">Pre-Flight Clearance:</span> Avoid expensive campus clinics charging up to $800 for vaccines overseas.
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid Cards for QuantiFERON & Tropical Travel */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-teal-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-teal-950/80 border border-teal-800/80 flex items-center justify-center text-teal-400">
                    <Stethoscope size={26} />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white">
                    QuantiFERON-TB Gold Plus & Mantoux
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Most Indian students had the BCG vaccine at birth, which frequently causes a false-positive Mantoux skin test. American and Canadian universities now demand the QuantiFERON IGRA blood test to avoid mandatory chest X-rays.
                  </p>
                  <div className="space-y-2 pt-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                      <span><strong>No BCG Cross-Reaction:</strong> Clean, unquestioned compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                      <span><strong>Official Laboratory Reports:</strong> Accepted globally</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-teal-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-teal-950/80 border border-teal-800/80 flex items-center justify-center text-teal-400">
                    <Globe2 size={26} />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white">
                    Tropical Expeditions & Safaris
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Heading to Southeast Asia, Central America, or Sub-Saharan Africa for vacations, gap years, or wildlife safaris? Protect yourself against severe foodborne and vectorborne tropical infections.
                  </p>
                  <div className="space-y-2 pt-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                      <span><strong>Typhoid Conjugate (TCV) & Hepatitis A:</strong> Food/water security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                      <span><strong>Rabies PrEP & Malaria Pills:</strong> Destination-specific defense</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INBOUND PARTNERS & EXPATS VISITING INDIA */}
          {activeTab === "inbound" && (
            <div className="mt-12 space-y-10 animate-fadeIn">
              {/* Feature Hero Card with Editorial Photo */}
              <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 overflow-hidden">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    <HeartHandshake size={16} />
                    <span>Welcoming International Partners to India</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                    The Delhi Belly & Safe Tourism Shield
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Foreign partners and tourists visiting India for weddings, family introductions, or cultural exploration often face digestive disruption. We provide pre-arrival guidance, water security rules, and an emergency self-treatment pack so your trip stays joyful and healthy.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      <span><strong>Emergency Self-Treatment Kit:</strong> Electrolytes, anti-motility & standby antibiotics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      <span><strong>Culinary Navigation:</strong> How to safely enjoy Indian street food and banquets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      <span><strong>Local Doctor Contact:</strong> WhatsApp medical triage while in North India</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent("Hi TravelSafe Clinic! My foreign partner is visiting India and I would like to arrange pre-arrival travel health advice.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
                    >
                      <MessageCircle size={16} />
                      <span>Request Partner Travel Health Kit on WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative aspect-[4/3] group">
                    <img 
                      src="/images/partner-travel-india.jpg" 
                      alt="International couple exploring Indian heritage safely with water bottle"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-xs text-slate-200">
                      <span className="font-semibold text-white">Safe Exploration:</span> Realistic advice to experience India without fear or gastrointestinal illness.
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid Cards for Rabies & Vector Protection */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-emerald-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                    <ShieldCheck size={26} />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white">
                    Rabies Pre-Exposure (PrEP)
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    India has abundant street animals in urban and temple settings. Pre-exposure vaccination simplifies post-exposure management by eliminating the urgent need for scarce Rabies Immunoglobulin (RIG).
                  </p>
                  <div className="space-y-2 pt-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>WHO-Compliant Schedule:</strong> 2 or 3 dose accelerated course</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Animal Encounter Safety:</strong> Immediate antiseptic wash protocols</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-emerald-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                    <Bug size={26} />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white">
                    Dengue, Malaria & Heat Acclimatization
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Vector risks vary significantly between North Indian winters, monsoon months, and tropical coastlines. We equip international travelers with proper repellents, oral electrolyte formulations, and seasonal guidance.
                  </p>
                  <div className="space-y-2 pt-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>DEET & Picaridin Protocols:</strong> Day & night biting mosquito protection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                      <span><strong>Hepatitis A & Typhoid:</strong> Core baseline protection before arrival</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SPECIAL SITUATIONS & HIGH-ALTITUDE TREKS */}
          {activeTab === "special" && (
            <div className="mt-12 space-y-10 animate-fadeIn">
              {/* Feature Hero Card with Himalayan Editorial Photo */}
              <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 overflow-hidden">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider">
                    <Mountain size={16} />
                    <span>Altitude & Wilderness Medicine</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                    Himalayan, Kilimanjaro & High-Altitude Treks
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Ascending above 2,500 meters (Ladakh, Everest Base Camp, Chadar, Kilimanjaro, Peru) exposes climbers to Acute Mountain Sickness (AMS), High-Altitude Pulmonary Edema (HAPE), and High-Altitude Cerebral Edema (HACE). We provide evidence-based medical prophylaxis and expedition safety packs.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
                      <span><strong>Acetazolamide (Diamox):</strong> Personalized dosing schedules</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
                      <span><strong>Expedition Medical Kit:</strong> Dexamethasone, rehydration & blister management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
                      <span><strong>Acclimatization Rules:</strong> Altitude gain limits and descent protocols</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent("Hi Dr. Gaurav Gupta! I am preparing for a high-altitude trek and would like to review my medical readiness and Diamox protocol.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
                    >
                      <MessageCircle size={16} />
                      <span>Consult Altitude Medicine on WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative aspect-[4/3] group">
                    <img 
                      src="/images/himalayan-trekker.jpg" 
                      alt="High altitude trekker on Himalayan ridge"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-xs text-slate-200">
                      <span className="font-semibold text-white">Wilderness Medicine:</span> Never let preventable altitude sickness cut your summit short.
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid Cards for Biologics & Pilgrimage */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-sky-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/80 flex items-center justify-center text-sky-400">
                    <ShieldAlert size={26} />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white">
                    Immunocompromised & Biologic Therapies
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Patients taking biologics (anti-TNF, rituximab), chemotherapy, or immunosuppressants require careful scheduling. Live-attenuated vaccines must be avoided, while conjugate vaccines need optimal immunological timing.
                  </p>
                  <div className="space-y-2 pt-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                      <span><strong>Safe Inactivated Vaccines:</strong> Pneumococcal, Meningococcal, Influenza</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                      <span><strong>Opportunistic Infection Shield:</strong> Destination-specific risk analysis</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-sky-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/80 flex items-center justify-center text-sky-400">
                    <UserCheck size={26} />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white">
                    Hajj, Umrah & Mass Pilgrimages
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    The Saudi Ministry of Health requires mandatory Quadrivalent Meningococcal ACWY vaccination for visa entry into the Kingdom. We provide compliant vaccines with official stamped certification.
                  </p>
                  <div className="space-y-2 pt-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                      <span><strong>Meningococcal ACWY:</strong> Official certificate for Saudi visa compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                      <span><strong>Crowd Viral Protection:</strong> Seasonal Influenza booster</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Clinical Cold-Chain & Physician Authority Showcase */}
      <section className="py-16 md:py-24 border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative aspect-[4/3] group">
                <img 
                  src="/images/cold-chain-vaccine-desk.jpg" 
                  alt="Medical cold chain vaccine desk with digital monitor at 4.2C"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-lg backdrop-blur-md">
                    <ThermometerSnowflake size={16} className="text-teal-400" />
                    <span className="font-mono text-white font-bold">2.0°C – 8.0°C</span>
                  </div>
                  <span className="text-teal-300 font-semibold bg-teal-950/80 px-2.5 py-1 rounded-md border border-teal-800/80">
                    Continuous Data Logging
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-700 text-teal-300 text-xs font-semibold">
                <Award size={14} className="text-teal-400" />
                <span>Clinical Leadership & Cold-Chain Guarantee</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white">
                Vaccine Potency Requires Unbroken Temperature Control.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                A travel vaccine is only as effective as the temperature at which it was stored. At TravelSafe Clinic, all biologicals are stored in medical-grade pharmaceutical refrigerators equipped with continuous digital temperature loggers and automated backup power systems.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <strong className="text-white block font-serif text-base">Dr. Gaurav Gupta</strong>
                  <span className="text-teal-400 text-xs block font-mono">MD (Pediatrics) · Senior Consultant</span>
                  <p className="text-xs text-slate-400 pt-1">
                    Certified member of the International Society of Travel Medicine (ISTM) and American Society of Tropical Medicine & Hygiene (ASTMH).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <strong className="text-white block font-serif text-base">Unbroken Cold Chain</strong>
                  <span className="text-emerald-400 text-xs block font-mono">WHO Standards</span>
                  <p className="text-xs text-slate-400 pt-1">
                    Every dose is verified and logged from manufacturer delivery to individual syringe administration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Consultation Booking Builder */}
      <section id="book-consultation" className="py-16 md:py-24 border-b border-slate-800 bg-slate-950 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-800 text-teal-300 text-xs font-semibold">
              <Calendar size={14} />
              <span>Direct Clinic & WhatsApp Coordination</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white">
              Schedule Your Travel Health Consultation
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Fill in your travel details below. Clicking the booking button will instantly generate a pre-formatted message sent directly to our clinic staff’s WhatsApp for rapid confirmation.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <form onSubmit={handleWhatsAppBooking} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="traveler-name" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Traveler Name *
                  </label>
                  <input
                    id="traveler-name"
                    type="text"
                    required
                    placeholder="e.g. Arjan Singh / Sarah Jenkins"
                    value={travelerName}
                    onChange={(e) => setTravelerName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="traveler-phone" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Your WhatsApp Phone Number *
                  </label>
                  <input
                    id="traveler-phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={travelerPhone}
                    onChange={(e) => setTravelerPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="travel-category" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Traveler Category
                  </label>
                  <select
                    id="travel-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="Study Abroad (University Form Clearance)">Study Abroad (University Form Clearance)</option>
                    <option value="Incoming Partner / Expat Visiting India">Incoming Partner / Expat Visiting India</option>
                    <option value="High-Altitude Trek (Himalayas / Kilimanjaro / Andes)">High-Altitude Trek (Himalayas / Kilimanjaro / Andes)</option>
                    <option value="Outbound Vacation / Safari / Tropical Trip">Outbound Vacation / Safari / Tropical Trip</option>
                    <option value="Special Situation (Immunocompromised / Biologics / Pregnancy)">Special Situation (Immunocompromised / Biologics / Pregnancy)</option>
                    <option value="Hajj / Umrah Pilgrimage">Hajj / Umrah Pilgrimage</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="travel-destination" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Destination Country / University *
                  </label>
                  <input
                    id="travel-destination"
                    type="text"
                    required
                    placeholder="e.g. Harvard / Texas A&M / Kenya / India Tour"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="travel-date" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Planned Departure Date / Form Deadline
                  </label>
                  <input
                    id="travel-date"
                    type="text"
                    placeholder="e.g. August 15 / Form due next week"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="consult-mode" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Consultation Mode
                  </label>
                  <select
                    id="consult-mode"
                    value={consultMode}
                    onChange={(e) => setConsultMode(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="In-Person Clinic (SCF 30, Phase 3B2, Mohali)">In-Person Clinic (SCF 30, Phase 3B2, Mohali)</option>
                    <option value="Online Video Consultation (All India / Overseas)">Online Video Consultation (All India / Overseas)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="travel-notes" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Specific Vaccines or Health Notes (Optional)
                </label>
                <textarea
                  id="travel-notes"
                  rows={3}
                  placeholder="e.g. Need Bexsero and QuantiFERON TB test; partner worried about street food in Punjab; taking biologic medication."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 cursor-pointer"
                >
                  <MessageCircle size={20} />
                  <span>Send Request Directly to Staff on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailBooking}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-6 py-4 rounded-xl text-sm transition-all cursor-pointer"
                >
                  <Mail size={18} className="text-teal-400" />
                  <span>Or Send via Email</span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                <span>💬 Directly delivered to clinic desk: +91 96530 10203</span>
                <span>🔒 Strict medical confidentiality</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section className="py-16 md:py-24 border-b border-slate-800 bg-slate-950/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Travel Health & Vaccine FAQs
            </h2>
            <p className="text-slate-400 text-sm">
              Clear clinical answers to common questions about university forms, timelines, and travel safety.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How far in advance of my trip or university reporting date should I visit?",
                a: "Ideally, visit 4 to 6 weeks before your flight. Many vaccines (such as Hepatitis A, Tdap, or Rabies PrEP) require 10 to 14 days to build protective circulating antibody titers, while multi-dose series require specified intervals. However, if your flight is in a few days, expedited catch-up schedules are still vastly superior to traveling unprotected."
              },
              {
                q: "My US / Canadian university requires a TB test. Why is QuantiFERON IGRA preferred over Mantoux?",
                a: "In India, nearly all children receive the BCG vaccine at birth. The traditional Mantoux skin test often reacts positively to childhood BCG, causing false-positive readings that result in mandatory chest X-rays or treatment delays. The QuantiFERON-TB Gold Plus IGRA blood test specifically tests for Mycobacterium tuberculosis antigens that do NOT cross-react with BCG, providing clean, unquestioned compliance."
              },
              {
                q: "My foreign partner is visiting India for the first time. What are the essential recommendations?",
                a: "Key priorities are: (1) Hepatitis A & Typhoid vaccination; (2) A tailored Rabies Pre-Exposure (PrEP) course if exploring beyond luxury hotels; (3) An emergency self-treatment pack for traveler’s diarrhea containing oral rehydration salts, anti-motility tablets, and stand-by antibiotics; and (4) Clear guidance on filtered water, peeled fruits, and mosquito protection."
              },
              {
                q: "Do you issue the Yellow Fever International Certificate of Vaccination (ICVP yellow booklet)?",
                a: "No. By international public health regulations, the official Yellow Fever vaccination and ICVP yellow booklet in India are restricted to designated government-authorized centers (such as the Sector 22 Civil Hospital in Chandigarh). During your pre-travel consultation, we verify whether your destination legally mandates Yellow Fever vaccination and guide you on the government booking process, but we do not administer the yellow booklet at our private clinic."
              },
              {
                q: "Can I do a video consultation if I live outside the Chandigarh-Mohali Tricity?",
                a: "Yes. Students and travelers across India frequently consult Dr. Gaurav Gupta via video consultation for detailed university immunization form review, titer prescription requests, and pre-travel risk profiling. Any physical vaccines required can then be administered locally or completed during an in-person visit to our clinic in Phase 3B2, Mohali."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white font-semibold text-base sm:text-lg focus:outline-none cursor-pointer"
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp size={20} className="text-teal-400 shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base font-serif">
              <Compass size={20} className="text-teal-400" />
              <span>TravelSafe Clinic</span>
            </div>
            <p className="leading-relaxed">
              Specialized travel medicine, student university immunizations, and pre-travel health consulting. Partnered with Charak Clinics, Mohali.
            </p>
            <p className="text-teal-400 font-mono">
              Dr. Gaurav Gupta · MD (Peds), Member ISTM, ASTMH, IAMAT
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-white font-semibold text-sm">Clinic Location & Hours</p>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="text-teal-400 shrink-0 mt-0.5" />
              <span>SCF 30, First Floor, Phase 3B2, Sector 60, Mohali, Punjab 160059</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock size={16} className="text-teal-400 shrink-0" />
              <span>Mon–Sat: 10:30 am–2:00 pm & 4:30 pm–6:30 pm</span>
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-white font-semibold text-sm">Direct Contact</p>
            <p className="flex items-center gap-2">
              <Phone size={15} className="text-teal-400" />
              <a href={`tel:${CLINIC_PHONE}`} className="hover:text-white transition-colors">+91 8010 777722</a>
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle size={15} className="text-teal-400" />
              <a 
                href={`https://wa.me/${CLINIC_WHATSAPP}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                WhatsApp Desk: +91 96530 10203
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={15} className="text-teal-400" />
              <a href={`mailto:${CLINIC_EMAIL}`} className="hover:text-white transition-colors">{CLINIC_EMAIL}</a>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} TravelSafe Clinic · travelsafeclinic.in. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.charakclinics.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Charak Clinics</a>
            <a href="https://www.charakclinics.com/student-vaccines-study-abroad-mohali/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Student Vaccines</a>
            <a href="https://www.charakclinics.com/travel-vaccines-mohali-chandigarh/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Travel Vaccines</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
