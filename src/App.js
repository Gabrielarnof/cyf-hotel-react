import React from "react";

import Bookings from "./components/Bookings";
import "./App.css";
import Heading from "./components/heading";
import TouristInfoCards from "./components/TouristInfoCards";
import footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <footer />
    </div>
  );
};

export default App;
