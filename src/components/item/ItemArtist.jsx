import React from 'react';
import styles from '../../styles/item/ItemArtist.module.css';

const ItemArtist = ({ name, imageUrl }) => (
  <div className={styles.card}>
    <img src={imageUrl} alt={`Artist ${name}`} className={styles.image} />
    <p>{name}</p>
  </div>
);

export default ItemArtist;