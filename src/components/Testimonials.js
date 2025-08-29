import React from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Ahmad",
    desc: "Aktivitas di pesantren sangat membantu membentuk karakter dan prestasi saya.",
    img: "/asrama.webp"
  },
  {
    name: "Laila",
    desc: "Lingkungan belajar di Mafatihul Huda sangat nyaman dan mendukung.",
    img: "/ndalem.webp"
  }
];

export default function Testimonials() {
  return (
    <section className="testimoni-section" id="testimoni">
      <h2 className="testimoni-title">Testimoni Santri & Alumni</h2>
      <div className="testimoni-grid">
        {testimonials.map((t, idx) => (
          <div className="testi-card" key={idx}>
            <img src={t.img} alt={t.name} className="testi-img" />
            <div className="testi-content">
              <span className="testi-name">{t.name}</span>
              <p className="testi-desc">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
