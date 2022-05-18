import { Notifications, Person } from "@material-ui/icons";
import "./Navbar.css";
import Profile from "../../assets/profile.jpg";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <a href="/" className="logo">
          <img src={Logo} alt="logo"></img>
          <p>riderx-admin</p>
        </a>
      </div>
      <div className="nav-right">
        <div className="icon-container badge-container">
          <i>{<Notifications />}</i>
          <span className="badge">10</span>
        </div>
        <div className="icon-container">
          <i>{<Person />}</i>
        </div>
        <img src={Profile} alt="profile" className="profile" />
      </div>
    </div>
  );
};

export default Navbar;
