import React from 'react';
import {SneakerStore} from "./sneakerStore/SneakerStore";

export const Projects = () => {
    return (
        <section id={"projects"} className={"projects"}>
            <div className="container">
                <div className="project-content">
                    <p>portfolio</p>
                    <h3>my projects</h3>
                </div>
                <div className="projects-grid">
                    <SneakerStore/>
                </div>
            </div>
        </section>
    );
};

