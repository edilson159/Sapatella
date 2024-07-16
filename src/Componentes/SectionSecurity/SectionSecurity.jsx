import dataSapatella from "../DataSapatella/DataSapatela";
import "./SectionSecurity.css";

const SectionSecurity = () => {
  return (
    <section className="container-section-security">
      {dataSapatella
        .find((e) => e.sectionSecurity)
        .sectionSecurity.map(({ title, image }, index) => (
          <div className="container-card-section-security" key={index}>
            <h2>{title}</h2>
            <img src={image} alt="" />
          </div>
        ))}
    </section>
  );
};

export default SectionSecurity;
