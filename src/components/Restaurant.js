import React from "react";
import Orders from "./order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Orders orderType="pizza" />
        <Orders orderType="Salad" />
        <Orders orderType="Chocolate" />
      </ul>
    </div>
  );
};

export default Restaurant;
