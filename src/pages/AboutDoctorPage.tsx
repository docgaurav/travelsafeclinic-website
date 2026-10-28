import { Link } from "react-router-dom";
import { 
  User, Award, ShieldCheck, BookOpen, GraduationCap, 
  MapPin, Phone, MessageCircle, FileText, CheckCircle2 
} from "lucide-react";
import { CLINIC_PHONE, CLINIC_WHATSAPP, CLINIC_EMAIL, VIDEO_CONSULT_FEE, DOCTOR_REG_NO } from "../components/Navbar";

export function AboutDoctorPage() {
  const sendWhatsApp = () => {
    const text = `Hello TravelSafe Clinic team, I would like to book a Video Consultation (${VIDEO_CONSULT_FEE}) directly with Dr. Gaurav Gupta. Please share available appointment slots.`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#0a1222] border-b border-white/5 py-3 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-emerald-400">Home</Link>
          <span>/</span>
          <span className="text-emerald-400 font-medium">About Dr. Gaurav Gupta</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Physician Profile Card */}
        <div className="bg-slate-900/90 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-emerald-400/40 shadow-2xl shadow-emerald-500/10">
                <img 
                  src="/images/dr-gaurav-gupta.jpg" 
                  alt="Dr. Gaurav Gupta, DCH, DNB, CTH®"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISTM Certified Travel Medicine Specialist</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Dr. Gaurav Gupta, DCH, DNB (Pediatrics), CTH®
              </h1>

              <div className="text-xs text-slate-300 space-y-1">
                <div><strong>State Medical Council:</strong> Punjab Medical Council (PMC)</div>
                <div><strong>Registration Number:</strong> <span className="text-emerald-400 font-mono font-bold">{DOCTOR_REG_NO}</span></div>
                <div><strong>Primary Practice Facility:</strong> Charak Clinics, SCF 30, Phase 3B2, Sector 60, SAS Nagar (Mohali), Punjab 160059</div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Dr. Gaurav Gupta is a senior physician, author, and travel medicine authority with over three decades of clinical practice. He holds the prestigious <strong>Certificate in Travel Health (CTH®)</strong> awarded by the International Society of Travel Medicine (ISTM), reflecting formal competence in global travel health risks, international immunization protocols, and wilderness altitude medicine.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={sendWhatsApp}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Book Video Consult ({VIDEO_CONSULT_FEE})</span>
                </button>
                <a
                  href={`tel:${CLINIC_PHONE}`}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Reception: {CLINIC_PHONE}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Credentials & Institutional Memberships */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>International Credentials</span>
            </div>
            <h2 className="text-base font-bold text-white">ISTM & ASTMH</h2>
            <ul className="text-xs text-slate-300 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Certificate in Travel Health (CTH®), International Society of Travel Medicine.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Member, American Society of Tropical Medicine and Hygiene (ASTMH).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>International Association for Medical Assistance to Travellers (IAMAT).</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>National Academic Roles</span>
            </div>
            <h2 className="text-base font-bold text-white">IAP & ACVIP Leadership</h2>
            <ul className="text-xs text-slate-300 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>Fellow of the Indian Academy of Pediatrics (FIAP).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>Active contributor to immunization guidelines and academic conferences on pediatric and adult vaccines.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>Senior consultant at Charak Clinics, Mohali.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Published Authorship</span>
            </div>
            <h2 className="text-base font-bold text-white">The Invisible Shield</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Author of <em>The Invisible Shield: An Adult’s Guide to Vaccines</em>, establishing an evidence-based roadmap for restoring immunity in adults aged 19 to 65+.
            </p>
            <div className="text-[11px] text-amber-300">
              Covers Shingrix, PCV20, Tdap cocooning, and HPV Gardasil 9.
            </div>
          </div>
        </div>

        {/* Aggregate Clinical Practice Facts (NMC Compliant) */}
        <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white">Verified Clinical Experience</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-2xl font-bold text-white">30+</div>
              <div className="text-[11px] text-slate-400">Years in Clinical Medicine</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-2xl font-bold text-emerald-400">500+</div>
              <div className="text-[11px] text-slate-400">University Forms Audited</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-2xl font-bold text-cyan-400">2°C–8°C</div>
              <div className="text-[11px] text-slate-400">Verified Vaccine Cold Chain</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-2xl font-bold text-amber-400">{DOCTOR_REG_NO}</div>
              <div className="text-[11px] text-slate-400">Punjab Medical Council</div>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 pt-2">
            Regulatory Statement: In compliance with the Code of Medical Ethics and National Medical Commission (NMC) regulations, this page presents factual qualifications and academic affiliations. TravelSafe Clinic does not solicit patients or publish patient testimonials.
          </p>
        </div>

      </div>
    </div>
  );
}
