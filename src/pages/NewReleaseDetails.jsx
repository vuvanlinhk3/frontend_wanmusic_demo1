import React, { useState } from 'react';
import styles from '../styles/NewReleaseDetails.module.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import NewReleaseMusic from '../components/NewReleaseMusic';
import NewReleaseAlbum from '../components/NewReleaseAlbum';

const NewReleaseDetails = () => {
  const [activeTab, setActiveTab] = useState('songs'); // 'songs' or 'albums'

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
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>
          Mới Phát Hành
          <PlayCircleOutlineIcon className={styles.titleIcon} />
        </h1>

        <div className={styles.tabContainer}>
          <button 
            className={activeTab === 'songs' ? styles.activeTab : styles.inactiveTab}
            onClick={() => handleTabClick('songs')}
          >
            BÀI HÁT
          </button>
          <button 
            className={activeTab === 'albums' ? styles.activeTab : styles.inactiveTab}
            onClick={() => handleTabClick('albums')}
          >
            ALBUM
          </button>
        </div>

        <div className={styles.contentContainer}>
          {activeTab === 'songs' && <NewReleaseMusic />}
          {activeTab === 'albums' && (
            <NewReleaseAlbum
              albums={sampleAlbums}
              title=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewReleaseDetails;