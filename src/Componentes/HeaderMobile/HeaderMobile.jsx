import CardHeader1 from "../CardHeader1/CardHeader1";
import CardHeader3Mobile from "../CardHeader3Mobile/CardHeader3Mobile";
import DataHeader from "../DataHeader/DataHeader";
import MenuLateral from "../MenuLateral/MenuLateral";
import "./HeaderMobile.css";

const HeaderMobile = () => {
  return (
    <section className="container-header-mobile">
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
    </section>
  );
};

export default HeaderMobile;
