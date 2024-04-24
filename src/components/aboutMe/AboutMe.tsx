import React from 'react';
import working from '../../images/working.png'
import {useTranslation} from "react-i18next";

export const AboutMe = () => {
    const {t} = useTranslation('about');

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="img-side">
                        <img src={working} alt="my work place" className="img-side__main-img"/>
                    </div>

                    <div className="text-side">
                        <h3>{t('Обо мне')}</h3>
                        <h4>{t('Фронтенд-разработчик')}...</h4>
                        <p>{t('textAboutMe')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
