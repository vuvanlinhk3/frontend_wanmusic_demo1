// src/pages/DashBoardPage.js
import React, { useState, useEffect } from 'react';
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
import SkeletonLoading from '../components/loading/SkeletonLoading.jsx'
import Loading from '../components/loading/Loading.jsx'
import EditProfile from './EditProfile.jsx';
import Setting from './Setting.jsx'
import Profile from './Profile.jsx';
const DashBoardPage = () => {

  const userData = {
    username: 'vanlinhk3',
    email: 'vantinh13022003@gmail.com',
    gender: 'Nam',
    dobDay: '12',
    dobMonth: '',
    dobYear: '2003',
    nationality: 'Việt Nam',
  };
  const handleSave = () => {
    console.log('Profile saved');
  };
  
  const handleCancel = () => {
    console.log('Cancelled');
  };





  const [activeSection, setActiveSection] = useState('ContainerMain'); // Mặc định là SearchResult


  const ContainerMainWithLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    return isLoading ? <SkeletonLoading /> : <ContainerMain />;
  };



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
       return <ContainerMainWithLoading />;
      case 'EditProfile':
        return <EditProfile userData={userData} onSave={handleSave} onCancel={handleCancel} />;
      case 'Setting':
        return <Setting />;
      case 'Profile':
        return <Profile />;
      default:
        return <SearchResult />;
    }
  };

  return (
    <>
    <div className='background_app'></div>
    <div className="home-page">
      <Navbar setActiveSection={setActiveSection} />
      <Header setActiveSection={setActiveSection}/>
      {renderSection()}
      <Queue />
    </div>
    </>
    
  );
};

export default DashBoardPage;