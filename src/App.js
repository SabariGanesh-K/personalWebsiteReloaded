import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent/MainComponent';
import {BrowserRouter} from 'react-router-dom'
import ProjectPage from './components/ProjectsPage/projectspage';
function App() {
  
  return (
    <div className = "App">
       <BrowserRouter>
        <Main/>
        </BrowserRouter>
    
    </div>
 
  );
}

export default App;
