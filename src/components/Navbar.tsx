import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Globe2, Phone, MessageCircle, MapPin, 
  Menu, X, ShieldAlert, GraduationCap, Mountain, BookOpen, User, Compass
} from "lucide-react";

export const CLINIC_WHATSAPP = "919653010203";
export const CLINIC_PHONE = "+918010777722";
export const CLINIC_EMAIL = "charakclinics@gmail.com";
export const VIDEO_CONSULT_FEE = "INR 1,000";
export const DOCTOR_REG_NO = "PMC 39465";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/university-immunization-form", label: "Students Abroad", icon: GraduationCap },
    { to: "/yellow-fever-card-punjab", label: "Yellow Fever Punjab", icon: ShieldAlert },
    { to: "/shingrix-adult-vaccines", label: "Adult Vaccines & Book", icon: BookOpen },
    { to: "/ladakh-ebc-altitude", label: "High Altitude", icon: Mountain },
    { to: "/hajj-umrah-vaccines", label: "Hajj & Umrah", icon: Compass },
    { to: "/about-dr-gupta", label: "About Dr. Gupta", icon: User },
  ];

  const sendWhatsApp = () => {
    const text = `Hello TravelSafe Clinic team, I would like to schedule a Video Consultation (${VIDEO_CONSULT_FEE}) with Dr. Gaurav Gupta. Please share available appointment slots.`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      {/* Top Clinical Credentials & Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-[11px] sm:text-xs text-slate-200">
              Dr. Gaurav Gupta, DCH, DNB, CTH® (ISTM) • Punjab Medical Council Reg: <strong className="text-emerald-400">{DOCTOR_REG_NO}</strong> • Video Consult: <strong className="text-white">{VIDEO_CONSULT_FEE}</strong>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-slate-300 text-xs">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-400" /> Charak Clinics, Phase 3B2, Mohali
            </span>
            <a href={`tel:${CLINIC_PHONE}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-teal-400" /> Reception: {CLINIC_PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Light Navigation */}
      <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur-md sticky top-8 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center shadow-md shadow-teal-700/10 group-hover:scale-105 transition-transform text-white">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-lg text-slate-900 tracking-tight flex items-center gap-1.5">
                TravelSafe <span className="text-teal-700 font-semibold text-xs px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200">CLINIC</span>
              </div>
              <div className="text-[11px] text-slate-500">Charak Clinics, Mohali • Travel & Adult Medicine</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-slate-600">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition-colors py-1 ${
                    active ? "text-teal-700 border-b-2 border-teal-600" : "hover:text-teal-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={sendWhatsApp}
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </button>
            
            <a 
              href="#booking"
              className="hidden sm:inline-flex px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition-colors"
            >
              Book Consult ({VIDEO_CONSULT_FEE})
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-lg">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 text-xs font-semibold"
                >
                  <Icon className="w-4 h-4 text-teal-600" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <div className="text-[11px] text-slate-500">
                Reception Desk: <a href={`tel:${CLINIC_PHONE}`} className="text-slate-900 font-semibold">{CLINIC_PHONE}</a>
              </div>
              <div className="text-[11px] text-slate-500">
                Staff WhatsApp: <a href={`https://wa.me/${CLINIC_WHATSAPP}`} className="text-emerald-700 font-semibold">+{CLINIC_WHATSAPP}</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
