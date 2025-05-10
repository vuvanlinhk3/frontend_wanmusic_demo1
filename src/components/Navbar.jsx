// src/components/Navbar.jsx
import React, { useContext, useState } from 'react';
import '../styles/navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import UnlockFeatures from './unlock/UnlockFeatures';
import { AuthContext } from '../context/AuthContext.jsx';

export default function Navbar({ setActiveSection }) {
  const { user, token } = useContext(AuthContext);
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (itemName, section) => {
    setActiveItem(itemName);
    setActiveSection(section);
  };

  // Kiểm tra trạng thái đăng nhập
  const isAuthenticated = user && token;

  return (
    <div className="navbar-container components_color margin-rl_components height_minus_10_notheader">
      <nav className="navbar-sidebar">
        <h2 className="sidebar-title">Browse Music</h2>
        <ul className="sidebar-menu">
          {/* Luôn hiển thị mục "Home" */}
          <li
            className={`menu-item ${activeItem === 'Home' ? 'active-dashboard' : ''}`}
            onClick={() => handleItemClick('Home', 'ContainerMain')}
          >
            <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
              <HomeIcon className="menu-icon" />
              <span>Home</span>
            </a>
          </li>

          {/* Hiển thị UnlockFeatures khi chưa đăng nhập */}
          {!isAuthenticated && <UnlockFeatures />}

          {/* Hiển thị các mục khác chỉ khi đã đăng nhập */}
          {isAuthenticated && (
            <>
              <li
                className={`menu-item ${activeItem === 'Library' ? 'active-dashboard' : ''}`}
                onClick={() => handleItemClick('Library', 'Library')}
              >
                <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
                  <LibraryMusicIcon className="menu-icon" />
                  <span>Library</span>
                </a>
              </li>
              <li
                className={`menu-item ${activeItem === 'Theme & genre' ? 'active-dashboard' : ''}`}
                onClick={() => handleItemClick('Theme & genre', 'MusicSection')}
              >
                <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
                  <MusicNoteIcon className="menu-icon" />
                  <span>Theme & genre</span>
                </a>
              </li>
              <li
                className={`menu-item ${activeItem === 'Heard recently' ? 'active-dashboard' : ''}`}
                onClick={() => handleItemClick('Heard recently', 'NewReleases')}
              >
                <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
                  <HistoryIcon className="menu-icon" />
                  <span>Heard recently</span>
                </a>
              </li>
            </>
          )}
        </ul>

        {/* Hiển thị nút "NEW PLAYLIST" và các playlist chỉ khi đã đăng nhập */}
        {isAuthenticated && (
          <>
            <div className="sidebar-actions">
              <button className="action-button">NEW PLAYLIST</button>
            </div>
            <ul className="sidebar-menu secondary">
              <li
                className={`menu-item ${activeItem === 'New Playlist 1' ? 'active-dashboard' : ''}`}
                onClick={() => handleItemClick('New Playlist 1', '')}
              >
                <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
                  <PlaylistAddIcon className="menu-icon" />
                  <span>New Playlist</span>
                </a>
              </li>
              <li
                className={`menu-item ${activeItem === 'New Playlist 2' ? 'active-dashboard' : ''}`}
                onClick={() => handleItemClick('New Playlist 2', '')}
              >
                <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
                  <PlaylistAddIcon className="menu-icon" />
                  <span>New Playlist</span>
                </a>
              </li>
              <li
                className={`menu-item ${activeItem === 'New Playlist 3' ? 'active-dashboard' : ''}`}
                onClick={() => handleItemClick('New Playlist 3', '')}
              >
                <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
                  <PlaylistAddIcon className="menu-icon" />
                  <span>New Playlist</span>
                </a>
              </li>
            </ul>
          </>
        )}
      </nav>
    </div>
  );
}