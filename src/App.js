
import './App.css';
import Main from './components/MainComponent/MainComponent';
import {BrowserRouter} from 'react-router-dom'
import { AppProvider } from './context/AppConfig';
import bgpage from './components/HomePage/Media/bgpage.mp4'
import './App.css'
function App() {
  
  
  return (
    <div className = "App">

       <BrowserRouter>
       <AppProvider>
        
        <Main id="content"/>
        </AppProvider>
        </BrowserRouter>
     
    </div>
 
  );
}

export default App;
