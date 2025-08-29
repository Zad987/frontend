import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import ArticleSection from "./components/ArticleSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FloatingWA from "./components/FloatingWA";
import Footer from "./components/Footer";
import ArtikelDetailPage from "./components/ArtikelDetailPage";

function Beranda() {
  // Home beranda: slider, artikel, about, contact
  return (
    <>
      <HeroSlider />
      <ArticleSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Beranda />}
        />
        <Route
          path="/artikel/:slug"
          element={<ArtikelDetailPage />}
        />
      </Routes>
      <FloatingWA />
      <Footer />
    </Router>
  );
}

export default App;
