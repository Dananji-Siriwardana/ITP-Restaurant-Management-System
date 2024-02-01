import React, { useState } from 'react';
import axios from 'axios';

const  Cart = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const AddCart =() => {

    axios.post(`http://localhost:5000/cart/add`,
    {
    name:name,
    price:price,
    quantity:quantity,
    }
    );
      alert("added");
    }

  return (
    <div>
      <h1>My Cart</h1>
      <div>
        <h2>Add Item</h2>
        <form>
          <label>Name:</label>
          <input type="text" id='name' onChange={e => setName(e.target.value)} />
          <label>Price:</label>
          <input type="number" id='price' onChange={e => setPrice(e.target.value)} />
          <label>Quantity:</label>
          <input type="number" id='quantity' onChange={e => setQuantity(e.target.value)} />
          <button onClick={AddCart}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
