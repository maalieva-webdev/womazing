import React from "react";
import'./ProductCard.css'
import { useNavigate } from "react-router-dom";

const ProductCard = ({ el, idx }) => {
const navigate=useNavigate()
  return (
    <div className="cart" key={idx}>
      <img onClick={()=>navigate(`/detal-page/${el.id}`)} className="img-cart" src={el.url} alt="" />
      <h3>{el.name}</h3>
      <h4>{el.price} $</h4>   

    </div>
  );
};

export default ProductCard;
