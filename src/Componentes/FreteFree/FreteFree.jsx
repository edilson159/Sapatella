import CardFreteFree from "../CardFreteFree/CardFreteFree";
import DataFreteFree from "../DataFreteFree/DataFreteFree";
import "./FreteFree.css";

const FreteFree = () => {
  return (
    <section className="container-frete-free">
      {DataFreteFree.map((props) => (
        <CardFreteFree
          key={props.id}
          imgFrete={props.imgFrete}
          paragraph={props.paragraph}
        />
      ))}
    </section>
  );
};

export default FreteFree;
