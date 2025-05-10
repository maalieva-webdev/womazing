import bg from "./img/Rectangle 1.png";
import "./home.css";
import NewHome from "../../component/NewHome";
import ThreeHome from "../../component/ThreeHome";
import CommandHome from "../../component/ComandHome/comandHome";
import React, { useEffect } from "react";
import axios from "axios";
import ProductCard from "../../component/ProductCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const [product, setProduct] = React.useState([]);

  async function getProduct() {
    const res = await axios.get(
      `https://680dcc8ec47cb8074d913800.mockapi.io/products?page=1&limit=3`
    );
    setProduct(res.data);
  }
  console.log(product);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="root">
      <img className="bg" src={bg} alt="" />
      <div className="container">
        <div className="hero">
          <NewHome />
          <div>
            <h2 className="collection-h2">Новая коллекция</h2>
            <div className="collection-product">
              {product.map((el, idx) => (
                <ProductCard el={el} key={idx} />
              ))}
            </div>
            <button onClick={() => navigate("/shop")} className="collection-btn">
              Открыть магазин
            </button>
          </div>
          <ThreeHome />
          <CommandHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
