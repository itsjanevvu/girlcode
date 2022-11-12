
import './App.css';
// import { Route } from "react-router-dom";
import Signin from './components/signin';
import Filter from './components/filtercauses';
import Display from './components/displaycauses';
import Match from './components/matchpage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (

    <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path= "/" element= {<Signin/>} />
          <Route path= "/filters" element= {<Filter/>} />
          <Route path= "/display" element= {<Display/>} />
          <Route path= "/match" element= {<Match/>}/>

        </Routes>
  
    
    
      </header>
    </div>

    </Router>
  );
}

export default App;
