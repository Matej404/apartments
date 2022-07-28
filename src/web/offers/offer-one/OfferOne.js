import React from "react";
import "../offers.css";

export default function OfferOne({ handlePopUp }) {

    return(
        <div>
            <div className="single-offer">
                <h2>1.</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley
                </p>
                <div onClick={handlePopUp} className="wiev-photos">WIEW PHOTOS</div>
            </div>
        </div>
    )
}