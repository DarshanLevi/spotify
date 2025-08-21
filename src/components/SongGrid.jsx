import React from "react";
import Sidebar from "./Sidebar";
import SongCard from "./SongCard";
import "./SongGrid.css";
import songs from "../data/mockData.js";

function SongGrid({ setCurrentSong, setIsPlaying, currentSong }) {
const handleSongClick = (song) => {
  if (setCurrentSong) setCurrentSong(song);
  if (setIsPlaying) setIsPlaying(true);
    const audioEl = document.querySelector("audio");
  if (audioEl) {
    audioEl.src = song.url;  // ensure correct src
    audioEl.play().catch((err) => console.warn("Play blocked:", err));
  }
};

  return (
    <div className="song-grid">
      <Sidebar />
      <div className="songs">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            onSongSelect={handleSongClick}
            isActive={currentSong?.id === song.id}
          />
        ))}
      </div>
    </div>
  );
}

export default SongGrid;
