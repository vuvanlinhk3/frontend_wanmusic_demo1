// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { user, token, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user || !token) {
    return <Navigate to="/dashboard" replace />; // Chuyển hướng về trang chính nếu chưa đăng nhập
  }

  return children;
};

export default ProtectedRoute;