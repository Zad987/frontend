import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        whatsappNumber,
        password,
      });
      // Simpan token JWT dari backend
      localStorage.setItem('token', response.data.data.token);
      navigate('/dashboard'); // Redirect ke halaman dashboard
    } catch (err) {
      setError(
        err.response?.data?.message || 'Login failed! Please check your credentials.'
      );
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Nomor WhatsApp"
        value={whatsappNumber}
        onChange={(e) => setWhatsappNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
};

export default Login;