import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapLocationDot} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
    const email = 'oleg.ostrovski@gmail.com'

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact__content">
                    <div className="contact__title">
                        <p>contact</p>
                        <h3>Write to me here ... ✍🏾</h3>
                    </div>
                    <div className="contact__icons">
                        <div className="contact__icon-box">
                                <span>
                                    <FontAwesomeIcon icon={faMapLocationDot} size={'3x'}/>
                                </span>
                            <div className="contact__info">
                                <h3>Location</h3>
                                <p>Minsk, Belarus</p>
                            </div>
                        </div>
                        <div className="contact__icon-box">
                                <span>
                                    <FontAwesomeIcon icon={faEnvelope} size={'3x'}/>
                                </span>
                            <div className="contact__info">
                                <h3>Mail</h3>
                                <a href={`mailto:${email}`}>{email}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};