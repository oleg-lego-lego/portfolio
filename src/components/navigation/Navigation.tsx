import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {NavigationLink} from "./NavigationLink";
import {Language} from "../settings/Language";

export const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    useEffect(() => {
        if (navbarOpen) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = 'visible'
        };
    }, [navbarOpen]);

    return (
        <>
            <nav>
                <a href={'#home'}>
                    <h3 className="logo">oleg.developer</h3>
                </a>

                <ul>
                    <Language/>
                    <NavigationLink setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen}/>

                    <li>
                        <FontAwesomeIcon
                            icon={faBars}
                            size={'2x'}
                            className={"mobile-menu"}
                            onClick={() => setNavbarOpen(true)}
                        />
                    </li>
                </ul>
            </nav>

            <div className={`mobile-nav ${navbarOpen ? "open-menu" : "closed-menu"}`}>
                <span onClick={() => setNavbarOpen(false)}>
                    <FontAwesomeIcon
                        icon={faXmark}
                        size={"2x"}
                        className={'mobile-menu'}
                        style={{display: "flex", fontSize: "4rem"}}
                    />
                </span>

                <ul>
                    <NavigationLink setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen}/>
                </ul>
            </div>
        </>
    );
};



