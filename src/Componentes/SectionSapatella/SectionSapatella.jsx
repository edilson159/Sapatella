import dataSapatella from "../DataSapatella/DataSapatela";
import "./SectionSapatella.css";

const SectionSapatella = () => {
  return (
    <section className="container-section-sapatella">
      {dataSapatella
        .find((e) => e.sectionSpatella)
        .sectionSpatella.map(({ title, description, image }, index) => (
          <div className="container-card-section-sapatella" key={index}>
            <div className="container-card-section-sapatella-p1">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="container-card-section-sapatella-p2">
              <img src={image} alt="" />
            </div>
          </div>
        ))}
    </section>
  );
};

export default SectionSapatella;
