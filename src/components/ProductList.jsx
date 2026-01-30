import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

// 2 ta category misol
const categories = [
  {
    name: "Indoor Plants",
    plants: [
      { id: 1, name: "Fiddle Leaf Fig", price: 25, img: "/indoor1.jpg" },
      { id: 2, name: "Snake Plant", price: 15, img: "/indoor2.jpg" },
      { id: 3, name: "Monstera", price: 30, img: "/indoor3.jpg" },
      { id: 4, name: "Peace Lily", price: 20, img: "/indoor4.jpg" },
      { id: 5, name: "Spider Plant", price: 12, img: "/indoor5.jpg" },
      { id: 6, name: "Pothos", price: 18, img: "/indoor6.jpg" },
    ],
  },
  {
    name: "Outdoor Plants",
    plants: [
      { id: 7, name: "Rose Bush", price: 35, img: "/outdoor1.jpg" },
      { id: 8, name: "Lavender", price: 22, img: "/outdoor2.jpg" },
      { id: 9, name: "Hibiscus", price: 28, img: "/outdoor3.jpg" },
      { id: 10, name: "Sunflower", price: 10, img: "/outdoor4.jpg" },
      { id: 11, name: "Tulip", price: 15, img: "/outdoor5.jpg" },
      { id: 12, name: "Marigold", price: 12, img: "/outdoor6.jpg" },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {categories.map((category) => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <div className="products">
            {category.plants.map((plant) => (
              <div key={plant.id} className="product-card">
                <img src={plant.img} alt={plant.name} width="120" />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
