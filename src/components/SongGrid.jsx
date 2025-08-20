import React from "react";
import Sidebar from "./Sidebar";
import SongCard from "./SongCard";
import "./SongGrid.css";

const songs = [
  {
    id: 1,
    title: "Song One",
    image: "https://via.placeholder.com/150",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    title: "Song Two",
    image: "https://via.placeholder.com/150",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "Song Three",
    image: "https://via.placeholder.com/150",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    title: "Song Four",
    image: "https://via.placeholder.com/150",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: 5,
    title: "Song Five",
    image: "https://via.placeholder.com/150",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
];

function SongGrid({ setCurrentSong, setIsPlaying }) {
  const handleSongClick = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="song-grid">
      <Sidebar />
      <div className="songs">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} onClick={handleSongClick} />
        ))}
      </div>
    </div>
  );
}

export default SongGrid;
