import React from "react";
import Carrousel from "./components/Carrousel";
import Carts from "./components/Carts";
import Header from "./components/Header";
import Navbarre from "./components/Navbarre";
import Footer from "./components/Footer";
import MenuLateral from "./components/MenuLateral";

function App() {
  return (
    <div>
      <Navbarre />
      <MenuLateral />
      <Header />
      <Carrousel />
      <Carts />
      <Footer />
    </div>
  );
}

export default App;
