import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons/faSquareGithub";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {MyProjects} from "./projectArr/projectArr";

type Project = {
    project: MyProjects
}

export const MyProject = (props: Project) => {
    const {hrefGitHub, hrefVercel, technologiesOne, technologiesTwo, text, photo, title} = props.project

    return (
        <div className="pro pro__1 undefined">
            <div className="pro__img">
                <a target="_blank" href={hrefVercel} rel="noreferrer" className="hover-block">
                    <img src={photo} alt="website" className="image-hover-effect"/>
                </a>
            </div>

            <div className="pro__text">
                <h3>{title}</h3>
                <p>{text}</p>

                <div className="stack">
                    <p>{technologiesOne}</p>
                    <p>{technologiesTwo}</p>
                </div>

                <div className="links">
                    <a target="_blank" href={hrefGitHub} rel="noreferrer">
                        code
                        <FontAwesomeIcon icon={faSquareGithub} size={'2x'}/>
                    </a>

                    <a target="_blank" href={hrefVercel} rel="noreferrer">
                        Live Demo
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={'1x'}/>
                    </a>
                </div>
            </div>
        </div>
    );
};
