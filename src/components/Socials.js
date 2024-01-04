import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";
import './Socials.css';

function Socials() {

    return (
        <div className="socials">
            <div className="max-width">
                <div className="social-links">
                    <a href="https://github.com/MrF1ow"><FaGithub /></a>
                    <a href="https://twitter.com/MrF1ow"><FaTwitter /></a>
                    <a href="https://www.linkedin.com/in/ethanflow/"><FaLinkedin /></a>
                </div>
            </div>
        </div>
    );
}

export default Socials;