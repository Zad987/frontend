import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('http://localhost:5000/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserData(response.data.data.user);
        })
        .catch((err) => {
          setError('Failed to fetch user data!');
          navigate('/login');
        });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {userData ? (
        <div>
          <h1>Welcome, {userData.fullName}</h1>
          <p>Email: {userData.email}</p>
          <p>WhatsApp: {userData.whatsappNumber}</p>
          <p>Role: {userData.role}</p>
          <p>Parent Verified: {userData.isParentVerified ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;