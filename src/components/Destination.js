import "../App.css";
import Hotels from "./Hotels";
import HotelCard from "./HotelCard";

function Destination() {
    return (
        <>
        <div id="destination-cover" className="destination-cover">
        <div className="destination-heading">
            <h1 className="destination-heading-top">top</h1>
            <h1 className="destination-heading-bottom">destinations</h1>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt placeat dicta non iusto cumque amet eos iste ab cupiditate optio, aut quasi, cum laborum. Quis ipsa voluptatum reiciendis illo dolorem sunt blanditiis.
            </p>
        </div>
        <div className="destination-hotel-display">
            { Hotels.map(Hotel => <HotelCard name={Hotel.name} img={Hotel.img} add={Hotel.address} />) }
        </div>
        </div>
        </>
    );
}

export default Destination;