import { Link } from "react-router-dom"
import { retrieveData, clearData } from "../../../utils/helper";
import { useHistory } from "react-router-dom";
import { HOMEURL } from "../../constants";
import "./style.scss";

const Header = (props:any) => {

  const userData = retrieveData("userData");
  let history = useHistory();

  const handleLogout = () => {
    clearData("userData");
    history.push(`${HOMEURL}`);
  }

  return <header className="header">
    <nav className="navbar">
      <Link to="/feeds" className="nav-logo">Buks App</Link>
      <ul className="nav-menu">
        <li className="nav-item">
          {`Welcome ${userData.firstName} ${userData.lastName}`}
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={handleLogout}>Logout</span>
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  </header>
}

export default Header;