import { LOAD_LOCAL_SONGS } from "../actions/localSongs";

const path = require("path-browserify");

export const loadLocalSongs = () => ({
  type: LOAD_LOCAL_SONGS,
  payload: () => {
    return new Promise((resolve, reject) => {
      const songsPath = path.join(__dirname, "..", "songs");
      const fs = require("fs");
      fs.readdir(songsPath, (err, files) => {
        if (err) {
          reject(err);
        } else {
          const songFiles = files.filter(
            (file) => path.extname(file) === ".mp3"
          );
          const songs = songFiles.map((file) => ({
            id: file.replace(".mp3", ""),
            title: file.replace(".mp3", ""),
            file: `/songs/${file}`,
          }));
          resolve(songs);
        }
      });
    });
  },
});
