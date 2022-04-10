import "../App.css";
import Hotels from "./Hotels";
import HotelCard from "./HotelCard";

function MoreDest() {
    return (
        <>
        <div id="more-destination-cover" className="more-destination-cover destination-cover">
        <div className="destination-heading">
            <h1 className="more-destination-heading-top destination-heading-top">more</h1>
            <h1 className="more-destination-heading-bottom destination-heading-bottom">destinations</h1>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt placeat dicta non iusto cumque amet eos iste ab cupiditate optio, aut quasi, cum laborum. Quis ipsa voluptatum reiciendis illo dolorem sunt blanditiis.
            </p>
        </div>
        <div className="destination-hotel-display more-destination-hotel-display">
            { Hotels.map(Hotel => <HotelCard name={Hotel.name} img={Hotel.img} add={Hotel.address} id={Hotel.id} />) }
        </div>
        </div>
        </>
    );
}

export default MoreDest;