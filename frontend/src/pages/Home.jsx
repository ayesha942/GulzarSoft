import React from "react";

import ProductList from "../components/List";
const dummyProducts = [
  {
    id: 1,
    title: "Excavator",
    description: "Heavy duty excavator for construction.",
    price: 50000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Bulldozer",
    description: "Powerful bulldozer for tough jobs.",
    price: 75000,
    image: "https://via.placeholder.com/150",
  },
];

function Home() {
  return (
    <div>
      <h2>Available Machines</h2>
      <ProductList products={dummyProducts} />
    </div>
  );
}

export default Home;
