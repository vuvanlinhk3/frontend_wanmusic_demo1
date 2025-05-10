// Profile.jsx
import React from 'react';
import styles from '../styles/Profile.module.css';
import { MoreVert, FavoriteBorder } from '@mui/icons-material';

const Profile = () => {
  return (
    <div className={`components_color_margin_top ${styles.container} main-content_components components_color`}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.profileInfo}>
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className={styles.profileImage}
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>LONG</span>
            <span className={styles.stats}>4 playlists • 2 following</span>
          </div>
        </div>
        <MoreVert className={styles.moreIcon} />
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.active}`}>Playlist</button>
        <button className={styles.tab}>ALL</button>
      </div>

      {/* Playlist Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>My Playlist</h3>
        <div className={styles.playlist}>
          <div className={styles.playlistItem}>
            <img
              src="https://via.placeholder.com/60"
              alt="Playlist"
              className={styles.playlistImage}
            />
            <span className={styles.playlistName}>thanh lam indie buồn</span>
          </div>
          <div className={styles.playlistItem}>
            <img
              src="https://via.placeholder.com/60"
              alt="Playlist"
              className={styles.playlistImage}
            />
            <span className={styles.playlistName}>thanh lam indie buồn</span>
          </div>
          <div className={styles.playlistItem}>
            <img
              src="https://via.placeholder.com/60"
              alt="Playlist"
              className={styles.playlistImage}
            />
            <span className={styles.playlistName}>thanh lam indie buồn</span>
          </div>
        </div>
      </div>

      {/* Artists Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Artists Following</h3>
        <div className={styles.artists}>
          {[...Array(5)].map((_, index) => (
            <div key={index} className={styles.artistItem}>
              <img
                src="https://via.placeholder.com/60"
                alt="Artist"
                className={styles.artistImage}
              />
              <span className={styles.artistName}>VG</span>
            </div>
          ))}
        </div>
      </div>

      {/* Songs Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>My Song</h3>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.active}`}>ALL</button>
          <button className={styles.tab}>...</button>
        </div>
        <div className={styles.songs}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles.songItem}>
              <img
                src="https://via.placeholder.com/50"
                alt="Song"
                className={styles.songImage}
              />
              <div className={styles.songInfo}>
                <span className={styles.songTitle}>Gió • 2023</span>
                <span className={styles.songArtist}>Jank</span>
              </div>
              <FavoriteBorder className={styles.favoriteIcon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;