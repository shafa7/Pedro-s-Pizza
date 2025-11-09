import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (pizza) => {
    const existing = cartItems.find((item) => item.name === pizza.name);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.name === pizza.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
    }
  };

  // Remove an item completely
  const removeFromCart = (name) => {
    setCartItems(cartItems.filter((item) => item.name !== name));
  };

  // Decrease quantity
  const decreaseQuantity = (name) => {
    setCartItems(
      cartItems.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  // Clear all items
  const clearCart = () => setCartItems([]);

  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
