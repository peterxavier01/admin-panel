//@ts-check
import { useState, useEffect } from "react";
import Login from "./pages/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./pages/Users/Users";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Teams from "./pages/Teams/Teams";
import Products from "./pages/Products/Products";
import User from "./pages/User/User";
import AddUser from "./pages/AddUser/AddUser";
import Product from "./pages/Product/Product";
import AddProduct from "./pages/AddProduct/AddProduct";
import Team from "./pages/Team/Team";
import AddTeam from "./pages/AddTeam/AddTeam";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = sessionStorage.getItem("user");
    userToken && JSON.parse(userToken) ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("user", user);
  }, [user]);

  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
  }

  window.addEventListener('resize', documentHeight);
  documentHeight();

  return (
    <div className="App">
      <Navbar />
      <div className="sidebar-container">
        <div className="sidebar" id="sidenav">
          <Sidebar logout={() => setUser(false)} />
        </div>
        <Routes>
          {!user && (
            <Route
              path="/login"
              element={<Login authenticate={() => setUser(true)} />}
            />
          )}
          {user && (
            <>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/team/:teamId" element={<Team />} />
              <Route path="/add-team" element={<AddTeam />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/add-product" element={<AddProduct />} />
            </>
          )}
          <Route
            path="*"
            element={<Navigate to={user ? "/dashboard" : "/login"} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
