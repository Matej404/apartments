import "./offers.css";
import OfferOne from "./offer-one/OfferOne";
import OfferTwo from "./offer-two/OfferTwo";
import OfferThree from "./offer-three/OfferThree";
import { useState } from "react";
import { AiOutlineClose, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { PhotoDataOne } from "./offer-one/PhotoDataOne";

export default function Offers() {
    //popUp
    const [popUp, setPopUp] = useState(true);
    const handlePopUp = () => {
        setPopUp(!popUp);
    }


    //slide
    const [current, setCurrent] = useState(0);

    const handleSlideLeft = () => {
        setCurrent(current === 0 ? PhotoDataOne.length - 1 : current - 1)
    }

    const handleSlideRight = () => {
        setCurrent(current === PhotoDataOne.length - 1 ? 0 : current + 1)
    }

    return(
        <div className="offers">
            <h1>OFFERS</h1>
            <div className="offers-container">
                <OfferOne handlePopUp={handlePopUp} />
                <OfferTwo />
                <OfferThree />
            </div>
            {popUp && (
                <div className="img-container">
                    <AiOutlineClose className="close-btn" onClick={handlePopUp} />
                    <AiOutlineArrowLeft className="left-btn" onClick={handleSlideLeft} />
                    <AiOutlineArrowRight className="right-btn" onClick={handleSlideRight} />
                    {PhotoDataOne.map((photo, index) => (
                        <div key={index}>
                            {index === current && (
                                <img src={photo.name} alt="apartment" />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}