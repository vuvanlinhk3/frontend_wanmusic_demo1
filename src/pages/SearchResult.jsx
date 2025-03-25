// SearchResult.jsx
import React from 'react';
import styles from '../styles/SearchResult.module.css';
import TopResult from '../components/SearchSong/TopResult.jsx';
import SongList from '../components/NewReleaseMusic.jsx';
// import ArtistList from './ArtistList';
// import AlbumList from './AlbumList';
import { PlayArrow } from '@mui/icons-material';


const SearchResult = () => {
  return (
    <div className={`${styles.container} main-content`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Search result</h1>
        <div className={styles.filterButtons}>
          {['ALL', 'SONG', 'ALBUM', 'ARTIST', 'MV'].map((filter) => (
            <button key={filter} className={styles.filterButton}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        <TopResult />
        <SongList />
      </div>

      {/* <ArtistList />
      <AlbumList /> */}
    </div>
  );
};

export default SearchResult;