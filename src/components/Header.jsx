import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import _logo from "../assets/logo/logoms.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignUpClick = () => {
    navigate("/SignUp");
  };
  return (
    <header className="header">
      {/* Logo */}
      <div className="header__logo">
        <a href="/dashboard"><img src={_logo} alt="Logo" className="logo__image" /></a>
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

      {/* Notification and Buttons */}
      <div className="header__actions">
        {/* Notification Icon */}
        {/* <div className="notification__container">
          <NotificationsIcon className="notification__icon" />
          <span className="notification__badge">3</span>
        </div> */}

        {/* Register Button */}
        <button className="action__button register__button" onClick={handleSignUpClick}>Sign up</button>

        {/* Login Button */}
        <button className="action__button login__button" onClick={handleLoginClick}>Login</button>
      </div>
    </header>
  );
}

export default Header;
