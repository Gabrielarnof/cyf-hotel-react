import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType, startFrom = 0, increment = 1 }) => {
  const [orders, setOrders] = useState(startFrom);

  const handleClick = () => {
    setOrders(orders + increment);
  };
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton handleClick={handleClick} />
    </li>
  );
};
export default Order;
