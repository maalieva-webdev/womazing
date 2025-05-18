import React from "react";
import "./OfformiZakaz.css";
import { useNavigate } from "react-router-dom";
import { clearCarzina } from "../../storeTwo/action";
import { useDispatch, useSelector } from "react-redux";

const OfformiZakaz = () => {
  const product=useSelector((state)=>state.carzinaReducer)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    function handleSubmit(e){
      e.preventDefault()
      dispatch(clearCarzina())
      navigate('/zakazpoluchen')
    }
console.log(product);
const resPrice=product.reduce((acc,el)=>{
  return Math.round(acc+(el.price*el.quentity))
},0)
console.log(resPrice);


  return (
    <div className="container">
      <div className="zakaz">
        <div className="zakaz-title">
          <h1>Оформление заказа</h1>
          <p className="zakaz-p-title">Главная - Оформление заказа</p>
        </div>
        <form onSubmit={handleSubmit} className="zakaz-input">
          <div className="zakaz-left">
            <div className="pokupatel">
              <h3 className="pokupatel-h3">Данные покупателя</h3>
              <input required placeholder="Имя" type="text" />
              <input required placeholder="E-mail" type="text" />
              <input required placeholder="Телефон" type="text" />
            </div>
            <div className="pokupatel">
              <h3 className="pokupatel-h3">Адрес получателя</h3>
              <input required placeholder="Страна" type="text" />
              <input required placeholder="Город" type="text" />
              <input required placeholder="Улица" type="text" />
              <input required placeholder="Дом" type="text" />
              <input required placeholder="Квартира" type="text" />
            </div>
            <div className="pokupatel">
              <h3 className="pokupatel-h3">Комментарии</h3>
              <input required placeholder="Страна" type="text" />
            </div>
          </div>
          <div className="zakaz-right">
            <div className="vash">
              <h3 className="oplata-h3">Ваш заказ</h3>
              <div className="opl-group">
                <div className="opl-left">
                  <p className="oplata-p">Товар</p>
                  {product.map((el,idx)=>(
                    <p className="oplata-p">{idx+1}. {el.name.slice(0,15)}</p>
                  ))}
             
                </div>
                <div className="opl-right">
                  <p className="oplata-p">Всего</p>
                  {product.map((el,idx)=>(
                    <p className="oplata-p">{el.quentity} шт</p>
                  ))}
                
                </div>
              </div>
                  <p className="oplata-span">Итого<span>$ {resPrice}</span></p>

            </div>
            <div className="oplata">
              <h3 className="oplata-h3">Способы оплаты</h3>
              <label>
                <input required type="radio"  name="gender" />
                <p className="oplata-p">Оплата наличными</p>
              </label>
              <label>
                <input type="radio" />
                <p className="oplata-p"  name="gender">Оплата картами</p>
              </label>
              <button type="submit"  className="oplata-btn">Разместить заказ</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfformiZakaz;
