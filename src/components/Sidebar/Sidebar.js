import {
  ExitToApp,
  Dashboard,
  PersonAdd,
  People,
  Settings,
  LocalMall
} from "@material-ui/icons";
import { NavLink as Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ logout }) => {

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <div className="side-flex">
            <div className="side-up">
              <span className="side-title">Dashboard</span>
              <li>
                <Link to="/dashboard" activeclassname="active">
                  <i>{<Dashboard />}</i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <Link to="/users" activeclassname="active">
                  <i>{<PersonAdd />}</i>
                  <p>Client</p>
                </Link>
              </li>
              <li>
                <Link to="/team" activeclassname="active">
                  <i>{<People />}</i>
                  <p>Team</p>
                </Link>
              </li>
              <li>
                <Link to="/products" activeclassname="active">
                  <i>{<LocalMall />}</i>
                  <p>Products</p>
                </Link>
              </li>
            </div>
            <div className="side-down">
              <li>
                <a href="/" activeclassname="active">
                  <i>{<Settings />}</i>
                  <p>Settings</p>
                </a>
              </li>
              <li>
                <a href="/logout" className="logout" onClick={logout}>
                  <i>{<ExitToApp />}</i>
                  <p>Logout</p>
                </a>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
