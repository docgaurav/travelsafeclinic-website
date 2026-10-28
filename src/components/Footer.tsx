import { Link } from "react-router-dom";
import { Globe2, ShieldCheck, MapPin, Phone, MessageCircle, Mail, ExternalLink } from "lucide-react";
import { CLINIC_PHONE, CLINIC_WHATSAPP, CLINIC_EMAIL, VIDEO_CONSULT_FEE, DOCTOR_REG_NO } from "./Navbar";

export function Footer() {
  return (
    <footer className="bg-[#050912] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Column 1: Medical Authority & NAP */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Globe2 className="w-5 h-5 text-emerald-400" />
            <span>TravelSafe Clinic</span>
          </div>

          <p className="text-slate-400 leading-relaxed text-xs">
            A specialist travel health, student immunization clearance, and adult vaccination practice led by <strong className="text-white">Dr. Gaurav Gupta</strong>, DCH, DNB (Pediatrics), CTH® (ISTM). Operating at Charak Clinics, Mohali.
          </p>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 space-y-1.5 text-[11px]">
            <div className="text-white font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Physician Regulatory Disclosure</span>
            </div>
            <div>Doctor: <strong className="text-slate-200">Dr. Gaurav Gupta, DCH, DNB</strong></div>
            <div>Council: <strong className="text-slate-200">Punjab Medical Council (PMC)</strong></div>
            <div>Registration No: <strong className="text-emerald-400">{DOCTOR_REG_NO}</strong></div>
            <div>Certifications: <strong className="text-slate-200">CTH® (ISTM), FIAP</strong></div>
          </div>
        </div>

        {/* Column 2: Clinical Intent Pages */}
        <div className="md:col-span-3 space-y-3">
          <div className="font-bold text-white text-xs uppercase tracking-wider">Clinical Services</div>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/university-immunization-form" className="hover:text-emerald-400 transition-colors">
                University Immunization Forms (USA/UK/Canada)
              </Link>
            </li>
            <li>
              <Link to="/yellow-fever-card-punjab" className="hover:text-emerald-400 transition-colors">
                Yellow Fever Card Punjab (Civil Hospital Mohali)
              </Link>
            </li>
            <li>
              <Link to="/ladakh-ebc-altitude" className="hover:text-emerald-400 transition-colors">
                High Altitude & Trekking Medicine (Diamox)
              </Link>
            </li>
            <li>
              <Link to="/hajj-umrah-vaccines" className="hover:text-emerald-400 transition-colors">
                Hajj & Umrah Meningococcal ACWY Vaccines
              </Link>
            </li>
            <li>
              <Link to="/shingrix-adult-vaccines" className="hover:text-emerald-400 transition-colors">
                Adult Vaccines & The Invisible Shield Book
              </Link>
            </li>
            <li>
              <Link to="/about-dr-gupta" className="hover:text-emerald-400 transition-colors">
                About Dr. Gaurav Gupta, DCH, DNB, CTH®
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Facility Details */}
        <div className="md:col-span-3 space-y-3">
          <div className="font-bold text-white text-xs uppercase tracking-wider">Clinic & Scheduling</div>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Charak Clinics, SCF 30, Phase 3B2, Sector 60, SAS Nagar (Mohali), Punjab 160059</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Reception Desk: <strong className="text-white">{CLINIC_PHONE}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Staff WhatsApp: <strong className="text-emerald-400">+{CLINIC_WHATSAPP}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Inquiries: <strong className="text-slate-300">{CLINIC_EMAIL}</strong></span>
            </div>
            <div className="pt-1 text-[11px] text-slate-400">
              Standard Video Teleconsultation: <strong className="text-emerald-400">{VIDEO_CONSULT_FEE}</strong>
            </div>
          </div>
        </div>

        {/* Column 4: Primary Evidence & Regulatory */}
        <div className="md:col-span-2 space-y-3">
          <div className="font-bold text-white text-xs uppercase tracking-wider">Primary Sources</div>
          <ul className="space-y-1.5 text-[11px] text-slate-400">
            <li>• WHO International Travel & Health</li>
            <li>• CDC Yellow Book (2026 Edition)</li>
            <li>• MoHFW Govt of India IHPOE</li>
            <li>• ACHA University Guidelines</li>
            <li>• Wilderness Medical Society (WMS)</li>
            <li>• ACVIP / IAP Adult Immunization</li>
          </ul>

          <div className="pt-2">
            <Link 
              to="/privacy-policy" 
              className="text-[11px] text-emerald-400 hover:text-emerald-300 underline"
            >
              DPDP Act 2025 Privacy Policy & Consent Notice
            </Link>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 mt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
        <div>
          © {new Date().getFullYear()} TravelSafe Clinic. All rights reserved. Registered under Punjab Medical Council Reg. No. {DOCTOR_REG_NO}.
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <Link to="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link>
          <span>•</span>
          <a href="https://ihpoe.mohfw.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 flex items-center gap-1">
            <span>MoHFW Yellow Fever Portal</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
