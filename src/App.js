import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import CVComponent from './components/CVComponent/CVComponent';
import ProjectsComponent from './components/ProjectsComponent/ProjectsComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header grid">
        <HeaderComponent></HeaderComponent>
          <Routes> 
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="/cv" element={<CVComponent/>}/>
            <Route path="/projects" element={<ProjectsComponent/>}/>
            <Route path="/contact" element={<ContactComponent/>}/>
          </Routes> 
      </header>
    </div>
  );
}

export default App;
