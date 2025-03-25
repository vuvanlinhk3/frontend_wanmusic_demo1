// src/pages/HomePage.js
import React from 'react';
import Banner from '../components/Banner';
import RecentListening from '../components/RecentListening';
import ItemAlbum from '../components/ItemAlbum';
import NewRelease from '../components/NewRelease';
import TopMixes from '../components/TopMixes';
import SentimentalBolero from '../components/SentimentalBolero';
import '../styles/index.css';
import '../styles/base.modul.css';


const ContainerMain = () => {
  const sampleItems = [
    {
      imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Bảo Tàng Của Nuối Tiếc",
      alt: "Album Art 1"
    },
    {
      imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title 2",
      alt: "Album Art 2"
    },
    {
      imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "Song Title 3",
      alt: "Album Art 3"
    }
  ];

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
    // Add more sample albums as needed
  ];

  const sampleReleases = [
    {
      imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "ID 2022",
      subtitle: "WIN // 267",
      duration: "04:22",
      alt: "Album Art"
    },
    {
      imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "ID 2022",
      subtitle: "WIN // 267",
      duration: "04:22",
      alt: "Album Art"
    },
    {
      imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "ID 2022",
      subtitle: "WIN // 267",
      duration: "04:22",
      alt: "Album Art"
    },
    {
      imageUrl: "https://storage.googleapis.com/a1aa/image/Yp7m5DrBNL8nD1U64S6UMwknCOCxAfcPFTBQw5VTpGI.jpg",
      title: "ID 2022",
      subtitle: "WIN // 267",
      duration: "04:22",
      alt: "Album Art"
    },
    
    // Add more sample releases as needed
  ];
  return (
    <div className="main-content">
      <Banner />
      <RecentListening 
        items={sampleItems}
        title="Recent Listening"
        linkText="View All"
        linkUrl="/tracks"
      />
          <ItemAlbum 
            albums={sampleAlbums}
            title="You May Want To Listen"
          />
          <NewRelease
            releases={sampleReleases}
            title="New Release"
            linkText="View All"
            linkUrl="#"
          />
          <ItemAlbum 
            albums={sampleAlbums}
            title="Your Top Mixes"
          />
      </div>
  );
};

export default ContainerMain;