import React, { useEffect } from 'react';
import '../styles/banner.css';

const Banner = () => {
  const banners = [
    {
      src: "https://storage.googleapis.com/a1aa/image/2XDqIVFRj7XceCq9mMvVBVPiWxMLBw2BYmVFqmT8GkU.jpg",
      alt: "Today Hits",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/U27qHloJO8AjS8wmKDf0EahNnnzpSTkVdrdMv83UM3I.jpg",
      alt: "Nhac Moi Moi Tuan",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/w5KaFKXnpGUwGikvOOC0OFF9lbFyPje29hr9qBrA5Ks.jpg",
      alt: "Hot Hits Vietnam",
    },
  ];

  useEffect(() => {
    const grid = document.querySelector('.banner-grid');
    const images = Array.from(grid.children);
    const totalImages = banners.length;

    const updatePositions = () => {
      const containerWidth = grid.parentElement.offsetWidth; // Chiều rộng container
      const imageMaxWidth = 360; // Lấy từ CSS (max-width của banner-image)
      const gap = 20; // Khoảng cách giữa các ảnh
      const totalContentWidth = Math.min(totalImages * (imageMaxWidth + gap) - gap, containerWidth); // Tổng chiều rộng nội dung
      const offset = (containerWidth - totalContentWidth) / 2; // Khoảng cách để căn giữa

      // Tính vị trí cho từng ảnh, căn giữa
      const positions = Array.from({ length: totalImages }, (_, index) => offset + index * (imageMaxWidth + gap));
      return positions;
    };

    let positions = updatePositions(); // Khởi tạo vị trí ban đầu

    const doiViTri = () => {
      const newPositions = [...positions];
      const dauTien = newPositions.shift(); // Đẩy ảnh đầu ra cuối
      newPositions.push(dauTien);

      images.forEach((img, index) => {
        img.style.transform = `translateX(${newPositions[index]}px)`;
      });

      positions = newPositions; // Cập nhật vị trí mới
    };

    // Cập nhật vị trí ban đầu
    images.forEach((img, index) => {
      img.style.transform = `translateX(${positions[index]}px)`;
    });

    // Xử lý resize
    const handleResize = () => {
      positions = updatePositions();
      images.forEach((img, index) => {
        img.style.transform = `translateX(${positions[index]}px)`;
      });
    };
    window.addEventListener('resize', handleResize);

    const interval = setInterval(doiViTri, 3000); // Đổi chỗ mỗi 3 giây
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [banners]);

  return (
    <div className="banner-container">
      <div className="banner-grid">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.src}
            alt={banner.alt}
            className="banner-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;