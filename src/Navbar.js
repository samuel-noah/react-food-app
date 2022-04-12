import './Navbar.css';
import { Link } from 'react-router-dom';
import { signIn } from './Function';

const Navbar = () => {
    

    return ( 
        <nav className="navbar">
            <h1>Food Listing App</h1>
            <div className='nav-links'>
                <Link to='/'>Menu</Link>
                <Link onClick={signIn} to='/admin'>Admin</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;