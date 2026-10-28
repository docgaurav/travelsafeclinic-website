import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { CLINIC_WHATSAPP, VIDEO_CONSULT_FEE } from "./Navbar";

export function BookingSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("University Immunization Form Clearance");
  const [travelDate, setTravelDate] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentGiven) {
      setErrorMsg("Please accept the data processing consent required under the DPDP Act 2023 to proceed.");
      return;
    }
    setErrorMsg("");

    const text = `Hello TravelSafe Clinic team, I would like to book a Video Consultation (${VIDEO_CONSULT_FEE}) with Dr. Gaurav Gupta.\n- Name: ${name || "Traveler"}\n- Phone: ${phone || "Provided on WhatsApp"}\n- Service Required: ${service}\n- Target Departure/Deadline: ${travelDate || "Upcoming"}\n\nI confirm that I have accepted the DPDP consent terms for appointment scheduling.`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="booking" className="theme-warm py-24 md:py-32 bg-[#070d18] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-gradient-to-br from-slate-900 to-[#0e192c] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DPDP Act 2025 Compliant Scheduling</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Schedule Your Travel Medicine Consultation
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Consult with Dr. Gaurav Gupta via Video Teleconsultation ({VIDEO_CONSULT_FEE}) or schedule an in-person clinical appointment at Charak Clinics, SCF 30, Phase 3B2, Mohali.
            </p>
          </div>

          <form onSubmit={handleWhatsAppBooking} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aarav Sharma"
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">WhatsApp / Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Clinical Service Required</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option>University Immunization Form Clearance</option>
                  <option>International Travel Vaccines & Risk Assessment</option>
                  <option>The Invisible Shield Adult Vaccine Consultation</option>
                  <option>High Altitude & Trekking Expedition Acclimatization</option>
                  <option>Yellow Fever Pre-Travel Triage & Waiver</option>
                  <option>Hajj & Umrah Meningococcal ACWY Certification</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Target Departure Date / Form Deadline</label>
                <input 
                  type="date" 
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* DPDP Consent Notice & Checkbox */}
            <div className="bg-slate-950/70 border border-white/10 rounded-xl p-4 space-y-2">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input 
                  type="checkbox"
                  checked={consentGiven}
                  onChange={(e) => {
                    setConsentGiven(e.target.checked);
                    if (e.target.checked) setErrorMsg("");
                  }}
                  className="mt-0.5 w-4 h-4 rounded border-white/20 bg-slate-900 text-emerald-500 focus:ring-emerald-400 focus:ring-offset-slate-950 cursor-pointer"
                />
                <span className="text-[11px] text-slate-300 leading-relaxed">
                  I consent to TravelSafe Clinic collecting and processing my contact details for the sole purpose of scheduling a clinical consultation, in accordance with India's <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> and the clinic's <Link to="/privacy-policy" className="text-emerald-400 underline hover:text-emerald-300">Privacy Policy</Link>. I understand consent may be withdrawn at any time.
                </span>
              </label>

              {errorMsg && (
                <div className="flex items-center gap-1.5 text-xs text-red-400 pt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <div className="text-xs text-slate-300 text-center sm:text-left">
                Standard Video Consultation: <strong className="text-emerald-400 font-bold">{VIDEO_CONSULT_FEE}</strong>
                <div className="text-[11px] text-slate-400">Scheduled over Google Meet / WhatsApp Video with Dr. Gaurav Gupta</div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>WhatsApp Staff to Book</span>
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
}
