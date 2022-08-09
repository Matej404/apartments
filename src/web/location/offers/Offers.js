import "./offers.css";
import React, { useState } from "react";
import { OffersData } from "./OffersData";
import { AiOutlineClose, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Offers() {
    //popUp
    const [popUp, setPopUp] = useState("");
    const handlePopUp = (e, id) => {
        setPopUp(id);
    }


    //slide
    const [current, setCurrent] = useState(0);


    const prevBtn = () => {
        setCurrent(current === 0 ? OffersData.rooms.length - 1 : current - 1);
    }

    const nextBtn = () => {
        setCurrent(current === OffersData.rooms.length - 1 ? 0 : current + 1);
    }

    return(
        <div className="offers-container">
            {OffersData.map((data, index) => {
                const { name, text, id } = data;
                return (
                <div key={id}>
                    <div className="single-offer">
                        <h2>{name}</h2>
                        <p>{text}</p>
                        <div className="wiev-photos" onClick={(e) => handlePopUp(e, id)}>WIEW PHOTOS</div>
                    </div>
                    {popUp === id && (
                                <div key={id} className="popUp-img">
                                    <AiOutlineClose className="close-btn" onClick={handlePopUp} /> 
                                    <AiOutlineArrowLeft className="left-btn" onClick={prevBtn} />
                                    <AiOutlineArrowRight className="right-btn" onClick={nextBtn} />
                                    {OffersData.map((image, index) => (
                                        <div key={index} >
                                            {index === current && (
                                                <img src={image.rooms.room} alt="room" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}  
                </div>
            )
            })}
        </div>
    )
}