import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { LOAD_LOCAL_SONGS } from "../../actions/localSongs";
import { loadLocalSongs } from "../../actions/localSongs";

const LocalSongs = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.localSongs.songs);

  useEffect(() => {
    dispatch(loadLocalSongs());
  }, [dispatch]);

  return (
    <div>
      <h2>Local Songs</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <a href={song.file}>{song.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalSongs;
