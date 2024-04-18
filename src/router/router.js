import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/main/index.jsx";
import Buy from "../pages/buy/index.jsx";
import Sell from "../pages/sell/index.jsx";
import Auth from "../pages/auth";
import NoPage from "../pages/NoPage";
import ContactUs from "../pages/contact-us/index.jsx";
import PrivacyPolicy from "../pages/privacy-policy/inedx.jsx";
import ServiceName from "../pages/buy/service-name/index.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="buy" element={<Buy />} />
        <Route path="buy/:id" element={<ServiceName />} />
        <Route path="sell" element={<Sell />} />
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}