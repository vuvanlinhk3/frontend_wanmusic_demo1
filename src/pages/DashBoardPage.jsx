// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header.jsx';
import Queue from '../components/Queue.jsx';
import '../styles/index.css';
import '../styles/base.modul.css';
import ContainerMain from './ContainerMain.jsx';
import NewReleaseDetails from './NewReleaseDetails.jsx';
import ModelPlayMusic from '../components/ModelPlayMusic.jsx';
import MusicSection from './MusicSection.jsx';
import Library from './Library.jsx';
import SearchResult from './SearchResult.jsx';


const DashBoardPage = () => {
  const customPlaylists = [
    {
      imageUrl: "https://example.com/image1.jpg",
      alt: "Album cover 1",
      name: "Playlist 1",
      songCount: 8
    },
    // Add more playlists as needed
  ];

  const customSongs = [
    {
      imageUrl: "https://example.com/song1.jpg",
      alt: "Song cover 1",
      date: "11/2022",
      title: "Song Title 1",
      duration: "3:45"
    },
    // Add more songs as needed
  ];
  return (
    <div className="home-page">
      <Navbar />
      <Header />


      {/* <ContainerMain/> */}
      {/* <NewReleaseDetails/> */}
      {/* <Library /> */}
      {/* <MusicSection/> */}
      <SearchResult/>


      <Queue/>
      <ModelPlayMusic />
    </div>
  );
};

export default DashBoardPage;