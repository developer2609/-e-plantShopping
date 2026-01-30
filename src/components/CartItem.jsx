import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
              }
            >
              +
            </button>
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
              }
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
          </div>
        ))
      )}
      <h3>Total Cart Amount: ${totalAmount}</h3>
      {cart.length > 0 && <button>Checkout</button>}
    </div>
  );
};

export default CartItem;
