import React from 'react';
import styles from '../styles/Library.module.css';
import { Favorite } from '@mui/icons-material';
import RecentListening from '../components/RecentListening';
import ItemAlbum from '../components/item/ItemAlbum';
import NewReleaseMusic from '../components/NewReleaseMusic';

const Library = () => {
    const sampleItems = [
        {
          imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
          title: "Bảo Tàng Của Nuối Tiếc",
          alt: "Album Art 1"
        },
        {
          imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
          title: "Song Title 2",
          alt: "Album Art 2"
        },
        {
          imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
          title: "Song Title 3",
          alt: "Album Art 3"
        }
      ];
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
  return (
    <div className={`components_color_margin_top ${styles.container} main-content components_color`}>
      {/* Navigation */}
      <div className={styles.navButton}>
        <button className={styles.navButton}>All</button>
        <button className={styles.navButton}>Songs</button>
      </div>

      {/* Tabs */}
      <div className={styles.tab}>
      <RecentListening 
        items={sampleItems}
        title=""
        linkText="View All"
        linkUrl="/tracks"
      />
      </div>

      {/* Playlist */}
      <div className={styles.playlistSection}>
        <div className={styles.playlistContainer}>
        <ItemAlbum 
            albums={sampleAlbums}
            title="Playlist"
          />
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterButton}>
        <button className={styles.filterButton}>FAVORITE</button>
        <button className={styles.filterButton}>UPLOAD</button>
      </div>

      {/* Song List */}
      <div className={styles.songList}>
        <NewReleaseMusic/>
      </div>
    </div>
  );
};

export default Library;