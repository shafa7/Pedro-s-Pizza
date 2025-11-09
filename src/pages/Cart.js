import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useContext(CartContext);

  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      setShowCheckout(false);
      clearCart();
    }, 2500);
    e.target.reset();
  };

  return (
    <div className="cartPage">
      <h1>Your Cart 🛒</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add some pizzas!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.name} className="cartItem">
              <img src={item.image} alt={item.name} />
              <div className="cartDetails">
                <h3>{item.name}</h3>
                <p>₹{item.price.toFixed(2)}</p>
                <div className="quantityControls">
                  <button onClick={() => decreaseQuantity(item.name)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <p className="subtotal">
                  Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="removeBtn"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cartSummary">
            <h2>Total: ₹{totalPrice.toFixed(2)}</h2>
            <div className="cartButtons">
              <button className="clearBtn" onClick={clearCart}>
                Clear Cart
              </button>
              <button
                className="checkoutBtn"
                onClick={() => setShowCheckout(true)}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}

      {/* ✅ Checkout Popup */}
      {showCheckout && (
        <div className="checkoutOverlay">
          <div className="checkoutBox">
            <h2>Checkout Details</h2>

            {/* Order Summary Section */}
            <div className="orderSummary">
              <h3>Your Order</h3>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.name}>
                    <span>{item.name} × {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <h4>Total: ₹{totalPrice.toFixed(2)}</h4>
              <hr />
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleCheckoutSubmit}>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Delivery Address</label>
              <textarea
                placeholder="Enter your address"
                rows="3"
                required
              ></textarea>

              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" required />

              <label>Payment Method</label>
              <select required>
                <option value="">Select</option>
                <option value="COD">Cash on Delivery</option>
                <option value="Card">Credit/Debit Card</option>
                <option value="UPI">UPI / Google Pay</option>
              </select>

              <div className="checkoutButtons">
                <button type="submit" className="placeOrderBtn">
                  Place Order
                </button>
                <button
                  type="button"
                  className="cancelBtn"
                  onClick={() => setShowCheckout(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Success Popup */}
      {orderPlaced && (
        <div className="orderPopup">
          <h3>🎉 Order Placed Successfully!</h3>
          <p>Your delicious pizzas are on the way 🍕</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
