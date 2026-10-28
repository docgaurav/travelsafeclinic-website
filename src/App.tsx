import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { UniversityFormsPage } from "./pages/UniversityFormsPage";
import { YellowFeverPage } from "./pages/YellowFeverPage";
import { AltitudeExpeditionPage } from "./pages/AltitudeExpeditionPage";
import { HajjUmrahPage } from "./pages/HajjUmrahPage";
import { AdultVaccinesPage } from "./pages/AdultVaccinesPage";
import { AboutDoctorPage } from "./pages/AboutDoctorPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { RouteSeo } from "./components/RouteSeo";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-32 text-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Page not found</h1>
      <p className="mt-4 text-slate-400">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="inline-block mt-8 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold">
        Back to home
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#070d18] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
        <ScrollToTop />
        <RouteSeo />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/university-immunization-form" element={<UniversityFormsPage />} />
            <Route path="/yellow-fever-card-punjab" element={<YellowFeverPage />} />
            <Route path="/ladakh-ebc-altitude" element={<AltitudeExpeditionPage />} />
            <Route path="/hajj-umrah-vaccines" element={<HajjUmrahPage />} />
            <Route path="/shingrix-adult-vaccines" element={<AdultVaccinesPage />} />
            <Route path="/about-dr-gupta" element={<AboutDoctorPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
