import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Menu.css";

function MenuItem({ image, name, price }) {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ image, name, price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1000); // back to normal after 1 second
  };

  return (
    <div className="menuItem">
      <div className="menuImage" style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>₹{price.toFixed(2)}</p>
      <button
        className={`addToCartBtn ${added ? "added" : ""}`}
        onClick={handleAdd}
        disabled={added}
      >
        {added ? "✔ Added!" : "🛒 Add to Cart"}
      </button>
    </div>
  );
}

export default MenuItem;
