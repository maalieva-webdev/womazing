// import bg from "./img/Rectangle 1.png";
import "./home.css";
import NewHome from "../../component/NewHome";
import ThreeHome from "../../component/ThreeHome";

const Home = () => {
  return (
    <div className="root">
      {/* <img className="bg" src={bg} alt="" /> */}
      <div className="container">
        <div className="hero">
          <NewHome />
          <div className="hero-two"></div>
          <ThreeHome />
          {/* <CommandHome /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
