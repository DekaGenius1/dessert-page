import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import React from 'react';
//desertis cart-shi damatebis funqcia
function Dessert({ dessert, cart, addToCart }) {
  const inCart = cart.some(item => item.id === dessert.id);

  return (
    <div className={`dessert ${inCart ? 'in-cart' : ''}`}>
      <img src={dessert.image} alt={dessert.name} />
      <h3>{dessert.name}</h3>
      <p>${dessert.price.toFixed(2)}</p>
      <button onClick={() => addToCart(dessert)}>
        {inCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default Dessert;
