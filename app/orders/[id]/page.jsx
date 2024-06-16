'use client';

// import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getOrderById } from '../../lib/data';

export default function OrderDetails({params}) {
  // const router = useRouter();
  const { id } = params;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    console.log("id = " , id)
    if (id) {
      setOrder(getOrderById(parseInt(id)));
    }
  }, [id]);

  if (!order) return <div>Loading...</div>;

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

  return (
    <div className="p-6 page">
      <h1 className="text-2xl mb-4 font-extrabold">Order Details</h1>
      <div >
      <h2 className='ml-4'> <strong>Order </strong> {order.id} - {order.customer}</h2>
      <p className='ml-4'><span className={`${getStatusColorClass(order.status)} font-semibold`}>
                    {order.status}
                  </span></p>
      <ul className='flex flex-col  justify-center items-start '>
        {order.items.map(item => (
          <li key={item.id} className='flex gap-4  justify-between items-center border-b p-4'>
            <span>{item.name}</span>
            <span><strong> - Quantity: </strong>{item.quantity} </span>
          </li>

        ))}
      </ul>
      </div>
    </div>
  );
}
