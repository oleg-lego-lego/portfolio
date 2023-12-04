import React from 'react';
import {MyProject} from "./MyProject";
import {projects} from "./projectArr";


export const Projects = () => {
    return (
        <section id={"projects"} className={"project"}>
            <div className="container">
                <div className="project-content">
                    <p>portfolio</p>
                    <h3>my projects</h3>
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

