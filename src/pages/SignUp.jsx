import React, { useEffect, useState } from 'react';
import styles from '../styles/SignUp.module.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import logo from "../assets/logo/logoms.png";
import { signup, login, completeGoogleSignup } from '../api/authApi'; // Import cả signup và login

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isGoogleSignup, setIsGoogleSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    marketingOptOut: false,
    dataSharing: false,
  });
  const [passwordError, setPasswordError] = useState('');


  // Xử lý redirect từ Google
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const googleFlag = urlParams.get('google');
    if (googleFlag === 'true') {
      setIsGoogleSignup(true);
      setStep(3); 
      setFormData((prev) => ({
        ...prev,
        email: '', 
      }));
    }
  }, []);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNoSpaces = !/\s/.test(password);
    const hasNumber = /\d/.test(password);
    const hasNoAccents = !/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹ]/.test(password);

    if (!minLength) return 'Password must be at least 8 characters long';
    if (!hasSpecialChar) return 'Password must contain at least 1 special character';
    if (!hasNoSpaces) return 'Password must not contain spaces';
    if (!hasNumber) return 'Password must contain at least 1 number';
    if (!hasNoAccents) return 'Password must not contain accented characters';
    return '';
  };

  const checkPasswordConditions = (password) => {
    return {
      minLength: password.length >= 8,
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasNoSpaces: !/\s/.test(password),
      hasNumber: /\d/.test(password),
      hasNoAccents: !/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹ]/.test(password),
    };
  };

  const handleNext = async (e) => {
    e.preventDefault();
    if (step === 1 && formData.email) {
      setStep(2);
    } else if (step === 2) {
      const error = validatePassword(formData.password);
      setPasswordError(error);
      if (!error && formData.password) {
        setStep(3);
      }
    } else if (step === 3 && formData.username && formData.day && formData.month && formData.year && formData.gender) {
      setStep(4);
    } else if (step === 4) {
      try {
        if (isGoogleSignup) {
          // Gọi API completeGoogleSignup cho đăng ký Google
          const response = await completeGoogleSignup({
            username: formData.username,
            day: formData.day,
            month: formData.month,
            year: formData.year,
            gender: formData.gender,
            marketingOptOut: formData.marketingOptOut,
            dataSharing: formData.dataSharing,
          });
          console.log('Đăng ký Google thành công:', response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
        } else {
          // Gọi API signup thông thường
          const signupResponse = await signup(
            formData.username,
            formData.email,
            formData.password,
            formData.day,
            formData.month,
            formData.year,
            formData.gender,
            formData.marketingOptOut,
            formData.dataSharing
          );
          console.log('Đăng ký thành công:', signupResponse);

          // Tự động đăng nhập
          const loginResponse = await login(formData.email, formData.password);
          console.log('Đăng nhập thành công:', loginResponse);
          localStorage.setItem('token', loginResponse.token);
          localStorage.setItem('user', JSON.stringify(loginResponse.user));
        }

        // Chuyển hướng tới dashboard
        window.location.href = '/dashboard';
      } catch (error) {
        console.error('Lỗi:', error.message);
        alert(error.message);
      }
    }
  };

  const handleBack = () => {
    if (step > 1 && (!isGoogleSignup || step > 3)) {
      setStep(step - 1);
    }
  };

  const handleGoogleSignUp = () => {
    // Điều hướng tới endpoint xác thực Google
    window.location.href = 'http://localhost:3000/auth/google/signup'; // Thay đổi URL theo backend của bạn
  };

  const handlePhoneSignUp = () => {
    console.log('Sign up with Phone');

  };

  const passwordConditions = checkPasswordConditions(formData.password);

  // Tạo danh sách ngày, tháng, năm
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpBox}>
        <div className={styles.loginLogo}>
            <div className={styles.dLogo}><a className={styles.aLogo} href='/dashboard' ><img src={logo} alt='logo' /></a></div>
            <h2 className={styles.title}>Sign Up</h2>
        </div>

        {/* Thanh tiến trình */}
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        <form onSubmit={handleNext} className={styles.form}>
          {step === 1 && (
            <>
              <div>
              <div className={styles.inputGroup}>
                <EmailIcon className={styles.icon} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.alternativeSignUp}>
                <button type="button" className={styles.googleButton} onClick={handleGoogleSignUp}>
                  <GoogleIcon /> Sign up with Google
                </button>
                <button type="button" className={styles.phoneButton} onClick={handlePhoneSignUp}>
                  <PhoneIcon /> Sign up with Phone
                </button>
              </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
              <div className={styles.inputGroup}>
                <LockIcon className={styles.icon} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
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
              <div className={styles.passwordRules}>
                <h4>Your password must contain at least:</h4>
                <ul>
                  <li>
                    {passwordConditions.minLength ? <CheckCircleIcon className={styles.checkIcon} /> : <CircleIcon className={styles.circleIcon} />}
                    8 characters
                  </li>
                  <li>
                    {passwordConditions.hasSpecialChar ? <CheckCircleIcon className={styles.checkIcon} /> : <CircleIcon className={styles.circleIcon} />}
                    1 special character (example: # ? ! &)
                  </li>
                  <li>
                    {passwordConditions.hasNoSpaces ? <CheckCircleIcon className={styles.checkIcon} /> : <CircleIcon className={styles.circleIcon} />}
                    No spaces
                  </li>
                  <li>
                    {passwordConditions.hasNumber ? <CheckCircleIcon className={styles.checkIcon} /> : <CircleIcon className={styles.circleIcon} />}
                    1 number
                  </li>
                  <li>
                    {passwordConditions.hasNoAccents ? <CheckCircleIcon className={styles.checkIcon} /> : <CircleIcon className={styles.circleIcon} />}
                    No accented characters
                  </li>
                </ul>
              </div>
              {passwordError && <p className={styles.error}>{passwordError}</p>}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
              <div className={styles.inputGroup}>
                <PersonIcon className={styles.icon} />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>

              {/* Date of Birth */}
              <div className={styles.dobGroup}>
                <label className={styles.label}>
                  Date of Birth
                  <a href="/why-dob" className={styles.infoLink}>Why do we need your date of birth? Learn more.</a>
                </label>
                <div className={styles.dobInputs}>
                  <select
                    name="day"
                    value={formData.day}
                    onChange={handleChange}
                    className={styles.dobInput}
                    required
                  >
                    <option value="" disabled>Day</option>
                    {days.map((day) => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                    className={styles.dobInput}
                    required
                  >
                    <option value="" disabled>Month</option>
                    {months.map((month) => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className={styles.dobInput}
                    required
                  >
                    <option value="" disabled>Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Gender */}
              <div className={styles.genderGroup}>
                <label className={styles.label}>
                  Gender
                  <span className={styles.infoText}>We use your gender to help personalize our content recommendations and ads for you.</span>
                </label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="man"
                      checked={formData.gender === 'man'}
                      onChange={handleChange}
                      required
                    />
                    Man
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="woman"
                      checked={formData.gender === 'woman'}
                      onChange={handleChange}
                    />
                    Woman
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="non-binary"
                      checked={formData.gender === 'non-binary'}
                      onChange={handleChange}
                    />
                    Non-binary
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="something-else"
                      checked={formData.gender === 'something-else'}
                      onChange={handleChange}
                    />
                    Something else
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="prefer-not-to-say"
                      checked={formData.gender === 'prefer-not-to-say'}
                      onChange={handleChange}
                    />
                    Prefer not to say
                  </label>
                </div>
              </div>
              </div>
            </>
          )}

          {step === 4 && (
            <div className={styles.termsGroup}>
              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  name="marketingOptOut"
                  checked={formData.marketingOptOut}
                  onChange={handleChange}
                  id="marketing"
                />
                <label htmlFor="marketing">
                  I would prefer not to receive marketing messages from WebMusic.
                </label>
              </div>
              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  name="dataSharing"
                  checked={formData.dataSharing}
                  onChange={handleChange}
                  id="dataSharing"
                />
                <label htmlFor="dataSharing">
                  Share my registration data with WebMusic's content providers for marketing purposes.
                </label>
              </div>
              <p className={styles.termsText}>
                By clicking on sign-up, you agree to WebMusic's{' '}
                <a href="/terms" className={styles.link}>
                  Terms and Conditions of Use
                </a>.
              </p>
              <p className={styles.termsText}>
                To learn more about how WebMusic collects, uses, shares and protects your personal data, please see WebMusic's{' '}
                <a href="/privacy" className={styles.link}>
                  Privacy Policy
                </a>.
              </p>
            </div>
          )}

          <div>
          <div className={styles.buttonGroup}>
            {step > 1 && (
              <button type="button" className={styles.backButton} onClick={handleBack}>
                Back
              </button>
            )}
            {step !== 1 && (
              <button type="submit" className={styles.nextButton}>
                {step === 4 ? 'Sign Up' : 'Next'}
              </button>
            )}
            {step === 1 && (
              <button type="submit" className={styles.nextButton}>
                Next
              </button>
            )}
          </div>

          <div className={styles.loginLink}>
            Already have an account?{' '}
            <a href="/login" className={styles.link}>
              Login now
            </a>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;