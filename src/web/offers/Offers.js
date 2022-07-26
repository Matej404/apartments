import "./offers.css";
import OfferOne from "./offer-one/OfferOne";
import OfferTwo from "./offer-two/OfferTwo";
import OfferThree from "./offer-three/OfferThree";

export default function Offers() {

    return(
        <div className="offers">
            <h1>OFFERS</h1>
            <div className="offers-container">
                <OfferOne />
                <OfferTwo />
                <OfferThree />
            </div>
        </div>
    )
}