import "./User.css";
import Profile from "../../assets/profile2.jpg";
import EditProfile from "../../assets/profile3.jpg";
import {
  MailOutline,
  MyLocation,
  PermContactCalendar,
  PermIdentity,
  PhoneIphone,
  Publish,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const params = useParams();

  return (
    <div className="user">
      <div className="user-nav">
        <h1 className="user-nav-title">Edit User: {params.userId}</h1>
        <Link to="/add-user">
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
                <p className="user-details-name">David Beckham</p>
                <p className="user-details-position">Project Manager</p>
              </div>
            </div>
            <div className="user-profile-bottom">
              <p className="user-profile-title">User Info</p>
              <div className="user-profile-container">
                <PermIdentity className="user-profile-icon" />
                <p>davidbeckham9</p>
              </div>
              <div className="user-profile-container">
                <PermContactCalendar className="user-profile-icon" />
                <p>27-2-97</p>
              </div>
              <p className="user-profile-title">User Contacts</p>
              <div className="user-profile-container">
                <PhoneIphone className="user-profile-icon" />
                <p>+44 728 828 8282</p>
              </div>
              <div className="user-profile-container">
                <MailOutline className="user-profile-icon" />
                <p>davidbeckham9@gmail.com</p>
              </div>
              <div className="user-profile-container">
                <MyLocation className="user-profile-icon" />
                <p>London | UK</p>
              </div>
            </div>
          </div>
        </div> 
        <div className="user-update">
          <div className="user-update-left">
            <h3>Edit</h3>
            <div className="user-update-input">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="David Beckham" />
            </div>
            <div className="user-update-input">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="davidbeckham9" />
            </div>
            <div className="user-update-input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="davidbeckham9@gmail.com"
              />
            </div>
            <div className="user-update-input">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="+44 728 828 8282" />
            </div>
            <div className="user-update-input">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" placeholder="London | UK" />
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

export default User;
