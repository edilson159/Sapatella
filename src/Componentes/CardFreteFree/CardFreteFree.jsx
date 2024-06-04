import "./CardFreteFree.css";

const CardFreteFree = (props) => {
  return (
    <div className="container-card-frete-free">
      <img src={props.imgFrete} alt="" />
      <p>{props.paragraph}</p>
    </div>
  );
};

export default CardFreteFree;
