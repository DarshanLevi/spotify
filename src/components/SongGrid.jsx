import Sidebar from "./Sidebar";
import SongCard from "./SongCard";
import "./SongGrid.css";
import songs from "../data/mockData.js";

function SongGrid({ onSongSelect, currentSong }) {

  const handleSongClick = (song) => {
    if (onSongSelect) {
      onSongSelect(song);
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
