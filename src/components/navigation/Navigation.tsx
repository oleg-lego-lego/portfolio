import React from 'react';
import {NavLink} from "./NavLink";

export const Navigation = () => {
    return (
        <nav>
            <h3 className={"logo"}>oleg.developer</h3>
            <ul>
                <NavLink link={"#home"} title={'Home'}/>
                <NavLink link={"#about"} title={'About'}/>
                <NavLink link={"#projects"} title={'Projects'}/>
                <NavLink link={"#contact"} title={'Contact'}/>
            </ul>
        </nav>
    );
};



