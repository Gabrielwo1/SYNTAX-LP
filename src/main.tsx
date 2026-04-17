import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import HospedagemBrasil from "./imports/HospedagemBrasil.tsx";
import InstagramArtCreator from "./app/InstagramArtCreator.tsx";
import PortfolioPage from "./app/PortfolioPage.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/hospedagem" element={<HospedagemBrasil />} />
      <Route path="/instagram" element={<InstagramArtCreator />} />
    </Routes>
  </BrowserRouter>
);
