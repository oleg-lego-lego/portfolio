import React from 'react';
import './App.css';
import {Navigation} from "./components/navigation/Navigation";
import {Home} from "./components/home/Home";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {Projects} from "./components/projects/Projects";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Home/>
            <AboutMe/>
            <Projects/>
        </div>
    );
}

export default App;
