// Setting.jsx
import React, { useState } from 'react';
import styles from '../styles/Setting.module.css';
import { 
  PersonOutline, 
  LanguageOutlined, 
  Brightness4Outlined, 
  LockOutlined, 
  PolicyOutlined, 
  ChevronRight,
  Refresh
} from '@mui/icons-material';

const Setting = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showReload, setShowReload] = useState(false);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    setShowReload(true);
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={`components_color_margin_top ${styles.container} main-content_components components_color`}>
      <h2 className={styles.title}>Settings</h2>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Account</h3>
        <div className={styles.item}>
          <div className={styles.itemLeft}>
            <PersonOutline className={styles.icon} />
            <span>Edit login method</span>
          </div>
          <div className={styles.itemRight}>
            <ChevronRight className={styles.arrowIcon} />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Switch language</h3>
        <div className={styles.item}>
          <div className={styles.itemLeft}>
            <LanguageOutlined className={styles.icon} />
            <span>Language</span>
            <span className={styles.subText}>Changes will be applied after you restart the app</span>
          </div>
          <div className={styles.itemRight}>
            <select 
              className={styles.languageSelect}
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="Vietnamese">Vietnamese</option>
            </select>
            {showReload && (
              <button className={styles.reloadButton} onClick={handleReload}>
                <Refresh className={styles.reloadIcon} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Switch interface light/dark mode</h3>
        <div className={styles.item}>
          <div className={styles.itemLeft}>
            <Brightness4Outlined className={styles.icon} />
            <span>Change interface</span>
          </div>
          <div className={styles.itemRight}>
            <label className={styles.switch}>
              <input type="checkbox" defaultChecked />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Change password</h3>
        <div className={styles.item}>
          <div className={styles.itemLeft}>
            <LockOutlined className={styles.icon} />
            <span>Change password</span>
          </div>
          <div className={styles.itemRight}>
            <ChevronRight className={styles.arrowIcon} />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Policies & terms</h3>
        <div className={styles.item}>
          <div className={styles.itemLeft}>
            <PolicyOutlined className={styles.icon} />
            <span>Support</span>
          </div>
          <div className={styles.itemRight}>
            <ChevronRight className={styles.arrowIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;