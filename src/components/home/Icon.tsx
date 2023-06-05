import React from 'react';

type IconPropsType = {
    title: string
    description: string
    icon: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <li>
            <img src={props.icon} title={props.title} alt={props.description}/>
        </li>
    );
};

