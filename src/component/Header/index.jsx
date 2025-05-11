import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./img/logotip.svg";
import phone from "./img/zvonok.svg";
import car from "./img/karzina.svg";
import "./Header.css";

const Header = () => {
  const navigate=useNavigate
  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={logo} alt="" />
        <div className="nav-bar">
          <NavLink to={"/"}>Главная</NavLink>
          <NavLink to={"/shop"}>Магазин</NavLink>
          <NavLink to={"/brend"}>О бренде</NavLink>
          <NavLink to={"/contact"}>Контакты</NavLink>
        </div>
        <div>
          <Link className="tel">
            {" "}
            <img src={phone} alt="" />
            +7 (495) 823-54-12
          </Link>
        </div>
        <img className="car" onClick={()=>navigate('/carzina')} src={car} alt="" />
      </div>
    </div>
  );
};

export default Header;
