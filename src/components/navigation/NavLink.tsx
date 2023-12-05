import React from 'react';

type NavLinkPropsType = {
    link: string
    title: string
    setNavbarOpen: (value: boolean) => void
}

export const NavbarLink = (props: NavLinkPropsType) => {
    const linkValueHandler = () => props.setNavbarOpen(false)

    return (
        <li onClick={linkValueHandler}>
            <a href={props.link}>{props.title}</a>
        </li>
    )
}

