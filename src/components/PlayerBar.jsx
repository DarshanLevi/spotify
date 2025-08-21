import React, { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaRandom,
  FaRedoAlt,
  FaVolumeUp,
} from "react-icons/fa";
import "./PlayerBar.css";

function PlayerBar({ currentSong, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);


useEffect(() => {
  if (!audioRef.current) return;

  if (currentSong) {
    audioRef.current.src = currentSong.url;
    if (isPlaying) {
      audioRef.current.play().catch((err) => console.warn("Play blocked:", err));
    } else {
      audioRef.current.pause();
    }
  }
}, [currentSong, isPlaying]);


  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const percentage =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percentage || 0);
    }
  };


const togglePlay = () => {
  console.log("Play/Pause clicked");
  setIsPlaying((prev) => !prev);
};

  return (
    <div className="player-bar">
      <div className="song-info">
        {currentSong ? (
          <>
            <img
              src={currentSong.image}
              alt={currentSong.title}
              className="album-cover"
            />
            <div className="song-text">
              <p className="song-title">{currentSong.title}</p>
              <p className="song-artist">{currentSong.desc}</p>
            </div>
          </>
        ) : (
          <p>Select a song</p>
        )}
      </div>


      <div className="player-center">
        <div className="player-controls">
          <FaRandom className="icon small" />
          <FaStepBackward className="icon" />
          {isPlaying ? (
            <FaPause className="icon play" onClick={togglePlay} />
          ) : (
            <FaPlay className="icon play" onClick={togglePlay} />
          )}
          <FaStepForward className="icon" />
          <FaRedoAlt className="icon small" />
        </div>
        <div className="progress-container">
          <span className="time">
            {audioRef.current ? Math.floor(audioRef.current.currentTime) : 0}s
          </span>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="time">
            {audioRef.current && !isNaN(audioRef.current.duration)
              ? Math.floor(audioRef.current.duration)
              : 0}
            s
          </span>
        </div>
      </div>

      <div className="player-extra">
        <FaVolumeUp className="icon small" />
        <input
          type="range"
          className="volume-slider"
          onChange={(e) => {
            if (audioRef.current) {
              audioRef.current.volume = e.target.value / 100;
            }
          }}
        />
      </div>

     <audio
  ref={audioRef}
  src={currentSong?.url || undefined}
  onTimeUpdate={handleTimeUpdate}
  onEnded={() => setIsPlaying(false)}
/>
    </div>
  );
}

export default PlayerBar;
