import { useParams } from "react-router-dom";
import Hotels from "./Hotels";

const IMG_URL = "/hms/HotelsImages/";

const Details = () => {
  const { id } = useParams();
  // const [thisHotel, setThisHotel] = useState({});
  const thisHotel = Hotels.filter((hotel) => hotel.id === id)[0];
  return (
    <>
      <h1 className="hotel-detail-title">{thisHotel.name}</h1>
      <div className="hotel-detail-info">
        <img src={IMG_URL + thisHotel.img} alt="hotel" />
        <div>
          <p>
            Welcome to {thisHotel.name}, a luxurious and elegant hotel that
            provides its guests with a memorable and comfortable stay. Our hotel
            features spacious and well-appointed rooms, each equipped with
            modern amenities for your convenience. From the moment you step
            inside our hotel, you will be greeted with warm hospitality and
            excellent service from our friendly staff. Our hotel is located in a
            prime location, close to many popular attractions and sights, making
            it an ideal choice for travelers looking for a convenient base from
            which to explore {thisHotel.add}. Whether you are traveling for
            business or leisure, our hotel offers a range of facilities and
            services to cater to your needs, including a fitness center, on-site
            dining options, and a fully-equipped business center. We also offer
            a range of packages and promotions to help you make the most of your
            stay. Book your room now and experience the comfort and luxury of{" "}
            {thisHotel.name}.
          </p>
          <h1>{thisHotel.address}</h1>
          <h2> &#x20b9; {thisHotel.price} per night</h2>
          <h3>Rating: {thisHotel.rating}</h3>
          <button>Book Now</button>
        </div>
      </div>
    </>
  );
};

export default Details;
