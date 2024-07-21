import "./Home.css";
import { useEffect, useState } from "react";
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
import HeaderDesktop from "../Componentes/HeaderDesktop/HeaderDesktop";
import Banner3Desktop from "../Componentes/Banners/Banner3Desktop";
import Junction from "../Componentes/Junction/Junction";

const Home = () => {
  const [showBlockMobile, setShowBlockMobile] = useState(true);

  useEffect(() => {
    const handleResize1 = () => {
      if (window.innerWidth > 1024) {
        setShowBlockMobile(false);
      } else {
        setShowBlockMobile(true);
      }
    };

    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleResize1);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize1);
    };
  }, []);

  const [showBlockDesktop, setShowBlockDesktop] = useState(true);

  useEffect(() => {
    const handleResize2 = () => {
      if (window.innerWidth < 1024) {
        setShowBlockDesktop(false);
      } else {
        setShowBlockDesktop(true);
      }
    };

    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleResize2);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize2);
    };
  }, []);

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
        {showBlockDesktop && <HeaderDesktop />}
        {showBlockMobile && <HeaderMobile />}
        <Banner />
        <Benefit />
        <ShopCategory />
        <SectionVerao />
        <ShowcaseProducts1 />
        <ShowcaseExhibition1 />
        <div className="Junction-Desktop">
          <Banner2 />
          <ShowcaseProducts2 />
        </div>
        {showBlockMobile && <Banner3 />}
        {showBlockDesktop && <Banner3Desktop />}
        <SectionSapatella />
        <Cadastro />
        {showBlockDesktop && <Junction />}
        {showBlockMobile && <SectionSocial />}
        {showBlockMobile && <SectionInformation />}
        {showBlockMobile && <SectionPayment />}
        {showBlockMobile && <SectionSecurity />}
        <Footer />
      </section>
    </DrawerContext.Provider>
  );
};

export default Home;
