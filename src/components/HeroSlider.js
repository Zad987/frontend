import React, { useState, useEffect, useRef, useCallback } from "react";
import "../styles/HeroSlider.css";

const images = [
  { src: "/gerbang.webp" },
  { src: "/asrama.webp" },
  { src: "/musaid.webp" },
  { src: "/ndalem.webp" }
];


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const length = images.length;

const nextSlide = useCallback(() => {
    setCurrent(prev => (prev + 1) % length);
  }, [setCurrent, length]);

const prevSlide = useCallback(() => {
   setCurrent(prev => (prev === 0 ? length - 1 : prev - 1));
  }, [setCurrent, length]);

 useEffect(() => {
  timeoutRef.current = setTimeout(nextSlide, 5000);
  return () => clearTimeout(timeoutRef.current);
}, [current, nextSlide]);

  return (
    <section className="hero">
      <div className="hero-slides">
        {images.map((img, i) => (
          <div
            key={i}
            className={`hero-slide${i === current ? " show" : ""}`}
            style={{ backgroundImage: `url(${img.src})` }}
          />
        ))}
      </div>
      <div className="hero-inner">
        <div className="hero-stack">
          <div className="hero-logo-container">
            <img src="/PPMHA.webp" alt="Logo PPMHA" className="hero-logo" />
          </div>
          <div className="hero-text-group">
            <div className="hero-text-line">
              <span className="hero-welcome">Selamat Datang di</span>
            </div>
            <div className="hero-text-line">
              <span className="hero-subtitle">Pondok Pesantren</span>
            </div>
            <div className="hero-text-line">
              <span className="hero-title">Mafatihul Huda</span>
            </div>
            <div className="hero-text-line">
              <span className="hero-alihsani">Al-Ihsani</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-nav">
        <button className="nav-btn" onClick={prevSlide} aria-label="Previous">&#10094;</button>
        <button className="nav-btn" onClick={nextSlide} aria-label="Next">&#10095;</button>
      </div>
    </section>
  );
}
