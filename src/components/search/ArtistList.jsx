import React from 'react';
import ArtistItem from '../item/ItemArtist'; // Renamed to avoid confusion
import styles from '../../styles/stylesSearch/ArtistList.module.css';

const ArtistList = () => {
  const artists = [
    { name: "Vũ.", imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg" },
    { name: "RPT MCK", imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>ARTIST</h2>
        <button className={styles.allButton}>ALL</button>
      </div>
      <div className={styles.grid}>
        {artists.map((artist, index) => (
          <ArtistItem key={index} name={artist.name} imageUrl={artist.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default ArtistList;