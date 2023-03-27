import React from "react";
import ControlledCarousel from "./components/ControlledCarousel";
import Carts from "./components/Carts";
import Header from "./components/Header";
import Navbarre from "./components/Navbarre";
import Footer from "./components/Footer";
import MenuLateral from "./components/MenuLateral";

function App() {
  return (
    <div>
      <Navbarre />
      {/* <MenuLateral /> */}
      <Header />
      <ControlledCarousel />
      <Carts />
      <Footer />
    </div>
  );
}

export default App;
