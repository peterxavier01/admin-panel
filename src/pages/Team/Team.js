import "./Team.css";
import Profile from "../../assets/profile5.jpg";
import EditProfile from "../../assets/profile4.jpg";
import {
  MailOutline,
  MyLocation,
  PermContactCalendar,
  PermIdentity,
  PhoneIphone,
  Publish,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";

const Team = () => {
  const params = useParams();

  return (
    <div className="user">
      <div className="user-nav">
        <h1 className="user-nav-title">Edit Employee: {params.teamId}</h1>
        <Link to="/add-team">
          <button className="user-nav-btn">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-display">
          <div className="user-profile-top">
            <div className="user-profile-info">
              <img
                className="user-profile-img"
                src={Profile}
                alt="user profile"
              ></img>
              <div className="user-profile-details">
                <p className="user-details-name">Mikel Lind</p>
                <p className="user-details-position">Hardware Engineer</p>
              </div>
            </div>
            <div className="user-profile-bottom">
              <p className="user-profile-title">Employee Info</p>
              <div className="user-profile-container">
                <PermIdentity className="user-profile-icon" />
                <p>mikellind12</p>
              </div>
              <div className="user-profile-container">
                <PermContactCalendar className="user-profile-icon" />
                <p>5-5-99</p>
              </div>
              <p className="user-profile-title">Employee Contacts</p>
              <div className="user-profile-container">
                <PhoneIphone className="user-profile-icon" />
                <p>+1 232 334 4832</p>
              </div>
              <div className="user-profile-container">
                <MailOutline className="user-profile-icon" />
                <p>mikellind12@gmail.com</p>
              </div>
              <div className="user-profile-container">
                <MyLocation className="user-profile-icon" />
                <p>Small Heath | UK</p>
              </div>
            </div>
          </div>
        </div>
        <div className="user-update">
          <div className="user-update-left">
            <h3>Edit</h3>
            <div className="user-update-input">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Mikel Lind" />
            </div>
            <div className="user-update-input">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="mikellind12" />
            </div>
            <div className="user-update-input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="mikellind12@gmail.com"
              />
            </div>
            <div className="user-update-input">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="+1 232 334 4832" />
            </div>
            <div className="user-update-input">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" placeholder="Small Heath | UK" />
            </div>
          </div>
          <div className="user-update-right">
            <div className="user-update-img-container">
              <img
                src={EditProfile}
                alt="edit user"
                className="user-update-img"
              />
              <label htmlFor="file">
                <Publish className="user-update-icon" />
              </label>
              <input type="file" id="file" className="user-update-file" />
            </div>
            <div className="user-update-btn">
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
