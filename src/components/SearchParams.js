import { useState } from "react";
import Result from "./Result";
import Hotels from "./Hotels";

function filterHotels(searchHotelText, location, price, allHotels) {
  return allHotels.filter(
    (hotel) =>
      hotel?.name?.toLowerCase()?.includes(searchHotelText?.toLowerCase()) &&
      hotel?.address?.toLowerCase()?.includes(location?.toLowerCase()) &&
      hotel?.price <= price
  );
}

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [filteredHotel, setFilteredHotel] = useState(Hotels);
  const [searchHotelText, setSearchHotelText] = useState("");
  const [price, setPrice] = useState("10000");

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />{" "}
          {/**controlled input */}
        </label>
        <label htmlFor="hotel">
          Hotel
          <select
            id="hotel"
            value={searchHotelText}
            onChange={(e) => {
              setSearchHotelText(e.target.value);
            }}
            onBlur={(e) => {
              setSearchHotelText(e.target.value);
            }}
          >
            <option />
            {Hotels.map((hotel) => (
              <option key={hotel.name} value={hotel.name}>
                {hotel.name}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="range">
          Range &#x20b9;{price}
          <input
            type="range"
            min="1000"
            max="1000000"
            value={price}
            step="100"
            className="slider"
            id="myRange"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <button
          onClick={() => {
            const data = filterHotels(searchHotelText, location, price, Hotels);
            setFilteredHotel(data);
            console.log(data);
          }}
        >
          {" "}
          Submit
        </button>
      </form>
      {<Result hotelsData={filteredHotel} />}
    </div>
  );
};

export default SearchParams;
