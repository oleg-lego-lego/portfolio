import React from 'react';
import {NavLink} from "./NavLink";

export const Navigation = () => {
    return (
        <nav>
            <h3 className={"logo"}>oleg.developer</h3>
            <ul>
                <NavLink link={"src/components/navigation/Navigation#home"} title={'Home'}/>
                <NavLink link={"src/components/navigation/Navigation#about"} title={'About'}/>
                <NavLink link={"src/components/navigation/Navigation#projects"} title={'Projects'}/>
                <NavLink link={"src/components/navigation/Navigation#projects"} title={'Contact'}/>
            </ul>
        </nav>
    );
};



