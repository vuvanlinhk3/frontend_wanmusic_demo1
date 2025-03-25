// components/AlbumList.jsx
import React from 'react';
import styles from '../../styles/stylesSearch/AlbumList.module.css';


const AlbumCard = ({ title, artist, imageUrl }) => (
  <div className={styles.card}>
    <img src={imageUrl} alt="Album" className={styles.image} />
    <p>{title}</p>
    <p>{artist}</p>
  </div>
);

const AlbumList = ({ albums = [{ title: "Vũ Trụ Song Song", artist: "Vũ.", imageUrl: "..." }]}) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h2 className={styles.title}>ALBUM</h2>
      <button className={styles.allButton}>ALL</button>
    </div>
    <div className={styles.grid}>
      {albums.map((album, index) => (
        <AlbumCard key={index} {...album} />
      ))}
    </div>
  </div>
);

export default AlbumList;