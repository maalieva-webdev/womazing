import React from "react";
import'./ProductCard.css'

const ProductCard = ({ el, idx }) => {
  return (
    <div className="cart" key={idx}>
      <img className="img-cart" src={el.url} alt="" />
      <h3>{el.name}</h3>
      <h4>{el.price} $</h4>   

    </div>
  );
};

export default ProductCard;
