// components/SongList.jsx
import React from 'react';
import styles from '../../styles/stylesSearch/SongList.module.css';

const SongItem = ({ title, artist, duration, imageUrl }) => (
  <div className={styles.songItem}>
    <div className={styles.songInfo}>
      <img src={imageUrl} alt="Song" className={styles.image} />
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
    <p>{duration}</p>
  </div>
);

const SongList = ({ songs = [
  { title: "ID 2022", artist: "Vũ.", duration: "04:22", imageUrl: "..." },
]}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.header}>Song</h2>
      <div className={styles.list}>
        {songs.map((song, index) => (
          <SongItem key={index} {...song} />
        ))}
      </div>
    </div>
  );
};

export default SongList;