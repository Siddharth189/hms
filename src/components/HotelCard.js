import { Link } from "react-router-dom";

const IMG_URL = "/hms/HotelsImages/";

function HotelCard(props) {
  return (
    <>
      <div
        className="hotel-card"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.7)), url(${
            IMG_URL + props.img
          })`,
        }}
      >
        <Link to={`/hms/hotels/${props.id}`}>
          <h1>{props.name}</h1>
        </Link>
        <p>{props.add}</p>
      </div>
    </>
  );
}

export default HotelCard;
