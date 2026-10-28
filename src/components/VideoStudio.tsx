import { useState, useEffect } from "react";
import { 
  Video, Clock, Play, Pause, Volume2, VolumeX, Maximize2, 
  X, CheckCircle2, MessageCircle 
} from "lucide-react";
import { CLINIC_WHATSAPP, VIDEO_CONSULT_FEE } from "./Navbar";

export interface VideoEpisode {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  seconds: number;
  poster: string;
  badge: string;
  tagline: string;
  chapters: { time: string; title: string; sec: number }[];
  takeaways: string[];
  ctaMessage: string;
}

export const VIDEO_EPISODES: VideoEpisode[] = [
  {
    id: "univ-clearance",
    title: "The 48-Hour University Immunization Clearance Protocol",
    subtitle: "Decoding AAMC, Stanford, Columbia & Oxford health requirements without delays",
    duration: "02:45",
    seconds: 165,
    poster: "/images/video-university-clearance.jpg",
    badge: "Student Essential",
    tagline: "Rigorous form audit aligned with AAMC & ACHA standards.",
    chapters: [
      { time: "00:00", title: "Why US/UK Health Forms Get Rejected", sec: 0 },
      { time: "00:45", title: "TB IGRA Blood Test vs False-Positive BCG Mantoux", sec: 45 },
      { time: "01:25", title: "Fast-Tracking Antibody Titers (MMR, Varicella, Hep B)", sec: 85 },
      { time: "02:10", title: "Official Physician Signature & Institutional Stamp", sec: 130 }
    ],
    takeaways: [
      "Childhood BCG vaccination frequently causes false-positive Mantoux skin tests; US universities mandate IGRA (QuantiFERON-TB Gold Plus) blood tests.",
      "Missing documentation or late vaccine doses can block university dorm move-in and class registration.",
      "Dr. Gaurav Gupta audits every form personally, cross-references antibody titers, and signs official medical clearances."
    ],
    ctaMessage: "Hello TravelSafe Clinic, I have university immunization clearance forms that require Dr. Gaurav Gupta's review, IGRA/titer testing, and official physician signature. Please guide me with an appointment."
  },
  {
    id: "cold-chain",
    title: "Cold-Chain Integrity: Inside the 4.2°C Biologics Vault",
    subtitle: "Why WHO-grade continuous digital temperature logging guarantees vaccine potency",
    duration: "03:15",
    seconds: 195,
    poster: "/images/video-cold-chain-integrity.jpg",
    badge: "Clinical Standard",
    tagline: "A compromised cold chain renders sensitive travel biologics completely ineffective.",
    chapters: [
      { time: "00:00", title: "The Hidden Danger of Spoiled Vaccines", sec: 0 },
      { time: "00:50", title: "The 2°C to 8°C Biologics Window Explained", sec: 50 },
      { time: "01:40", title: "Continuous Digital Data Loggers & Cloud Alerting", sec: 100 },
      { time: "02:35", title: "Why Retail Pharmacy Counter Storage Often Fails", sec: 155 }
    ],
    takeaways: [
      "Rabies, Yellow Fever, Shingrix, and Gardasil 9 are delicate proteins that lose immunogenic potency if exposed to temperature excursions.",
      "Standard pharmacy domestic refrigerators suffer frequent thermal cycling and freeze-thaw damage.",
      "TravelSafe Clinic operates calibrated medical cold-storage chambers with unbroken continuous monitoring."
    ],
    ctaMessage: "Hello TravelSafe Clinic, I want to inquire about verified cold-chain vaccine availability for my upcoming travel."
  },
  {
    id: "altitude-expedition",
    title: "High Altitude & Remote Expedition Medicine",
    subtitle: "Ladakh, Everest Base Camp & Kilimanjaro acclimatization protocol",
    duration: "02:50",
    seconds: 170,
    poster: "/images/video-high-altitude-medicine.jpg",
    badge: "Expedition Advisory",
    tagline: "Prevent Acute Mountain Sickness (AMS), HAPE, and GI distress before departure.",
    chapters: [
      { time: "00:00", title: "AMS vs HAPE vs HACE: Recognizing Red Flags", sec: 0 },
      { time: "00:40", title: "Acetazolamide (Diamox) Prophylactic Dosing Protocol", sec: 40 },
      { time: "01:30", title: "Emergency Oximetry & Dexamethasone Rescue Guidelines", sec: 90 },
      { time: "02:15", title: "Remote Travel Water Safety & Diarrhea Starter Packs", sec: 135 }
    ],
    takeaways: [
      "Acetazolamide (Diamox) must be started 24 hours prior to crossing 2,800m elevation—never when severe hypoxia has already set in.",
      "Strict ascent profile: maximum 500m sleeping altitude gain per 24 hours once above 3,000m.",
      "Carry personalized physician-prescribed expedition emergency packs tailored to your trek itinerary."
    ],
    ctaMessage: "Hello TravelSafe Clinic, I am planning a high-altitude expedition (Ladakh/EBC/Kilimanjaro) and need Dr. Gaurav Gupta's medical acclimatization consultation and prescription kit."
  },
  {
    id: "invisible-shield",
    title: "The Invisible Shield: Why Healthy Adults Need Vaccines",
    subtitle: "Dr. Gaurav Gupta's clinical blueprint for adult immunization (Ages 19 to 65+)",
    duration: "03:30",
    seconds: 210,
    poster: "/images/video-invisible-shield-adults.jpg",
    badge: "Author's Masterclass",
    tagline: "Childhood immunity wanes. Modern adult vaccines prevent devastating disease.",
    chapters: [
      { time: "00:00", title: "The Myth of Lifetime Immunity", sec: 0 },
      { time: "00:55", title: "Shingrix: 97% Defense Against Debilitating Nerve Pain", sec: 55 },
      { time: "01:50", title: "Prevnar 20: Lifelong Conjugate Lung Protection", sec: 110 },
      { time: "02:40", title: "Tdap Cocooning: Protecting Newborns & Elders", sec: 160 }
    ],
    takeaways: [
      "1 in 3 adults will develop Shingles in their lifetime. Shingrix offers over 97% protection against unbearable postherpetic neuralgia.",
      "Invasive pneumococcal pneumonia is preventable in adults with a single conjugate dose of PCV20.",
      "Adult whooping cough often masquerades as a stubborn chronic cough and is easily transmitted to unprotected infants."
    ],
    ctaMessage: "Hello TravelSafe Clinic, I am interested in an Adult Vaccine Assessment with Dr. Gaurav Gupta based on 'The Invisible Shield' recommendations."
  }
];

