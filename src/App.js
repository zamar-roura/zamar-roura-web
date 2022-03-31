import './App.css';
import React from 'react';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import SetCookiesComponent from './components/SetCookiesComponent/SetCookiesComponent';
import FirstPartySetComponent from './components/FirstPartySetComponent/FirstPartySetComponent';
import DumpCookiesComponent from './components/DumpCookiesComponent/DumpCookiesComponent';



function App() {
  return (
    <div className="container">
        <HeaderComponent></HeaderComponent>
        <NavBarComponent></NavBarComponent>
        <HomeComponent></HomeComponent>
    </div>
  );
}

export default App;
