import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

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

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/academic" onClick={() => setMenuOpen(false)}>
            ACADEMIC
          </Link>
        </li>
        <li>
          <Link to="/library" onClick={() => setMenuOpen(false)}>
            LIBRARY
          </Link>
        </li>
        <li>
          <Link to="/admission" onClick={() => setMenuOpen(false)}>
            ADMISSION
          </Link>
        </li>

        {/* Django Admin link */}
        <li>
          <a
            href="http://127.0.0.1:8000/admin/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            ADMIN
          </a>
        </li>

        {/* Conditional Login/Logout */}
        {token ? (
          <li onClick={() => { handleLogout(); setMenuOpen(false); }}>
            LOGOUT
          </li>
        ) : (
          <li>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              LOGIN
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
