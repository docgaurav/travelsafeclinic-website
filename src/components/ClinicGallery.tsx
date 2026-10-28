const PHOTOS = [
  {
    src: "/images/clinic/clinic-front.webp",
    alt: "Street frontage of Charak Clinic with the TravelSafe Clinic signboard",
    caption: "Clinic frontage with TravelSafe Clinic signage",
    className: "md:col-span-2",
  },
  {
    src: "/images/clinic/vaccine-fridge.webp",
    alt: "Ice-lined vaccine refrigerator with digital temperature display",
    caption: "Dedicated ice-lined vaccine refrigerator with a digital temperature display",
    className: "md:row-span-2",
  },
  {
    src: "/images/clinic/waiting-area.webp",
    alt: "Waiting area at Charak Clinics with glass wall listing services",
    caption: "Waiting area: child, eye and travel-vaccination services",
    className: "",
  },
  {
    src: "/images/clinic/play-corner.webp",
    alt: "Toys and soft toys in the children's play corner",
    caption: "A play corner to keep young patients at ease",
    className: "",
  },
  {
    src: "/images/clinic/credentials-wall.webp",
    alt: "Framed IMA, IAP, AAP and PGIMER vaccinology certificates on the clinic wall",
    caption: "Memberships and training: IMA, IAP, AAP, PGIMER vaccinology course",
    className: "md:col-span-2",
  },
];

export function ClinicGallery() {
  return (
    <section id="clinic" className="py-24 md:py-32 bg-[#070d18] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Inside the clinic</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See where your consultation happens
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real photographs of the clinic, from the vaccine storage to the waiting area and the certificates on our wall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {PHOTOS.map((p) => (
            <figure
              key={p.src}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 ${p.className}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-xs text-slate-100">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-900/80 p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">Find us</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Charak Clinics, SCF 30, Phase 3B2, Sector 60, SAS Nagar (Mohali), Punjab 160059
            </p>
            <p className="text-sm text-slate-300">
              <strong className="text-white">Monday to Saturday</strong><br />
              10:30 am to 2:00 pm and 4:30 pm to 7:00 pm
            </p>
            <a
              href="https://maps.app.goo.gl/F8z2APsEojAgYFCWA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
            >
              Get directions
            </a>
          </div>
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
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
