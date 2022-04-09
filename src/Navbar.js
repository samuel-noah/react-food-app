import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Food Listing App</h1>
            <div className='nav-links'>
                <Link to='/menu'>Menu</Link>
                <Link to='/admin'>Admin</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;