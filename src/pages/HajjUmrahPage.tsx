import { Link } from "react-router-dom";
import { 
  Compass, CheckCircle2, Clock, ShieldCheck, AlertCircle, 
  BookOpen, MessageCircle, FileText 
} from "lucide-react";
import { CLINIC_WHATSAPP, VIDEO_CONSULT_FEE, DOCTOR_REG_NO } from "../components/Navbar";
import { BookingSection } from "../components/BookingSection";

export function HajjUmrahPage() {
  const sendWhatsApp = () => {
    const text = `Hello TravelSafe Clinic team, I am planning for Hajj / Umrah pilgrimage and need Dr. Gaurav Gupta's consultation (${VIDEO_CONSULT_FEE}) and stamped Quadrivalent Meningococcal ACWY vaccination certification.`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#0a1222] border-b border-white/5 py-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-emerald-400">Home</Link>
          <span>/</span>
          <span className="text-emerald-400 font-medium">Hajj & Umrah Pilgrimage Immunization</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kingdom of Saudi Arabia Ministry of Health Mandatory Protocol</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Hajj & Umrah Vaccines: Meningococcal ACWY Certification in Mohali
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
        <div className="bg-emerald-950/40 border-l-4 border-emerald-400 p-6 rounded-r-2xl space-y-2">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Mandatory Entry Requirement
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            <strong>The Ministry of Health of Saudi Arabia strictly mandates that all pilgrims entering Mecca and Medina for Hajj or Umrah must present valid certification of Quadrivalent Meningococcal ACWY vaccination.</strong> The vaccine must be administered no less than 10 days before border arrival. TravelSafe Clinic provides WHO-standard quadrivalent conjugate meningococcal vaccines with official physician-stamped certificates, plus seasonal influenza and adult pneumococcal vaccines for pilgrims aged 50 and above.
          </p>
        </div>

        {/* Requirement & Vaccine Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                Mandatory Visa Requirement
              </span>
              <FileText className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-base font-bold text-white">Quadrivalent MenACWY</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Protects against Neisseria meningitidis serogroups A, C, W-135, and Y. Conjugate formulations offer lasting mucosal immunity. Certificate is stamped with Dr. Gupta’s Punjab Medical Council registration.
            </p>
            <div className="text-[11px] text-slate-400 border-t border-white/5 pt-2">
              Validity: 10 days post-vaccination up to 5 years (conjugate).
            </div>
          </div>

          <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">
                Highly Recommended
              </span>
              <ShieldCheck className="w-4 h-4 text-blue-400" />
            </div>
            <h3 className="text-base font-bold text-white">Quadrivalent Influenza</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mass gatherings with millions of travelers in confined spaces lead to rapid transmission of respiratory viruses. Annual quadrivalent influenza vaccination significantly reduces severe viral pneumonia risk.
            </p>
            <div className="text-[11px] text-slate-400 border-t border-white/5 pt-2">
              Timing: Administer at least 2 weeks prior to departure.
            </div>
          </div>

          <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
                Essential for Age 50+
              </span>
              <AlertCircle className="w-4 h-4 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-white">Pneumococcal (PCV20)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Elderly pilgrims and individuals with chronic diabetes, asthma, or cardiac illness face heightened vulnerability to invasive Streptococcus pneumoniae during ritual walks and crowded encampments.
            </p>
            <div className="text-[11px] text-slate-400 border-t border-white/5 pt-2">
              Dose: Single lifetime conjugate injection.
            </div>
          </div>
        </div>

        {/* Primary Source Citations */}
        <div className="bg-slate-950/60 border border-white/5 rounded-xl p-5 space-y-2 text-xs text-slate-400">
          <div className="text-white font-semibold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Primary Sources & Regulatory References Cited</span>
          </div>
          <ul className="space-y-1 list-disc list-inside text-[11px] leading-relaxed">
            <li>Ministry of Health, Kingdom of Saudi Arabia. <em>Health Requirements and Recommendations for Travelers to Saudi Arabia for Hajj and Umrah</em>.</li>
            <li>World Health Organization (WHO). <em>Health Conditions for Travelers to Saudi Arabia for the Pilgrimage to Mecca (Hajj)</em>. Weekly Epidemiological Record.</li>
            <li>Memish ZA, et al. <em>Mass Gatherings Medicine: Public Health Interventions for the Hajj Pilgrimage</em>. The Lancet.</li>
          </ul>
        </div>

        {/* Booking Section */}
        <BookingSection />

      </div>
    </div>
  );
}
