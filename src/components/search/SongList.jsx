// components/SongList.jsx
import React from 'react';
import styles from '../../styles/stylesSearch/SongList.module.css';
import ItemSong from '../item/ItemSong';


const SongList = () => {
  const sampleReleases = [
    {
      id: 1,
      title: "Nếu Những Tiếc Nuối",
      artist: "Vũ.",
      image: 'https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg',
      duration: "03:45",
      inPlaylist: true, // Example: song is in a playlist
      downloaded: false,
    },
    {
      id: 2,
      title: "ID 2022",
      artist: "Vũ.",
      image: 'https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg',
      duration: "04:12",
      inPlaylist: false,
      downloaded: true, // Example: song is downloaded
    },
    {
      id: 3,
      title: "Chỉ Còn Một Đêm",
      artist: "RPT MCK",
      image: 'https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg',
      duration: "03:30",
      inPlaylist: false,
      downloaded: false,
    },
    {
      id: 4,
      title: "Chỉ Còn Một Đêm",
      artist: "RPT MCK",
      image: 'https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg',
      duration: "03:30",
      inPlaylist: false,
      downloaded: false,
    },
    // {
    //   id: 5,
    //   title: "Chỉ Còn Một Đêm",
    //   artist: "RPT MCK",
    //   image: 'https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg',
    //   duration: "03:30",
    //   inPlaylist: false,
    //   downloaded: false,
    // },
  ];
  return (
    <div className={styles.card}>
      <h2 className={styles.header}>Song</h2>
      <div className={styles.list}>
      <ItemSong releases={sampleReleases}/>
      </div>
    </div>
  );
};

export default SongList;