import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faReddit, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <ul className="comm-footer">
                <li><a href="#"><FontAwesomeIcon icon={faTwitter}  transform="grow-20"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFacebook}  transform="grow-20"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faReddit} transform="grow-20"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram}  transform="grow-20"/></a></li>
            </ul>
        </footer>
    );
}

export default Footer;