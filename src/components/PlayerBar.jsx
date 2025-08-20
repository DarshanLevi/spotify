import React, { useRef, useEffect } from "react";
import "./PlayerBar.css";

function PlayerBar({ currentSong, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentSong && isPlaying) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player-bar">
      {currentSong ? (
        <>
          <p>Now Playing: {currentSong.title}</p>
          <button onClick={togglePlay}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <audio ref={audioRef} src={currentSong.url} />
        </>
      ) : (
        <p>Select a song to play</p>
      )}
    </div>
  );
}

export default PlayerBar;
