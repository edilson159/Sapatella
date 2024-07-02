import { useState } from "react";
import { DrawerContext } from "../Context/DrawerContext";
import HeaderMobile from "../Componentes/HeaderMobile/HeaderMobile";
import BannerMobile from "../Componentes/BannerMobile/BannerMobile";
import ShopCategory from "../Componentes/ShopCategory/ShopCategory";
import SectionVerao from "../Componentes/SectionVerao/SectionVerao";
import SilderProducts1 from "../Componentes/SilderProducts1/SilderProducts1";
import Benefit from "../Componentes/Benefit/Benefit";

const Home = () => {
  const [Open, setOpen] = useState(false);
  const [mouseOver, setMouseOver] = useState(true);
  const [mouseOut, setMouseOut] = useState(false);
  return (
    <DrawerContext.Provider
      value={{ Open, setOpen, mouseOver, setMouseOver, mouseOut, setMouseOut }}
    >
      <section>
        <HeaderMobile />
        <BannerMobile />
        <Benefit />
        <ShopCategory />
        <SectionVerao />
        <SilderProducts1 />
      </section>
    </DrawerContext.Provider>
  );
};

export default Home;
