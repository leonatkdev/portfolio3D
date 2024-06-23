import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";

const Spotify = () => {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      console.log("here");
      try {
        const response = await axios.get(
          "http://localhost:4000/recently-played"
        );
        console.log("response", response);
        setTrack(response.data);
      } catch (error) {
        console.error("Error fetching recently played track:", error);
      }
    };

    fetchRecentlyPlayed();
  }, []);

  console.log("track", track);

  return (
    <div className=" hidden sm:flex items-center gap-4 bg-gradient-to-l from-indigo-500 p-4 rounded-2xl mt-6">
      {track && track?.items ? (
        <>
          <img
            src={track?.items[0]?.track?.album?.images[2].url} 
            alt={track.name}
            width={64}
            height={64}
            className="rounded-xl w-16  h-16"
          />
          <div className=" max-w-80">
            <span className=" block text-xl font-medium">
              {track?.items[0]?.track?.name}
            </span>
            <p className=" ">
              {track?.items[0]?.track?.artists
                .map((artist) => artist.name)
                .join(", ")}
            </p>
          </div>
          <a href={track?.items[0]?.track?.external_urls?.spotify}  target="_blank" rel="noreferrer" className="flex items-center justify-center ml-auto bg-gray-300 rounded-full min-w-14 min-h-14  max-w-14 max-h-14 ">
          <IoIosArrowDown width={24} height={24} className=" w-6 h-6 -rotate-90" />
          </a>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Spotify;
