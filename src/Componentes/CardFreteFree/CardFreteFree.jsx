import "./CardFreteFree.css";

const CardFreteFree = (props) => {
  return (
    <div className="container-card-frete-free">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
        rel="stylesheet"
      />
      <img src={props.imgFrete} alt="" />
      <p>{props.paragraph}</p>
    </div>
  );
};

export default CardFreteFree;
