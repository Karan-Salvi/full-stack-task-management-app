import React from "react";
import Menu from "../MenuPage/Menu";
import Menus from "./Menus";
import MenuCategories from "./MenuCategories";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <section className="w-full h-auto flex justify-center items-center p-3">
        <img src="./images/hero.png" alt="" className="w-11/12 rounded-2xl" />
      </section>
      <MenuCategories />
      <Menus />
      <Footer />
    </>
  );
};

export default Homepage;
