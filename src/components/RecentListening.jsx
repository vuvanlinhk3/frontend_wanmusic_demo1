// src/components/RecentListening.js
import React from 'react';
import styles from '../styles/RecentListening.module.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const RecentListening = ({ 
  items = [], 
  title = "", 
  linkText = "ALL", 
  linkUrl = "#" 
}) => {
  return (
    <div className={styles.recentListening}>
      <div className={styles.recentHeader}>
        <h2 className={styles.recentTitle}>{title}</h2>
        <a href={linkUrl} className={styles.recentLink}>{linkText}</a>
      </div>
      <div className={styles.recentItems}>
        {items.map((item, index) => (
          <div key={index} className={styles.recentItem}>
            <img 
              src={item.imageUrl || "https://via.placeholder.com/50"} 
              alt={item.alt || "Album Art"} 
              className={styles.recentImage} 
            />
            <span className={styles.recentText}>{item.title}</span>
            <button className={styles.playButton}>
              <PlayArrowIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default RecentListening;