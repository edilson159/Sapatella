import { useState } from "react";
import { DrawerContext } from "../Context/DrawerContext";
import HeaderMobile from "../Componentes/HeaderMobile/HeaderMobile";
import Banner from "../Componentes/Banners/Banner";
import ShopCategory from "../Componentes/ShopCategory/ShopCategory";
import SectionVerao from "../Componentes/SectionVerao/SectionVerao";
import Benefit from "../Componentes/Benefit/Benefit";
import ShowcaseProducts1 from "../Componentes/Showcases/ShowcaseProducts1";
import ShowcaseExhibition1 from "../Componentes/Showcases/ShowcaseExhibition1";
import Banner2 from "../Componentes/Banners/Banner2";
import ShowcaseProducts2 from "../Componentes/Showcases/ShowcaseProducts2";
import Banner3 from "../Componentes/Banners/Banner3";
import SectionSapatella from "../Componentes/SectionSapatella/SectionSapatella";
import Cadastro from "../Componentes/Cadastro/Cadastro";
import SectionSocial from "../Componentes/SectionSocial/SectionSocial";

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
        <Banner />
        <Benefit />
        <ShopCategory />
        <SectionVerao />
        <ShowcaseProducts1 />
        <ShowcaseExhibition1 />
        <Banner2 />
        <ShowcaseProducts2 />
        <Banner3 />
        <SectionSapatella />
        <Cadastro />
        <SectionSocial />
      </section>
    </DrawerContext.Provider>
  );
};

export default Home;
