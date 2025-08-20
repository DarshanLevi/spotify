import React from "react";
import "./SongCard.css";

function SongCard({ song, onClick }) {
  return (
    <div className="song-card" onClick={() => onClick(song)}>
      <img src={song.image} alt={song.title} />
      <p>{song.title}</p>
    </div>
  );
}

export default SongCard;
