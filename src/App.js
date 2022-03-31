import './App.css';
import React from 'react';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';


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
