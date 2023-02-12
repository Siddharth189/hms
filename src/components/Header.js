import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <h1 id="header" className="header">
        <nav className="header-heading">
          <ul>
            <li>
              <Link to="/hms">
                <img src="/hms/logo.jpeg" alt="logo" />
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="header-nav-bar">
          <button onClick={toggleNav} className="btn">
            {" "}
            🌍{" "}
          </button>
          {(toggleMenu || screenWidth > 960) && (
            <ul className="list">
              <li className="items">
                <Link to="/hms/destination-cover">Destination</Link>
              </li>
              <li className="items">
                <Link to="/hms/explore">Explore</Link>
              </li>
              <li className="items">
                <Link to="/hms/deals">Deals</Link>
              </li>
              <li className="items">
                <Link to="/hms/footer">Resources</Link>
              </li>
            </ul>
          )}
        </nav>
      </h1>
    </>
  );
}

export default Header;
