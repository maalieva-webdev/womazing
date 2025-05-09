import React from "react";
import ikoon from "./img/ikoon.svg";
import imgG from "./img/imgG.png";
import ikonR from "./img/ikonR.svg";
import ikonL from "./img/ikonL.svg";

const CommandHome = () => {
  return (
    <div className="hero-four">
      <h3 className="four-h3">Команда мечты Womazing</h3>
      <div className="four">
        <div className="four-img">
          <img src={ikonL} alt="" />
          <div className="img-four">
            <img className="imgG" src={imgG} alt="" />
            <img className="ikoon" src={ikoon} alt="" />
          </div>
          <img src={ikonR} alt="" />
        </div>
        <div className="four-desc">
          <div className="desc">
            <h5 className="four-h5">Для каждой</h5>
            <p className="four-p">
              Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.{" "}
              <br />
              <br />
              Womazing ищет эти мелочи и создает прекрасные вещи, которые
              выгодно подчеркивают достоинства каждой девушки.
            </p>
            <button className="four-btn">Подробнее о бренде</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandHome;
