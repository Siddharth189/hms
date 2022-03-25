import "../App.css";

function Footer() {
    return (
        <>
        <div id="footer" className="footer-cover">
        <div className="footer-content">
            <ul className="footer-vert-list product">
                <li><h2>Product</h2></li>
                <li><a href="/" >Why move?</a></li>
                <li><a href="/" >features</a></li>
                <li><a href="/" >Omnichannel</a></li>
                <li><a href="/" >Community</a></li>
                <li><a href="/" >Webinars</a></li>
                <li><a href="/" >Marketplace</a></li>
            </ul>
            <ul className="footer-vert-list company">
                <li><h2>Company</h2></li>
                <li><a href="/" >Team</a></li>
                <li><a href="/" >About</a></li>
                <li><a href="/" >Jobs</a></li>
                <li><a href="/" >Partenrs</a></li>
                <li><a href="/" >Press</a></li>
                <li><a href="/" >Blog</a></li>
                <li><a href="/" >Newsletter</a></li>
            </ul>
            <ul className="footer-vert-list socials">
                <li><a href="https://facbook.com/" ><img src={'fb.png'} alt="fb"/></a></li>
                <li><a href="https://twitter.com/" ><img src={'twtr.png'} alt="twtr"/></a></li>
                <li><a href="https://instagram.com/siddharth189__/" ><img src={'ig.png'} alt="ig"/></a></li>
                <li><a href="https://linkedin.com/in/Siddharth189/" ><img src={'in.png'} alt="in"/></a></li>
            </ul>
        </div>
        </div>
        </>
    );
}

export default Footer;