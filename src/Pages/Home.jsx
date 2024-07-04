import { useState } from "react";
import { DrawerContext } from "../Context/DrawerContext";
import HeaderMobile from "../Componentes/HeaderMobile/HeaderMobile";
import BannerMobile from "../Componentes/BannerMobile/BannerMobile";
import ShopCategory from "../Componentes/ShopCategory/ShopCategory";
import SectionVerao from "../Componentes/SectionVerao/SectionVerao";
import Benefit from "../Componentes/Benefit/Benefit";
import ShowcaseProducts1 from "../Componentes/Showcases/ShowcaseProducts1";
import ShowcaseExhibition1 from "../Componentes/Showcases/ShowcaseExhibition1";

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
        <ShowcaseProducts1 />
        <ShowcaseExhibition1 />
      </section>
    </DrawerContext.Provider>
  );
};

export default Home;
