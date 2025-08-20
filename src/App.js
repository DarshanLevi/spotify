import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SongGrid from "./components/SongGrid";
import PlayerBar from "./components/PlayerBar";
import "./App.css";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app">
      <Navbar />
      <SongGrid
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
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
