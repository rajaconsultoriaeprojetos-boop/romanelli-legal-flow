import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import CookieConsentBanner from "@/components/legal/CookieConsentBanner";
import PageNotFound from "./lib/PageNotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <CookieConsentBanner />
    </Router>
  );
}

export default App;
