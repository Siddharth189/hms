import Hotels from "./Hotels";
import HotelCard from "./HotelCard";
import { useState, useEffect } from "react";

function getLeastRated4Hotels() {
  const temp = [];
  Hotels.sort((h1, h2) => {
    return h1.rating <= h2.rating;
  });
  for (let i = 0; i < 4; i++) {
    temp.push(Hotels[i]);
  }

  return temp;
}

function MoreDest() {
  const [top4Hotel, setTop4Hotel] = useState([]);
  useEffect(() => {
    const data = getLeastRated4Hotels();
    setTop4Hotel(data);
  }, []);

  return (
    <>
      <div
        id="more-destination-cover"
        className="more-destination-cover destination-cover"
      >
        <div className="destination-heading">
          <h1 className="more-destination-heading-top destination-heading-top">
            more
          </h1>
          <h1 className="more-destination-heading-bottom destination-heading-bottom">
            destinations
          </h1>
          <br />
          <p>
            There are yet another 4 destinations that are equally as fascinating
            and worth visiting. These destinations offer a diverse range of
            experiences and opportunities for travelers, from exploring vibrant
            cityscapes to indulging in scenic natural beauty. Whether you're
            looking for a cultural adventure or a chance to escape from the
            hustle and bustle of daily life, these destinations offer something
            for everyone. So don't miss out on the chance to discover these
            hidden gems and add them to your travel itinerary.
          </p>
        </div>
        <div className="destination-hotel-display more-destination-hotel-display">
          {top4Hotel.map((Hotel) => (
            <HotelCard
              key={Hotel.id}
              name={Hotel.name}
              img={Hotel.img}
              add={Hotel.address}
              id={Hotel.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MoreDest;
