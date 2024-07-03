import "./MenuLateral.css";
import { useState, useEffect } from "react";
import UseDrawerContext from "../../Hook/UseDrawerContext";
import SumaryMobile from "../SumaryMobile/SumaryMobile";

function Drawer({ Open }) {
  return (
    <div
      className={`${
        Open ? "container-drawer-p" : "container-drawer-"
      } container-drawer`}
    >
      <div className="container-drawer-p1" />
      <div className="container-drawer-p2 ">
        <SumaryMobile />
      </div>
    </div>
  );
}

const MenuLateral = () => {
  const { Open, setOpen, setMouseOver, mouseOver, setMouseOut, mouseOut } =
    UseDrawerContext();
  const [scrolledM, setScroulled] = useState(false);

  useEffect(() => {
    const handleScroull = () => {
      if (window.scrollY > 40) {
        setScroulled(true);
        setMouseOut(true);
        setMouseOver(false);
      } else {
        setScroulled(false);
        setMouseOver(true);
        setMouseOut(false);
      }
    };

    window.addEventListener("scroll", handleScroull);

    return () => {
      window.removeEventListener("scroll", handleScroull);
    };
  }, []);

  return (
    <section className={scrolledM ? "scrolledM" : "container-menu-lateral"}>
      {mouseOver && (
        <button
          className={
            Open
              ? "container-menu-hamburguer-close"
              : "container-menu-hamburguer-open-w"
          }
          onClick={() => setOpen(!Open)}
        ></button>
      )}

      {mouseOut && (
        <button
          className={
            Open
              ? "container-menu-hamburguer-close"
              : "container-menu-hamburguer-open"
          }
          onClick={() => setOpen(!Open)}
        ></button>
      )}

      <Drawer Open={Open}></Drawer>
    </section>
  );
};

export default MenuLateral;
