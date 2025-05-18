import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Carzina.css";
import { changeQuentity, deleteCarzina } from "../../storeTwo/action";
import { useNavigate } from "react-router-dom";
import img from './img/no-data-found.png'

const Carzina = () => {
    const navigate=useNavigate()
  const product = useSelector((state) => state.carzinaReducer);
  const dispatch = useDispatch();
  const [kol,setKol]=React.useState([])

  const resPrice = product.reduce((acc, el) => {
    return Math.round(acc +(el.price*el.quentity));
  }, 0);
  // console.log(Math.(res));

  console.log(product);

  return (
    <div className="carzina container">
      <div className="title">
        <h1>Корзина</h1>
        <p>Главная - Корзина</p>
      </div>
      {product.length>0  ? 
      <div className="lists">
        <div className="list-name">
          <h4>Товар</h4>
          <h4>Фото</h4>
          <h4>Названия</h4>
          <h4>Цена</h4>
          <h4>Количество</h4>
          <h4>Всего</h4>
        </div>
        <div className="lists-product">
          {product.map((el, idx) => (
            <div key={idx} className="product-list">
              <div className="list-group-img">
                <button
                  onClick={() => dispatch(deleteCarzina(el.id))}
                  className="list-btn"
                >
                  X
                </button> 
                <img onClick={()=>navigate(`/detal-page/${el.id}`)} className="list-img" src={el.url} alt="" />
              </div>
              <h4 className="list-name">{el.name}</h4>
              <h4 className="list-name">{Math.round(el.price*el.quentity)}</h4>
              <input className="list-name quentity" type="number" min={1} max={el.maxquentity} defaultValue={el.quentity} onChange={(e)=>dispatch(changeQuentity(+e.target.value,el.id))} />
              <h4 className="list-name">{el.maxquentity}шт</h4>
            </div>
          ))}
        </div>
        <hr />
        <div className="all-carzin">
          <p className="all-p">Подытог: {resPrice} $</p>
          <div className="offormit-btns">
            <p className="offormit-p">Итого : {resPrice} $</p>
            <button onClick={()=>navigate('/offormizakaz')} className="offormit-btn">Оформить заказ</button>
          </div>
        </div>
      </div> : <div className="notImg"><img src={img} alt="" /></div> }
    </div>
  );
};

export default Carzina;
