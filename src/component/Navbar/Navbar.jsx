import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const noneNav = () => {
    document.querySelector(".label-xmark").style = "display:none;";
    document.querySelector(".menu-bar").style = "display:none;";
    document.querySelector(".label-bars").style = "display:block;";
  };
  const blockNav = () => {
    document.querySelector(".label-xmark").style = "display:block;";
    document.querySelector(".label-bars").style = "display:none;";
    document.querySelector(".menu-bar").style = "display:flex;";
  };
  const Login = ()=>{
    return(
      <>
          <p>
              <a href="#">English</a>
            </p>
            <button type="button">تسجيل دخول</button>
      </>
    )
  }
  const Menu = () => {
    return (
      <>
        <p>
          <Link to="/model">تقدم طلب</Link>
        </p>
        <p>
          <Link to="/student">القسم الأكاديمي</Link>
        </p>
        <p>
          <Link to="/programtrain">البرامج التدريبية</Link>
        </p>
        <p>
          <Link to="/trust">القبول والتسجيل</Link>
        </p>
        <p>
          <Link to="/about">من نحن</Link>
        </p>
        <p>
          <Link to="/">الرئيسية</Link>
        </p>
      </>
    );
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="content-navbar">
        <div className="icon-menu">
          <label for="toggler" onClick={noneNav} className="label-xmark">
            <i class="fa-solid fa-xmark"></i>
          </label>
          <label for="toggler" onClick={blockNav} className="label-bars">
            <i class="fa-solid fa-bars"></i>
          </label>
          </div>
          <div className="login">
          <Login/>
          </div>
          <div className="menu">
            <Menu />
          </div>
          <div className="menu-bar-none">
          <div className="menu-bar">
            <div className="login-bar">
            <Login/>
            </div>
            <Menu />
          </div>
          </div>
          <div className="logo">
            <img src={require("../../assets/logo.png")} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
