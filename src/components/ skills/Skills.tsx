import React from 'react';
import {useTranslation} from "react-i18next";

export const Skills = () => {

    const skillsArr = [
        'React/Redux/Redux-Toolkit', 'JavaScript/TypeScript', 'HTML5/CSS/SCSS', 'AXIOS/REST API',
        'Redux-Thunk/Redux-Saga', 'React-Query', 'MUI(4/5)/Ant Design', 'codewars', 'Jest', 'Git', 'Figma',
    ]

    const {t} = useTranslation('skills')

    return (
        <section className="about containerColor" id="skill">
            <div className="container">
                <div className="project-content">
                    <p>{t('навыки')}</p>
                    <h3>{t('мой опыт')} ...</h3>
                </div>

                <div className="about-content">
                    <div className="img-side bottom__skill">
                        <ul>
                            {skillsArr.map(el => {
                                return (
                                    <li key={el} className={'skills__item'}>- {el}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="text-side">
                        <div style={{marginBottom: 40}}>
                            <h3 style={{marginBottom: 20}}>{t('Образование')}:</h3>

                            <div className={'courses__bloc'}>
                                <h2 style={{marginBottom: 15}}>{t('айти курсы')}: IT-INCUBATOR</h2>
                                <p style={{color: "black"}}> 2023 - 2024</p>
                            </div>

                            <p style={{color: "dimgray", fontWeight: 500}}>
                                {t('incubatorText')}
                            </p>
                        </div>


                        <div style={{marginBottom: 10}}>
                            <h3 style={{marginBottom: 20}}>Front-end {t('разработчик')}:</h3>

                            <div className={'courses__bloc'}>
                                <h2 style={{marginBottom: 15}}>{t('Фриланс')}</h2>
                                <p style={{color: "black"}}> {t('январь')} 2024 - {t('апрель')}</p>
                            </div>

                            <p className={'skill__text'}>
                                {t('freelancingText')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
