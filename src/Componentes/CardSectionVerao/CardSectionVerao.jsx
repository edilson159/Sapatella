import "./CardSectionVerao.css";

const CardSectionVerao = (props) => {
  return (
    <div className="container-card-section-verao">
      <img
        className="container-card-section-verao-img"
        src={props.imgVerao}
        alt=""
      />
      <div className="container-card-section-verao-description">
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
        <div className="container-card-section-verao-button">
          <a href="##">{props.button}</a>
        </div>
      </div>
    </div>
  );
};

export default CardSectionVerao;
