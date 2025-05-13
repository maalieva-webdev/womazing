import React from "react";
import "./OfformiZakaz.css";
import { useNavigate } from "react-router-dom";

const OfformiZakaz = () => {
    const navigate=useNavigate()


  return (
    <div className="container">
      <div className="zakaz">
        <div className="zakaz-title">
          <h1>Оформление заказа</h1>
          <p className="zakaz-p-title">Главная - Оформление заказа</p>
        </div>
        <div className="zakaz-input">
          <div className="zakaz-left">
            <div className="pokupatel">
              <h3 className="pokupatel-h3">Данные покупателя</h3>
              <input placeholder="Имя" type="text" />
              <input placeholder="E-mail" type="text" />
              <input placeholder="Телефон" type="text" />
            </div>
            <div className="pokupatel">
              <h3 className="pokupatel-h3">Адрес получателя</h3>
              <input placeholder="Страна" type="text" />
              <input placeholder="Город" type="text" />
              <input placeholder="Улица" type="text" />
              <input placeholder="Дом" type="text" />
              <input placeholder="Квартира" type="text" />
            </div>
            <div className="pokupatel">
              <h3 className="pokupatel-h3">Комментарии</h3>
              <input placeholder="Страна" type="text" />
            </div>
          </div>
          <div className="zakaz-right">
            <div className="vash">
              <h3 className="oplata-h3">Ваш заказ</h3>
              <div className="opl-group">
                <div className="opl-left">
                  <p className="oplata-p">Товар</p>
                  <p className="oplata-p">Футболка USA</p>
                  <p className="oplata-p">Подытог</p>
                </div>
                <div className="opl-right">
                  <p className="oplata-p">Всего</p>
                  <p className="oplata-p">$129</p>
                  <p className="oplata-p">$129</p>
                </div>
              </div>
                  <p className="oplata-span">Итого<span>$129</span></p>

            </div>
            <div className="oplata">
              <h3 className="oplata-h3">Способы оплаты</h3>
              <li>
                <input type="radio" />
                <p className="oplata-p">Оплата наличными</p>
              </li>
              <li>
                <input type="radio" />
                <p className="oplata-p">Оплата картами</p>
              </li>
              <button onClick={()=>navigate('/zakazpoluchen')} className="oplata-btn">Разместить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfformiZakaz;
