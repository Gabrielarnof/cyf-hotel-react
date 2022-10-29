import React from "react";

const footer = () => {
  const data = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div>
      {data.map(address => (
        <li>{address}</li>
      ))}
    </div>
  );
};
export default footer;
