import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#070d18] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
        <ScrollToTop />
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
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
