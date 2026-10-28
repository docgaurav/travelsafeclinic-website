import { Link } from "react-router-dom";
import { 
  BookOpen, CheckCircle2, ShieldCheck, HeartPulse, Syringe, 
  Award, MessageCircle, ExternalLink 
} from "lucide-react";
import { CLINIC_WHATSAPP, VIDEO_CONSULT_FEE, DOCTOR_REG_NO } from "../components/Navbar";
import { BookingSection } from "../components/BookingSection";

export function AdultVaccinesPage() {
  const sendWhatsApp = () => {
    const text = `Hello TravelSafe Clinic team, I am interested in an Adult Vaccine Assessment with Dr. Gaurav Gupta (${VIDEO_CONSULT_FEE}) based on 'The Invisible Shield' book recommendations (Shingrix / PCV20 / Tdap / HPV).`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#0a1222] border-b border-white/5 py-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-emerald-400">Home</Link>
          <span>/</span>
          <span className="text-amber-400 font-medium">The Invisible Shield: Adult Vaccines</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Author's Clinical Blueprint • Adults 19 to 65+</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Invisible Shield: Modern Adult Immunization in Mohali
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
        <div className="bg-amber-950/30 border-l-4 border-amber-400 p-6 rounded-r-2xl space-y-2">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Clinical Adult Immunization Summary
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            <strong>Adult vaccination restores waning immunity and prevents severe illness in older adults and individuals with chronic conditions.</strong> In his clinical guide, <em>The Invisible Shield</em>, Dr. Gaurav Gupta highlights four essential adult vaccines: Shingrix (providing 97% protection against shingles and chronic postherpetic nerve pain), Prevnar 20 (single lifetime conjugate pneumonia defense for age 50+ or diabetics), Boostrix Tdap (whooping cough cocooning booster), and Gardasil 9 (cancer prevention).
          </p>
        </div>

        {/* Book Showcase & 4 Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/90 border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative max-w-xs rounded-xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-white/20">
              <img 
                src="/images/invisible-shield-cover.jpg" 
                alt="The Invisible Shield: An Adult's Guide to Vaccines by Dr. Gaurav Gupta"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">The Invisible Shield</h3>
              <p className="text-xs text-amber-400">An Adult’s Guide to Vaccines</p>
              <p className="text-[11px] text-slate-400 mt-1">By Dr. Gaurav Gupta, MD</p>
            </div>
            <button
              onClick={() => sendWhatsApp()}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Inquire About Book / Consultation</span>
            </button>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-xl font-bold text-white">The 4 Key Pillars of Modern Adult Immunization</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300">Shingrix (Shingles)</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">97% Efficacy</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Recombinant 2-dose vaccine for adults aged 50+ and immunocompromised adults 19+. Protects against excruciating postherpetic neuralgia caused by reactivation of latent varicella-zoster virus.
                </p>
                <div className="text-[10px] text-slate-400">Schedule: 2 doses at 0 and 2–6 months.</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-300">Prevnar 20 (Pneumonia)</span>
                  <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-bold">1 Lifetime Dose</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Conjugate vaccine covering 20 serotypes of Streptococcus pneumoniae. Essential for seniors aged 50+, diabetics, smokers, and individuals with asthma or COPD.
                </p>
                <div className="text-[10px] text-slate-400">Schedule: Single injection; no boosters needed.</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-300">Boostrix (Tdap)</span>
                  <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-bold">Cocooning Shield</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tetanus, Diphtheria, and Acellular Pertussis booster. Adult pertussis immunity wanes every 10 years, putting newborns and infant grandchildren at risk of whooping cough.
                </p>
                <div className="text-[10px] text-slate-400">Schedule: One booster every 10 years.</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-300">Gardasil 9 (HPV)</span>
                  <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-bold">Cancer Prevention</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  9-valent HPV vaccine preventing cervical, anal, throat, and head/neck oropharyngeal cancers. Approved for women and men up to age 45.
                </p>
                <div className="text-[10px] text-slate-400">Schedule: 3-dose series at 0, 2, and 6 months.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Source Citations */}
        <div className="bg-slate-950/60 border border-white/5 rounded-xl p-5 space-y-2 text-xs text-slate-400">
          <div className="text-white font-semibold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Primary Immunization Guidelines Cited</span>
          </div>
          <ul className="space-y-1 list-disc list-inside text-[11px] leading-relaxed">
            <li>Centers for Disease Control and Prevention (CDC). <em>Recommended Adult Immunization Schedule for ages 19 years or older, United States</em>. ACIP.</li>
            <li>Indian Academy of Pediatrics Advisory Committee on Vaccines and Immunization Practices (IAP-ACVIP). <em>Adult Immunization Guidelines</em>.</li>
            <li>Gupta, Gaurav. <em>The Invisible Shield: An Adult’s Guide to Vaccines</em>. Evincepub Publishing.</li>
          </ul>
        </div>

        {/* Booking Section */}
        <BookingSection />

      </div>
    </div>
  );
}
