import React from "react";
import Pizza from "./component/Header/menu/pizza";
import Headers from "./component/Header/header";
import Footer from "./component/Footer/Footer";
import Menu from "./component/Header/menu/menu";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <Headers />
      <Menu />
      <Footer />
    </div>
  );
};
export default App;