export function VideoStudio() {
  const [activeVideo, setActiveVideo] = useState<VideoEpisode>(VIDEO_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [isTheatreOpen, setIsTheatreOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // Playback timer simulation
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, activeVideo.seconds * 10);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeVideo]);

  const sendWhatsApp = (msg: string) => {
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="video-studio" className="py-20 bg-[#09111e] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
            <Video className="w-3.5 h-3.5 text-teal-400" />
            <span>Interactive Clinical Cinema • 2026 Digital Flagship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clinical Video Briefings by Dr. Gaurav Gupta
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Focused, high-impact video briefings explaining complex medical protocols, cold-chain standards, altitude strategies, and adult immunization.
          </p>
        </div>

        {/* Player Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Screen */}
          <div className="lg:col-span-8 bg-slate-900 rounded-2xl border border-white/15 overflow-hidden shadow-2xl relative">
            <div className="relative aspect-video bg-black overflow-hidden group">
              <img 
                src={activeVideo.poster} 
                alt={activeVideo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Top Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-slate-950 font-bold text-xs backdrop-blur-md">
                  {activeVideo.badge}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/60 text-slate-300 text-xs border border-white/10 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  {activeVideo.duration}
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/90 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all ring-4 ring-white/20"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 ml-1" />
                  )}
                </button>
              </div>

              {/* Bottom Scrubber */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 to-transparent space-y-2">
                <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden cursor-pointer">
                  <div 
                    className="bg-emerald-400 h-full transition-all duration-300"
                    style={{ width: `${isPlaying ? videoProgress : 35}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                  <div className="flex items-center gap-3">
                    <button 
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="hover:text-emerald-400 transition-colors font-medium flex items-center gap-1"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{isPlaying ? "Playing" : "Preview"}</span>
                    </button>

                    <button 
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>

                    <span className="text-slate-400 text-[11px]">
                      {isPlaying ? `${Math.floor((videoProgress / 100) * activeVideo.seconds)}s / ${activeVideo.duration}` : `00:45 / ${activeVideo.duration}`}
                    </span>
                  </div>

                  <button 
                    type="button"
                    onClick={() => setIsTheatreOpen(true)}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 text-xs"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Theatre & Notes</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Video Details */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {activeVideo.title}
                </h3>
                <p className="text-slate-300 text-sm mt-1">
                  {activeVideo.subtitle}
                </p>
              </div>

              {/* Chapters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {activeVideo.chapters.map((chap, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setVideoProgress(Math.floor((chap.sec / activeVideo.seconds) * 100));
                      setIsPlaying(true);
                    }}
                    className="text-left p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-all text-xs"
                  >
                    <div className="text-emerald-400 font-mono text-[10px]">{chap.time}</div>
                    <div className="text-slate-200 truncate font-medium text-[11px]">{chap.title}</div>
                  </button>
                ))}
              </div>

              {/* Takeaways */}
              <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-4 space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Key Clinical Highlights
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeVideo.takeaways.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10">
                <div className="text-xs text-slate-400">
                  Standard Teleconsultation Fee: <strong className="text-white">{VIDEO_CONSULT_FEE}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => sendWhatsApp(activeVideo.ctaMessage)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                  <span>WhatsApp Staff</span>
                </button>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
              Select Briefing ({VIDEO_EPISODES.length})
            </div>

            {VIDEO_EPISODES.map((ep) => {
              const isCurrent = ep.id === activeVideo.id;
              return (
                <div
                  key={ep.id}
                  onClick={() => {
                    setActiveVideo(ep);
                    setVideoProgress(0);
                    setIsPlaying(false);
                  }}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex gap-3.5 items-center ${
                    isCurrent 
                      ? "bg-emerald-500/10 border-emerald-500/40 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30" 
                      : "bg-slate-900/60 border-white/5 hover:bg-slate-800/80 hover:border-white/15"
                  }`}
                >
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-black">
                    <img 
                      src={ep.poster} 
                      alt={ep.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isCurrent ? "bg-emerald-400 text-slate-950" : "bg-white/80 text-slate-950"}`}>
                        <Play className="w-3 h-3 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-1 right-1 text-[9px] bg-black/80 px-1 rounded text-white font-mono">
                      {ep.duration}
                    </span>
                  </div>

                  <div className="overflow-hidden space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${isCurrent ? "bg-emerald-400 text-slate-950" : "bg-white/10 text-slate-300"}`}>
                        {ep.badge}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-white leading-tight truncate">
                      {ep.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      {ep.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Fullscreen Theatre Modal */}
      {isTheatreOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-white/20 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative">
            <button
              type="button"
              onClick={() => setIsTheatreOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-video bg-black">
              <img 
                src={activeVideo.poster} 
                alt={activeVideo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold text-xs">
                    {activeVideo.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{activeVideo.title}</h3>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Physician Clinical Briefing</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeVideo.subtitle}. Led by Dr. Gaurav Gupta, MD (Pediatrics), CTH® (International Society of Travel Medicine).
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="text-xs font-bold text-white">Clinical Highlights:</div>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  {activeVideo.takeaways.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400">Teleconsultation: <strong className="text-white">{VIDEO_CONSULT_FEE}</strong></span>
                <button
                  type="button"
                  onClick={() => {
                    setIsTheatreOpen(false);
                    sendWhatsApp(activeVideo.ctaMessage);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                  <span>WhatsApp Staff</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
