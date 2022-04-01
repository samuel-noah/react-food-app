
import './App.css';
import app from './Firebase.js';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
