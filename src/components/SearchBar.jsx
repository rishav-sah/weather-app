import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useDispatch } from "react-redux";
import { fetchUserLocation } from "../api/api";
import { fetchWeather } from "../slices/weatherSlice";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather({ location: searchInput }));
  };

  const handleLocationClick = async () => {
    try {
      const coords = await fetchUserLocation();
      dispatch(
        fetchWeather({
          location: { lat: coords.latitude, lon: coords.longitude },
        }),
      );
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium"
      ></label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <SearchIcon fontSize="medium" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-full border p-4 ps-10 text-sm text-black placeholder-black outline-none"
          placeholder="Search for places..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="button"
          className="absolute bottom-3.5 right-2.5 rounded-full"
          onClick={handleLocationClick}
        >
          <MyLocationIcon fontSize="medium" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
