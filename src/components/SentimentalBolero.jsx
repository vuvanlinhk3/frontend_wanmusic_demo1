// src/components/SentimentalBolero.js
import React from 'react';
import '../styles/sentimental-bolero.css';

const SentimentalBolero = () => {
  return (
    <div className="sentimental-bolero">
      <h2 className="section-title">Nhạc trữ tình & bolero</h2>
      <div className="album-grid">
        <div className="album-item">
          <img 
            src="https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg" 
            alt="Album Art" 
            className="album-image" 
          />
          <span className="album-title">Nhạc remix thịnh hành</span>
          <p className="album-subtitle">Vũ, Sơn tùng m-tp</p>
        </div>
        <div className="album-item">
          <img 
            src="https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg" 
            alt="Album Art" 
            className="album-image" 
          />
          <span className="album-title">Nhạc remix thịnh hành</span>
          <p className="album-subtitle">Vũ, Sơn tùng m-tp</p>
        </div>
        <div className="album-item">
          <img 
            src="https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg" 
            alt="Album Art" 
            className="album-image" 
          />
          <span className="album-title">Nhạc remix thịnh hành</span>
          <p className="album-subtitle">Vũ, Sơn tùng m-tp</p>
        </div>
        <div className="album-item">
          <img 
            src="https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg" 
            alt="Album Art" 
            className="album-image" 
          />
          <span className="album-title">Nhạc remix thịnh hành</span>
          <p className="album-subtitle">Vũ, Sơn tùng m-tp</p>
        </div>
      </div>
    </div>
  );
};

export default SentimentalBolero;