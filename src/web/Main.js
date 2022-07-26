import "./style.css";
import Home from "./home/Home";
import Location from "./location/Location";
import Offers from "./offers/Offers";

export default function Main() {

    return(
        <div>
            <div id="home" />
            <Home />
            <div id="offers" />
            <Offers />
            <div id="location" />
            <Location />
        </div>
    )
}