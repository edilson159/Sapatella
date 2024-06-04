import { useState } from "react";
import { DrawerContext } from "../Context/DrawerContext";
import HeaderMobile from "../Componentes/HeaderMobile/HeaderMobile";

const Home = () => {
  const [Open, setOpen] = useState(false);
  return (
    <DrawerContext.Provider value={{ Open, setOpen }}>
      <section>
        <HeaderMobile />
      </section>
    </DrawerContext.Provider>
  );
};

export default Home;
