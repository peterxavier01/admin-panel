import "./AddTeam.css";

const AddTeam = () => {
  return (
    <div className="add-user">
      <h2>New Employee</h2>
      <form className="new-user-container">
        <div className="new-user-input">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="johndoe" />
        </div>
        <div className="new-user-input">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="John Doe" />
        </div>
        <div className="new-user-input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="johndoe@gmail.com" />
        </div>
        <div className="new-user-input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="new-user-input">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="331 Nowhere Avenue" />
        </div>
        <div className="new-user-input">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="+44 222 333 2222" />
        </div>
        <div className="new-user-input">
          <label htmlFor="status">Status</label>
          <select>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>
        <div className="new-user-radio">
          <label htmlFor="username" className="radio-title">
            Gender
          </label>
          <div className="user-radio">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label htmlFor="others">Rather Not Say</label>
          </div>
        </div>
        <div className="new-user-btn">
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default AddTeam;
