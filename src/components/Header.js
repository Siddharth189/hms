import "../App.css";

function Header(){
    return (
        <>
        <h1 id="header" className="header">
        <nav className="header-heading">
        <ul><li><a href="#header">relocate</a></li></ul></nav>  
        <nav className="header-nav-bar">
            <ul>
                <li><a href='#destination-cover'>Destination</a></li>
                <li><a href='#destination-cover'>Deals</a></li>
                <li><a href='#destination-cover'>Explore</a></li>
                <li><a href='#footer'>Resources</a></li>
                <li><a href='/'>🌍</a></li>
            </ul>
        </nav>
        </h1>
        </>

    );
}

export default Header;

