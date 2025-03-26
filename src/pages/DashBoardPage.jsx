// src/pages/DashBoardPage.js
import React, { useState } from 'react';
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
  const [activeSection, setActiveSection] = useState('ContainerMain'); // Mặc định là SearchResult

  const renderSection = () => {
    switch (activeSection) {
      case 'Library':
        return <Library />;
      case 'NewReleases':
        return <NewReleaseDetails />;
      case 'MusicSection':
        return <MusicSection />;
      case 'SearchResult':
        return <SearchResult />;
      case 'ContainerMain':
        return <ContainerMain />;
      default:
        return <SearchResult />;
    }
  };

  return (
    <div className="home-page">
      <Navbar setActiveSection={setActiveSection} />
      <Header />
      {renderSection()}
      <Queue />
    </div>
  );
};

export default DashBoardPage;