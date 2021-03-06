import logo from "../../assets/images/logo.png";
import logoIcon from "../../assets/images/dashboard_02.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <Link to='/'>
            <img src={logoIcon} alt="logo" />
            <img src={logo} alt="devdash" width="200" />
          </Link>          
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
