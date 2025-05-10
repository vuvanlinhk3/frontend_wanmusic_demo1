// src/components/Header.jsx
import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/header.css';
import _logo from '../assets/logo/logoms.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { AuthContext } from '../context/AuthContext.jsx';

function Header({ setActiveSection }) {
  const { user, token, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleUserClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate('/login');
  };

  const handleNavigation = (path) => {
    setIsDropdownOpen(false);
    navigate(path);
  };

  const handleSignUpClick = () => {
    navigate('/SignUp');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleItemClick = (section) => {
    setActiveSection(section);
    setIsDropdownOpen(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        const response = await fetch(`http://localhost:3000/search?q=${encodeURIComponent(searchQuery)}`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        });
        if (!response.ok) {
          throw new Error('Search failed');
        }
        const searchData = await response.json();
        setActiveSection('SearchResult');
        navigate(`/dashboard?query=${encodeURIComponent(searchQuery)}`, { state: { searchData } });
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  return (
    <header className="header components_color margin-rl_components">
      {/* Logo */}
      <div className="header__logo">
        <a href="/dashboard">
          <img src={_logo} alt="Logo" className="logo__image" />
        </a>
      </div>

      {/* Search Bar */}
      <div className="header__search">
        <div className="search__container">
          <SearchIcon className="search__icon" />
          <input
            type="text"
            placeholder="Tìm kiếm bài hát, album, nghệ sĩ..."
            className="search__input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
          />
        </div>
      </div>

      {/* Notification and User Profile or Sign Up/Login Buttons */}
      <div className="header__actions">
        {user && token ? (
          <>
            {/* Notification Icon (only when authenticated) */}
            <div className="notification__container">
              <NotificationsIcon className="notification__icon" />
              <span className="notification__dot"></span>
            </div>

            {/* User Avatar (only when authenticated) */}
            <div className="user__container">
              <Avatar
                className="user__avatar"
                src={user.avatar_url || 'https://via.placeholder.com/40'}
                alt={user.username || 'User'}
                onClick={handleUserClick}
              />
              {isDropdownOpen && (
                <div className="user__dropdown">
                  <div
                    className="dropdown__item"
                    onClick={() => handleItemClick('EditProfile')}
                  >
                    Account
                  </div>
                  <div
                    className="dropdown__item"
                    onClick={() => handleItemClick('Profile')}
                  >
                    Profile
                  </div>
                  <div
                    className="dropdown__item"
                    onClick={() => handleItemClick('Setting')}
                  >
                    Settings
                  </div>
                  <div className="dropdown__item" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Sign Up and Login Buttons (only when not authenticated) */}
            <button
              className="action__button register__button"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
            <button
              className="action__button login__button"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;