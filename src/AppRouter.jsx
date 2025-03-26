import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashBoardPage from './pages/DashBoardPage.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Library from './pages/Library.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Route mặc định chuyển hướng tới /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Route đến DashBoardPage */}
        <Route path="/dashboard" element={<DashBoardPage />} />

        {/* Route đến DashBoardPage */}
        <Route path="/library" element={<Library />} />

        {/* Route đến login */}
        <Route path="/login" element={<Login/>} />
        {/* Route đến SignUp */}
        <Route path="/SignUp" element={<SignUp/>} />
        {/* Route không tìm thấy */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
