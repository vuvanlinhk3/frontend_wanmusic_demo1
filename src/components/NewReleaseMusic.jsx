import React, { useEffect, useState } from 'react';
import styles from '../styles/NewReleaseMusic.module.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const NewReleaseMusic = () => {
  const [releases, setReleases] = useState([]);
  const currentDate = new Date(); // Current date for calculating relative time

  // Function to calculate relative time
  const getRelativeTime = (releaseDate) => {
    const release = new Date(releaseDate);
    const diffTime = currentDate - release;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Hôm nay';
    if (diffDays === 1) return '1 ngày trước';
    return `${diffDays} ngày trước`;
  };

  // Function to format duration (assuming we get duration in seconds from API later)
  const formatDuration = (seconds) => {
    if (!seconds) return '00:00'; // Default if no duration is provided
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch('http://localhost:3000/songs');
        const data = await response.json();
        
        // Map API data to component format
        const formattedReleases = data.map((song) => ({
          title: song.title,
          artist: song.artist?.name || 'Unknown Artist',
          image: song.cover_url.startsWith('http') ? song.cover_url : `http://localhost:3000${song.cover_url}`,
          released: getRelativeTime(song.release_date),
          duration: formatDuration(song.duration|| null),
          premium: false
        }));

        setReleases(formattedReleases);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchReleases();
  }, []);

  return (
    <>
        <div className={styles.headerGrid}>
          <div>BÀI HÁT</div>
          <div className={styles.centered}>PHÁT HÀNH</div>
          <div className={styles.rightAligned}>THỜI GIAN</div>
        </div>

        <div className={styles.releaseList}>
          {releases.length > 0 ? (
            releases.map((release, index) => (
              <div
                key={index}
                className={`${styles.releaseItem} ${
                  index % 2 === 0 ? styles.evenItem : styles.oddItem
                }`}
              >
                <div className={styles.releaseInfo}>
                  <img
                    src={release.image}
                    alt={`Album cover of ${release.title}`}
                    className={styles.albumImage}
                  />
                  <div>
                    <div className={styles.releaseTitle}>
                      {release.title}
                      {release.premium && (
                        <span className={styles.premiumBadge}>PREMIUM</span>
                      )}
                    </div>
                    <div className={styles.artist}>{release.artist}</div>
                  </div>
                </div>
                <div className={styles.releaseDate}>{release.released}</div>
                <div className={styles.durationWrapper}>
                  <span className={styles.duration}>{release.duration}</span>
                  <div className={styles.iconContainer}>
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.loading}>Đang tải...</div>
          )}
        </div>
    </>
  );
};

export default NewReleaseMusic;