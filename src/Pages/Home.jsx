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
import SectionInformation from "../Componentes/SectionInformation/SectionInformation";
import SectionPayment from "../Componentes/SectionPayment/SectionPayment";
import SectionSecurity from "../Componentes/SectionSecurity/SectionSecurity";
import Footer from "../Componentes/Footer/Footer";

const Home = () => {
  const [Open, setOpen] = useState(false);
  const [mouseOver, setMouseOver] = useState(true);
  const [mouseOut, setMouseOut] = useState(false);

  function toggle() {
    if (Open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  toggle();
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
        <SectionInformation />
        <SectionPayment />
        <SectionSecurity />
        <Footer />
      </section>
    </DrawerContext.Provider>
  );
};

export default Home;
