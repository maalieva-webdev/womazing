import React from "react";
import "./Footer.css";
import logo from "./img/Лого.svg";
import { Link, NavLink } from "react-router-dom";
import sotset from './img/Социалки.svg'
import visa from './img/visa-mastercard 1.svg'

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="logo">
            <img className="logo-img " src={logo} alt="" />
            <div className="logo-text">
              <p className="logo-p">© Все права защищены</p>
              <p className="logo-p">Политика конфиденциальности</p>
              <p className="logo-p">Публичная оферта</p>
            </div>
          </div>
          <div className="nav-bar-footer">
            <NavLink to={"/"}>Главная</NavLink>
            <div className="shop">
            <NavLink to={"/shop"}>Магазин</NavLink>
            <div className="menu-foot">
                <Link className="category-foot">Пальто</Link>
                <Link className="category-foot">Свитшоты</Link>
                <Link className="category-foot">Кардиганы</Link>
                <Link className="category-foot">Толстовки</Link>
            </div>
            </div>
            <NavLink to={"/brend"}>О бренде</NavLink>
            <NavLink to={"/contact"}>Контакты</NavLink>
          </div>
          <div className="email">
            <div className="email-tel">
                <p className="tel">+7 (495) 823-54-12</p>
                <p className="tel">hello@womazing.com</p>
            </div>
            <img src={sotset} alt="" />
            <img src={visa} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
