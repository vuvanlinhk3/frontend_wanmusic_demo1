// components/TopResult.jsx
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import styles from '../../styles/stylesSearch/TopResult.module.css';

const TopResult = ({ title = "Nếu Những Tiếc Nuối", artist = "Vũ.", imageUrl }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Top result</h2>
      <div className={styles.content}>
        <img src={imageUrl} alt="Top result" className={styles.image} />
        <div>
          <h3 className={styles.songTitle}>{title}</h3>
          <p>{artist}</p>
        </div>
        <button className={styles.playButton}>
          <PlayArrowIcon className={styles.playIcon} />
        </button>
      </div>
    </div>
  );
};

export default TopResult;