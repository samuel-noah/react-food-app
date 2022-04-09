import './Navbar.css';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Food Listing App</h1>
            <div className='nav-links'>
                <a href='/'>Home</a>
                <a href='/menu'>Menu</a>
                <a href='/admin'>Admin</a>
            </div>
        </nav>
     );
}
 
export default Navbar;