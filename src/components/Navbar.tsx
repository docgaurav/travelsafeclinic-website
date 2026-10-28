import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Globe2, Phone, MessageCircle, MapPin, Video, 
  Menu, X, ShieldAlert, GraduationCap, Mountain, BookOpen, User, Compass
} from "lucide-react";

export const CLINIC_WHATSAPP = "919653010203";
export const CLINIC_PHONE = "+918010777722";
export const CLINIC_EMAIL = "charakclinics@gmail.com";
export const VIDEO_CONSULT_FEE = "INR 1,000";
export const DOCTOR_REG_NO = "PMC 33261";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/university-immunization-form", label: "Student Forms", icon: GraduationCap },
    { to: "/yellow-fever-card-punjab", label: "Yellow Fever Punjab", icon: ShieldAlert },
    { to: "/ladakh-ebc-altitude", label: "Altitude & Treks", icon: Mountain },
    { to: "/hajj-umrah-vaccines", label: "Hajj & Umrah", icon: Compass },
    { to: "/shingrix-adult-vaccines", label: "Adult Vaccines", icon: BookOpen },
    { to: "/about-dr-gupta", label: "Dr. Gaurav Gupta", icon: User },
  ];

  const sendWhatsApp = () => {
    const text = `Hello TravelSafe Clinic team, I would like to schedule a Video Consultation (${VIDEO_CONSULT_FEE}) with Dr. Gaurav Gupta. Please share available appointment slots.`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      {/* Top Regulatory & Emergency Notice Bar */}
      <div className="bg-emerald-950/90 border-b border-emerald-500/20 text-emerald-300 text-xs py-2 px-4 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-[11px] sm:text-xs">
              Dr. Gaurav Gupta, DCH, DNB, CTH® (ISTM) • Punjab Medical Council Reg: {DOCTOR_REG_NO} • Video Consult: {VIDEO_CONSULT_FEE}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-slate-300 text-xs">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> Phase 3B2, Mohali</span>
            <a href={`tel:${CLINIC_PHONE}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> Reception: {CLINIC_PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation */}
      <header className="border-b border-white/5 bg-[#0a1222]/90 backdrop-blur-xl sticky top-8 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 ring-1 ring-white/20 group-hover:scale-105 transition-transform">
              <Globe2 className="w-5 h-5 text-slate-950 font-bold" />
            </div>
            <div>
              <div className="font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                TravelSafe <span className="text-emerald-400 font-medium text-xs px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">CLINIC</span>
              </div>
              <div className="text-[11px] text-slate-400">Charak Clinics, Mohali • ISTM Travel Medicine</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-slate-300">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition-colors py-1 ${
                    active ? "text-emerald-400 border-b border-emerald-400" : "hover:text-emerald-400"
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
              className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>WhatsApp</span>
            </button>
            
            <a 
              href="#booking"
              className="hidden sm:inline-flex px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-colors"
            >
              Book Consult ({VIDEO_CONSULT_FEE})
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-white/10 bg-[#0a1222] px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 text-xs font-medium"
                >
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <div className="text-[11px] text-slate-400">
                Reception Desk: <a href={`tel:${CLINIC_PHONE}`} className="text-white font-medium">{CLINIC_PHONE}</a>
              </div>
              <div className="text-[11px] text-slate-400">
                Staff WhatsApp: <a href={`https://wa.me/${CLINIC_WHATSAPP}`} className="text-emerald-400 font-medium">+{CLINIC_WHATSAPP}</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
