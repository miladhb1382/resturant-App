import React from "react";
import Pizza from "../Header/menu/pizza";
import Show from "../../../project4/component/Show/show";
import "./map.css";

const Map = ({ pizzas }) => {
  return (
    <ul className="pizzas">
      {pizzas.map((pizza, index) => (
        <Pizza
          key={index}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          photoName={pizza.photoName}
          soldOut={pizza.soldOut}
        />
      ))}
    </ul>
  );
};

export default Map;
