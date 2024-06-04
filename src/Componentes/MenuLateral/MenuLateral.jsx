import "./MenuLateral.css";
import { useState, useEffect } from "react";
import UseDrawerContext from "../../Hook/UseDrawerContext";

function Drawer({ Open }) {
  return (
    <div
      className={`${
        Open ? "container-drawer-p" : "container-drawer-"
      } container-drawer`}
    >
      <div className="container-drawer-p1" />
      <div className="container-drawer-p2 "></div>
    </div>
  );
}

const MenuLateral = (props, key) => {
  const [scrolledM, setScroulled] = useState(false);

  useEffect(() => {
    const handleScroull = () => {
      if (window.scrollY > 0) {
        setScroulled(true);
      } else {
        setScroulled(false);
      }
    };

    window.addEventListener("scroll", handleScroull);

    return () => {
      window.removeEventListener("scroll", handleScroull);
    };
  }, []);

  const { Open, setOpen } = UseDrawerContext();

  return (
    <section className={scrolledM ? "scrolledM" : "container-menu-lateral"}>
      <button
        className={
          Open
            ? "container-menu-hamburguer-close"
            : "container-menu-hamburguer-open"
        }
        onClick={() => setOpen(!Open)}
      ></button>

      <Drawer Open={Open}></Drawer>
    </section>
  );
};

export default MenuLateral;
