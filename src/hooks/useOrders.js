import { useState } from 'react';
import orderData from '../assets/dummyData.json';

const useOrders = ({ limit, page }) => {
  const [orders, setOrders] = useState(orderData);
  const start = limit * page;

  const addOrder = order => {
    setOrders(old => {
      return [order].concat(old);
    });
  };

  const removeOrder = oId => {
    setOrders(old => {
      return old.filter(o => o.id !== oId);
    });
  };

  return {
    orders: orders.slice(start, start + limit),
    total: orders.length,
    addOrder,
    removeOrder,
  };
};

export default useOrders;
