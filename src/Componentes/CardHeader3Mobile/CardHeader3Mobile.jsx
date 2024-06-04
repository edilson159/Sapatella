import "./CardHeader3Mobile.css";

const CardHeader3Mobile = (props) => {
  return (
    <div className="container-card-header-3-mobile">
      <img src={props.Search} alt="Icone de um lupa" />
      <img src={props.Puppet} alt="Icone de um boneco" />
      <img src={props.MiniCart} alt="Icone de um carrinho de compras" />
    </div>
  );
};

export default CardHeader3Mobile;
