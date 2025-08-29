// src/components/AboutSection.js
import "../styles/AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section" id="tentang">
      <div className="about-card">
        <img src="/asrama.webp" alt="Pondok" className="about-img" />
        <div className="about-content">
          <h2 className="about-title">Tentang Pondok</h2>
          <p className="about-desc">
            <span className="highlight">
              Pondok Pesantren Mafatihul Huda Al-Ihsani
            </span>{" "}
            adalah lembaga pendidikan Islam modern yang berfokus pada pembentukan karakter, <b>dakwah</b>, dan <b>prestasi santri</b>.
          </p>
          <div className="about-icons">
            <span className="icon-group">
              Pendidikan Modern
            </span>
            <span className="icon-group">
              Akhlak & Dakwah
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
