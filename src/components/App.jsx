import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="background-image">
      <h1>Welcome to Paradise Nursery</h1>
      <button>Get Started</button>
      <AboutUs />
      <ProductList />
    </div>
  );
}

export default App;
