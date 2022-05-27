import {
  ExitToApp,
  Dashboard,
  PersonAdd,
  People,
  Close,
  // Settings,
  LocalMall,
} from "@material-ui/icons";
import { NavLink as Link } from "react-router-dom";
import "./Sidebar.css";


const Sidebar = ({ logout }) => {
  function closeNav() {
    let sidenav = document.getElementById("sidenav");
    if (sidenav && window.innerWidth < 1023 ) {
      sidenav.style.width = "0";
      sidenav.style.display = "none";
    }
  }

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <div className="side-flex">
            <div className="side-up">
            <a href className="closebtn" onClick={() => closeNav()}>{<Close />}</a>
              <li className="dashboard">
                <Link to="/dashboard" activeclassname="active" onClick={() => closeNav()}>
                  <i>{<Dashboard />}</i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <Link to="/users" activeclassname="active" onClick={() => closeNav()}>
                  <i>{<PersonAdd />}</i>
                  <p>Client</p>
                </Link>
              </li>
              <li>
                <Link to="/teams" activeclassname="active" onClick={() => closeNav()}>
                  <i>{<People />}</i>
                  <p>Team</p>
                </Link>
              </li>
              <li>
                <Link to="/products" activeclassname="active" onClick={() => closeNav()}>
                  <i>{<LocalMall />}</i>
                  <p>Products</p>
                </Link>
              </li>
            </div>
            <div className="side-down">
              {/* <li>
                <a href="/" activeclassname="active">
                  <i>{<Settings />}</i>
                  <p>Settings</p>
                </a>
              </li> */}
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
