import React from 'react';
import Hand from '../../images/hand.png'
import html from '../../images/icons/html.svg'
import css from '../../images/icons/css.svg'
import js from '../../images/icons/js.svg'
import react from '../../images/icons/react.svg'
import scss from '../../images/icons/scss.svg'
import TypeScript from '../../images/icons/TypeScript.png'
import gitHub from '../../images/icons/gitHub.png'
import arrow from '../../images/icons/rightarrow1_80967.svg'
import {Icon} from "./Icon";
import {useTranslation} from "react-i18next";

export const Home = () => {
    const {t} = useTranslation('home');

    return (
        <section id={"home"} className="hero">
            <div className="container">
                <div className="content">
                    <div className="hero-main">

                        <div className="hero-text">
                            <h1>Front-End React Developer</h1>
                            <img src={Hand} alt="hand"/>
                            <p>{t('myNameText')}</p>
                        </div>

                        <div className="hero-img"></div>
                    </div>

                    <div className="skills">
                        <p>{t('Мои навыки')}</p>
                        <div>
                            <ul>
                                <Icon icon={html} title={'html'} description={'html-icon'}/>
                                <Icon icon={css} title={'CSS3'} description={'skill-icon'}/>
                                <Icon icon={scss} title={'Tailwind CSS'} description={'scss-icon'}/>
                                <Icon icon={js} title={'Java Script'} description={'js-icon'}/>
                                <Icon icon={react} title={'React'} description={'react-icon'}/>
                                <Icon icon={TypeScript} title={'Type Script'} description={'TypeScript-icon'}/>
                                <Icon icon={gitHub} title={'Git Hub'} description={'gitHub-icon'}/>

                                <li className={'seeMore'}>
                                    <a href={"#skill"}>
                                        <img src={arrow} title={'see more'} alt={'arrow'}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

