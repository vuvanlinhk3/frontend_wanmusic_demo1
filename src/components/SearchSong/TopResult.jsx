// TopResult.jsx
import React from 'react';
import styles from '../../styles/TopResult.module.css';
import { PlayArrow } from '@mui/icons-material';

const TopResult = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.sectionTitle}>Top result</h2>
      <div className={styles.content}>
        <img
          src="https://storage.googleapis.com/a1aa/image/qqjOsrD7ZSbi0EOr1n6yOAzCmwp9EjfWn-UPScxqDB0.jpg"
          alt="Top result"
          className={styles.image}
        />
        <div className={styles.info}>
          <h3 className={styles.title}>Nếu Những Tiếc Nuối</h3>
          <p className={styles.artist}>Vũ.</p>
        </div>
        <button className={styles.playButton}>
          <PlayArrow className={styles.playIcon} />
        </button>
      </div>
    </div>
  );
};

export default TopResult;