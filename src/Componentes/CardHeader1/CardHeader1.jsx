import "./CardHeader1.css";

const CardHeader1 = (props) => {
  return (
    <div className="container-card-header-2">
      <img
        className="container-img-card-header-2"
        src={props.Sapatella}
        alt="Logo da Sapatella"
      />
    </div>
  );
};

export default CardHeader1;
