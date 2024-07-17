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
    if (window.scrollY > 40) {
      setMouseOut(true);
      setMouseOver(false);
    } else {
      setMouseOver(!mouseOver);
      setMouseOut(!mouseOut);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
        setMouseOut(true);
      } else {
        setScrolled(false);
        setMouseOver(true);
        setMouseOut(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
      className={scrolled ? "fixo" : "container-card-header-mobile"}
    >
      <div className={Open ? "actived" : "not-actived-mobile"}>
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
          {dataSapatella
            .find((e) => e.headerMobile)
            .headerMobile.map(
              ({ img, imagesActive, imagesNotActive }, index) => (
                <React.Fragment key={index}>
                  <img
                    className="container-img-card-header-2"
                    src={img}
                    alt="Logo da Sapatella"
                  />

                  <div className="container-header-mobile-card-3">
                    <div className="container-card-header-3-mobile">
                      {mouseOver &&
                        imagesNotActive.map(({ img }, index) => (
                          <img key={index} src={img} alt="Icone de um lupa" />
                        ))}

                      {mouseOut &&
                        imagesActive.map(({ img }, index) => (
                          <img key={index} src={img} alt="Icone de um lupa" />
                        ))}
                    </div>
                  </div>
                </React.Fragment>
              )
            )}
        </div>
      </div>
    </section>
  );
};

export default HeaderMobile;
