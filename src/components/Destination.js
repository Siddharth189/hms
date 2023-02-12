import Hotels from "./Hotels";
import HotelCard from "./HotelCard";
import { useEffect, useState } from "react";

function getTop4Hotels() {
  const temp = [];
  Hotels.sort((h1, h2) => {
    return h1.rating >= h2.rating;
  });
  for (let i = 0; i < 4; i++) {
    temp.push(Hotels[i]);
  }

  return temp;
}

function Destination() {
  const [top4Hotel, setTop4Hotel] = useState([]);
  useEffect(() => {
    const data = getTop4Hotels();
    setTop4Hotel(data);
  }, []);

  return (
    <>
      <div id="destination-cover" className="destination-cover">
        <div className="destination-heading">
          <h1 className="destination-heading-top">top</h1>
          <h1 className="destination-heading-bottom">destinations</h1>
          <br />
          <p>
            These destinations have been carefully selected based on a variety
            of factors, including cultural attractions, scenic beauty, and local
            cuisine. Whether you are a seasoned traveler or just starting out,
            these destinations are sure to provide an unforgettable experience.
            Each destination has its own unique charm and is packed with
            opportunities for adventure, relaxation, and cultural immersion.
            From bustling cities to quiet countryside, this list has something
            to offer everyone. Whether you're looking to explore historical
            sites, sample local cuisine, or simply relax and soak up the
            atmosphere, the top 4 destinations on the RELOCATE webpage are sure
            to deliver. So why wait? Start planning your next trip today and
            experience the beauty and wonder of these must-visit destinations!{" "}
          </p>
        </div>
        <div className="destination-hotel-display">
          {top4Hotel.map((Hotel) => (
            <HotelCard
              name={Hotel.name}
              img={Hotel.img}
              add={Hotel.address}
              id={Hotel.id}
              key={Hotel.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Destination;
