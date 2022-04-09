
import './App.css';
import app from './Firebase.js';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Admin from './Admin';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className='content'>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/admin' >
            <Admin />
          </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
