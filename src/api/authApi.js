// src/api/authApi.js
const BASE_URL = 'http://localhost:3000'; // URL của backend, có thể lấy từ .env nếu cần

// Hàm đăng nhập
const login = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(email,password)
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    return data; // Trả về { message, token, user }
  } catch (error) {
    throw new Error(error.message || 'An error occurred during login');
  }
};

// Hàm đăng ký (dùng cho SignUp.jsx sau này)
const signup = async (username, email, password, day, month, year, gender, marketingOptOut, dataSharing) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, day, month, year, gender, marketingOptOut, dataSharing }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }
  
      return data; // Trả về { message, token, user }
    } catch (error) {
      throw new Error(error.message || 'An error occurred during signup');
    }
  };

  const completeGoogleSignup = async (data) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/google/complete-signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include', // Gửi cookie session
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.message || 'Failed to complete Google signup');
      }
  
      return result;
    } catch (error) {
      throw new Error(error.message || 'An error occurred during Google signup completion');
    }
  };
export { login, signup,completeGoogleSignup };