import { useState } from "react";
import { DrawerContext } from "../Context/DrawerContext";
import HeaderMobile from "../Componentes/HeaderMobile/HeaderMobile";
import BannerMobile from "../Componentes/BannerMobile/BannerMobile";
import FreteFree from "../Componentes/FreteFree/FreteFree";
import ShopCategory from "../Componentes/ShopCategory/ShopCategory";

const Home = () => {
  const [Open, setOpen] = useState(false);
  return (
    <DrawerContext.Provider value={{ Open, setOpen }}>
      <section>
        <HeaderMobile />
        <BannerMobile />
        <FreteFree />
        <ShopCategory />
      </section>
    </DrawerContext.Provider>
  );
};

export default Home;
