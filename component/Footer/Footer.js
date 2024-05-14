import React from "react";
import "./Footer.css";
const Footer = () => {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;
  /* if (hour >= openhour && hour <= closehour) {
    alert("We are Currently Open");
  } else {
    alert("Sorry We are Close");
  }*/
  return (
    <footer>
      {isOpen ? (
        <div className="order">
          <p>
            We are open untill {closehour}:00. Come visit us or Order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We are happy to welcome you beetween {openhour}:00 and {closehour}:00
        </p>
      )}
    </footer>
  );
};
export default Footer;
