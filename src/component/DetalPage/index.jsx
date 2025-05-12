import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import "./DetalPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addCarzina } from "../../storeTwo/action";

const DetalPage = () => {
  const dispatch=useDispatch()
  const { params } = useParams();
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  async function getProduct() {
    const res = await axios.get(
      `https://680dcc8ec47cb8074d913800.mockapi.io/products?id=${params}`
    );
    const response = await axios.get(
      `https://680dcc8ec47cb8074d913800.mockapi.io/products?page=1&limit=3`
    );
    setProduct(res.data);
    setProducts(response.data);
  }
  // console.log(product);
  // console.log(products);
  // console.log(params);

  useEffect(() => {
    getProduct();
  }, [params]);

  return (
    <div className="container">
      {product.map((el, idx) => (
        <div>
          <div className="detal-title">
            <h3 className="detal-name">{el.name}</h3>
            <p>{el.name}</p>
          </div>
          <div className="detal-desc">
            <img className="desc-img" src={el.url} alt="" />
            <div className="desc-info">
              <h4>{el.price}</h4>
              <div className="razmer">
                <p>Выберите размер</p>
                <div className="razmer-btn">
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                  <button>XL</button>
                  <button>2XL</button>
                </div>
              </div>
              <div className="color">
                <p>Выберите цвет</p>
                <div className="color-btn">
                  <button>red</button>
                  <button>red</button>
                  <button>red</button>
                  <button>red</button>
                </div>
              </div>
              <div className="add-carzina">
                <h5>1</h5>
                <button onClick={()=>dispatch(addCarzina(el))}>Добавить в корзину</button>
              </div>
            </div>
          </div>
          <div className="detal-sviz-block">
            <h2>Связанные товары</h2>
            <div className="detal-sviz">
              {products.map((el, idx) => (
                <ProductCard el={el} key={idx} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetalPage;
