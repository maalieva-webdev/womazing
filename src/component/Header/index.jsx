import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./img/logotip.svg";
import phone from "./img/zvonok.svg";
import car from "./img/karzina.svg";
import "./Header.css";
import { useSelector } from "react-redux";
import Modal from "../Modal";

const Header = () => {
  const navigate = useNavigate();
  const [res, setRes] = React.useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [nextModal, setNextModal] = useState(false);

  const count = useSelector((state) => state);
  // setRes(count)
  // console.log(count.length);
  function closeModal() {
    setOpenModal(!openModal);
    setNextModal(!nextModal);
  }

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
          <Link onClick={() => setOpenModal(!openModal)} className="tel">
            {" "}
            <img src={phone} alt="" />
            +7 (495) 823-54-12
          </Link>
        </div>
        <div onClick={() => navigate("/carzina")} className="block-car">
          <img className="car" src={car} alt="" />
          <span
            style={{ display: `${count.length > 0 ? "block" : "none"}` }}
            className="span"
          >
            {count.length}
          </span>
        </div>
      </div>
      <Modal openModal={openModal}>
        {nextModal ? (
          <div className="modal-group">
            <h3 className="modal-h1">Отлично! Мы скоро вам перезвоним.</h3>
            <button onClick={() => closeModal()} className="modal-zvonok">
              Закрыть
            </button>
          </div>
        ) : (
          <div className="modal-group">
            <h3 onClick={() => setOpenModal()}>X</h3>
            <h1 className="modal-h1">Заказать обратный звонок</h1>
            <input required className="modal-input" placeholder="Имя" type="text" />
            <input className="modal-input" placeholder="E-mail" type="text" />
            <input className="modal-input" placeholder="Телефон" type="text" />
            <button
              onClick={() => setNextModal(!nextModal)}
              className="modal-zvonok"
            >
              Заказать звонок
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Header;
