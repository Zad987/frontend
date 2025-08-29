// src/components/ContactSection.js
import "../styles/ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section" id="kontak">
      <h2 className="contact-title">Kontak</h2>
      <div className="contact-card">
        <div className="contact-info">
          <div className="contact-row">
            <span className="contact-icon">📞</span>
            <a className="contact-link" href="tel:082301105096">
              Telp: <b>0823-0110-5096</b>
            </a>
          </div>
          <div className="contact-row">
            <span className="contact-icon">✉️</span>
            <a className="contact-link" href="mailto:ppmha@school.com">
              Email: <b>ppmha@school.com</b>
            </a>
          </div>
          <div className="contact-row">
            <span className="contact-icon">📍</span>
            <span>
              Alamat: Putat Lor, Gondanglegi, Malang
            </span>
          </div>
        </div>
        <div className="contact-maps-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1695660432961!6m8!1m7!1saF_a6zWa3LLVrANLSuUgRw!2m2!1d-8.1626603!2d112.655955!3f198.21!4f1.96!5f0.7820865974627469"
            width="100%"
            height="260"
            style={{
              border: '2px solid #d5f5ef',
              borderRadius: '14px',
              marginTop: '14px'
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Street View Gerbang Pondok Pesantren Mafatihul Huda Al-Ihsani"
          />
        </div>
      </div>
    </section>
  );
}
