
import './App.css';
import app from './Firebase.js';
import Home from './Home';
import Insert from './Insert';
import Navbar from './Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Insert></Insert>
      <Home></Home>
    </div>
  );
}

export default App;
