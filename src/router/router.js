import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/main/index.jsx";
import Buy from "../pages/buy/index.jsx";
import Sell from "../pages/sell";
import List from "../pages/list";
import Capture from "../pages/capture";
import Auth from "../pages/auth";
import NoPage from "../pages/NoPage";
import ContactUs from "../pages/contact-us/index.jsx";
import PrivacyPolicy from "../pages/privacy-policy/inedx.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="buy" element={<Buy />} />
        <Route path="sell" element={<Sell />} />
        <Route path="list" element={<List />} />
        <Route path="capture" element={<Capture />} />
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Auth />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}