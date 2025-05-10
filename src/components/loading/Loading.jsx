import React from 'react';
import styles from '../../styles/loading/Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;