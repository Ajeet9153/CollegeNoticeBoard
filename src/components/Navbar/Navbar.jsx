import './Navbar.css'
import { Link, useNavigate } from "react-router-dom";
import Home from '../Home/Home';

const Navbar = () =>{
  return (
  <nav className="navbar ">
    <nav className="navbar">
        <div className="header-top">
            <img src="/src/assets/logo.png" alt="Logo" className="logo" />

            <h1 className="college-name">
            CUSAT
            <span className="subtext">Cochin University Of Science And Technology | Established 1971</span>
            </h1>
        </div>
      
      
        <ul className="nav-links">
          <li>
            <Link to="/pages/Home">HOME</Link>
          </li>
          <li>
            <Link to="/academics">ACADEMICS</Link>
          </li>
          <li>
            <Link to="/library">LIBRARY</Link>
          </li>
          <li>
            <Link to="/admission">ADMISSION</Link>
          </li>
          <li>
            <Link to="/Login/login">Login</Link>
          </li>
      
        </ul>
        
      </nav>
</nav>
  )
}

export default Navbar;
