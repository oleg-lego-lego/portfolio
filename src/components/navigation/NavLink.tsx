import React from 'react';

type NavLinkPropsType = {
    link: string
    title: string
}

export const NavLink = (props: NavLinkPropsType) => {
    return (
        <li>
            <a href={props.link}>{props.title}</a>
        </li>
    )
}

