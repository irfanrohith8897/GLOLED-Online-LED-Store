import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [category, setcategory] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-category">
        <li><Link
          to="/"
          onClick={() => setcategory("home")}
          className={`${category === "home" ? "active" : ""}`}
        >HOME {" "}
        </Link></li><li>
        <a
          href="#explore-category"
          onClick={() => setcategory("category")}
          className={`${category === "category" ? "active" : ""}`}
        >SHOP {" "}
        </a></li><li>
        <a
          href="#app-download"
          onClick={() => setcategory("mob-app")}
          className={`${category === "mob-app" ? "active" : ""}`}
        >MOBILE APP{" "}
        </a></li><li>
        <a
          href="#footer"
          onClick={() => setcategory("contact")}
          className={`${category === "contact" ? "active" : ""}`}
        >CONTACT US{" "}
        </a></li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to="/cart" className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="navbar-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                {" "}
                <img src={assets.bag_icon} alt="" /> <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                {" "}
                <img src={assets.logout_icon} alt="" /> <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
