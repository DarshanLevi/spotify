import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SongGrid from "./components/SongGrid";
import PlayerBar from "./components/PlayerBar";
import "./App.css";

function App() {
  const [currentSong, setCurrentSong] = useState(null); // Track selected song
  const [isPlaying, setIsPlaying] = useState(false);   // Track play/pause

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true); // Start playing when a song is selected
  };

  return (
    <div className="app">
      {/* Top Navigation */}
      <Navbar />

      {/* Songs Grid */}
      <SongGrid 
        onSongSelect={handleSongSelect} 
        currentSong={currentSong} 
      />

      {/* Player Bar at bottom */}
      <PlayerBar
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
