// import { LOAD_LOCAL_SONGS } from "./localSongs";
// import { loadLocalSongs } from "../reducers/localSongss";

export const loadLocalSongs = () => async (dispatch) => {
  try {
    const response = await fetch("/api/songs");
    const songs = await response.json();
    dispatch({ type: loadLocalSongs, payload: songs });
  } catch (error) {
    console.error(error);
  }
};
