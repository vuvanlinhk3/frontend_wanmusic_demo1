// components/ArtistList.jsx
import React from 'react';
import styles from '../../styles/stylesSearch/ArtistList.module.css';

const ArtistCard = ({ name, imageUrl }) => (
  <div className={styles.card}>
    <img src={imageUrl} alt="Artist" className={styles.image} />
    <p>{name}</p>
  </div>
);

const ArtistList = ({ artists = [{ name: "Vũ.", imageUrl: "..." }]}) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h2 className={styles.title}>ARTIST</h2>
      <button className={styles.allButton}>ALL</button>
    </div>
    <div className={styles.grid}>
      {artists.map((artist, index) => (
        <ArtistCard key={index} {...artist} />
      ))}
    </div>
  </div>
);

export default ArtistList;