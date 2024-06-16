import data from '../../data.json'

/*
getOrders :- returns all the orders
*/

export const getOrders = () => {
  return data.orders;
}

/*
getOrders :- returns order which matchs the given id
*/
export const getOrderById = (id) => {
  return data.orders.find(order => order.id === id);
}


/*
getItems :- returns all the items
*/
export const getItems = () => {
  return data.items;
}
