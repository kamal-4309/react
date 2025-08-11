import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      navigate("/"); // Redirect to dashboard
    } else {
      navigate(-1); // Go back if cancelled
    }
  }, [navigate]);

  return null; // No UI since it's just a confirmation + redirect
};

export default Logout;
