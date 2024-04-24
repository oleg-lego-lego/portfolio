import React from 'react';
import {NavbarLink} from "./NavLink";
import {useTranslation} from "react-i18next";

type NavigationLinkType = {
    setNavbarOpen: (value: boolean) => void
    navbarOpen: boolean
}

export const NavigationLink = (props: NavigationLinkType) => {
    const {t} = useTranslation('navigate');

    return (
        <>
            <NavbarLink link={"#home"} title={t('Главная')} setNavbarOpen={props.setNavbarOpen}/>
            <NavbarLink link={"#about"} title={t('Обо мне')} setNavbarOpen={props.setNavbarOpen}/>
            <NavbarLink link={"#skill"} title={t('Навыки')} setNavbarOpen={props.setNavbarOpen}/>
            <NavbarLink link={"#projects"} title={t('Проекты')} setNavbarOpen={props.setNavbarOpen}/>
            <NavbarLink link={"#contact"} title={t('Контакты')} setNavbarOpen={props.setNavbarOpen}/>
        </>
    );
};
