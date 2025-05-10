// components/AlbumList.jsx
import React from 'react';
import styles from '../../styles/stylesSearch/AlbumList.module.css';
import ItemAlbum from '../item/ItemAlbum'


const sampleAlbums = [
  {
    imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
    title: "Bảo tàng của nuối tiếc",
    artist: "Quang Hùng MasterD",
    alt: "Album Art"
  },
  {
    imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
    title: "Bảo tàng của nuối tiếc",
    artist: "Quang Hùng MasterD",
    alt: "Album Art"
  },
  // Add more sample albums as needed
];
const AlbumList = () => (
  
  <div className={styles.container}>
    <div className={styles.header}>
      <h2 className={styles.title}>ALBUM</h2>
      <button className={styles.allButton}>ALL</button>
    </div>
    <div className={styles.grid}>
          <ItemAlbum 
            albums={sampleAlbums}
            title=""
          />
    </div>
  </div>
);

export default AlbumList;