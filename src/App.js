import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
