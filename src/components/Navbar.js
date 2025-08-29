import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../styles/Navbar.css";

// Simulasi auth
const fakeUser = {
  isLoggedIn: false,
  hasClaimedSantri: false
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (item) => {
    setMenuOpen(false);
    setSearchOpen(false);
    if (item === "beranda") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 320);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (item === "tentang" || item === "kontak") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(item), 380);
      } else {
        scrollToSection(item);
      }
    } else if (item === "pena-santri") {
      navigate("/pena-santri");
    } else if (item === "data-santri") {
      if (!fakeUser.isLoggedIn) {
        navigate("/login");
      } else if (!fakeUser.hasClaimedSantri) {
        navigate("/klaim-santri");
      } else {
        navigate("/data-santri");
      }
    }
  };

  // --- KHUSUS SEARCH ---
  const handleSearchKey = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/pena-santri?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setSearchOpen(false);
      setMenuOpen(false);
    }
  };

  const menuLinks = [
    { label: "Beranda", key: "beranda" },
    { label: "Tentang", key: "tentang" },
    { label: "Pena Santri", key: "pena-santri" },
    { label: "Data Santri", key: "data-santri" },
    { label: "Kontak", key: "kontak" }
  ];

  return (
    <header className="navbar-glass">
      <nav className="navbar-inner">
        <div className="navbar-logo-group">
          <img src="/logo.webp" alt="Logo" className="navbar-logo" />
          <span className="navbar-text-wrapper">
            <span className="navbar-text">Pondok Pesantren</span>
            <span className="navbar-brand-gradient">Mafatihul Huda Al-Ihsani</span>
          </span>
        </div>
        <button
          className={`navbar-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links${menuOpen ? " navbar-links-open" : ""}`}>
          {menuLinks.map(({ label, key }) => (
            <li key={key}>
              <button
                className="navbar-link"
                onClick={() => handleNavClick(key)}
                type="button"
              >
                {label}
              </button>
            </li>
          ))}
          {/* Mobile Search */}
          <li className="mobile-only">
            <input
              type="text"
              className="navbar-search-input"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKey}
            />
          </li>
          {/* Mobile Sosial & Login */}
          <div className="navbar-social-mobile mobile-only">
            {["youtube", "instagram", "facebook"].map(icon => (
              <a
                key={icon}
                href={`https://${icon}.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-social-icon"
              >
                <img src={`/icons/${icon}.png`} alt={icon} className="navbar-social-logo" />
              </a>
            ))}
          </div>
          <li className="navbar-login-mobile mobile-only">
            <Link to="/login" className="navbar-login">Login</Link>
          </li>
        </ul>
        {/* Desktop Right */}
        <div className="navbar-right">
          <div className="navbar-search">
            <button
              className="navbar-search-btn"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Cari"
            >
              <img src="/icons/search.png" alt="Search" className="navbar-search-icon" />
            </button>
            {searchOpen && (
              <input
                type="text"
                className="navbar-search-input"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKey}
                autoFocus
              />
            )}
          </div>
          <div className="navbar-social">
            {["youtube", "instagram", "facebook"].map(icon => (
              <a
                key={icon}
                href={`https://${icon}.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-social-icon"
              >
                <img src={`/icons/${icon}.png`} alt={icon} className="navbar-social-logo" />
              </a>
            ))}
          </div>
          <Link to="/login" className="navbar-login">Login</Link>
        </div>
      </nav>
    </header>
  );
}
