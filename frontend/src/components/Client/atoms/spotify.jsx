import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";

const Spotify = () => {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      // console.log("here");
      try {
        const response = await axios.get(
          "https://portfolio3d-c4gq.onrender.com/recently-played"
        );
        // console.log("response", response);
        setTrack(response.data);
      } catch (error) {
        console.error("Error fetching recently played track:", error);
      }
    };

    fetchRecentlyPlayed();
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-l from-indigo-500 py-2 px-3 lg:p-4 rounded-2xl mt-4 lg:mt-6">
      {track && track?.items ? (
        <>
          <div className="flex items-center gap-4">
            <img
              src={track?.items[0]?.track?.album?.images[2].url}
              alt="Spotify Song"
              width={64}
              height={64}
              className="rounded-xl w-10 h-10 lg:w-16 lg:h-16"
            />
            <div className=" max-w-80">
              <span className="hidden lg:block font-medium text-xs mb-1 ">
                Leonat is listening to on Spotify:
              </span>
              <span className=" block text-lg font-medium max-h-[30px] overflow-hidden text-ellipsis line-clamp-2">
                {track?.items[0]?.track?.name}
              </span>
              <p className=" text-sm max-h-[20px] overflow-hidden text-ellipsis line-clamp-2">
                {track?.items[0]?.track?.artists
                  .map((artist) => artist.name)
                  .join(", ")}
              </p>
            </div>
            <a
              href={track?.items[0]?.track?.external_urls?.spotify}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center ml-auto  rounded-full "
            >
              {/* <IoIosArrowDown width={24} height={24} className=" w-6 h-6 -rotate-90 text-white"  /> */}
              <FaSpotify
              title="Spotify Icon"
                width={24}
                height={24}
                className=" w-10 h-10 lg:w-11 lg:h-11  text-white"
              />
            </a>
          </div>
        </>
      ) : (
        <p>Loading Spotify ...</p>
      )}
    </div>
  );
};

export default Spotify;
