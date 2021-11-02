import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link
          to="/"
          className="nav-logo-text offset-md-1 offset-lg-1 offset-xl-0 mx-xl-5"
        >
          <h4>Carros Top</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carros-top-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <div className="collapse navbar-collapse" id="carros-top-navbar">
          <ul className="navbar-nav offset-md-8 offset-lg-7 offset-xl-6 main-menu">
            <li>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            </li>
            <li>
            <NavLink to="/catalogs" activeClassName="active">Catálogo</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
