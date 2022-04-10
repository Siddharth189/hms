import { useState } from "react";
import Result from "./Result";
import Hotels from "./Hotels";

const HOTELS = ["taj", "mah", "sfs", "sdw", "erw"];

const SearchParams = ()=>{
    const [location, setLocation] = useState("");
    const [hotel, setHotel] = useState("");
    const [price, setPrice] = useState("");

    function changeHandler(props) {
        return setLocation(props)
    }
    return (
        <div className="search-params">
            <form
                onSubmit={e=>{
                    e.preventDefault();
                }}
            >
                <label htmlFor="location">Location 
                <input id="location" value={location} placeholder="Location" onChange={(e)=> changeHandler(e.target.value)} />  {/**controlled input */}
                </label>
                <label htmlFor="hotel">
                Hotel
                <select
                    id="hotel"
                    value={hotel}
                    onChange={(e) => {
                    setHotel(e.target.value);
                    }}
                    onBlur={(e) => {
                    setHotel(e.target.value);
                    }}
                >
                    <option />
                    {HOTELS.map((hotel) => (
                    <option key={hotel} value={hotel}>
                        {hotel}
                    </option>
                    ))}
                </select>
                </label>
              
                <label htmlFor="range">
                Range &#x20b9;{price}
                    <input type="range" min="1000" max="1000000" value={price} step="100" class="slider" id="myRange" onChange={(e)=> setPrice(e.target.value)} />
                </label>
              
                <button > Submit</button>
            </form>
            {
                <Result />
            }

        </div>
    );
};

export default SearchParams;

