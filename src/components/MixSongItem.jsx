import React from 'react';
import styles from '../styles/MixSongItem.module.css';

const MixSongItem = ({maintitle, imageUrl, title, subtitle, artists, year, dominantColor = '#1e3a8a', alt = 'Mix song cover' }) => {
  return (
    <div className={styles.maincontainer}>
      <div  className={styles.maintitles}>
        <h2>{maintitle}</h2>
      </div>
      <div className={styles.container} style={{ '--dominant-color': dominantColor }}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={alt} className={styles.image} />
        <div className={styles.maintitle}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <p className={styles.artists}>{artists}</p>
        {year && <p className={styles.year}>{year}</p>}
      </div>
    </div>
    </div>
  );
};

export default MixSongItem;