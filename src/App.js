import React from "react";
import ControlledCarousel from "./components/Carousel/ControlledCarousel";
import Carts from "./components/Carts/Carts";
import Header from "./components/Header/Header";
import Navbarre from "./components/Navbar/Navbarre";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Navbarre />
      <Header />
      <ControlledCarousel />
      <Carts />
      <Footer />
    </div>
  );
}

export default App;
