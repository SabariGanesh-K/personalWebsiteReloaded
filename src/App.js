
import './App.css';
import Main from './components/MainComponent/MainComponent';
import {BrowserRouter} from 'react-router-dom'
import { AppProvider } from './context/AppConfig';

function App() {
  
  
  return (
    <div className = "App">
   
       <BrowserRouter>
       <AppProvider>
        
        <Main/>
        </AppProvider>
        </BrowserRouter>
     
    </div>
 
  );
}

export default App;
