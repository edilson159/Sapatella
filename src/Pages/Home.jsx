import { useState } from "react";
import { DrawerContext } from "../Context/DrawerContext";
import HeaderMobile from "../Componentes/HeaderMobile/HeaderMobile";
import BannerMobile from "../Componentes/BannerMobile/BannerMobile";
import FreteFree from "../Componentes/FreteFree/FreteFree";

const Home = () => {
  const [Open, setOpen] = useState(false);
  return (
    <DrawerContext.Provider value={{ Open, setOpen }}>
      <section>
        <HeaderMobile />
        <BannerMobile />
        <FreteFree />
      </section>
    </DrawerContext.Provider>
  );
};

export default Home;
