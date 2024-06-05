import { useEffect, useState } from "react";
import CardHeader1 from "../CardHeader1/CardHeader1";
import CardHeader3Mobile from "../CardHeader3Mobile/CardHeader3Mobile";
import DataHeader from "../DataHeader/DataHeader";
import MenuLateral from "../MenuLateral/MenuLateral";
import "./HeaderMobile.css";
import UseDrawerContext from "../../Hook/UseDrawerContext";

const HeaderMobile = () => {
  const [scrolled, setScroulled] = useState(false);

  const { Open } = UseDrawerContext();

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
  return (
    <section className={Open ? "actived" : "not-actived"}>
      <div
        className={
          scrolled ? "container-header-mobile-fixo" : "container-header-mobile"
        }
      >
        <div>
          <MenuLateral />
        </div>
        <div className="container-header-mobile-card-1">
          {DataHeader.map((props) => (
            <CardHeader1 key={props.id} Sapatella={props.Sapatella} />
          ))}
        </div>
        <div className="container-header-mobile-card-3">
          {DataHeader.map((props) => (
            <CardHeader3Mobile
              key={props.id}
              Search={props.Search}
              Puppet={props.Puppet}
              MiniCart={props.MiniCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeaderMobile;
