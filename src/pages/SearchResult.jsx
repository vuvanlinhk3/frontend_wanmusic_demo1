// SearchResult.jsx
import React from 'react';
import styles from '../styles/stylesSearch/SearchResult.module.css';
import TopResult from '../components/search/TopResult.jsx';
import SongList from '../components/search/SongList.jsx';
import ArtistList from '../components/search/ArtistList.jsx';
import AlbumList from '../components/search/AlbumList.jsx';
import SearchHeader from '../components/search/SearchHeader.jsx';

import { PlayArrow } from '@mui/icons-material';
import SearchSong from '../components/search/searchSong/SearchSong.jsx';


const SearchResult = () => {
  return (
    <div className={`components_color_margin_top ${styles.container} main-content_components components_color`}>
      <SearchHeader />
      <div className={styles.container_contents}>
        <SearchSong/>

        {/* <div>
          <div className={styles.gridContainer}>
            <TopResult />
            <SongList />
          </div>
          <ArtistList />
          <AlbumList />
        </div> */}


      </div>
    </div>
  );
};

export default SearchResult;