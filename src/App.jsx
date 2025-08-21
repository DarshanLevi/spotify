import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SongGrid from "./components/SongGrid";
import PlayerBar from "./components/PlayerBar";
import "./App.css";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="app">
      <Navbar />

      <SongGrid 
        onSongSelect={handleSongSelect} 
        currentSong={currentSong} 
      />

      <PlayerBar
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
