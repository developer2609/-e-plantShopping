import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>
        +
      </button>
      <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>
        -
      </button>
      <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
    </div>
  );
};

export default CartItem;
