import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to Pedro’s Pizza, where every slice is made with passion, fresh ingredients, and a whole lot of love! At Pedro’s, we believe great pizza starts with a perfect crust, golden, crispy, and hand-tossed, topped with our signature tomato sauce and the freshest toppings. Whether you’re craving a classic Margherita, a bold BBQ Chicken, or something uniquely your own, we’ve got the perfect pie for you. Fast, flavorful, and always made to order, Pedro’s Pizza brings the taste of authentic pizzeria goodness right to your table.
        </p>
      </div>
    </div>
  );
}

export default About;
