import React from "react";
import'./ZakazPoluchen.css'
import poluchen from './img/img-poluchen.svg'
import { useNavigate } from "react-router-dom";

const ZakazPoluchen = () => {
    const navigate=useNavigate()
  return (
    <div className="container">
      <div className="zakaz-poluchen">
        <div className="poluchen-title">
          <h1>Заказ получен</h1>
          <p className="poluchen-p-title">Главная - Оформление заказа - Заказ получен</p>
        </div>
        <div className="poluchen">
            <div className="poluchen-left">
                <img className="poluchen-img" src={poluchen} alt="" />
                <div className="poluchen-left-text">
                    <h5 className="poluchen-h5">Заказ успешно оформлен</h5>
                    <p className="poluchen-p">Мы свяжемся с вами в ближайшее время!</p>
                </div>
            </div>
            <button onClick={()=>navigate('/')} className="poluchen-right-btn">Перейти на главную</button>
        </div>
      </div>
    </div>
  );
};

export default ZakazPoluchen;
