import React, { useState, useEffect } from 'react';
import styles from '../styles/MusicSection.module.css';
import MixSongItem from '../components/MixSongItem';

const MusicSection = ({ title, items, isHorizontal = false, buttons = [] }) => {
  const [dominantColor, setDominantColor] = useState('#00FF00'); // Màu xanh lá mặc định

  const mixSongData = {
    maintitle:"Your top mixes",
    imageUrl: 'https://storage.googleapis.com/a1aa/image/YP-TjYPuMBE9XXK0Uf7wKBRVv1NOmo73ZB9SSFCyp9E.jpg',
    title: 'Vũ Mix',
    subtitle: "Bão Tàng Của Tiếc Nuối",
    artists: 'Vũ, LowG, Binz, Hà Anh Tuấn and more',
    alt: 'Cover of Vũ Mix featuring various artists',
  };

  useEffect(() => {
    const extractDominantColor = () => {
      const img = new Image();
      img.crossOrigin = 'Anonymous'; // Xử lý CORS
      img.src = mixSongData.imageUrl;

      img.onload = () => {
        try {
          // Tạo canvas ẩn
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('Không tạo được canvas context');

          // Đặt kích thước canvas bằng kích thước hình ảnh
          canvas.width = img.width;
          canvas.height = img.height;

          // Vẽ hình ảnh lên canvas
          ctx.drawImage(img, 0, 0, img.width, img.height);

          // Lấy dữ liệu pixel
          const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

          // Tính màu trung bình (cách đơn giản nhất)
          let r = 0, g = 0, b = 0, count = 0;
          for (let i = 0; i < imageData.length; i += 4) {
            // Mỗi pixel có 4 giá trị: R, G, B, A (alpha)
            const alpha = imageData[i + 3];
            if (alpha > 0) { // Chỉ tính pixel không trong suốt
              r += imageData[i]; // Red
              g += imageData[i + 1]; // Green
              b += imageData[i + 2]; // Blue
              count++;
            }
          }

          // Tính trung bình
          r = Math.floor(r / count);
          g = Math.floor(g / count);
          b = Math.floor(b / count);

          // Chuyển RGB thành Hex
          const rgbToHex = (r, g, b) =>
            '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
          const hexColor = rgbToHex(r, g, b);
          setDominantColor(hexColor);
        } catch (error) {
          console.error('Lỗi khi trích xuất màu:', error);
          setDominantColor('#00FF00'); // Màu xanh lá mặc định nếu lỗi
        }
      };

      img.onerror = () => {
        console.error('Không tải được hình ảnh để trích xuất màu');
        setDominantColor('#00FF00');
      };
    };

    if (mixSongData.imageUrl) {
      extractDominantColor();
    }
  }, [mixSongData.imageUrl]);

  return (
    <div className={`${styles.section} main-content`}>
      <h2 className={styles.title}>{title}</h2>

      {buttons.length > 0 && (
        <div className={styles.buttonContainer}>
          {buttons.map((button, index) => (
            <button key={index} className={styles.button}>
              {button}
            </button>
          ))}
        </div>
      )}

      <MixSongItem
        maintitle ={mixSongData.maintitle}
        imageUrl={mixSongData.imageUrl}
        title={mixSongData.title}
        subtitle = {mixSongData.subtitle}
        artists={mixSongData.artists}
        dominantColor={dominantColor}
        alt={mixSongData.alt}
      />
    </div>
  );
};

export default MusicSection;