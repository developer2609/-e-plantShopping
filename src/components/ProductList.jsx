import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Fiddle Leaf Fig", price: 25 },
  { id: 2, name: "Snake Plant", price: 15 },
  { id: 3, name: "Monstera", price: 30 },
  { id: 4, name: "Succulent Pack", price: 10 },
  { id: 5, name: "Peace Lily", price: 20 },
  { id: 6, name: "Spider Plant", price: 12 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plants for Sale</h2>
      <div className="products">
        {plants.map((plant) => (
          <div key={plant.id} className="product-card">
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
