import { Link } from "react-router-dom";
import { 
  Mountain, CheckCircle2, AlertTriangle, Activity, Clock, 
  MessageCircle, BookOpen, ShieldCheck, HeartPulse 
} from "lucide-react";
import { CLINIC_WHATSAPP, VIDEO_CONSULT_FEE, DOCTOR_REG_NO } from "../components/Navbar";
import { BookingSection } from "../components/BookingSection";

export function AltitudeExpeditionPage() {
  const sendWhatsApp = () => {
    const text = `Hello TravelSafe Clinic team, I am preparing for a high-altitude expedition (Ladakh/Everest Base Camp/Kilimanjaro) and need Dr. Gaurav Gupta's altitude medical consultation (${VIDEO_CONSULT_FEE}), Diamox prescription, and travel kit.`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#0a1222] border-b border-white/5 py-3 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-emerald-400">Home</Link>
          <span>/</span>
          <span className="text-cyan-400 font-medium">High Altitude & Expedition Medicine</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Mountain className="w-3.5 h-3.5 text-cyan-400" />
            <span>Wilderness Medical Society Protocol • Ladakh, EBC & Kilimanjaro</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            High Altitude Sickness & Diamox Prophylaxis: Himalayan Medical Guide
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1 border-b border-white/10 pb-4">
            <span><strong>Written & Medically Reviewed by:</strong> Dr. Gaurav Gupta, DCH, DNB (Pediatrics), CTH® (ISTM)</span>
            <span>•</span>
            <span><strong>Punjab Medical Council Reg No:</strong> {DOCTOR_REG_NO}</span>
            <span>•</span>
            <span><strong>Last Clinical Review:</strong> October 2026</span>
          </div>
        </div>

        {/* 40-60 Word Answer-First Direct Executive Summary */}
        <div className="bg-cyan-950/40 border-l-4 border-cyan-400 p-6 rounded-r-2xl space-y-2">
          <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Clinical Altitude Executive Summary
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            <strong>Acute Mountain Sickness (AMS) affects 25% to 50% of unacclimatized travelers ascending rapidly above 2,500 meters in destinations such as Leh-Ladakh, Spiti Valley, and Everest Base Camp.</strong> Prevention requires gradual ascent (limiting sleeping elevation gain to 500 meters daily above 3,000 meters) combined with physician-prescribed Acetazolamide (Diamox 125mg twice daily), initiated 24 hours prior to ascent. TravelSafe Clinic provides pre-travel hypoxia risk profiling, emergency standby medications, and custom expedition kits.
          </p>
        </div>

        {/* Clinical Stages Table */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span>Altitude Illness Spectrum: Clinical Recognition & Action</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Differentiating benign hypoxia from life-threatening pulmonary or cerebral edema is essential for safe expedition management.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/80">
            <table className="w-full text-left text-xs text-slate-300 min-w-[640px]">
              <thead className="bg-slate-950/90 text-white font-bold uppercase tracking-wider text-[11px] border-b border-white/10">
                <tr>
                  <th className="py-3.5 px-4">Condition</th>
                  <th className="py-3.5 px-4">Hallmark Symptoms</th>
                  <th className="py-3.5 px-4">Pulse Oximetry (SpO2)</th>
                  <th className="py-3.5 px-4 text-emerald-300">Mandatory Medical Response</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Acute Mountain Sickness (AMS)</td>
                  <td className="py-3.5 px-4">Bitemporal throbbing headache, fatigue, dizziness, insomnia, anorexia, or nausea within 6–12h of ascent.</td>
                  <td className="py-3.5 px-4">Typically 75% to 85% at rest at 3,500m.</td>
                  <td className="py-3.5 px-4 text-emerald-200">Cease ascent. Maintain rest at current altitude. Continue Diamox 125–250mg bd. Descend if symptoms worsen after 24h.</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-amber-300">High Altitude Pulmonary Edema (HAPE)</td>
                  <td className="py-3.5 px-4">Excessive breathlessness at rest, persistent dry cough progressing to pink frothy sputum, cyanosis, extreme weakness.</td>
                  <td className="py-3.5 px-4 text-amber-400">Often falls below 65% on room air.</td>
                  <td className="py-3.5 px-4 text-amber-200"><strong>Medical Emergency.</strong> Immediate descent of at least 500–1,000m. High-flow oxygen, Nifedipine 30mg ER, portable hyperbaric chamber.</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-red-400">High Altitude Cerebral Edema (HACE)</td>
                  <td className="py-3.5 px-4">Ataxia (loss of physical coordination/drunk gait), severe confusion, lethargy, altered mental status, stupor.</td>
                  <td className="py-3.5 px-4 text-red-400">Severe hypoxemia with cognitive impairment.</td>
                  <td className="py-3.5 px-4 text-red-200"><strong>Life-threatening.</strong> Immediate evacuation/descent. Administer Dexamethasone 8mg PO/IM stat followed by 4mg every 6 hours.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Acetazolamide Prophylaxis Protocol */}
        <div className="bg-slate-900/90 border border-white/15 rounded-2xl p-6 sm:p-8 space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-emerald-400" />
            <span>Acetazolamide (Diamox) Clinical Prescription Guidelines</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2">
              <div className="font-bold text-white text-sm">Mechanism of Action</div>
              <p className="leading-relaxed">
                Acetazolamide is a carbonic anhydrase inhibitor that induces mild metabolic acidosis by renal bicarbonate excretion. This stimulates respiratory drive in the brainstem, maintaining higher arterial oxygenation and preventing periodic Cheyne-Stokes nocturnal breathing.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2">
              <div className="font-bold text-white text-sm">Dosage & Administration</div>
              <p className="leading-relaxed">
                Standard adult prophylaxis is <strong>125 mg orally twice daily</strong>, starting 24 hours prior to crossing 2,800m (or before flying into Leh Airport at 3,500m) and continued until 48 hours after arriving at the peak altitude.
              </p>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-300">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300">Clinical Contraindication Note:</strong> Acetazolamide is structurally a sulfonamide derivative. Patients with a documented history of severe sulfa allergy or pre-existing renal impairment must be medically evaluated for alternative protocols (such as low-dose Dexamethasone).
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              Expedition Medical Consultation: <strong className="text-white">{VIDEO_CONSULT_FEE}</strong>
            </div>
            <button
              onClick={sendWhatsApp}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Request Expedition Kit Consultation</span>
            </button>
          </div>
        </div>

        {/* Primary Source Citations */}
        <div className="bg-slate-950/60 border border-white/5 rounded-xl p-5 space-y-2 text-xs text-slate-400">
          <div className="text-white font-semibold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Primary Altitude Literature Cited</span>
          </div>
          <ul className="space-y-1 list-disc list-inside text-[11px] leading-relaxed">
            <li>Wilderness Medical Society. <em>Clinical Practice Guidelines for the Prevention and Treatment of Acute Altitude Illness: 2024–2026 Update</em>. Wilderness & Environmental Medicine.</li>
            <li>Luks AM, et al. <em>Medical Conditions at High Altitude</em>. New England Journal of Medicine (NEJM).</li>
            <li>International Society of Travel Medicine (ISTM). <em>Body of Knowledge: High-Altitude Illness and Acclimatization</em>.</li>
          </ul>
        </div>

        {/* Booking Section */}
        <BookingSection />

      </div>
    </div>
  );
}
