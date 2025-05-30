import React from "react";
import Surot from "./img/Surot.png";
import Surot2 from "./img/Surot2.png";
import "./brend.css";
import { useNavigate } from "react-router-dom";

const Brend = () => {
  const navigate = useNavigate()
  return (
    <div className="glav container">
      <div className="glav2">
        <h1 className="htar">О бренде</h1>
        <p className="parag">Главная — О бренде</p>
      </div>

      <div className="ideya">
        <img className="Surot" src={Surot} alt="" />
        <div className="text">
          <h2 className="htar">Идея и женщина </h2>
          <p className="parag">
            Womazing была основана в 2010-ом и стала одной из самых <br />{" "}
            успешных компаний нашей страны. Как и многие итальянские <br />{" "}
            фирмы, Womazing остаётся семейной компанией, хотя ни один <br /> из
            членов семьи не является модельером. <br /> <br /> Мы действуем по
            успешной формуле, прибегая к услугам <br /> известных модельеров для
            создания своих коллекций. Этот <br /> метод был описан критиком моды
            Колином Макдауэллом как <br /> форма дизайнерского со-творчества,
            характерная для ряда <br /> итальянских prêt-a-porter компаний.{" "}
          </p>
        </div>
      </div>
      <div className="ideya">
        <div className="text">
          <h3 className="htar">Магия в деталях</h3>
          <p className="parag">
            Магия в деталях Первый магазин Womazing был открыт в маленьком
            городке <br />
            на севере страны в 2010-ом году. Первая коллекция состояла <br /> из
            двух пальто и костюма, которые были копиями парижских <br />{" "}
            моделей. <br /> <br /> Несмотря на то, что по образованию
            основательница была <br /> адвокатом, ее семья всегда была тесно
            связана с шитьём <br /> (прабабушка основательницы шила одежду для
            женщин, а <br /> мать основала профессиональную школу кроя и шитья).{" "}
            <br /> Стремление производить одежду для масс несло в себе <br />{" "}
            большие перспективы, особенно в то время, когда высокая <br /> мода
            по-прежнему доминировала, а рынка качественного <br /> prêt-a-porter
            попросту не существовало.{" "}
          </p>
        </div>
        <img className="Surot" src={Surot2} alt="" />
      </div>
      <button onClick={()=>navigate('/shop')} className="btn-brend">Перейти в магазин</button>
    </div>
  );
};

export default Brend;
