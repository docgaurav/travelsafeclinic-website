import { Link } from "react-router-dom";
import { 
  ShieldAlert, CheckCircle2, Clock, MapPin, Award, 
  ExternalLink, MessageCircle, FileText, AlertCircle, BookOpen, ShieldCheck 
} from "lucide-react";
import { CLINIC_WHATSAPP, VIDEO_CONSULT_FEE, DOCTOR_REG_NO } from "../components/Navbar";
import { BookingSection } from "../components/BookingSection";

export function YellowFeverPage() {
  const sendWhatsApp = () => {
    const text = `Hello TravelSafe Clinic team, I am traveling to a Yellow Fever endemic country (Africa/South America) and need Dr. Gaurav Gupta's pre-travel consultation (${VIDEO_CONSULT_FEE}), malaria prophylaxis, and guidance regarding the Civil Hospital Mohali YF card.`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#0a1222] border-b border-white/5 py-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-emerald-400">Home</Link>
          <span>/</span>
          <span className="text-emerald-400 font-medium">Yellow Fever Card Punjab (Mohali Center)</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-semibold">
            <ShieldAlert className="w-3.5 h-3.5 text-yellow-400" />
            <span>WHO International Health Regulations (IHR 2005) Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Yellow Fever Vaccination Card in Punjab: Official Mohali Center Protocol
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1 border-b border-white/10 pb-4">
            <span><strong>Written & Medically Reviewed by:</strong> Dr. Gaurav Gupta, MD (Pediatrics), CTH® (ISTM)</span>
            <span>•</span>
            <span><strong>Punjab Medical Council Reg No:</strong> {DOCTOR_REG_NO}</span>
            <span>•</span>
            <span><strong>Last Clinical Review:</strong> October 2026</span>
          </div>
        </div>

        {/* 40-60 Word Answer-First Direct Executive Summary */}
        <div className="bg-yellow-950/30 border-l-4 border-yellow-400 p-6 rounded-r-2xl space-y-2">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
            Authoritative Regulatory Answer
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            <strong>In Punjab, the official WHO International Certificate of Vaccination or Prophylaxis (ICVP Yellow Card) is legally issued exclusively by designated government centers: Civil Hospital, Phase 6, SAS Nagar (Mohali) and AIIMS Bathinda.</strong> No private hospital or private practitioner can legally issue this certificate. TravelSafe Clinic provides mandatory pre-travel medical screening, medical contraindication waiver certificates, and co-scheduled travel biologics before you attend the government center.
          </p>
        </div>

        {/* Two-Column Comparison: Civil Hospital Mohali vs TravelSafe Clinic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Official Designated Center */}
          <div className="bg-slate-900/90 border border-yellow-500/30 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-bold border border-yellow-500/30">
                  Government Inoculation Center
                </span>
                <Award className="w-5 h-5 text-yellow-400" />
              </div>

              <h2 className="text-xl font-bold text-white">
                Civil Hospital, Phase 6, Mohali
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed">
                Designated by the Ministry of Health and Family Welfare (MoHFW), Government of India, to administer the live-attenuated 17D yellow fever vaccine and issue the yellow ICVP booklet.
              </p>

              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2.5 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>Operating Days:</strong> Inoculations are conducted on Tuesdays and Thursdays (10:00 AM to 1:00 PM). Arrive early as vial batch openings require cohort sizes.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <FileText className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>Mandatory Document:</strong> Original International Passport is strictly required; photocopies and Aadhaar cards are not accepted for booklet issuance.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <AlertCircle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>Validity Timeline:</strong> The card becomes legally valid for border immigration exactly <strong>10 days</strong> post-vaccination. Under current WHO rules, validity is lifelong.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="https://ihpoe.mohfw.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>Check Official MoHFW YF Directory</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: TravelSafe Clinic Role */}
          <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  Clinical Travel Medicine Specialist
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>

              <h2 className="text-xl font-bold text-white">
                TravelSafe Clinic Pre-Travel Clearance
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed">
                The live yellow fever vaccine carries rare but serious adverse risk (YEL-AVD and YEL-AND). Dr. Gaurav Gupta assesses clinical contraindications and prescribes travel health protection not provided at government centers.
              </p>

              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2.5 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Medical Contraindication Waivers:</strong> Official stamped exemption certificates for travelers aged 60+, pregnant women, or immunosuppressed patients who cannot receive live virus vaccines.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Malaria Chemoprophylaxis:</strong> Prescriptions for Atovaquone-Proguanil (Malarone) or Doxycycline tailored to safari zones where chloroquine resistance is widespread.</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Co-Scheduled Vaccines:</strong> Administering Typhoid (TCV), Hepatitis A, Meningococcal ACWY, and Rabies PrEP under WHO cold-chain storage.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Pre-Travel Review: <strong className="text-white">{VIDEO_CONSULT_FEE}</strong></span>
              <button
                onClick={sendWhatsApp}
                className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>WhatsApp Staff</span>
              </button>
            </div>
          </div>

        </div>

        {/* Primary Source Citations */}
        <div className="bg-slate-950/60 border border-white/5 rounded-xl p-5 space-y-2 text-xs text-slate-400">
          <div className="text-white font-semibold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Primary Sources & Regulatory Documents Cited</span>
          </div>
          <ul className="space-y-1 list-disc list-inside text-[11px] leading-relaxed">
            <li>World Health Organization (WHO). <em>International Health Regulations (2005)</em>. Third Edition, Annex 7: Requirements Concerning Vaccination Against Yellow Fever.</li>
            <li>Ministry of Health and Family Welfare (MoHFW), Government of India. <em>List of Designated Yellow Fever Vaccination Centres in India</em>. International Health Portal (IHPOE).</li>
            <li>Centers for Disease Control and Prevention (CDC). <em>CDC Yellow Book: Health Information for International Travel</em>. Yellow Fever Chapter.</li>
          </ul>
        </div>

        {/* Booking Section */}
        <BookingSection />

      </div>
    </div>
  );
}
