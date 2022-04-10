import { Link } from "react-router-dom";
import "../App.css";

function Header(){
    return (
        <>
        <h1 id="header" className="header">
        <nav className="header-heading">
        <ul><li><Link to="/hms">relocate</Link></li></ul></nav>  
        <nav className="header-nav-bar">
            <ul>
                <li><Link to='/hms/destination-cover'>Destination</Link></li>
                <li><Link to='/hms/deals'>Deals</Link></li>
                <li><Link to='/hms/explore'>Explore</Link></li>
                <li><Link to='/hms/footer'>Resources</Link></li>
                <li><Link to='/hms/'>🌍</Link></li>
            </ul>
        </nav>
        </h1>
        </>

    );
}

export default Header;

