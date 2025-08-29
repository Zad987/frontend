import React from "react";
import "../styles/FloatingWA.css";

export default function FloatingWA() {
  return (
    <a
      href="https://wa.me/6282301105096?text=Assalamu'alaikum%20wr.%20wb.%0ASaya%20ingin%20bertanya%20tentang%20Pondok%20Pesantren%20Mafatihul%20Huda%20Al-Ihsani."
      className="floating-wa"
      target="_blank"
      rel="noopener noreferrer"
      title="Kontak WhatsApp"
    >
      <img src="/icons/whatsapp.png" alt="Whatsapp" className="floating-social-logo" />
    </a>
  );
}
