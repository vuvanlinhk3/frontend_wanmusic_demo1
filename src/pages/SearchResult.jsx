// SearchResult.jsx
import React from 'react';
import styles from '../styles/stylesSearch/SearchResult.module.css';
import TopResult from '../components/SearchSong/TopResult.jsx';
import SongList from '../components/NewReleaseMusic.jsx';
import ArtistList from '../components/SearchSong/ArtistList';
import AlbumList from '../components/SearchSong/AlbumList';
import SearchHeader from '../components/SearchSong/SearchHeader';

import { PlayArrow } from '@mui/icons-material';


const SearchResult = () => {
  return (
    <div className={`${styles.container} main-content`}>
      <SearchHeader />
      <div className={styles.gridContainer}>
        <TopResult />
        <SongList />
      </div>
      <ArtistList />
      <AlbumList />
    </div>
  );
};

export default SearchResult;