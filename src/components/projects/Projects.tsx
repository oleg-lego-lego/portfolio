import React from 'react';
import {MyProject} from "./MyProject";
import {useTranslation} from "react-i18next";
import carRent from "../../images/projectPhoto/autoRentProject.png";
import todolist from "../../images/projectPhoto/todolist.png";
import tableSorting from "../../images/projectPhoto/table-sorting.png";
import onlineStore from "../../images/projectPhoto/online-store.png";
import {MyProjects} from "./projectArr/projectArr";


export const Projects = () => {
    const {t} = useTranslation('project')

    const projects: MyProjects[] = [
        {
            hrefGitHub: 'https://github.com/oleg-lego-lego/autoRent',
            hrefVercel: 'https://auto-rent-sooty.vercel.app/',
            photo: carRent,
            title: t('аренда автомобиля') + ' 🚗',
            text: t('carRentText'),
            technologiesOne: 'React',
            technologiesTwo: 'Redux Toolkit',
        },
        {
            hrefGitHub: 'https://github.com/oleg-lego-lego/todolist_for_the_lesson',
            hrefVercel: 'https://todolist-two-gamma.vercel.app/',
            photo: todolist,
            title: t('список дел') + ' 📝',
            text: t('todoListText'),
            technologiesOne: 'React',
            technologiesTwo: 'Redux',
        },
        {
            hrefGitHub: 'https://github.com/oleg-lego-lego/beer_List',
            hrefVercel: 'https://table-sorting-ten.vercel.app/',
            photo: tableSorting,
            title: t('сортировка таблиц') + ' 🗄️',
            text: t('tableSortingText'),
            technologiesOne: 'Redux Toolkit',
            technologiesTwo: 'Ant Design',
        },
        {
            hrefGitHub: 'https://github.com/oleg-lego-lego/online_store',
            hrefVercel: 'https://online-store-one-alpha.vercel.app/',
            photo: onlineStore,
            title: t('Интернет-магазин') + ' 💻',
            text: t('onlineStoreText'),
            technologiesOne: 'Redux',
            technologiesTwo: 'Material Ui',
        },
    ]

    return (
        <section id={"projects"} className="project">
            <div className="container">
                <div className="project-content">
                    <p>{t('портфолио')}</p>
                    <h3>{t('мои проекты')}</h3>
                </div>

                <div className="projects-grid">
                    {projects.map((el, i) => {
                        return (
                            <MyProject project={el} key={i}/>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

