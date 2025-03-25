import React from "react";
import "../styles/navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

export default function Navbar() {
  return (
    <div className="navbar-container">
      {/* Left Sidebar */}
      <nav className="navbar-sidebar">
        <h2 className="sidebar-title">Browse Music</h2>
        <ul className="sidebar-menu">
          <li className="menu-item active-dashboard">
            <a href="#" className="menu-link">
              <HomeIcon className="menu-icon" />
            <span>  Home</span>
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              <LibraryMusicIcon className="menu-icon" />
            <span>  Library</span>
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              <MusicNoteIcon className="menu-icon" />
            <span>  Theme & genre</span>
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              <HistoryIcon className="menu-icon" />
            <span>  Heard recently</span>
            </a>
          </li>
        </ul>
        <div className="sidebar-actions">
          <button className="action-button">NEW PLAYLIST</button>
        </div>
        <ul className="sidebar-menu secondary">
          <li className="menu-item">
            <a href="#" className="menu-link">
              <PlaylistAddIcon className="menu-icon" />
            <span>  New Playlist</span>
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              <PlaylistAddIcon className="menu-icon" />
            <span>  New Playlist</span>
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">
              <PlaylistAddIcon className="menu-icon" />
            <span>  New Playlist</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="navbar-content"></main>
    </div>
  );
}
