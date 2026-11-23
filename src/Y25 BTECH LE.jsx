import { useState } from 'react';
import ProductCard from './ProductCard';

function App() {
  const [cart, setCart] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Mobile", price: 20000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 2000, category: "Fashion" },
    { id: 4, name: "Watch", price: 1500, category: "Accessories" }
  ];

  return (
    <div>
      <h1>Product List</h1>
      <h2>Cart Items: {cart}</h2>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          onAddToCart={() => setCart(cart + 1)}
        />
      ))}
    </div>
  );
}

export default App;