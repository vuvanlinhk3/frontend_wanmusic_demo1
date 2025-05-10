// src/pages/DashBoardPage.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import SkeletonLoading from '../components/loading/SkeletonLoading.jsx';
import Loading from '../components/loading/Loading.jsx';
import EditProfile from './EditProfile.jsx';
import Setting from './Setting.jsx';
import Profile from './Profile.jsx';
import { AuthContext } from '../context/AuthContext.jsx';

const DashBoardPage = () => {
  const { user, token, loading: authLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get('query');

  const [activeSection, setActiveSection] = useState('ContainerMain');

  // Nếu có query từ tìm kiếm, chuyển section sang SearchResult
  useEffect(() => {
    if (query) {
      setActiveSection('SearchResult');
    }
  }, [query]);

  // Component bao bọc ContainerMain với loading
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

  // Hàm xử lý lưu và hủy trong EditProfile
  const handleSave = (updatedData) => {
    console.log('Profile updated:', updatedData);
    setActiveSection('Profile'); // Quay lại Profile sau khi lưu
  };

  const handleCancel = () => {
    console.log('Edit cancelled');
    setActiveSection('Profile'); // Quay lại Profile sau khi hủy
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Library':
        return user && token ? (
          <Library />
        ) : (
          <div>
            Please <a href="/login">log in</a> to access your library.
          </div>
        );
      case 'NewReleases':
        return <NewReleaseDetails />;
      case 'MusicSection':
        return <MusicSection />;
      case 'SearchResult':
        return <SearchResult query={query} />;
      case 'ContainerMain':
        return <ContainerMainWithLoading />;
      case 'EditProfile':
        return user && token ? (
          <EditProfile userData={user} onSave={handleSave} onCancel={handleCancel} />
        ) : (
          <div>
            Please <a href="/login">log in</a> to edit your profile.
          </div>
        );
      case 'Setting':
        return user && token ? (
          <Setting />
        ) : (
          <div>
            Please <a href="/login">log in</a> to access settings.
          </div>
        );
      case 'Profile':
        return user && token ? (
          <Profile userData={user} />
        ) : (
          <div>
            Please <a href="/login">log in</a> to view your profile.
          </div>
        );
      default:
        return <ContainerMainWithLoading />;
    }
  };

  if (authLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="background_app"></div>
      <div className="home-page" style={{ display: 'flex' }}>
        <Navbar setActiveSection={setActiveSection} />
        <div style={{ flex: 1 }}>
          <Header setActiveSection={setActiveSection} />
          {renderSection()}
        </div>
        <Queue />
      </div>
    </>
  );
};

export default DashBoardPage;