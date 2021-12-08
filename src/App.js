import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import CVComponent from './components/CVComponent/CVComponent';
import ProjectsComponent from './components/ProjectsComponent/ProjectsComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import {Routes,Route} from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';

function App() {
  return (
    <div className="App">
      <div className="App-header main-grid">
        <div className ="left-side">
        <HeaderComponent></HeaderComponent>
        <NavBarComponent></NavBarComponent>
        </div>  
        <div className="desktop-margin-left">
        <Routes> 
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="/cv" element={<CVComponent/>}/>
            <Route path="/projects" element={<ProjectsComponent/>}/>
            <Route path="/contact" element={<ContactComponent/>}/>
          </Routes> 
        </div>
        
          </div>
    </div>
  );
}

export default App;
