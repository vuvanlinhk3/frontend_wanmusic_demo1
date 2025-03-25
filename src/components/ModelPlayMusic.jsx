import React from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import LyricsIcon from "@mui/icons-material/Lyrics";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import styles from "../styles/MusicPlayer.module.css";

export default function MusicPlayer() {
  return (
    <div className={styles.musicPlayerContainer}>
      {/* Left Section */}
      <div className={styles.musicPlayerLeft}>
        <img
          src="https://placehold.co/80x80"
          alt="Album Cover"
          className={styles.albumCover}
        />
        <div className={styles.albumInfo}>
          <h2 className={styles.albumTitle}>Bảo tàng của nuối tiếc</h2>
          <p className={styles.albumArtist}>Vũ</p>
        </div>
      </div>

      {/* Center Section */}
      <div className={styles.musicPlayerCenter}>
        <div className={styles.playerControls}>
          <button className={styles.controlButton}>
            <ShuffleIcon /> {/* Shuffle */}
          </button>
          <button className={styles.controlButton}>
            <SkipPreviousIcon /> {/* Previous */}
          </button>
          <button className={styles.playButton}>
            <PlayArrowIcon /> {/* Play */}
          </button>
          <button className={styles.controlButton}>
            <SkipNextIcon /> {/* Next */}
          </button>
          <button className={styles.controlButton}>
            <RepeatIcon /> {/* Repeat */}
          </button>
        </div>
        <div className={styles.progressBar}>
          <span className={styles.time}>0:00</span>
          <input type="range" className={styles.progressSlider} />
          <span className={styles.time}>4:40</span>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.musicPlayerRight}>
        <button className={styles.actionButton}>
          <VideoLibraryIcon /> {/* Watch MV */}
        </button>
        <button className={styles.actionButton}>
          <LyricsIcon /> {/* Lyrics */}
        </button>
        <button className={styles.actionButton}>
          <QueueMusicIcon /> {/* Queue */}
        </button>
        <div className={styles.volumeControl}>
          <VolumeUpIcon />
          <input type="range" className={styles.volumeSlider} />
        </div>
        <button className={styles.actionButton}>
          <FullscreenExitIcon /> {/* Minimize */}
        </button>
        <button className={styles.actionButton}>
          <FullscreenIcon /> {/* Fullscreen */}
        </button>
      </div>
    </div>
  );
}