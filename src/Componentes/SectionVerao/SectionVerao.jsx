import "./SectionVerao.css";
import dataSapatella from "../DataSapatella/DataSapatela.js";

const SectionVerao = () => {
  return (
    <section className="container-section-verao">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
        rel="stylesheet"
      />
      {dataSapatella[0].sectionSummer.map(
        ({ img, title, description, button, index }) => (
          <div key={index} className="container-card-section-verao">
            <img
              className="container-card-section-verao-img"
              src={img}
              alt=""
            />
            <div className="container-card-section-verao-description">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="container-card-section-verao-button">
                <a href="##">{button}</a>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default SectionVerao;
