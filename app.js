import React from "react";
import Pizza from "./project6/component/Header/menu/pizza";
import Headers from "./project6/component/Header/header";
import Footer from "./project6/component/Footer/Footer";
import Menu from "./project6/component/Header/menu/menu";
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
