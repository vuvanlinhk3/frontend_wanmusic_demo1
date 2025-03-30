import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/unlock/UnlockFeatures.module.css";

const UnlockFeatures = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Unlock All Features</h2>
      <p className={styles.subheading}>Log in to access your library and more</p>
      <button className={styles.button} onClick={handleLoginClick}>
        Login Now
      </button>
    </div>
  );
};

export default UnlockFeatures;