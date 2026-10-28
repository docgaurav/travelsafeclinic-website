import { useState } from "react";
import { 
  Globe2, GraduationCap, Compass, ShieldAlert, CheckCircle2, 
  Clock, MapPin, Phone, MessageCircle, Mail,
  HeartHandshake, Sparkles, FileText, ChevronDown, ChevronUp,
  Mountain, Stethoscope, ArrowRight, ShieldCheck, Bug, Droplet, 
  UserCheck, Calendar
} from "lucide-react";

const CLINIC_WHATSAPP = "919653010203";
const CLINIC_PHONE = "+918010777722";
const CLINIC_EMAIL = "charakclinics@gmail.com";

type TabMode = "outbound" | "inbound" | "special";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabMode>("outbound");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Booking Form State
  const [travelerName, setTravelerName] = useState("");
  const [travelerPhone, setTravelerPhone] = useState("");
  const [category, setCategory] = useState("Study Abroad (University Form Clearance)");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [consultMode, setConsultMode] = useState("In-Person (Phase 3B2, Mohali)");
  const [notes, setNotes] = useState("");

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 shadow-lg shadow-teal-500/20">
              <Compass size={24} className="animate-pulse" />
            </div>
            <div>
              <a href="/" className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-serif">TravelSafe</span>
                <span className="text-xs uppercase font-semibold tracking-wider text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/60">
                  Clinic
                </span>
              </a>
              <p className="text-xs text-slate-400 hidden sm:block">
                International Travel Health & University Vaccine Center · Mohali & Tricity
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
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-semibold px-4 py-2 rounded-xl text-sm transition-all shadow-md shadow-teal-500/25 hover:shadow-teal-500/40"
            >
              <MessageCircle size={17} />
              <span>WhatsApp Staff</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 border-b border-slate-800">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/70 border border-teal-700/60 text-teal-300 text-xs font-medium tracking-wide">
                <Sparkles size={14} className="text-teal-400" />
                <span>ISTM & ASTMH Credentialed Travel Health Clinic</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif leading-[1.15]">
                Cross-Border Travel Medicine & University Immunizations.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Whether you are an ambitious student heading to the US/UK/Canada, an adventurer planning a high-altitude expedition, or an international partner landing in India for the first time — receive personalized pre-travel prophylaxis, cold-chain assured vaccines, and rapid form clearance.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 font-medium">
                  🌐 International Society of Travel Medicine (ISTM)
                </span>
                <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 font-medium">
                  🏛️ ASTMH & IAMAT Member
                </span>
                <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 font-medium">
                  ❄️ 2°C–8°C Digital Cold-Chain
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3.5">
                <a
                  href="#book-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-teal-500/20"
                >
                  <span>Book Consultation via WhatsApp</span>
                  <ArrowRight size={18} />
                </a>
                <button
                  onClick={handleQuickFormUploadWhatsApp}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-6 py-3.5 rounded-xl text-base transition-all cursor-pointer"
                >
                  <FileText size={18} className="text-teal-400" />
                  <span>Upload University Form for Review</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-2xl p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs uppercase font-semibold tracking-wider text-emerald-400">
                      Live Pre-Travel Clinic
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">Phase 3B2 Mohali</span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Outbound Travel</span>
                      <span className="text-xs text-slate-400">USA · UK · Canada · EU</span>
                    </div>
                    <p className="text-sm font-semibold text-white">University Form Clearance & QuantiFERON-TB</p>
                    <p className="text-xs text-slate-400">Zero-hold clearance for MenACWY, Bexsero, MMR, Varicella, and Tdap.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Inbound to India</span>
                      <span className="text-xs text-slate-400">Visiting Partners & Expats</span>
                    </div>
                    <p className="text-sm font-semibold text-white">Delhi Belly Shield & Rabies PrEP</p>
                    <p className="text-xs text-slate-400">Safe water protocols, traveler's diarrhea starter packs, and mosquito defense.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">Special Situations</span>
                      <span className="text-xs text-slate-400">Treks · Pilgrimage · Biologics</span>
                    </div>
                    <p className="text-sm font-semibold text-white">Altitude Medicine & Safe Schedules</p>
                    <p className="text-xs text-slate-400">Diamox protocols for Himalayas/Kilimanjaro; Hajj/Umrah quadrivalent shots.</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Led by Dr. Gaurav Gupta</span>
                  <span className="text-teal-400 font-medium">In-Clinic or Telehealth Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Split-Screen Compass Navigator */}
      <section className="py-16 md:py-24 border-b border-slate-800 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white">
              The Cross-Border Travel Health Compass
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Select your travel pathway to explore tailored clinical guidance, vaccine schedules, and risk-prevention protocols.
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

          {/* TAB 1: OUTBOUND */}
          {activeTab === "outbound" && (
            <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fadeIn">
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-teal-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-teal-950/80 border border-teal-800/80 flex items-center justify-center text-teal-400">
                  <GraduationCap size={26} />
                </div>
                <h3 className="text-xl font-bold font-serif text-white">
                  University Immunization Clearance
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Colleges across the United States (ACHA standards), Canada, the UK, and Australia place registration and housing holds on unverified forms. We clear all required vaccines before your flight.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                    <span><strong>Meningococcal:</strong> MenACWY & MenB (Bexsero)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                    <span><strong>Childhood Catch-ups:</strong> MMR, Varicella, Tdap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                    <span><strong>Hepatitis B:</strong> Accelerated 3-dose series + antibody titers</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-teal-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-teal-950/80 border border-teal-800/80 flex items-center justify-center text-teal-400">
                  <Stethoscope size={26} />
                </div>
                <h3 className="text-xl font-bold font-serif text-white">
                  QuantiFERON-TB Gold Plus & Mantoux
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Most Indian students had the BCG vaccine at birth, which causes false-positive Mantoux skin tests. American and Canadian universities demand the QuantiFERON IGRA blood test.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                    <span><strong>No BCG Cross-Reaction:</strong> Eliminates false positives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                    <span><strong>Official Laboratory Reports:</strong> Accepted globally</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                    <span><strong>Chest X-ray Referral:</strong> If required by university protocols</span>
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
                  Heading to Southeast Asia, Central America, or Sub-Saharan Africa for vacations, gap years, or wildlife safaris? Protect yourself against severe tropical infections.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                    <span><strong>Typhoid Conjugate (TCV) & Hepatitis A:</strong> Food/water security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                    <span><strong>Rabies PrEP:</strong> Pre-exposure protection for remote expeditions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-teal-400 shrink-0" />
                    <span><strong>Malaria Chemoprophylaxis:</strong> Country-specific medication guidance</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INBOUND */}
          {activeTab === "inbound" && (
            <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fadeIn">
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-emerald-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                  <Droplet size={26} />
                </div>
                <h3 className="text-xl font-bold font-serif text-white">
                  The Delhi Belly & Food Safety Shield
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Foreign partners and travelers visiting India for weddings or touring often suffer acute traveler’s diarrhea. We provide realistic prevention strategies and an emergency prescription pack.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span><strong>Water Security Rules:</strong> Sealed bottled vs filtration, ice precautions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span><strong>Emergency Self-Treatment Kit:</strong> Electrolytes, anti-motility & antibiotics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span><strong>Culinary Navigation:</strong> How to safely enjoy Indian street food and banquets</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-emerald-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                  <ShieldCheck size={26} />
                </div>
                <h3 className="text-xl font-bold font-serif text-white">
                  Rabies Pre-Exposure (PrEP)
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  India has abundant street dogs and monkeys around temple towns. Pre-exposure vaccination simplifies post-exposure management by eliminating the need for hard-to-find Rabies Immunoglobulin (RIG).
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span><strong>WHO-Compliant Schedule:</strong> 2 or 3 dose accelerated pre-travel regimen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span><strong>Animal Encounter Protocol:</strong> Immediate wound care & medical contact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span><strong>Peace of Mind:</strong> Essential for tourists traveling outside major metros</span>
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
                  North India, Rajasthan, and coastal states present variable vector risks. We guide visiting partners on repellents, preventive tablets, and climate adjustments.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span><strong>DEET & Picaridin Protocols:</strong> Day-biting Dengue & night-biting Malaria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span><strong>Hepatitis A & Typhoid:</strong> Core baseline protection before arrival</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span><strong>Local Doctor Access:</strong> Quick WhatsApp triage while in Chandigarh / Punjab</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SPECIAL */}
          {activeTab === "special" && (
            <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fadeIn">
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-sky-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/80 flex items-center justify-center text-sky-400">
                  <Mountain size={26} />
                </div>
                <h3 className="text-xl font-bold font-serif text-white">
                  High-Altitude Mountain Treks
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Trekking to Everest Base Camp, Kilimanjaro, Ladakh, Chadar, or the Inca Trail in Peru? Rapid ascent above 2,500m can trigger Acute Mountain Sickness (AMS), HAPE, or HACE.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                    <span><strong>Acetazolamide (Diamox):</strong> Personalized dosing and contraindication check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                    <span><strong>Expedition First-Aid:</strong> Blister care, altitude hydration, emergency dexamethasone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                    <span><strong>Fitness & Acclimatization Plan:</strong> Pacing schedules for mountain safety</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-sky-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/80 flex items-center justify-center text-sky-400">
                  <ShieldAlert size={26} />
                </div>
                <h3 className="text-xl font-bold font-serif text-white">
                  Immunocompromised & Biologics
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Patients on biologics (anti-TNF, rituximab), chemotherapy, or post-splenectomy require specialized care. Live-attenuated vaccines are contraindicated; inactivated vaccines require optimal timing.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                    <span><strong>Conjugate vs Live Vaccines:</strong> Safe vaccine schedule customization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                    <span><strong>Pneumococcal & Meningococcal:</strong> Heightened protection for asplenia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                    <span><strong>Infection Risk Counseling:</strong> Avoiding opportunistic pathogens</span>
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
                  The Ministry of Health of Saudi Arabia mandates specific vaccinations for pilgrims entering the Kingdom. We provide compliant quadrivalent vaccines and official documentation.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                    <span><strong>Meningococcal ACWY:</strong> Mandatory certificate for Saudi visa clearance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                    <span><strong>Seasonal Influenza:</strong> Protection against viral respiratory illness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                    <span><strong>Elderly Pilgrim Counseling:</strong> Hydration and heat management</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Consultation Booking Builder */}
      <section id="book-consultation" className="py-16 md:py-24 border-b border-slate-800 bg-slate-900/40 relative">
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
      <section className="py-16 md:py-24 border-b border-slate-800 bg-slate-950">
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
