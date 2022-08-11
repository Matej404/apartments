import "./style.css";
import Home from "./home/Home";
import Location from "./location/Location";
import Offers from "./offers/Offers";
import Header from "./header/Header";
import { Route, Routes } from "react-router-dom";

export default function Main() {

    return(
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="offers" element={<Offers />} />
                    <Route path="location" element={<Location />} />
                </Routes>
            </main>
        </div>
    )
}