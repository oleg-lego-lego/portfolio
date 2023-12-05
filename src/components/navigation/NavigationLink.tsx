import React from 'react';
import {NavbarLink} from "./NavLink";

type NavigationLinkType = {
    setNavbarOpen: (value: boolean) => void
    navbarOpen: boolean
}

export const NavigationLink = (props: NavigationLinkType) => {
    return (
        <>
            <NavbarLink link={"#home"} title={'Home'} setNavbarOpen={props.setNavbarOpen}/>
            <NavbarLink link={"#about"} title={'About'} setNavbarOpen={props.setNavbarOpen}/>
            <NavbarLink link={"#projects"} title={'Projects'} setNavbarOpen={props.setNavbarOpen}/>
            <NavbarLink link={"#contact"} title={'Contact'} setNavbarOpen={props.setNavbarOpen}/>
        </>
    );
};
