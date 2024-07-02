import React, { useEffect, useState } from "react";
import MenuLateral from "../MenuLateral/MenuLateral";
import "./HeaderMobile.css";
import UseDrawerContext from "../../Hook/UseDrawerContext";
import dataSapatella from "../DataSapatella/DataSapatela";

const HeaderMobile = () => {
  const [scrolled, setScrolled] = useState(false);
  const { Open, mouseOver, setMouseOver, mouseOut, setMouseOut } =
    UseDrawerContext();

  function handleMouseHover() {
    setMouseOver(!mouseOver);
    setMouseOut(!mouseOut);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
        setMouseOver(false);
      } else {
        setScrolled(false);
        setMouseOver(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseHover}
      className={scrolled ? "fixo" : ""}
    >
      <div className={Open ? "actived" : "not-actived"}>
        <div
          className={
            scrolled
              ? "container-header-mobile-fixo"
              : "container-header-mobile"
          }
        >
          <div>
            <MenuLateral />
          </div>
          {dataSapatella.map((props, index) => (
            <React.Fragment key={index}>
              <img
                className="container-img-card-header-2"
                src={props.headerMobile[0].img}
                alt="Logo da Sapatella"
              />

              <div className="container-header-mobile-card-3">
                <div className="container-card-header-3-mobile">
                  {mouseOver &&
                    props.headerMobile[0].imagesNotActive.map(
                      ({ img }, index) => (
                        <img key={index} src={img} alt="Icone de um lupa" />
                      )
                    )}

                  {mouseOut ||
                    (scrolled &&
                      props.headerMobile[0].imagesActive.map(
                        ({ img }, index) => (
                          <img key={index} src={img} alt="Icone de um lupa" />
                        )
                      ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeaderMobile;
