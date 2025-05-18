import React, { useEffect, useState } from "react";
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

  const allProduct=product.length
  const quenProdPage=6
  const allPage=Math.ceil(allProduct/quenProdPage)
  const [activePage,setActivePage]=useState(1)
  const startPro=(quenProdPage*activePage)-quenProdPage
  const endPro=quenProdPage*activePage
  // const activeProduct=(activePage*quenProdPage)-3
  const newProduct=product.slice(startPro,endPro)

console.log(newProduct);
console.log("активный пейж",activePage);
   let arr =[...new Array(allPage)]
   console.log(arr);
   





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
          <p className="category-p">Показано: {quenProdPage} из {allProduct} товаров</p>
        </div>
        <div className="shop">
          {newProduct.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
        <div className="category-P">
          <p className="category-p">Показано: {quenProdPage} из {allProduct} товаров</p>
        </div>
        <div className="btns-page">
           <button disabled={1===activePage} onClick={()=>setActivePage(activePage-1)}>
            <img style={{rotate:'180deg'}} src={left} alt="" />
          </button>
          {arr.map((_,idx)=>(
            <button style={{background:`${activePage===idx+1?'green':''}`,color:`${activePage===idx+1?'white':''}`}} className="btn-page" onClick={()=>setActivePage(idx+1)}>{idx+1}</button>
            // <button style={{background:`${activePage===idx?'green':''}`}} className="btn-page" onClick={()=>setActivePage(+activePage+(idx+1))}>{}</button>
          ))}
          {/* <button>1</button>
          <button>2</button> */}
          <button disabled={allPage===activePage} onClick={()=>setActivePage(activePage+1)}>
            <img  src={left} alt="" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default Shop;
