import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Brend from "./page/Brend";
import Contact from "./page/Contact/indeax";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/brend" element={<Brend />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
