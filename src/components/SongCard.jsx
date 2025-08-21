import React from "react";
import "./SongCard.css";

function SongCard({ song, onSongSelect }) {
const handleClick = () => {
  console.log("Song clicked:", song.title); // <-- test here
  if (onSongSelect) {
    onSongSelect(song);
  }
};

  return (
    <div className="song-card" onClick={handleClick}>
      <img src={song.image} alt={song.title} />
      <div className="title-desc">
        <h3>{song.title}</h3>
        <p>{song.desc}</p>
      </div>
    </div>
  );
}

export default SongCard;
