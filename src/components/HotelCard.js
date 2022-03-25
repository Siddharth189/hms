import "../App.css";

  
function HotelCard(props) {
    return (
        <>
        <div className="hotel-card" style={{ backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.7)), url(${props.img})` }}>
        <h1>{props.name}</h1>
        <p>{props.add}</p>
        </div>
        </>
    );
}

export default HotelCard;