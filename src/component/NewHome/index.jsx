import React from "react";
import slide from "./img/slaid.svg";
import img1 from "./img/dim1.png";
import img2 from "./img/dim3.png";
import img3 from "./img/dim2.png";
import btn from "./img/ikon.svg";
import { useNavigate } from "react-router-dom";

function NewHome() {

  const navigate=useNavigate()

  return (
    <div className="hero-one">
      <div className="one-desc">
        <h1>
          Новые поступления <br />в этом сезоне
        </h1>
        <p>
          Утонченные сочетания и бархатные <br />
          оттенки - вот то, что вы искали в этом <br />
          сезоне. Время исследовать.
        </p>
        <div className="one-btn-div">
          <img src={btn} alt="" />
          <button onClick={()=>navigate('/shop')} className="one-btn">Открыть магазин </button>
        </div>
        <img className="slide" src={slide} alt="" />
      </div>
      <div className="one-img">
        <img className="img1" src={img1} alt="" />
        <img className="img2" src={img2} alt="" />
        <img className="img3" src={img3} alt="" />
      </div>
    </div>
  );
}

export default NewHome;
