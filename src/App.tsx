import React from 'react';
import './App.css';
import {Navigation} from "./components/navigation/Navigation";
import {Home} from "./components/home/Home";
import {AboutMe} from "./components/aboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Home/>
            <AboutMe/>
        </div>
    );
}

export default App;
