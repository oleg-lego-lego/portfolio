import React from 'react';
import Hand from '../../images/hand.png'
import html from '../../images/icons/html.svg'
import css from '../../images/icons/css.svg'
import js from '../../images/icons/js.svg'
import react from '../../images/icons/react.svg'
import scss from '../../images/icons/scss.svg'
import {Icon} from "./Icon";

export const Home = () => {
    return (
        <section id={"home"} className={"hero"}>
            <div className={"container"}>
                <div className={"content"}>
                    <div className={"hero-main"}>
                        <div className={"hero-text"}>
                            <h1>Front-End React Developer</h1>
                            <img src={Hand} alt="hand"/>
                            <p>
                                Hi, I'm oleg ostrovski. A passionate Front-end React Developer based in Minsk, Belarus.
                                📍
                            </p>
                            <span>
                                <a aria-label="linkedin" rel="noreferrer" target="_blank"
                                   href="src/components/home/Home">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a aria-label="github" rel="noreferrer" target="_blank"
                                   href="https://github.com/oleg-lego-lego">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                        </span>
                        </div>
                        <div className="hero-img"></div>
                    </div>
                    <div className="skills">
                        <p>Tech Stack</p>
                        <div className="logos">
                            <ul>
                                <Icon icon={html} title={'html'} description={'html-icon'}/>
                                <Icon icon={css} title={'CSS3'} description={'skill-icon'}/>
                                <Icon icon={js} title={'Java Script'} description={'js-icon'}/>
                                <Icon icon={react} title={'React'} description={'react-icon'}/>
                                <Icon icon={scss} title={'Tailwind CSS'} description={'scss-icon'}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

