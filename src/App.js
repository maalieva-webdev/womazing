import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Brend from "./page/Brend";
import Contact from "./page/Contact";
import Footer from "./component/Footer";
import DetalPage from "./component/DetalPage";
import NotFound from "./page/NotFound";
import Carzina from "./page/Carzina";
import Todo from "./page/Todo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/brend" element={<Brend />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carzina" element={<Carzina />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/detal-page/:params" element={<DetalPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
