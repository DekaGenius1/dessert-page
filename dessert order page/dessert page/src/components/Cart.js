import React from 'react';

function Cart({ cart, updateQuantity }) {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart ({totalQuantity})</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${item.price.toFixed(2) * item.quantity}
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
