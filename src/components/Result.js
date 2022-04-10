import HotelCard from "./HotelCard";
import Hotels from "./Hotels";

const Result = function () {
    return (
        <div className="search">
        { !Hotels.length ? 
        <h1>HotelCards Not Found</h1>: 
        Hotels.map((hotel) => (
            <div className="result-hotel">
            <HotelCard name={hotel.name} img={hotel.img} id={hotel.id} />
            <div className="info">
            <h2>&#x20b9;{hotel.price}</h2>
            <h2>{hotel.address}</h2>
            </div>
            </div>
        )) }
        </div>
    );
}

export default Result;