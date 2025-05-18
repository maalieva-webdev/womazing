import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import "./DetalPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addCarzina, changeQuentity } from "../../storeTwo/action";

const DetalPage = () => {
  const [quen,setQuen]=useState(1)
  const [color,setColor]=useState(1)
  const [raz,setRaz]=useState(1)
  const lsProduct=useSelector((state)=>state.carzinaReducer)
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


  function dispatchFunc(el){
    dispatch(changeQuentity(quen,el.id))
    dispatch(addCarzina(el,quen))
  }




  useEffect(() => {
    getProduct();
  }, [params]);
console.log(lsProduct);

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
              <h4 className="info-price">$ {el.price}</h4>
              <div className="razmer">
                <p className="razmer-info">Выберите размер</p>
                <div className="razmer-btn">
                  <button style={{background:`${raz===1 ? 'black' : ''}`,color:`${raz===1 ? 'white' : ''}`}} onClick={()=>setRaz(1)} className="razmer-m">S</button>
                  <button style={{background:`${raz===2 ? 'black' : ''}`,color:`${raz===2 ? 'white' : ''}`}} onClick={()=>setRaz(2)} className="razmer-m">M</button>
                  <button style={{background:`${raz===3 ? 'black' : ''}`,color:`${raz===3 ? 'white' : ''}`}} onClick={()=>setRaz(3)} className="razmer-m">L</button>
                  <button style={{background:`${raz===4 ? 'black' : ''}`,color:`${raz===4 ? 'white' : ''}`}} onClick={()=>setRaz(4)} className="razmer-m">XL</button>
                  <button style={{background:`${raz===5 ? 'black' : ''}`,color:`${raz===5 ? 'white' : ''}`}} onClick={()=>setRaz(5)} className="razmer-m">2XL</button>
                </div>
              </div>
              <div className="color">
                <p className="razmer-info">Выберите цвет</p>
                <div className="color-btn">
                  <button style={{border:`${color===1 ? '4px solid black' : ''}`}} onClick={()=>setColor(1)} className="color-m r"></button>
                  <button style={{border:`${color===2 ? '4px solid black' : ''}`}} onClick={()=>setColor(2)} className="color-m g"></button>
                  <button style={{border:`${color===3 ? '4px solid black' : ''}`}} onClick={()=>setColor(3)} className="color-m b"></button>
                  <button style={{border:`${color===4 ? '4px solid black' : ''}`}} onClick={()=>setColor(4)} className="color-m y" ></button>
                  <button style={{border:`${color===5 ? '4px solid black' : ''}`}} onClick={()=>setColor(5)} className="color-m e" ></button>
                </div>
              </div>
              <div className="add-carzina">
                <input className="det-quen"  type="number" placeholder="1шт" onChange={(e)=>setQuen(e.target.value)} />
                <button className="det-add" onClick={()=>dispatchFunc(el)}>Добавить в корзину</button>
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
