import "./style.css";
import Home from "./home/Home";
import About from "./about/About";
import Offers from "./offers/Offers";

export default function Main() {

    return(
        <div>
            <Home />
            <About />
            <Offers />
        </div>
    )
}