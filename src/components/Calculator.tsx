import { useState } from "react";
import { Sliders, GraduationCap, Globe2, Mountain, Compass, ShieldCheck, MessageCircle } from "lucide-react";
import { CLINIC_WHATSAPP, VIDEO_CONSULT_FEE } from "./Navbar";

export function Calculator() {
  const [calcPersona, setCalcPersona] = useState<string>("Student (USA/Canada/UK)");
  const [calcWeeks, setCalcWeeks] = useState<number>(3);
  const [calcPreviousVaccines, setCalcPreviousVaccines] = useState<string>("Complete Childhood Records");

  const sendWhatsApp = (customMsg: string) => {
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(customMsg)}`, "_blank");
  };

  return (
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
            Interactive clinical timeline planner. Adjust your traveler category and departure window to see required milestones and action steps.
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
                        type="button"
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
                        type="button"
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
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-[11px] text-emerald-400 font-mono uppercase tracking-wider">Calculated Clinical Sequencing</div>
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

                {/* Milestones */}
                <div className="space-y-3.5">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Recommended Milestone Schedule
                  </div>

                  <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                    <div className="relative">
                      <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-slate-950"></div>
                      <div className="text-xs font-bold text-emerald-300">Day 0 (Immediate Action)</div>
                      <div className="text-xs text-slate-300">
                        Video Consultation with Dr. Gupta ({VIDEO_CONSULT_FEE}). Form audit, travel risk evaluation, and lab requisition for TB IGRA / antibody titers.
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-teal-400 ring-4 ring-slate-950"></div>
                      <div className="text-xs font-bold text-teal-300">Day 3 – 5 (Biologics Administration)</div>
                      <div className="text-xs text-slate-300">
                        Lab titers reviewed. Administration of Day 0 primary doses (e.g. Hepatitis A, Typhoid, MenACWY) under unbroken cold-chain storage.
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-slate-950"></div>
                      <div className="text-xs font-bold text-cyan-300">
                        {calcWeeks <= 2 ? "Day 10 (Rapid Completion)" : `Week ${Math.max(2, calcWeeks - 1)} (Certification)`}
                      </div>
                      <div className="text-xs text-slate-300">
                        {calcWeeks <= 2 
                          ? "Accelerated schedule documentation verified; official physician seal and state council license stamp applied."
                          : "Booster completions, official university immunization clearance stamped and certified."}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vaccines Checklist */}
                <div className="bg-slate-900/90 border border-white/10 rounded-xl p-4 space-y-2">
                  <div className="text-xs font-bold text-slate-300">Priority Clinical Items</div>
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
                  type="button"
                  onClick={() => sendWhatsApp(`Hello Dr. Gaurav Gupta's team, I ran the Departure Calculator: Category: ${calcPersona}, Time remaining: ${calcWeeks} weeks, Vaccine records: ${calcPreviousVaccines}. I would like to book a Video Consultation (${VIDEO_CONSULT_FEE}) to initiate this protocol.`)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
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
  );
}
