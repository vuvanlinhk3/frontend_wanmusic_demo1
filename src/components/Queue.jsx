import React from 'react';
import styles from '../styles/Queue.module.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Queue = () => {
  const nextSongs = [
    {
      imageUrl: "https://via.placeholder.com/48",
      title: "Next Song Title",
      subtitle: "Artist Name",
      duration: "3:45",
      alt: "Next Song Cover"
    },
    {
      imageUrl: "https://via.placeholder.com/48",
      title: "Another Song",
      subtitle: "Another Artist",
      duration: "4:12",
      alt: "Another Song Cover"
    }
  ];

  return (
    <div className={`${styles.queueContainer} components_color`}>
      <div className={styles.queueContent}>
        <h2 className={styles.queueTitle}>Queue</h2>
        
        <div className={styles.nowPlayingSection}>
          <h3 className={styles.sectionSubtitle}>Now playing</h3>
          <div className={`${styles.songItem} ${styles.active}`}> {/* Added active class */}
            <div className={styles.songContent}>
              <img
                src="https://storage.googleapis.com/a1aa/image/02FB64lAiFHp8m8kpSylOPN_MZkfEONzvGIVcvRr43g.jpg"
                alt="Album cover"
                className={styles.albumCover}
              />
              <div className={styles.songDetails}>
                <p className={styles.songTitle}>ID 2022</p>
                <p className={styles.songSubtitle}>W/N # 267</p>
              </div>
            </div>
            <div className={styles.songActions}>
              <MoreHorizIcon className={styles.actionIcon} />
            </div>
          </div>
        </div>

        <div className={styles.nextSongsSection}>
          <h3 className={styles.sectionSubtitle}>Next Songs</h3>
          <div className={styles.nextSongsList}>
            {nextSongs.map((song, index) => (
              <div key={index} className={styles.nextSongItem}>
                <div className={styles.songContent}>
                  <img
                    src={song.imageUrl}
                    alt={song.alt}
                    className={styles.nextSongImage}
                  />
                  <div className={styles.songInfo}>
                    <span className={styles.nextSongTitle}>{song.title}</span>
                    <p className={styles.nextSongSubtitle}>{song.subtitle}</p>
                  </div>
                </div>
                <div className={styles.durationContainer}>
                  <span className={styles.songDuration}>{song.duration}</span>
                  <MoreHorizIcon className={styles.actionIcon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queue;