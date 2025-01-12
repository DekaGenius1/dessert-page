import React from 'react';

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
