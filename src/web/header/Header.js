import "./header.css";
import { NavLink } from "react-router-dom";

export default function Header() {

    return(
        <div className="header">
            <ol className="header-list">
                <li className="nav-link">
                    <NavLink className="list-item" to="/">
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink className="list-item" to="offers">
                        OFFERS
                    </NavLink>
                </li>
                <li>
                    <NavLink className="list-item" to="location">
                        LOCATION
                    </NavLink>
                </li>
                <li>
                    <NavLink className="list-item" to="contact">
                        CONTACT
                    </NavLink>
                </li>
            </ol>
        </div>
    )
}