import { Link } from "react-router-dom";
import "../App.css";

function Header(){
    return (
        <>
        <h1 id="header" className="header">
        <nav className="header-heading">
        <ul><li><Link to="/">relocate</Link></li></ul></nav>  
        <nav className="header-nav-bar">
            <ul>
                <li><Link to='/destination-cover'>Destination</Link></li>
                <li><Link to='/deals'>Deals</Link></li>
                <li><Link to='/explore'>Explore</Link></li>
                <li><Link to='/footer'>Resources</Link></li>
                <li><Link to='/'>🌍</Link></li>
            </ul>
        </nav>
        </h1>
        </>

    );
}

export default Header;

