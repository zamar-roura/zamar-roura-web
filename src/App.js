import './App.css';
import React from 'react';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import CVComponent from './components/CVComponent/CVComponent';
import ProjectsComponent from './components/ProjectsComponent/ProjectsComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import { Routes, Route} from "react-router-dom";
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import SetCookiesComponent from './components/SetCookiesComponent/SetCookiesComponent';
import FirstPartySetComponent from './components/FirstPartySetComponent/FirstPartySetComponent';
import DumpCookiesComponent from './components/DumpCookiesComponent/DumpCookiesComponent';



function App() {
  return (
    <div className="App">
      <div className="App-header main-grid">
        <div className ="left-side">
        <HeaderComponent></HeaderComponent>
        <NavBarComponent></NavBarComponent>
        </div>
        <div className="responsive-margin">
        <Routes>
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="/cv" element={<CVComponent/>}/>
            <Route path="/projects" element={<ProjectsComponent/>}/>
            <Route path="/contact" element={<ContactComponent/>}/>
            <Route path="/firstpartyset" element={<FirstPartySetComponent/>}/>
            <Route path="/dumpcookies" element={<DumpCookiesComponent/>}/>
            <Route path="/setcookies" element={<SetCookiesComponent/>}/>
          </Routes>
        </div>

          </div>
    </div>
  );
}

export default App;
