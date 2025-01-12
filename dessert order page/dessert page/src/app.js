import React, { useState } from 'react';
import Dessert from './components/Dessert';
import Cart from './components/Cart';
import data from './data/desserts.json';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (dessert) => {
    const existing = cart.find(item => item.id === dessert.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === dessert.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...dessert, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, amount) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + amount } : item
    ).filter(item => item.quantity > 0));
  };

  return (
    <div className="app">
      <div className="desserts-list">
        {data.map(dessert => (
          <Dessert
            key={dessert.id}
            dessert={dessert}
            cart={cart}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cart={cart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;
