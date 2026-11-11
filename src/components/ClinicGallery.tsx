import { MapPin } from "lucide-react";

const PHOTOS = [
  {
    src: "/images/clinic/clinic-front.webp",
    alt: "Street frontage of Charak Clinic with the TravelSafe Clinic signboard",
    caption: "Clinic frontage with TravelSafe Clinic signage in Phase 3B2, Mohali",
    className: "md:col-span-2",
  },
  {
    src: "/images/clinic/vaccine-fridge.webp",
    alt: "Ice-lined vaccine refrigerator with digital temperature display",
    caption: "Dedicated WHO-standard vaccine refrigerator with 50-hour power holdover",
    className: "md:row-span-2",
  },
  {
    src: "/images/clinic/waiting-area.webp",
    alt: "Waiting area at Charak Clinics with glass wall listing services",
    caption: "Clean, comfortable waiting area at Charak Clinics",
    className: "",
  },
  {
    src: "/images/clinic/play-corner.webp",
    alt: "Toys and soft toys in the children's play corner",
    caption: "Welcoming family environment for all ages",
    className: "",
  },
  {
    src: "/images/clinic/credentials-wall.webp",
    alt: "Framed IMA, IAP, AAP and PGIMER vaccinology certificates on the clinic wall",
    caption: "Physician credentials: ISTM CTH®, IAP, IMA, and PGIMER vaccinology",
    className: "md:col-span-2",
  },
];

export function ClinicGallery() {
  return (
    <section id="clinic" className="py-20 md:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">Inside the Clinic</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            See Where Your Care Happens
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Take a look inside Charak Clinics in Mohali—from our monitored cold-chain vaccine storage to our consultation rooms and credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {PHOTOS.map((p) => (
            <figure
              key={p.src}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 ${p.className}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/85 via-slate-950/50 to-transparent text-xs text-white">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-600" />
              <span>Location & Hours</span>
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Charak Clinics, SCF 30, Phase 3B2, Sector 60, SAS Nagar (Mohali), Punjab 160059
            </p>
            <div className="space-y-1 text-sm text-slate-700 pt-2 border-t border-slate-200">
              <p className="font-semibold text-slate-900">Clinic Timings:</p>
              <p>Monday to Saturday</p>
              <p className="text-xs text-slate-600">Morning: 10:30 AM – 2:00 PM</p>
              <p className="text-xs text-slate-600">Evening: 4:30 PM – 7:00 PM</p>
            </div>
            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/F8z2APsEojAgYFCWA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition-colors shadow-sm"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-slate-200 min-h-[300px] shadow-xs">
            <iframe
              title="Map showing Charak Clinics in Phase 3B2, Mohali"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13720.814733138055!2d76.70524665993644!3d30.712673833729596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee84c64d125b%3A0x2035a6bf130edb86!2sCharak%20Clinics%20(Best%20Child%20Doctor%20Eye%20Doctor%2C%20Adult%20Vaccination%20Center)!5e0!3m2!1sen!2sin!4v1793194346268!5m2!1sen!2sin"
              className="w-full h-full min-h-[300px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
