import React from 'react';

export const SneakerStore = () => {
    return (
        <div className="pro pro__1 undefined">
            <div className="pro__img">
                <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
                    {/*<img src="/static/media/car-rental-full.c58b37da333d73238fdd.webp" alt="website"*/}
                    {/*     style="transform: translateY(0%); transition: transform 10s ease-in-out 0s;"/>*/}
                </a>
            </div>
            <div className="pro__text">
                <h3>Sneaker Store 👟</h3>
                <p>
                    The sneaker store website is an online platform
                    which allows users
                    order sneakers, and add your favorite sneakers to the cart.
                </p>
                <div className="stack">
                    <p>React</p>
                    <p>SCSS</p>
                </div>
                <div className="links">
                    <a target="_blank" href="https://github.com/stefvndev/car-rental"
                       rel="noreferrer">Code<i className="fa-brands fa-github"></i>
                    </a>
                    <a target="_blank" href="https://car-rental-ten.vercel.app/"
                       rel="noreferrer">Live Demo<i
                        className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
