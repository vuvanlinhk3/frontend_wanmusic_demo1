import React, { useState, useEffect, useRef } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; // Import Play button icon
import styles from '../../styles/item/SongCard.module.css';

const SongCard = ({ releases = [] }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const modalRef = useRef(null);

  const toggleModal = (song) => {
    setSelectedSong(selectedSong?.id === song.id ? null : song);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedSong(null);
      }
    };

    if (selectedSong) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedSong]);

  return (
    <div className={styles.releaseList}>
      {releases.length > 0 ? (
        releases.map((release, index) => (
          <div key={release.id} className={styles.releaseItem}>
            <div className={styles.trackNumber}>
              <span className={styles.number}>{index + 1}</span>
              <PlayArrowIcon className={styles.playIcon} />
            </div>
            <img
              src={release.image}
              alt={`Album cover of ${release.title}`}
              className={styles.albumImage}
            />
            <div className={styles.titleArtist}>
              <div className={styles.releaseTitle}>{release.title}</div>
              <div className={styles.artist}>{release.artist}</div>
            </div>
            <div className={styles.album}>{release.album}</div>
            <div className={styles.durationWrapper}>
              <span className={styles.duration}>{release.duration}</span>
              <div className={styles.iconContainer} onClick={() => toggleModal(release)}>
                <MoreHorizIcon />
                {selectedSong?.id === release.id && ( // Fixed typo: song.id -> release.id
                  <div className={styles.modal} ref={modalRef}>
                    <div className={styles.modalContent}>
                      <button className={styles.modalOption}>Add to Playlist</button>
                      <button className={styles.modalOption}>Like Song</button>
                      <button className={styles.modalOption}>Share</button>
                      {release.inPlaylist && (
                        <button className={styles.modalOption}>Remove from Playlist</button>
                      )}
                      {release.downloaded && (
                        <button className={styles.modalOption}>Delete Download</button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.loading}>Không có bài hát nào</div>
      )}
    </div>
  );
};

export default SongCard;