// import data from '../data.json';
import data from '../../data.json'

export const getOrders = () => {
  return data.orders;
}

export const getOrderById = (id) => {
  return data.orders.find(order => order.id === id);
}

export const getItems = () => {
  return data.items;
}
