import React from 'react';
import styles from '../styles/NewReleaseAlbum.module.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const NewReleaseAlbum = ({
  albums = [],
  title = ""
}) => {
  return (
    <div className={styles.releasesContainer}>
      {title && <h2 className={styles.releasesTitle}>{title}</h2>}
      <div className={styles.releasesTrack}>
        {albums.map((album, index) => (
          <div key={index} className={styles.releaseCard}>
            <div className={styles.coverWrapper}>
              <img 
                src={album.imageUrl || "https://via.placeholder.com/180"} 
                alt={album.alt || "Album Art"} 
                className={styles.coverImage} 
              />
              <button className={styles.playTrigger}>
                <PlayArrowIcon />
              </button>
            </div>
            <span className={styles.releaseName}>{album.title}</span>
            <span className={styles.artistName}>{album.artist || "Unknown Artist"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleaseAlbum;