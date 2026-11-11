import { useState } from "react";
import { MessageCircle, ShieldCheck, Clock } from "lucide-react";
import { CLINIC_WHATSAPP, CLINIC_PHONE, VIDEO_CONSULT_FEE } from "./Navbar";

export function BookingSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Grandparents / Senior Visiting Family Abroad");
  const [travelDate, setTravelDate] = useState("");

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello TravelSafe Clinic team, I would like to schedule a Video Consultation (${VIDEO_CONSULT_FEE}) with Dr. Gaurav Gupta.\n- Name: ${name || "Traveler"}\n- Phone: ${phone || "Provided on WhatsApp"}\n- Category: ${category}\n- Planned Travel Date / Deadline: ${travelDate || "Upcoming"}\n\nPlease share available consultation slots.`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="booking" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Direct Physician Scheduling</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Schedule Your Travel Health Consultation
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
              Book a dedicated Video Teleconsultation ({VIDEO_CONSULT_FEE}) or visit in-person at Charak Clinics, Phase 3B2, Mohali.
            </p>
          </div>

          <form onSubmit={handleWhatsAppBooking} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Gurpreet Singh / Priya Sharma"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">WhatsApp / Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98723 00000"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">Your Primary Need</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white transition-colors"
                >
                  <option>Grandparents / Senior Visiting Family Abroad (USA/Canada/UK)</option>
                  <option>Student University Immunization Forms & TB IGRA (USA/Canada/UK)</option>
                  <option>Holiday, Safari (Kenya/Tanzania) & Yellow Fever Guidance</option>
                  <option>Saudi Arabia Hajj & Umrah Meningococcal ACWY</option>
                  <option>High Altitude & Trekking Medicine (Ladakh / EBC Diamox)</option>
                  <option>Adult Vaccines (Shingrix Shingles / Prevnar 20 / Boostrix)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">Planned Departure Date / Form Deadline</label>
                <input 
                  type="date" 
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Reassuring 1-line Privacy & Medical Ethics Note */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-center gap-2.5 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>
                <strong>Confidential & Protected:</strong> Your medical details are handled in strict compliance with medical confidentiality ethics and the Digital Personal Data Protection (DPDP) Act.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Confirm & Message Staff on WhatsApp</span>
            </button>
          </form>

          {/* Quick Direct Contacts */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              <span>In-Clinic Hours: Mon – Sat (10:30 AM – 2:00 PM, 4:30 PM – 7:00 PM)</span>
            </div>
            <div>
              Reception: <a href={`tel:${CLINIC_PHONE}`} className="text-slate-800 font-bold hover:underline">{CLINIC_PHONE}</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
