import "./header.css";
import { Link } from "react-scroll"

export default function Header() {

    return(
        <div className="header">
            <ol className="header-list">
                <li className="nav-link">
                    <Link className="list-item" smooth={true} duration={800} to="home">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link className="list-item" smooth={true} duration={800} to="offers">
                        OFFERS
                    </Link>
                </li>
                <li>
                    <Link className="list-item" smooth={true} duration={800} to="location">
                        LOCATION
                    </Link>
                </li>
                <li>
                    <Link className="list-item" to="contact">
                        CONTACT
                    </Link>
                </li>
            </ol>
        </div>
    )
}