import React from 'react';
import './App.css';
import {Navigation} from "./components/navigation/Navigation";
import {Home} from "./components/home/Home";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {Projects} from "./components/projects/Projects";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/Footer";

function App() {
    return (
        <>
            <Navigation/>
            <Home/>
            <AboutMe/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;
