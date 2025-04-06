// src/AppRouter.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashBoardPage from './pages/DashBoardPage.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const AppRouter = () => {
  return (
    <Routes>
      {/* Route mặc định chuyển hướng tới /dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* Trang công khai: Có thể truy cập mà không cần đăng nhập */}
      <Route path="/dashboard" element={<DashBoardPage />} />

      {/* Trang chỉ dành cho người chưa đăng nhập */}
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />

      {/* Trang chỉ dành cho người đã đăng nhập */}
      <Route
        path="/library"
        element={
          <ProtectedRoute>
            <DashBoardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <DashBoardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-profile"
        element={
          <ProtectedRoute>
            <DashBoardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/setting"
        element={
          <ProtectedRoute>
            <DashBoardPage />
          </ProtectedRoute>
        }
      />

      {/* Route không tìm thấy */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRouter;