import React from 'react';
import styles from '../styles/Queue.module.css';
import ItemSong from '../components/item/ItemSong'; // Import the ItemSong component

const Queue = () => {
  // Sample data for now playing and next songs
  const nowPlaying = [
    {
      id: '1',
      image: 'https://storage.googleapis.com/a1aa/image/02FB64lAiFHp8m8kpSylOPN_MZkfEONzvGIVcvRr43g.jpg',
      title: 'ID 2022',
      artist: 'W/N # 267',
      duration: '3:45',
    },
  ];

  const nextSongs = [
    {
      id: '2',
      image: 'https://via.placeholder.com/48',
      title: 'Next Song Title',
      artist: 'Artist Name',
      duration: '3:45',
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/48',
      title: 'Another Song',
      artist: 'Another Artist',
      duration: '4:12',
    },
  ];

  return (
    <div className={`${styles.queueContainer} components_color margin-rl_components height_minus_10_notheader`}>
      <div className={styles.queueContent}>
        <h2 className={styles.queueTitle}>Queue</h2>

        <div className={styles.nowPlayingSection}>
          <h3 className={styles.sectionSubtitle}>Now Playing</h3>
          <ItemSong releases={nowPlaying} currentlyPlayingId={nowPlaying[0].id} />
        </div>

        <div className={styles.nextSongsSection}>
          <h3 className={styles.sectionSubtitle}>Next Songs</h3>
          <ItemSong releases={nextSongs} />
        </div>
      </div>
    </div>
  );
};

export default Queue;