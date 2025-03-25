// Login.js
import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import logo from "../assets/logo/logoms.png"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginLogo}>
            <div className={styles.dLogo}><a className={styles.aLogo} href='/dashboard' ><img src={logo} alt='logo' /></a></div>
            <h2 className={styles.title}>Login</h2>
        </div>
        
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
          <button type="submit" className={styles.loginButton}>
            Login
          </button>

          {/* Alternative Login Options */}
          <div className={styles.alternativeLogin}>
            <button className={styles.googleButton}>
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