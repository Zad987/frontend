import React from "react";
import { Link } from "react-router-dom";
import "../styles/ArticleSection.css";

const utama = {
  title: "Mengupas Fadhilah Bulan Rajab",
  desc: "Allah SWT menjadikan bulan pada 1 tahun berjumlah 12, diantara 12 bulan tersebut ada 4 bulan yang diutamakan serta dimuliakan. Dikarenakan bulan tersebut apabila digunakan untuk beribadah akan dilipat gandakan pahalanya, juga sebaliknya apabila pada bulan tersebut digunakan untuk hal maksiat kita akan mendapat dosa yang berlipat pula, dan salah ...",
  img: "/masjid.webp",
  meta: "MMHA · 31 DES 2024"
};

const kecil = [
  { title: "Ulasan Mengenai Hari Asyuro", img: "/idulfitri.webp", meta: "15 JUL 2024" },
  { title: "Tentang PPMHA", img: "/gerbang.webp", meta: "10 DES 2023" },
  { title: "Batalnya Puasa Wajib", img: "/tuang.webp", meta: "10 DES 2023" },
  { title: "Perspektif Islam tentang Qurban", img: "/qurban.webp", meta: "9 JUL 2024" },
  { title: "Cinta, Rindu, dan Ikhlas", img: "/malam.webp", meta: "10 DES 2023" }
];

function slug(title) {
  return title.replace(/\s+/g, '-').toLowerCase();
}

export default function ArticleSection() {
  return (
    <section className="article-wrapper">
      <h2 className="article-title">Terbaru</h2>
      <div className="latest-featured">
        <Link to={`/artikel/${slug(utama.title)}`}>
          <img src={utama.img} alt={utama.title} className="featured-img" />
        </Link>
        <div className="featured-content">
          <Link
            to={`/artikel/${slug(utama.title)}`}
            className="featured-title"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {utama.title}
          </Link>
          <div className="featured-desc">{utama.desc}</div>
          <div className="featured-meta">{utama.meta}</div>
          <Link to={`/artikel/${slug(utama.title)}`} className="featured-btn">
            Selengkapnya...
          </Link>
        </div>
      </div>
      <div className="latest-list">
        {kecil.map((item, i) => (
          <div className="list-item" key={i}>
            <Link to={`/artikel/${slug(item.title)}`}>
              <img src={item.img} alt={item.title} className="list-img" />
            </Link>
            <div className="list-content">
              <Link
                to={`/artikel/${slug(item.title)}`}
                className="list-title"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item.title}
              </Link>
              <div className="list-meta">{item.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
