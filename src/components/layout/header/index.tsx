import { Link, Outlet } from "react-router-dom";
import "./style.scss";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <nav className="nav">
          <ul className="nav-item nav-brand">
            <li>
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
          </ul>
          <ul className="nav-item nav-links">
            <li>
              <Link to="/contacts" className="nav-link">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/contact/new" className="nav-link">
                Créer contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
