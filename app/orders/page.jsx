'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getOrders } from '../lib/data';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  const getStatusColorClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600';
      case 'Pending':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  const filteredOrders = orders.filter(order => {
    if (filter === 'All') return true;
    return order.status === filter;
  });

  return (
    <div className="p-6 page">
      <h1 className="text-2xl mb-4 font-extrabold ">Orders</h1>
      <div className="mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-lg font-bold border-blue-600"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <ul>
        {filteredOrders.map(order => (
          <li key={order.id} className="p-4 border mb-2 rounded-lg item hover:bg-slate-100">
            <Link href={`/orders/${order.id}`}>
              <div>

                <h2> <strong>Order #</strong> {order.id} <strong>-</strong> {order.customer}</h2>
                <p> <strong>Status:</strong> 
                <span className={`${getStatusColorClass(order.status)} font-semibold`}>
                    {order.status}
                  </span>
                </p>
                <p> <strong>Item count:</strong> {order.items.length}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
