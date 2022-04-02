import './App.css';
import React from 'react';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import GoBackComponent from './components/GoBackComponent/GoBackComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ProjectsComponent from './components/ProjectsComponent/ProjectsComponent';
import { Routes, Route} from "react-router-dom";

import { useLocation } from 'react-router-dom';

function Back() {
  const location = useLocation();
  if (location.pathname != "/") {
    return <GoBackComponent/>
  }
  return <div></div>
}
function App() {
  return (
    <div className="container">
        <Back></Back>
        <HeaderComponent></HeaderComponent>
        <NavBarComponent></NavBarComponent>
        <Routes> 
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="/projects" element={<ProjectsComponent/>}/>
        </Routes> 
      
    </div>
  );
}

export default App;
