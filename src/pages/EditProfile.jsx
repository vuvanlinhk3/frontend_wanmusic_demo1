import React from 'react';
import styles from '../styles/EditProfile.module.css'; // Import CSS module
import { Avatar } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const EditProfile = ({ userData, onSave, onCancel }) => {
  const { username, email, gender, dobDay, dobMonth, dobYear, nationality } = userData;

  return (
    <div className={`${styles.container} main-content_components components_color components_color_margin_top`}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <Avatar className={styles.avatar} />
          <div className={styles.userDetails}>
            <span className={styles.username}>{username}</span>
            <label className={styles.changePhoto}>
              <input type="file" accept="image/*" style={{ display: 'none' }} />
              <PhotoCameraIcon fontSize="small" />
            </label>
          </div>
        </div>
      </div>

      <h2 className={styles.title}>Edit a Profile</h2>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Username</label>
          <input type="text" defaultValue={username} />
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input type="email" defaultValue={email} />
        </div>

        <div className={styles.formGroup}>
          <label>Giới tính</label>
          <select defaultValue={gender}>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Ngày sinh</label>
          <div className={styles.dateFields}>
            <input type="text" defaultValue={dobDay} placeholder="DD" />
            <input type="text" defaultValue={dobMonth} placeholder="MM" />
            <input type="text" defaultValue={dobYear} placeholder="YYYY" />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Quốc tịch khu vực</label>
          <select defaultValue={nationality}>
            <option value="Việt Nam">Việt Nam</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className={styles.saveButton} onClick={onSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
