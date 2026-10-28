import { Link } from "react-router-dom";
import { ShieldCheck, Mail, MapPin, Lock, FileText, CheckCircle2 } from "lucide-react";
import { CLINIC_EMAIL, CLINIC_PHONE, DOCTOR_REG_NO } from "../components/Navbar";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#0a1222] border-b border-white/5 py-3 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-emerald-400">Home</Link>
          <span>/</span>
          <span className="text-emerald-400 font-medium">Privacy Policy & DPDP Notice</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Digital Personal Data Protection (DPDP) Act, 2023 Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy & Personal Data Notice
          </h1>

          <div className="text-xs text-slate-400">
            <strong>Last Updated:</strong> October 2026 • TravelSafe Clinic (Operating at Charak Clinics, Mohali)
          </div>
        </div>

        <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 text-xs text-slate-300 leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">1. Introduction & Scope</h2>
            <p>
              TravelSafe Clinic, directed by Dr. Gaurav Gupta, MD (Punjab Medical Council Reg. No. {DOCTOR_REG_NO}), is committed to protecting your personal data in accordance with the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> and the <strong>DPDP Rules, 2025</strong>. This notice explains how we collect, process, and safeguard your data when you request appointments, utilize teleconsultation services, or communicate with our clinical staff.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">2. What Data We Collect & Why (Minimal Data Collection)</h2>
            <p>
              We practice strict data minimization. On our website, we do not require or collect comprehensive electronic health records or banking credentials. We collect only:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Contact Information:</strong> Your name and telephone/WhatsApp number to facilitate appointment scheduling.</li>
              <li><strong>Scheduling Details:</strong> Preferred clinical service (e.g., University Form, Yellow Fever, Adult Vaccines) and tentative travel departure date.</li>
            </ul>
            <p className="pt-1">
              <em>Purpose:</em> This information is utilized exclusively for communicating consultation timings, confirming video appointments, and answering direct patient inquiries.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">3. Lawful Basis: Explicit Consent</h2>
            <p>
              When you submit a consultation inquiry or click to coordinate via WhatsApp, you provide explicit, affirmative consent for TravelSafe Clinic to process your contact details for appointment facilitation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">4. Rights of Data Principals Under DPDP Act 2023</h2>
            <p>As a Data Principal under Indian law, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>Right of Access:</strong> Request a summary of personal data held about you.</li>
              <li><strong>Right to Correction & Erasure:</strong> Request immediate updating or permanent deletion of your contact records once scheduling is completed.</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time with equal ease to providing it.</li>
              <li><strong>Right to Grievance Redressal:</strong> Direct questions or concerns to our designated Data Protection Grievance Officer.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">5. Third-Party Sharing & WhatsApp Disclaimer</h2>
            <p>
              We never sell, rent, or trade your personal information to third-party marketers or pharmaceutical vendors. When you choose to communicate via WhatsApp, communications are subject to WhatsApp LLC’s end-to-end encryption and terms of service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">6. Data Protection Grievance Officer</h2>
            <p>
              In compliance with Rule 8 of the DPDP Rules, 2025, any data query, deletion request, or grievance may be submitted directly to our Data Protection Grievance Officer:
            </p>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-1.5 text-xs text-slate-300 mt-2">
              <div><strong>Designated Officer:</strong> Clinical Administration, Charak Clinics</div>
              <div><strong>Email:</strong> <a href={`mailto:${CLINIC_EMAIL}`} className="text-emerald-400 underline">{CLINIC_EMAIL}</a></div>
              <div><strong>Telephone:</strong> {CLINIC_PHONE}</div>
              <div><strong>Physical Address:</strong> Charak Clinics, SCO 5, Sector 69, SAS Nagar (Mohali), Punjab 160062, India</div>
              <div><strong>Standard Redressal Response Time:</strong> Within 72 business hours.</div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
