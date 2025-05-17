import React, { useEffect } from "react";
import "./Shop.css";
import axios from "axios";
import text from "./img/text.svg";
import left from "./img/left.svg";
import ProductCard from "../../component/ProductCard";

const Shop = () => {
  // https://680dcc8ec47cb8074d913800.mockapi.io/products

  const [product, setProduct] = React.useState([]);

  async function getProduct() {
    const res = await axios.get(
      `https://680dcc8ec47cb8074d913800.mockapi.io/products`
    );
    setProduct(res.data);
  }
  console.log(product);

  async function fillterCatigories(a, b) {
    const fill = await axios.get(
      `https://680dcc8ec47cb8074d913800.mockapi.io/products`
    );
   let res= fill.data
   let v=res.filter((el) => el.categories > a && el.categories < b);
    setProduct(v);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div id="shop">
      <div className="container">
        <div className="text">
          <h1 className="shop-h1">Магазин</h1>
          <img className="i-text" src={text} alt="" />
        </div>
        <div className="category">
          <div className="category-btns">
            <button
              onClick={() => fillterCatigories(0,100)}
              className="category-btn"
            >
              Все
            </button>
            <button
              onClick={() => fillterCatigories(0, 26)}
              className="category-btn"
            >
              Пальто
            </button>
            <button
              onClick={() => fillterCatigories(25, 51)}
              className="category-btn"
            >
              Свитшоты
            </button>
            <button
              onClick={() => fillterCatigories(50, 76)}
              className="category-btn"
            >
              Кардиганы
            </button>
            <button
              onClick={() => fillterCatigories(75, 100)}
              className="category-btn"
            >
              Толстовки
            </button>
          </div>
          <p className="category-p">Показано: 9 из 12 товаров</p>
        </div>
        <div className="shop">
          {product.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
        <div className="category-P">
          <p className="category-p">Показано: 9 из 12 товаров</p>
        </div>
        <div className="btn-page">
          <button>1</button>
          <button>2</button>
          <button>
            <img src={left} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
