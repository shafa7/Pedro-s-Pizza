import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/FloatingCart.css";

function FloatingCart() {
  const { cartItems } = useContext(CartContext);

  // calculate total item count
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" className="floatingCart">
      <ShoppingCartIcon className="cartIcon" />
      {totalItems > 0 && <span className="cartCount">{totalItems}</span>}
    </Link>
  );
}

export default FloatingCart;
