// components/SearchHeader.jsx
import React, { useState } from 'react';
import styles from '../../styles/stylesSearch/SearchHeader.module.css';

const SearchHeader = () => {
  const filters = ['ALL', 'SONG', 'ALBUM', 'ARTIST', 'MV'];
  const [activeFilter, setActiveFilter] = useState('ALL');

  return (
    <div className={`${styles.header}`}>
      <div className={styles.buttonContainer}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`${styles.button} ${activeFilter === filter ? styles.active : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHeader;