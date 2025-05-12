import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./img/logotip.svg";
import phone from "./img/zvonok.svg";
import car from "./img/karzina.svg";
import "./Header.css";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate=useNavigate()
  const [res,setRes]=React.useState([])

  const count=useSelector((state)=>state)
  // setRes(count)
console.log(count.length);

  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={logo} alt="" />
        <div className="nav-bar">
          <NavLink to={"/"}>Главная</NavLink>
          <NavLink to={"/shop"}>Магазин</NavLink>
          <NavLink to={"/brend"}>О бренде</NavLink>
          <NavLink to={"/contact"}>Контакты</NavLink>
          <NavLink to={"/todo"}>Тодо</NavLink>
        </div>
        <div>
          <Link className="tel">
            {" "}
            <img src={phone} alt="" />
            +7 (495) 823-54-12
          </Link>
        </div>
        <div onClick={()=>navigate('/carzina')} className="block-car">
        <img className="car"  src={car} alt="" />
        <span style={{display:`${count.length>0 ? "block" : "none"}`}} className="span" >{count.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
