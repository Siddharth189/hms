import HotelCard from "./HotelCard";

const Result = function (props) {
  const Hotels = props.hotelsData;
  return (
    <div className="search-result">
      {Hotels.length ? (
        Hotels.map((hotel) => (
          <div className="result-hotel">
            <HotelCard
              key={hotel.id}
              name={hotel.name}
              img={hotel.img}
              id={hotel.id}
            />
            <h2>&#x20b9;{hotel.price}</h2>
            <h2>{hotel.address}</h2>
          </div>
        ))
      ) : (
        <h1>Hotels Not Found</h1>
      )}
    </div>
  );
};

export default Result;
