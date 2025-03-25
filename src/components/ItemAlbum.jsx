// src/components/YouMayWantToListen.js
import React from 'react';
import styles from '../styles/ItemAlbum.module.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import logo from '../assets/logo/logoms.png'
const ItemAlbum = ({ 
  albums = [],
  title = ""
}) => {
  return (
    <div className={styles.ItemAlbum}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.albumGrid}>
        {albums.map((album, index) => (
          <div key={index} className={styles.albumItem}>
            <div className={styles.logoItemAlbum}>
              <img
                src={logo || ""}
                className={styles.logo}
              />
            </div>
            <div className={styles.albumImageContainer}>
              <img 
                src={album.imageUrl || "https://via.placeholder.com/180"} 
                alt={album.alt || "Album Art"} 
                className={styles.albumImage} 
              />
              <button className={styles.playButton}>
                <PlayArrowIcon />
              </button>
            </div>
            <span className={styles.albumTitle}>{album.title}</span>
            <span className={styles.albumArtist}>{album.artist || "Unknown Artist"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ItemAlbum;