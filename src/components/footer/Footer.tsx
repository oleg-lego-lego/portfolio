import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__container">
                    <div className="footer__link">
                        <a target="_blank"
                           rel="noreferrer"
                           href="https://www.linkedin.com/in/oleg-ostrovski-10658024a/"
                        >
                            my linkedin
                            <FontAwesomeIcon icon={faLinkedin} size={'3x'}/>
                        </a>
                    </div>

                    <div className="footer__link">
                        <a target="_blank"
                           rel="noreferrer"
                           href="https://github.com/oleg-lego-lego?tab=repositories"
                        >
                            my github
                            <FontAwesomeIcon icon={faGithub} size={'3x'}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
