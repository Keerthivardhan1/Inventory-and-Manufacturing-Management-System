'use client';

import { useState, useEffect } from 'react';
import { getItems } from '../lib/data';

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', stock: 0 });

  useEffect(() => {
    setItems(getItems());
  }, []);

  const addItem = (e) => {
    if(newItem.name === '' || newItem.stock === 0){
        if(newItem.name === '' && newItem.stock === 0){
            alert("please enter the item details")
            return;
        }
        if(newItem.name === ''){
            alert("Please enter name of the item")
            return;
        }
        if(newItem.stock === 0) {
            alert("please enter the stocks")
        }
    }
    e.preventDefault();
    setItems([...items, { id: items.length + 1, ...newItem }]);
    setNewItem({ name: '', stock: 0 });
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-extrabold">Inventory</h1>
      <form onSubmit={addItem} className="mb-4">
        <input
          type="text"
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="p-2  mr-2"
        />
        <input
          type="number"
          placeholder="Stock level"
          value={newItem.stock}
          onChange={(e) => setNewItem({ ...newItem, stock: parseInt(e.target.value) })}
          className="p-2  mr-2 "
        />
        <button type="submit" className="p-2 bg-blue-500 rounded-md text-bold text-white">Add Item</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id} className="p-4 border mb-2 flex justify-between item rounded-lg">
            {item.name} <strong >Stock: </strong> {item.stock}
            <button onClick={() => deleteItem(item.id)} className="p-2 bg-red-500 rounded-md text-bold text-white">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
