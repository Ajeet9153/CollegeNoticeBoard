import { Link } from "react-router-dom";
import './Navbar.css';
import LoginPopups from "../LoginPopup/LoginPopup";

const Navbar = () =>{
  return (
    <nav className="navbar">
      <div className="header-top">
        <img src="/src/assets/logo.png" alt="Logo" className="logo" />
        <h1 className="college-name">
          CUSAT
          <span className="subtext">
            Cochin University Of Science And Technology | Established 1971
          </span>
        </h1>
      </div>

      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><a href="#">ACADEMICS</a></li>
        <li><a href="#">LIBRARY</a></li>
        <li><a href="#">ADMISSION</a></li>
        <li><Link to="/login">LOGIN</Link></li> {/* ✅ Correct */}
      </ul>
    </nav>
  );
};

export default Navbar;
