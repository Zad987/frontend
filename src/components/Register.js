import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        fullName,
        whatsappNumber,
        email,
        address,
        password,
      });
      // Backend Anda mengirim pesan verifikasi, bukan token langsung
      alert('Registrasi berhasil! Silakan verifikasi WhatsApp Anda.');
      navigate('/login');
    } catch (err) {
      setError(
        err.response?.data?.message ||
        'Registration failed! Please try again.'
      );
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Nama Lengkap"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nomor WhatsApp"
        value={whatsappNumber}
        onChange={(e) => setWhatsappNumber(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Alamat"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  );
};

export default Register;