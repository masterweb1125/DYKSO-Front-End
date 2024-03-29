import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/main/index.jsx";
import Buy from "../pages/buy";
import Sell from "../pages/sell";
import List from "../pages/list";
import Capture from "../pages/capture";
import Auth from "../pages/auth";
import NoPage from "../pages/NoPage";

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
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}