import React from "react";
import { useParams } from "react-router-dom";

export default function ArtikelDetailPage() {
  const { slug } = useParams();
  return (
    <div style={{ padding: "40px 16px" }}>
      <h1>Detail Artikel</h1>
      <p>Judul/Slug: {slug}</p>
      <p>Isi detail artikel ditampilkan di sini sesuai slug.</p>
    </div>
  );
}
