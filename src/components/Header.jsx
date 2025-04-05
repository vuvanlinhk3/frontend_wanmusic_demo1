import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import _logo from "../assets/logo/logoms.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import EditProfile from "../pages/EditProfile";

function Header({ setActiveSection }) {


  const handleItemClick = ( section) => {
    setActiveSection(section); // Switch the section in DashBoardPage
  };


  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Simulate logged-in state for testing

  // Simulate user data
  const user = {
    name: "User Name",
    avatar: "https://via.placeholder.com/40", // Placeholder image
  };

  const handleUserClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Simulate logout
    setIsDropdownOpen(false);
    navigate("/login");
  };

  const handleNavigation = (path) => {
    setIsDropdownOpen(false);
    navigate(path);
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = () => {
    navigate("/login");
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
          />
        </div>
      </div>

      {/* Notification and User Profile or Sign Up/Login Buttons */}
      <div className="header__actions">
        {isAuthenticated ? (
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
                src={user.avatar}
                alt={user.name}
                onClick={handleUserClick}
              />
              {isDropdownOpen && (
                <div className="user__dropdown">
                  <div
                    className="dropdown__item"                    
                    onClick={() => handleItemClick("EditProfile")}


                  >
                    Account
                  </div>
                  <div
                    className="dropdown__item"
                    onClick={() => handleItemClick("Profile")}
                  >
                    Profile
                  </div>
                  <div
                    className="dropdown__item"
                    onClick={() => handleItemClick("Setting")}
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