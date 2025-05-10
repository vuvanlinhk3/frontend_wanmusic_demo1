import React from 'react';
import styles from '../styles/NewRelease.module.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ItemSong from './item/ItemSong';

const NewRelease = ({
  releases = [],
  title = "New Release",
  linkText = "ALL",
  linkUrl = "#"
}) => {
  const sampleReleases = [
    {
      id: 1,
      title: "Nếu Những Tiếc Nuối",
      artist: "Vũ.",
      image: 'https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg',
      duration: "03:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 2,
      title: "ID 2022",
      artist: "Vũ.",
      image: 'https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg',
      duration: "04:12",
      inPlaylist: false,
      downloaded: true,
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
    {
      id: 5,
      title: "Chỉ Còn Một Đêm",
      artist: "RPT MCK",
      image: 'https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg',
      duration: "03:30",
      inPlaylist: false,
      downloaded: false,
    },
    {
      id: 6,
      title: "Chỉ Còn Một Đêm",
      artist: "RPT MCK",
      image: 'https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg',
      duration: "03:30",
      inPlaylist: false,
      downloaded: false,
    },
    {
      id: 7,
      title: "Chỉ Còn Một Đêm",
      artist: "RPT MCK",
      image: 'https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg',
      duration: "03:30",
      inPlaylist: false,
      downloaded: false,
    },
    {
      id: 8,
      title: "Chỉ Còn Một Đêm",
      artist: "RPT MCK",
      image: 'https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg',
      duration: "03:30",
      inPlaylist: false,
      downloaded: false,
    },
  ];

  // Split releases into chunks of 4 for each column
  const chunkedReleases = [];
  const itemsPerColumn = 4;
  for (let i = 0; i < sampleReleases.length; i += itemsPerColumn) {
    chunkedReleases.push(sampleReleases.slice(i, i + itemsPerColumn));
  }

  return (
    <div className={styles.newRelease}>
      <div className={styles.newReleaseHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <a href={linkUrl} className={styles.newReleaseLink}>{linkText}</a>
      </div>
      <div className={styles.newReleaseItems}>
        {chunkedReleases.map((chunk, index) => (
          <div key={index} className={styles.column}>
            <ItemSong releases={chunk} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewRelease;