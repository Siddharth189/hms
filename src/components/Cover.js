import "../App.css";

function Cover() {
    return (
        <>
        <div className="cover">
            <div className="cover-words">
            <h1 className="cover-words-top">make the right</h1>
            <h1 className="cover-words-bottom">move.</h1>
            </div>
            
            <div className="cover-arrow">
            <a href="#destination-cover" className="cover-arrow-link">↓</a>
            <p>Explore <br /> Destination</p>
            </div>
        </div>
        </>
    );
}

export default Cover;