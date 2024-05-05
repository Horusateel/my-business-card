import React from "react";
import pic from "../logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <header>
            <img src={pic} alt="Temporary logo of react"></img>
            <h1>Mohammad Al-hateel</h1>
            <h4>Full Stack Developer</h4>
            <h5><a href="https://www.github.com/Horusateel">github/Horusateel</a></h5>
            <ul className="comm-header">
                <li><a href="#"><button type="button" className="btn-mail"><FontAwesomeIcon icon={faEnvelope}/> Email</button></a></li>
                <li><a href="#"><button type="button" className="btn-linked"><FontAwesomeIcon icon={faLinkedinIn}/> LinkedIn</button></a></li>
            </ul>
        </header>
    );
}

export default Header;