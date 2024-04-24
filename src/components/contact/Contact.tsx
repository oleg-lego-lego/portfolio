import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapLocationDot} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";

export const Contact = () => {
    const email = 'oleg.ostrovski@gmail.com'
    const {t} = useTranslation('contact')

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact__content">
                    <div className="contact__title">
                        <p>{t('контакты')}</p>
                        <h3>{t('Напиши мне здесь')} ... ✍🏾</h3>
                    </div>

                    <div className="contact__icons">
                        <div className="contact__icon-box">
                            <span>
                                <FontAwesomeIcon icon={faMapLocationDot} size={'3x'}/>
                            </span>

                            <div className="contact__info">
                                <h3>{t('Местонахождение')}</h3>
                                <p>{t('Минск, Беларусь')}</p>
                            </div>
                        </div>

                        <div className="contact__icon-box">
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} size={'3x'}/>
                            </span>

                            <div className="contact__info">
                                <h3>{t('Почта')}</h3>
                                <a href={`mailto:${email}`}>{email}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};