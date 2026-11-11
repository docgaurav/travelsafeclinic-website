import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, Clock, ArrowRight, MessageCircle, 
  Award, BookOpen, ChevronDown, ChevronUp, Sliders,
  CheckCircle2, GraduationCap, HeartHandshake, Compass, ShieldAlert
} from "lucide-react";
import { Calculator } from "../components/Calculator";
import { ClinicGallery } from "../components/ClinicGallery";
import { BookingSection } from "../components/BookingSection";
import { CLINIC_WHATSAPP, VIDEO_CONSULT_FEE, DOCTOR_REG_NO } from "../components/Navbar";

export function HomePage() {
  const [adultMatrixTab, setAdultMatrixTab] = useState<"shingrix" | "pcv20" | "tdap" | "gardasil">("shingrix");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const sendWhatsApp = (customMsg?: string) => {
    const text = customMsg || `Hello TravelSafe Clinic team, I would like to book a Video Consultation (${VIDEO_CONSULT_FEE}) with Dr. Gaurav Gupta. Please share available appointment slots.`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="space-y-0 overflow-x-hidden">
      
      {/* 1. Warm, Reassuring Clinical Hero */}
      <section className="bg-gradient-to-b from-teal-50/60 via-white to-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold shadow-xs">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>ISTM Certified Travel Medicine • Punjab Medical Council: {DOCTOR_REG_NO}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Travel Health & Adult Vaccines.{" "}
                <span className="text-teal-700">Clear, Caring & Evidence-Based.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Dedicated pre-travel guidance, university immunization clearances, and adult preventive vaccines led by{" "}
                <strong className="text-slate-900 font-semibold">Dr. Gaurav Gupta, DCH, DNB, CTH®</strong> at Charak Clinics, Mohali.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#booking"
                  className="px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-teal-600/20 transition-all flex items-center gap-2"
                >
                  <span>Book Consultation ({VIDEO_CONSULT_FEE})</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => sendWhatsApp()}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Message Staff on WhatsApp</span>
                </button>
              </div>

              {/* Clean Clinical Trust Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xl font-extrabold text-slate-900">30+ Yrs</div>
                  <div className="text-[11px] text-slate-500 font-medium">Clinical Experience</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xl font-extrabold text-teal-700">50 hrs</div>
                  <div className="text-[11px] text-slate-500 font-medium">Cold-chain power holdover</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xl font-extrabold text-slate-900">{VIDEO_CONSULT_FEE}</div>
                  <div className="text-[11px] text-slate-500 font-medium">Video Teleconsultation</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xl font-extrabold text-emerald-700">CTH®</div>
                  <div className="text-[11px] text-slate-500 font-medium">ISTM Travel Specialist</div>
                </div>
              </div>
            </div>

            {/* Physician Spotlight Card */}
            <div className="lg:col-span-5">
              <div className="mx-auto max-w-md rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img 
                    src="/images/clinic/clinic-front.webp" 
                    alt="Charak Clinics & TravelSafe Clinic in Phase 3B2, Mohali" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-teal-800 font-bold text-xs shadow-sm border border-teal-100">
                    Charak Clinics • Mohali
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3.5">
                    <img 
                      src="/images/dr-gaurav-gupta.jpg" 
                      alt="Dr. Gaurav Gupta, DCH, DNB, CTH®" 
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-teal-500/30 shadow-xs"
                    />
                    <div>
                      <div className="font-bold text-slate-900 text-base">Dr. Gaurav Gupta, DCH, DNB</div>
                      <div className="text-xs text-teal-700 font-semibold">ISTM Certified Travel Health Specialist</div>
                      <div className="text-[11px] text-slate-500">Reg: {DOCTOR_REG_NO}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-teal-500 pl-3">
                    "Whether you are a grandparent flying to meet a new grandchild, a student preparing university forms, or traveling for a holiday, we make travel protection simple and safe."
                  </p>

                  <div className="pt-3 flex items-center justify-between text-xs border-t border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      Mon – Sat • 10:30–2, 4:30–7
                    </span>
                    <Link 
                      to="/about-dr-gupta"
                      className="text-teal-700 hover:text-teal-800 font-bold flex items-center gap-1"
                    >
                      <span>Doctor Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Who We Help: 3 Clear Patient Personas */}
      <section className="py-20 md:py-28 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
            <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">Tailored Clinical Care</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Who Visits TravelSafe Clinic?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We focus on three distinct types of travelers and their families, keeping guidance clear and practical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Persona 1: Grandparents & Seniors */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                <img 
                  src="/images/partner-travel-india.jpg" 
                  alt="Senior couple traveling abroad to visit family" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-slate-800 text-[11px] font-bold shadow-xs flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
                  <span>USA • Canada • UK • Australia</span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    Grandparents Visiting Family Abroad
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Flying overseas to visit children or welcome a newborn grandchild? Protect yourself and your family before a long flight.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span><strong>Tdap (Boostrix)</strong> cocooning shot before holding newborns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span><strong>Shingrix & Prevnar 20</strong> for shingles & pneumonia defense</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Airport customs medical letters for heart/diabetes prescriptions</span>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => sendWhatsApp("Hello TravelSafe Clinic, I am a grandparent/senior planning travel abroad to visit family and would like to book a pre-travel consultation.")}
                  className="w-full py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs border border-teal-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Senior Travel Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Persona 2: Students Going Abroad */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                <img 
                  src="/images/student-abroad-departure.jpg" 
                  alt="University student preparing immunization forms" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-slate-800 text-[11px] font-bold shadow-xs flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                  <span>University Clearances</span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    Students Going to Foreign Universities
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Avoid registration holds or expensive vaccines abroad. We decode, test, vaccinate, and sign your university health forms in Mohali.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span><strong>QuantiFERON-TB Gold (IGRA)</strong> blood test (avoids BCG false positives)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span><strong>MMR & Varicella titers</strong> plus Meningitis ACWY & MenB</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>Official physician audit, seal, and license stamp</span>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/university-immunization-form"
                  className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Student Immunization Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Persona 3: Holidays, Safaris, Pilgrimage & Business */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                <img 
                  src="/images/himalayan-trekker.jpg" 
                  alt="Traveler hiking in high altitude mountains" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-slate-800 text-[11px] font-bold shadow-xs flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-teal-600" />
                  <span>Vacations, Treks & Pilgrimage</span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    Leisure, Conferences, Safaris & Pilgrimage
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Targeted vaccines and travel medical kits whether you are heading to Southeast Asia, Kenya, Saudi Arabia, or Ladakh.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span><strong>Safaris & Asia:</strong> Typhoid, Hep A, Rabies, & Malaria pills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span><strong>Hajj & Umrah:</strong> Certified Meningococcal ACWY visa card</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span><strong>High Altitude:</strong> Prescribed Diamox & oximetry protocols</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="#calculator"
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Check Destination Timeline</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Adult Vaccines & "The Invisible Shield" Book */}
      <section id="invisible-shield" className="py-20 md:py-28 bg-[#faf6ee] border-t border-amber-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              <span>Adult Immunization Focus</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Invisible Shield: Modern Vaccines for Adults
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Childhood immunity fades over the years. Dr. Gaurav Gupta’s book explains how modern adult vaccines protect you from shingles, severe pneumonia, whooping cough, and preventable cancers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-md">
            
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="max-w-[240px] rounded-xl overflow-hidden shadow-xl border border-slate-200">
                <img 
                  src="/images/invisible-shield-cover.jpg" 
                  alt="The Invisible Shield: An Adult's Guide to Vaccines by Dr. Gaurav Gupta"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">The Invisible Shield</h4>
                <p className="text-xs text-amber-700 font-semibold">An Adult’s Guide to Vaccines • By Dr. Gaurav Gupta</p>
              </div>

              <div className="pt-1">
                <Link
                  to="/shingrix-adult-vaccines"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-colors inline-flex items-center gap-2 shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Adult Vaccine Guide</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "shingrix", label: "Shingrix (Shingles)", sub: "Age 50+ & Diabetes" },
                  { id: "pcv20", label: "Prevnar 20 (Lung)", sub: "1 Single Dose" },
                  { id: "tdap", label: "Boostrix (Tdap)", sub: "Grandparent Shield" },
                  { id: "gardasil", label: "Gardasil 9 (HPV)", sub: "Cancer Prevention" }
                ].map((item) => {
                  const active = adultMatrixTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAdultMatrixTab(item.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        active 
                          ? "bg-amber-50 border-amber-500 text-slate-900 shadow-xs ring-1 ring-amber-500" 
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight text-slate-900">{item.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{item.sub}</div>
                    </button>
                  );
                })}
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                {adultMatrixTab === "shingrix" && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                      <div className="font-bold text-slate-900 text-base">Shingrix (Recombinant Zoster Vaccine)</div>
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">97%+ Efficacy</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      1 in 3 adults develop Shingles in their lifetime. Shingrix offers over 97% protection against shingles and long-lasting postherpetic nerve pain. Recommended as a 2-dose series for adults 50+ or immunocompromised adults.
                    </p>
                  </div>
                )}

                {adultMatrixTab === "pcv20" && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                      <div className="font-bold text-slate-900 text-base">Prevnar 20 (Pneumococcal 20-Valent Conjugate)</div>
                      <span className="text-xs bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded-full font-bold">1 Single Dose</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Protects against 20 strains of severe pneumococcal pneumonia and bloodstream infections. Especially vital for seniors, travelers, people with diabetes, asthma, or heart disease.
                    </p>
                  </div>
                )}

                {adultMatrixTab === "tdap" && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                      <div className="font-bold text-slate-900 text-base">Boostrix (Tdap: Tetanus, Diphtheria, Pertussis)</div>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-bold">Every 10 Years</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Adult whooping cough immunity wears off every decade. Taking a Tdap booster forms a protective "cocoon" around newborn grandchildren who are too young to be fully vaccinated.
                    </p>
                  </div>
                )}

                {adultMatrixTab === "gardasil" && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                      <div className="font-bold text-slate-900 text-base">Gardasil 9 (9-Valent HPV Vaccine)</div>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full font-bold">Cancer Shield</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Protects both women and men up to age 45 against 9 high-risk HPV strains responsible for cervical, throat, and other preventable cancers.
                    </p>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs text-slate-600">Video Consultation: <strong className="text-slate-900">{VIDEO_CONSULT_FEE}</strong></span>
                  <Link
                    to="/shingrix-adult-vaccines"
                    className="text-xs text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1"
                  >
                    <span>Explore All Adult Vaccines</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Interactive Departure Calculator */}
      <Calculator />

      {/* 5. Official Yellow Fever Protocol (Simple & Helpful) */}
      <section id="yellow-fever" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-300 text-yellow-900 text-xs font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-yellow-700" />
              <span>Honest Punjab Travel Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Need a Yellow Fever Card in Punjab?
            </h2>
            <p className="text-slate-600 text-sm">
              Save time by knowing where official Yellow Cards are issued—and what complementary care we provide right here in Phase 3B2, Mohali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-900 text-xs font-bold">
                  Official Government Center
                </span>
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Civil Hospital, Phase 6, Mohali</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Under Government of India rules, the official Yellow Fever International Certificate (ICVP) can only be issued by designated government centers (Civil Hospital Phase 6, Mohali & AIIMS Bathinda). Carry your original passport on Tuesdays and Thursdays (10:00 AM – 1:00 PM).
              </p>
              <div className="pt-2">
                <Link
                  to="/yellow-fever-card-punjab"
                  className="text-xs text-teal-700 hover:text-teal-800 font-bold inline-flex items-center gap-1"
                >
                  <span>Read Punjab Yellow Fever Checklist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
                  How TravelSafe Clinic Helps You
                </span>
                <ShieldCheck className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Complete Africa & Tropical Travel Prep</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yellow Fever is only one piece of safe safari travel. At TravelSafe Clinic, we provide official contraindication waiver certificates (for ages 60+), administer Typhoid, Hepatitis A, Polio, and Rabies vaccines, and prescribe Malarone malaria prophylaxis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Real Clinic Photos & Map */}
      <ClinicGallery />

      {/* 7. Simple Scheduling Card */}
      <BookingSection />

      {/* 8. Plain-Language FAQs */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2 mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Common Questions</h3>
            <p className="text-xs sm:text-sm text-slate-500">Clear answers for families, students, and international travelers.</p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Why do US and Canadian universities reject the Mantoux skin test?",
                a: "Because routine infant BCG vaccination in India frequently causes false-positive skin reactions on a Mantoux test. North American universities require a QuantiFERON-TB Gold (IGRA) blood test, which accurately screens for tuberculosis without interference from past BCG shots."
              },
              {
                q: "My parents are visiting our newborn in the USA/Canada. What vaccines do they need?",
                a: "Obstetricians and pediatricians in the US, Canada, and UK strongly recommend that grandparents get a Tdap (Boostrix) booster at least 2 weeks before holding a newborn to prevent whooping cough transmission, alongside a current seasonal flu shot and age-appropriate Shingrix or Prevnar 20 vaccines."
              },
              {
                q: "Can multiple travel vaccines be taken in a single clinic visit?",
                a: "Yes. Per WHO and CDC guidelines, most inactivated vaccines (like Hepatitis A, Typhoid, Tdap, and Meningitis ACWY) can be given safely during the same visit in separate arms/sites, saving you extra clinic trips."
              },
              {
                q: "How does the INR 1,000 Video Teleconsultation work?",
                a: "Simply share your university forms or travel dates with our staff on WhatsApp. We schedule a dedicated video call with Dr. Gaurav Gupta, who audits your records, orders any needed blood tests locally, and designs your complete vaccination plan."
              }
            ].map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 hover:text-teal-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-teal-600 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
