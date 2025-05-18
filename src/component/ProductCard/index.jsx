import React from "react";
import'./ProductCard.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCarzina } from "../../storeTwo/action";

const ProductCard = ({ el, idx }) => {
const dispatch=useDispatch()

const navigate=useNavigate()
  return (
    <div className="cart" key={idx}>
      <img onClick={()=>navigate(`/detal-page/${el.id}`)} className="img-cart" src={el.url} alt="" />
      <h3>{el.name}</h3>
      <div className="cart-btn"><h4>{el.price} $</h4>  <button className="btn" onClick={()=>dispatch(addCarzina(el,1))}>В Корзину</button></div> 

    </div>
  );
};

export default ProductCard;
