import React, { useEffect, useState } from "react";

import "./HeaderDesktop.css";
import UseDrawerContext from "../../Hook/UseDrawerContext";
import dataSapatella from "../DataSapatella/DataSapatela";

const HeaderDesktop = () => {
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
        setMouseOver(false);
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
      className={scrolled ? "fixo" : "container-card-header-desktop"}
    >
      <div className={Open ? "actived" : "not-actived"}>
        <div
          className={
            scrolled
              ? "container-header-desktop-fixo"
              : "container-header-desktop"
          }
        >
          {dataSapatella
            .filter((e) => e.headerDesktop)[0]
            .headerDesktop.map(
              (
                {
                  img,
                  informations,
                  input,
                  placeholder,
                  iconsActive,
                  iconsNotActive,
                },
                index
              ) => (
                <React.Fragment key={index}>
                  <img
                    className="container-img-card-header-2"
                    src={img}
                    alt="Logo da Sapatella"
                  />

                  <div className="container-card-names-header-desktop"></div>

                  <div className="container-header-desktop-card-3">
                    <div className="container-card-header-3-desktop">
                      {mouseOver
                        ? iconsNotActive
                            .filter((e) => e.icon !== "../img/imgSearchW.svg")
                            .map(({ icon }, index) => (
                              <img
                                key={index}
                                src={icon}
                                alt="Icone de um lupa"
                              />
                            ))
                        : iconsActive
                            .filter((e) => e.icon !== "../img/imgSearch.png")
                            .map(({ icon }, index) => (
                              <img
                                key={index}
                                src={icon}
                                alt="Icone de um lupa"
                              />
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

export default HeaderDesktop;
