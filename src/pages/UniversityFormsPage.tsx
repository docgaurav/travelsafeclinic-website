import { Link } from "react-router-dom";
import { 
  GraduationCap, CheckCircle2, AlertTriangle, FileCheck, Clock, 
  ShieldCheck, ArrowRight, BookOpen, ExternalLink, MessageCircle
} from "lucide-react";
import { CLINIC_WHATSAPP, VIDEO_CONSULT_FEE, DOCTOR_REG_NO } from "../components/Navbar";
import { BookingSection } from "../components/BookingSection";

export function UniversityFormsPage() {
  const sendWhatsApp = () => {
    const text = `Hello TravelSafe Clinic team, I have university immunization clearance forms (USA/UK/Canada) that require Dr. Gaurav Gupta's review, IGRA/titer testing, and official physician signature. Please guide me with an appointment (${VIDEO_CONSULT_FEE}).`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#0a1222] border-b border-white/5 py-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-emerald-400">Home</Link>
          <span>/</span>
          <span className="text-emerald-400 font-medium">University Immunization Form Clearance</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Academic Health Documentation • USA, Canada, UK & Europe</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            University Immunization Form Clearance & TB Screening in Mohali-Chandigarh
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1 border-b border-white/10 pb-4">
            <span><strong>Written & Medically Reviewed by:</strong> Dr. Gaurav Gupta, DCH, DNB (Pediatrics), CTH® (ISTM)</span>
            <span>•</span>
            <span><strong>Punjab Medical Council Reg No:</strong> {DOCTOR_REG_NO}</span>
            <span>•</span>
            <span><strong>Last Clinical Review:</strong> October 2026</span>
          </div>
        </div>

        {/* 40-60 Word Answer-First Direct Executive Summary for AI Overviews / Snippets */}
        <div className="bg-emerald-950/40 border-l-4 border-emerald-400 p-6 rounded-r-2xl space-y-2">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Clinical Summary & Essential Requirement
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            <strong>US, Canadian, and UK universities require incoming international students to submit certified immunization records and tuberculosis clearance prior to course enrollment.</strong> Because childhood BCG vaccination in India causes false-positive Mantoux skin tests, North American institutions mandate interferon-gamma release assays (QuantiFERON-TB Gold Plus). Dr. Gaurav Gupta evaluates immunization records, coordinates antibody titers, and signs official university documentation within 48 to 72 hours.
          </p>
        </div>

        {/* Comparison Table: Standard Mistakes vs TravelSafe Protocol */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-400" />
            <span>Requirements Breakdown: Avoiding Costly Form Rejections</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            University health portals (such as Medicat, Point and Click Solutions, and PyraMED) automatically audit submitted forms against CDC and American College Health Association standards.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/80">
            <table className="w-full text-left text-xs text-slate-300 min-w-[640px]">
              <thead className="bg-slate-950/90 text-white font-bold uppercase tracking-wider text-[11px] border-b border-white/10">
                <tr>
                  <th className="py-3.5 px-4">Requirement</th>
                  <th className="py-3.5 px-4 text-amber-300">Common Clinic Pitfall</th>
                  <th className="py-3.5 px-4 text-emerald-300">TravelSafe Clinic Protocol</th>
                  <th className="py-3.5 px-4">Official Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Tuberculosis (TB) Clearance</td>
                  <td className="py-3.5 px-4 text-slate-400">Administering Mantoux (PPD) skin test, which yields false positives due to Indian infant BCG vaccine, forcing costly chest X-rays.</td>
                  <td className="py-3.5 px-4 text-emerald-200">Requisition of <strong>QuantiFERON-TB Gold Plus (IGRA)</strong> blood test. Unaffected by BCG; accepted immediately without X-rays.</td>
                  <td className="py-3.5 px-4 text-slate-400">ACHA & CDC DTBE Guidelines</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Meningococcal ACWY & MenB</td>
                  <td className="py-3.5 px-4 text-slate-400">Assuming childhood polio or typhoid covers meningitis; ignoring Serogroup B (Bexsero) mandate for dorm residents.</td>
                  <td className="py-3.5 px-4 text-emerald-200">Verification of Quadrivalent MenACWY given within 5 years of matriculation, plus MenB counseling where mandated (Stanford, Columbia, Harvard).</td>
                  <td className="py-3.5 px-4 text-slate-400">ACIP Meningococcal Recommendations</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">MMR & Varicella Proof</td>
                  <td className="py-3.5 px-4 text-slate-400">Submitting hand-written diary records without batch numbers, which get rejected during university automated verification.</td>
                  <td className="py-3.5 px-4 text-emerald-200">Quantitative <strong>IgG Antibody Titers</strong> (Measles, Mumps, Rubella, Varicella Zoster) to prove clinical immunity without repeating shots.</td>
                  <td className="py-3.5 px-4 text-slate-400">ACHA Immunization Protocols</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Hepatitis B Surface Antibody</td>
                  <td className="py-3.5 px-4 text-slate-400">Listing infant doses from 20 years ago where titer has waned below protective 10 mIU/mL threshold.</td>
                  <td className="py-3.5 px-4 text-emerald-200">Order quantitative Anti-HBs titer. If &lt; 10 mIU/mL, administer single accelerated booster and document appropriately.</td>
                  <td className="py-3.5 px-4 text-slate-400">CDC Viral Hepatitis Clearance</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Official Sign & Seal</td>
                  <td className="py-3.5 px-4 text-slate-400">Generic rubber stamp without medical registration authority, leading to university rejection emails.</td>
                  <td className="py-3.5 px-4 text-emerald-200">Complete institutional stamp, Dr. Gaurav Gupta's signature, Punjab Medical Council registration number ({DOCTOR_REG_NO}), and official contact verification.</td>
                  <td className="py-3.5 px-4 text-slate-400">AAMC Medical Clearance Rule</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Step-by-Step 48-Hour Protocol */}
        <div className="bg-slate-900/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-teal-400" />
            <span>The 48-Hour University Clearance Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950 p-5 rounded-xl border border-white/5 space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center">1</div>
              <h3 className="text-sm font-bold text-white">Step 1: Document Upload & Audit</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Send your university PDF form and existing childhood records to our staff on WhatsApp. Dr. Gaurav Gupta personally audits the criteria and determines whether blood titers or boosters are required.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-white/5 space-y-2">
              <div className="w-7 h-7 rounded-full bg-teal-500/20 text-teal-400 font-bold text-xs flex items-center justify-center">2</div>
              <h3 className="text-sm font-bold text-white">Step 2: Lab Orders & Cold-Chain Doses</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If antibody proof is missing, we coordinate QuantiFERON-TB Gold Plus and IgG antibody blood tests. Any required boosters (such as MenACWY or Tdap) are administered under verified cold-chain conditions.
              </p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-white/5 space-y-2">
              <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center">3</div>
              <h3 className="text-sm font-bold text-white">Step 3: Certification & Signature</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Once lab reports are verified, Dr. Gaurav Gupta completes the multi-page form, stamps with Punjab Medical Council license credentials, and provides high-resolution scanned copies for your portal.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              Physician Consultation Fee: <strong className="text-white">{VIDEO_CONSULT_FEE}</strong>
            </div>
            <button
              onClick={sendWhatsApp}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Send University Form on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Primary Source Citations */}
        <div className="bg-slate-950/60 border border-white/5 rounded-xl p-5 space-y-2 text-xs text-slate-400">
          <div className="text-white font-semibold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Primary Guidelines & Regulatory Standards Cited</span>
          </div>
          <ul className="space-y-1 list-disc list-inside text-[11px] leading-relaxed">
            <li>American College Health Association (ACHA). <em>Guidelines: Immunization Recommendations for College Students</em> (Updated 2026).</li>
            <li>Centers for Disease Control and Prevention (CDC). <em>Tuberculosis Screening and Testing of College Students</em>. Division of Tuberculosis Elimination (DTBE).</li>
            <li>Advisory Committee on Immunization Practices (ACIP). <em>Meningococcal Vaccination Recommendations of the ACIP</em>. MMWR.</li>
            <li>Association of American Medical Colleges (AAMC). <em>Standardized Immunization Form</em>.</li>
          </ul>
        </div>

        {/* Booking Form Integration */}
        <BookingSection />

      </div>
    </div>
  );
}
