import { useState } from "react";
import { Sliders, GraduationCap, Globe2, Mountain, Compass, ShieldCheck, MessageCircle, HeartHandshake } from "lucide-react";
import { CLINIC_WHATSAPP, VIDEO_CONSULT_FEE } from "./Navbar";

export function Calculator() {
  const [calcPersona, setCalcPersona] = useState<string>("Grandparents (USA/Canada/UK)");
  const [calcWeeks, setCalcWeeks] = useState<number>(3);
  const [calcPreviousVaccines, setCalcPreviousVaccines] = useState<string>("Partial / Older Records");

  const sendWhatsApp = (customMsg: string) => {
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(customMsg)}`, "_blank");
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
            <Sliders className="w-3.5 h-3.5 text-teal-600" />
            <span>Interactive Timeline Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Departure & Vaccine Timeline Calculator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select your travel category and departure window to see your personalized vaccine schedule and milestone checklist.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Controls Column */}
            <div className="lg:col-span-6 space-y-7">
              
              {/* Step 1: Traveler Profile */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                  Select Your Travel or Health Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: "Grandparents (USA/Canada/UK)", label: "Grandparents Visiting Family", icon: HeartHandshake },
                    { id: "Student (USA/Canada/UK)", label: "Student University Forms", icon: GraduationCap },
                    { id: "Wildlife Safari (Africa)", label: "Safari & Africa (YF/Malaria)", icon: Globe2 },
                    { id: "Himalayan Expedition", label: "High Altitude Trek (AMS)", icon: Mountain },
                    { id: "Pilgrimage (Hajj/Umrah)", label: "Hajj / Umrah (ACWY)", icon: Compass },
                    { id: "Adult Longevity (50+)", label: "Adult Vaccines & Book", icon: ShieldCheck }
                  ].map((item) => {
                    const Icon = item.icon;
                    const active = calcPersona === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCalcPersona(item.id)}
                        className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          active 
                            ? "bg-teal-50 border-teal-600 text-teal-900 shadow-xs ring-1 ring-teal-600 font-semibold" 
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                        }`}
                      >
                        <Icon className={`w-4 h-4 shrink-0 ${active ? "text-teal-600" : "text-slate-400"}`} />
                        <span className="text-xs">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Departure Timeline Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                    Time Remaining Until Departure
                  </label>
                  <span className="text-sm font-bold text-teal-800 bg-teal-100/70 px-3 py-0.5 rounded-full border border-teal-200">
                    {calcWeeks} {calcWeeks === 1 ? "Week" : "Weeks"}
                  </span>
                </div>

                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={calcWeeks}
                  onChange={(e) => setCalcWeeks(Number(e.target.value))}
                  className="w-full accent-teal-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />

                <div className="flex justify-between text-[11px] text-slate-500 px-1 font-mono">
                  <span>1 Wk (Urgent)</span>
                  <span>3 Wks (Optimal)</span>
                  <span>6 Wks (Ideal)</span>
                  <span>10+ Wks</span>
                </div>
              </div>

              {/* Step 3: Prior Vaccination Status */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px] font-bold">3</span>
                  Vaccine Record Status
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    "Complete Past Records",
                    "Partial / Older Records",
                    "No Records (Need Titers)"
                  ].map((rec) => {
                    const active = calcPreviousVaccines === rec;
                    return (
                      <button
                        key={rec}
                        type="button"
                        onClick={() => setCalcPreviousVaccines(rec)}
                        className={`p-2.5 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                          active 
                            ? "bg-teal-50 border-teal-600 text-teal-900 font-bold" 
                            : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
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
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <div className="text-[11px] text-teal-700 font-semibold uppercase tracking-wider">Calculated Action Plan</div>
                    <div className="text-base font-bold text-slate-900">{calcPersona}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    calcWeeks <= 2 
                      ? "bg-amber-100 text-amber-800 border border-amber-200" 
                      : "bg-teal-100 text-teal-800 border border-teal-200"
                  }`}>
                    {calcWeeks <= 2 ? "Fast-Track Protocol" : "Standard Timeline"}
                  </span>
                </div>

                {/* Milestones */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Recommended Schedule
                  </div>

                  <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                    <div className="relative">
                      <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-teal-600 ring-4 ring-white"></div>
                      <div className="text-xs font-bold text-teal-800">Day 0: Medical Consultation</div>
                      <div className="text-xs text-slate-600">
                        Video or in-person evaluation with Dr. Gaurav Gupta ({VIDEO_CONSULT_FEE}). Reviewing travel itinerary, medications, and ordering any necessary blood titers.
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-emerald-600 ring-4 ring-white"></div>
                      <div className="text-xs font-bold text-emerald-800">Day 3 – 5: Immunizations Administered</div>
                      <div className="text-xs text-slate-600">
                        Administer primary doses under strict cold-chain refrigeration. Co-scheduling safe combinations to minimize clinic visits.
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white"></div>
                      <div className="text-xs font-bold text-blue-800">
                        {calcWeeks <= 2 ? "Day 7 – 10: Final Clearances" : `Week ${Math.max(2, calcWeeks - 1)}: Documentation Completed`}
                      </div>
                      <div className="text-xs text-slate-600">
                        Official certification, university immunization sign-offs, customs letters, and emergency medical kit prescriptions finalized.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vaccines Checklist */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="text-xs font-bold text-slate-800">Recommended Focus Items</div>
                  <div className="flex flex-wrap gap-1.5">
                    {calcPersona.includes("Grandparent") ? (
                      <>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">Boostrix (Tdap Cocooning)</span>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">Shingrix (Shingles)</span>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">Prevnar 20 (Pneumonia)</span>
                        <span className="px-2 py-1 rounded bg-white text-slate-700 border border-slate-200 text-[11px]">Travel Fitness & Customs Letter</span>
                      </>
                    ) : calcPersona.includes("Student") ? (
                      <>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">MenACWY & MenB</span>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">QuantiFERON-TB Gold Plus</span>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">MMR & Varicella Titers</span>
                        <span className="px-2 py-1 rounded bg-white text-slate-700 border border-slate-200 text-[11px]">Doctor Stamped Forms</span>
                      </>
                    ) : calcPersona.includes("Safari") ? (
                      <>
                        <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-900 text-[11px] font-medium border border-yellow-300">Civil Hospital Mohali YF Card</span>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">Malarone Prophylaxis</span>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">Typhoid (TCV)</span>
                        <span className="px-2 py-1 rounded bg-white text-slate-700 border border-slate-200 text-[11px]">Rabies PrEP</span>
                      </>
                    ) : calcPersona.includes("Altitude") ? (
                      <>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">Diamox Acclimatization Kit</span>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">Pulse Oximetry Protocol</span>
                        <span className="px-2 py-1 rounded bg-white text-slate-700 border border-slate-200 text-[11px]">Tetanus Booster</span>
                      </>
                    ) : (
                      <>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">Shingrix (Shingles)</span>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">Prevnar 20 (Pneumonia)</span>
                        <span className="px-2 py-1 rounded bg-teal-100 text-teal-800 text-[11px] font-medium border border-teal-200">Tdap (Pertussis)</span>
                        <span className="px-2 py-1 rounded bg-white text-slate-700 border border-slate-200 text-[11px]">Gardasil 9 (HPV)</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-600 text-center sm:text-left">
                  Video Teleconsultation: <strong className="text-slate-900">{VIDEO_CONSULT_FEE}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => sendWhatsApp(`Hello Dr. Gaurav Gupta's team, I ran the Timeline Calculator for: ${calcPersona}, Time remaining: ${calcWeeks} weeks. I would like to book a consultation (${VIDEO_CONSULT_FEE}) to start this process.`)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Message on WhatsApp</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
