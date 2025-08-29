import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-clean">
      <div className="footer-links-row">
        <a href="/" className="footer-link-row">Beranda</a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-link-row">Instagram</a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="footer-link-row">YouTube</a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="footer-link-row">Facebook</a>
      </div>
      <div className="footer-bottom">
        ppmha.id &copy; 2025. mahua creative <span style={{color:'#e25555'}}>♥</span>
      </div>
      <div className="footer-bottom">
        <span className="footer-brand-row">PP. Mafatihul Huda Al-Ihsani</span>
      </div>
    </footer>
  );
}
