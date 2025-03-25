// src/components/NewRelease.js
import React from 'react';
import styles from '../styles/NewRelease.module.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const NewRelease = ({
  releases = [],
  title = "New Release",
  linkText = "ALL",
  linkUrl = "#"
}) => {
  return (
    <div className={styles.newRelease}>
      <div className={styles.newReleaseHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <a href={linkUrl} className={styles.newReleaseLink}>{linkText}</a>
      </div>
      <div className={styles.newReleaseItems}>
        {releases.map((release, index) => (
          <div key={index} className={styles.newReleaseItem}>
            <div className={styles.newReleaseContent}>
              <img
                src={release.imageUrl || "https://via.placeholder.com/48"}
                alt={release.alt || "Album Art"}
                className={styles.newReleaseImage}
              />
              <div className={styles.newReleaseDetails}>
                <span className={styles.newReleaseTitle}>{release.title}</span>
                <p className={styles.newReleaseSubtitle}>{release.subtitle}</p>
              </div>
            </div>
            <div className={styles.durationContainer}>
              <span className={styles.newReleaseDuration}>{release.duration}</span>
              <span className={styles.ellipsisIcon}><MoreHorizIcon  /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewRelease;