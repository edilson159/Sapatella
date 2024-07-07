import dataSapatella from "../DataSapatella/DataSapatela";
import "./SectionSocial.css";

const SectionSocial = () => {
  return (
    <section className="container-section-social">
      <div className="container-card-section-social">
        {dataSapatella[0].sectionSocial
          .filter((e) => e.image === "../img/logoSapatella.png")
          .map(({ image }, index) => (
            <div className="container-card-section-social-p1" key={index}>
              <img src={image} alt="" />
            </div>
          ))}
        {dataSapatella[0].sectionSocial
          .filter((e) => e.image !== "../img/logoSapatella.png")
          .map(({ image }, index) => (
            <div className="container-card-section-social-p2" key={index}>
              <img src={image} alt="" />
            </div>
          ))}
      </div>
    </section>
  );
};

export default SectionSocial;
