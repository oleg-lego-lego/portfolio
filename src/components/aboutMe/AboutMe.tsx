import React from 'react';
import working from '../../images/working.png'

export const AboutMe = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="img-side">
                        <img src={working} alt="my work place" className="img-side__main-img"/>
                    </div>
                    <div className="text-side">
                        <h3>About me</h3>
                        <h4>Front-End Developer...</h4>
                        <p>
                            One of my strengths is my ability to write clean and optimized code. I understand the
                            importance of efficient coding practices and strive to deliver high-quality work that is not
                            only visually appealing but also performs well across different devices and browsers. By
                            staying up-to-date with the latest development tools and techniques, I ensure that my
                            projects are built using the most cutting-edge practices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
