import React from "react";
import notfound from "./img/404_page-not-found.png";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
        padding: "50px 0",
      }}
    >
      <img style={{ width: "400px" }} src={notfound} alt="" />
      <h3>
        Извините, <br />
        Нашем сайте такие страница отсутствует.
      </h3>
    </div>
  );
};

export default NotFound;
