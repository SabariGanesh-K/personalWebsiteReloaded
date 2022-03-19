
import './App.css';
import Main from './components/MainComponent/MainComponent';
import {BrowserRouter} from 'react-router-dom'

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
