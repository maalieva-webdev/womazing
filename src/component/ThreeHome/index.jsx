import React from "react";
import frame2 from "./img/iko1.svg";
import frame3 from "./img/iko2.svg";
import frame1 from "./img/iko3.svg";

const ThreeHome = () => {
  return (
    <div className="hero-three">
      <h1>Что для нас важно</h1>
      <div className="three-contents">
        <div className="three-content">
          <img className="frames" src={frame1} alt="" />
          <h4>Качество</h4>
          <p>
            Наши профессионалы работают на лучшем оборудовании для пошива одежды
            беспрецедентного качества
          </p>
        </div>
        <div className="three-content">
          <img className="frames" src={frame2} alt="" />
          <h4>Скорость</h4>
          <p>
            Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
            единиц продукции в наших собственных цехах
          </p>
        </div>
        <div className="three-content">
          <img className="frames" src={frame3} alt="" />
          <h4>Ответственность</h4>
          <p>
            Мы заботимся о людях и планете. Безотходное производство и
            комфортные условия труда - все это Womazingодежды беспрецедентного
            качества
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeHome;
