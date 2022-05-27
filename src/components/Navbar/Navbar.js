import { Notifications, Person, Menu } from "@material-ui/icons";
import "./Navbar.css";
import Profile from "../../assets/profile.jpg";
import Logo from "../../assets/logo.png";
import { Tooltip } from "@material-ui/core";

const Navbar = () => {
  function openNav() {
    let sidenav = document.getElementById("sidenav");
    if (sidenav) {
      sidenav.style.width = "250px";
      sidenav.style.display = "block";
    }
  }

  return (
    <div className="navbar">
      <div className="nav-left">
        <span className="menu" onClick={() => openNav()}>
          {<Menu />}
        </span>
        <a href="/dashboard" className="logo">
          <img src={Logo} alt="logo"></img>
          <p>riderx-admin</p>
        </a>
      </div>
      <div className="nav-right">
        <Tooltip disableFocusListener title="Notifications" arrow>
          <div className="icon-container badge-container">
            <i>{<Notifications />}</i>
            <span className="badge">10</span>
          </div>
        </Tooltip>
        <Tooltip disableFocusListener title="Profile" arrow>
        <div className="icon-container">
          <i>{<Person />}</i>
        </div>
        </Tooltip>
        <img src={Profile} alt="profile" className="profile" />
      </div>
    </div>
  );
};

export default Navbar;
