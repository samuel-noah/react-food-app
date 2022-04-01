import './Navbar.css';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Food Listing App</h1>
            <div className='nav-links'>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </div>
        </nav>
     );
}
 
export default Navbar;