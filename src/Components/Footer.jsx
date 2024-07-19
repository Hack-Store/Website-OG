import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faStore} from "@fortawesome/free-solid-svg-icons";

import "../CSS/Footer.css";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const footerLinks = [
    {
        name: "Home",
        icon: faStore,
        url: "/"
    },
    {
        name: "About",
        icon: faFile,
        url: "/about"
    },
    {
        name: "GitHub",
        icon: faGithub,
        url: "https://github.com"
    }
];

function Footer() {
    return (
        <footer>
            <p>&copy; 2024 Hack Store</p>
            <div className="footerLinks">
                {footerLinks.map((link, index) => (
                    <>
                        <a key={index} href={link.url} style={{margin: "0 1rem"}}>
                            <FontAwesomeIcon icon={footerLinks[index].icon} /> {" "}
                            {link.name}
                        </a>
                        {(index+1) == footerLinks.length ? "" : " | "}
                    </>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
