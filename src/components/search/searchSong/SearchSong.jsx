import React from 'react';
import SongCard from '../../item/SongCard';
import styles from '../../../styles/stylesSearch/searchSong/SearchSong.module.css'; // Adjust path as needed

const SearchSong = () => {
  const releases = [
    {
      id: 1,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Name",
      album: "Album Name",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 2,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Name",
      album: "Album Namedsfdsfsfsfsdfsdf",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 3,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Name",
      album: "Album Namedsfdsfsfsdf",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 4,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Namesdfsdfsdfdsfsd",
      album: "Album Namesdfdsfsdfsdf",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 4,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Namesdfsdfsdfdsfsd",
      album: "Album Namesdfdsfsdfsdf",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 4,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Namesdfsdfsdfdsfsd",
      album: "Album Namesdfdsfsdfsdf",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 4,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Namesdfsdfsdfdsfsd",
      album: "Album Namesdfdsfsdfsdf",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 4,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Namesdfsdfsdfdsfsd",
      album: "Album Namesdfdsfsdfsdf",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 4,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Namesdfsdfsdfdsfsd",
      album: "Album Namesdfdsfsdfsdf",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 4,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Namesdfsdfsdfdsfsd",
      album: "Album Namesdfdsfsdfsdf",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 4,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Namesdfsdfsdfdsfsd",
      album: "Album Namesdfdsfsdfsdf",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 4,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Namesdfsdfsdfdsfsd",
      album: "Album Namesdfdsfsdfsdf",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    {
      id: 4,
      image: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title",
      artist: "Artist Namesdfsdfsdfdsfsd",
      album: "Album Namesdfdsfsdfsdf",
      duration: "3:45",
      inPlaylist: true,
      downloaded: false,
    },
    
    // More releases...
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.index}>#</span>
        <span className={styles.title}>Title</span>
        <span className={styles.album}>Album</span>
        <span className={styles.durationIcon}>⏱</span>
      </div>
      <SongCard releases ={releases}
      />
    </div>
  );
};

export default SearchSong;