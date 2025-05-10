import React from 'react';
import styles from '../../styles/loading/SkeletonLoading.module.css';

const SkeletonLoading = () => {
  return (
    <div className={`components_color_margin_top ${styles.container} main-content components_color`}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <div className={styles.bannerItem}></div>
        <div className={styles.bannerItem}></div>
        <div className={styles.bannerItem}></div>
      </div>

      {/* Recent Listening Section */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}></div>
        <div className={styles.cardRow}>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.cardText}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.cardText}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.cardText}></div>
          </div>
        </div>
      </div>

      {/* You May Want to Listen Section */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}></div>
        <div className={styles.cardRow}>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.cardText}></div>
            <div className={styles.cardSubText}></div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.cardText}></div>
            <div className={styles.cardSubText}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;