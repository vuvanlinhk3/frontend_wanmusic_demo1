import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/item/ItemSong.module.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ItemSong = ({ releases = [] }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const modalRef = useRef(null); // Reference to the modal for click-outside detection

  // Toggle modal for a specific song
  const toggleModal = (song) => {
    setSelectedSong(selectedSong?.id === song.id ? null : song);
  };

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedSong(null); // Close modal if click is outside
      }
    };

    // Add event listener when modal is open
    if (selectedSong) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedSong]);

  return (
    <div className={styles.releaseList}>
      {releases.length > 0 ? (
        releases.map((release) => (
          <div key={release.id} className={styles.releaseItem}>
            <div className={styles.releaseInfo}>
              <img
                src={release.image}
                alt={`Album cover of ${release.title}`}
                className={styles.albumImage}
              />
              <div>
                <div className={styles.releaseTitle}>{release.title}</div>
                <div className={styles.artist}>{release.artist}</div>
              </div>
            </div>
            <div className={styles.durationWrapper}>
              <span className={styles.duration}>{release.duration}</span>
              <div className={styles.iconContainer} onClick={() => toggleModal(release)}>
                <MoreHorizIcon />
                {selectedSong?.id === release.id && (
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

export default ItemSong;