import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Your existing functions
async function fetchWebApi(endpoint, method, body) {
  // ...
}

async function getTopTracks() {
  // ...
  return (
    await fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=5", "GET")
  ).items;
}

function TopTracks() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function fetchTracks() {
      const topTracks = await getTopTracks();
      setTracks(topTracks);
    }

    fetchTracks();
  }, []);

  return (
    <div>
      <h1>Top Tracks</h1>
      {tracks.map(({ name, artists }, index) => (
        <p key={index}>
          {`${name} by ${artists.map((artist) => artist.name).join(", ")}`}
        </p>
      ))}
    </div>
  );
}

export default TopTracks;
