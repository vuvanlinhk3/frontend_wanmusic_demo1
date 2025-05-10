// src/pages/Login.jsx
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import logo from '../assets/logo/logoms.png';
import { AuthContext } from '../context/AuthContext.jsx';
import { login } from '../api/authApi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { login: loginContext } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation(); // Để xử lý callback từ Google

  // Xử lý callback từ Google (nếu backend redirect lại với query params)
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get('token');
    const user = query.get('user');

    if (token && user) {
      try {
        const parsedUser = JSON.parse(user); // User được gửi dưới dạng chuỗi JSON
        loginContext(parsedUser, token);
        navigate('/dashboard');
      } catch (err) {
        setError('Failed to process Google login');
      }
    }
  }, [location, loginContext, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await login(email, password);
      if (!response || !response.token || !response.user) {
        throw new Error('Invalid response from server');
      }
      const { token, user } = response;

      loginContext(user, token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  // Hàm xử lý đăng nhập bằng Google
  const handleGoogleLogin = () => {
    // Chuyển hướng người dùng đến endpoint /auth/google trên backend
    window.location.href = 'http://localhost:3000/auth/google/login';
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginLogo}>
          <div className={styles.dLogo}>
            <a className={styles.aLogo} href="/dashboard">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <h2 className={styles.title}>Login</h2>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className={styles.inputGroup}>
            <EmailIcon className={styles.icon} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          {/* Password Input */}
          <div className={styles.inputGroup}>
            <LockIcon className={styles.icon} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className={styles.options}>
            <div className={styles.rememberMe}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                id="remember"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/forgot-password" className={styles.forgotLink}>
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button type="submit" className={styles.loginButton} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {/* Alternative Login Options */}
          <div className={styles.alternativeLogin}>
            <button
              type="button" // Ngăn form submit khi nhấn nút Google
              className={styles.googleButton}
              onClick={handleGoogleLogin}
            >
              <GoogleIcon /> Sign in with Google
            </button>
            <button className={styles.phoneButton}>
              <PhoneIcon /> Sign in with Phone
            </button>
          </div>

          {/* Register Link */}
          <div className={styles.registerLink}>
            Don’t have an account?{' '}
            <a href="/SignUp" className={styles.link}>
              Sign up now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;