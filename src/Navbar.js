import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Footy Highlights</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;