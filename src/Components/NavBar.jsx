import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faStore, faX} from "@fortawesome/free-solid-svg-icons";

import "../CSS/Nav.css";

function NavBar() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [showNav, setShowNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

    return (
        <>
            <nav>
                <div className="branding">
                    <a href="/">
                        <span style={{
                            fontSize: "0.8em",
                            position: "relative",
                            bottom: "3px"
                        }}>
                            <FontAwesomeIcon icon={faStore} />
                        </span> Hack Store
                    </a>
                </div>
                { width > 750  ?
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="https://github.com/Hack-Store" target="_blank">GitHub</a></li>
                    </ul> : <>
                        <div className="navToggle" onClick={() => setShowNav(!showNav)}>
                            {!showNav ?
                                <FontAwesomeIcon icon={faBars} /> :
                                <FontAwesomeIcon icon={faX} />
                            }
                        </div>
                    </>
                }
            </nav>
            <div className={showNav?"navMenu open":"navMenu"}>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About</li></a>
                    <a href="https://github.com/Hack-Store" target="_blank"><li>GitHub</li></a>
                </ul>
            </div>
        </>
    );
}

export default NavBar;
