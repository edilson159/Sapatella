import dataSapatella from "../DataSapatella/DataSapatela";
import "./SectionSecurity.css";

const SectionSecurity = () => {
  return (
    <section className="container-section-security">
      {dataSapatella
        .find((e) => e.sectionSecurity)
        .sectionSecurity.map(({ title, images }, index) => (
          <div className="container-card-section-security" key={index}>
            <h2>{title}</h2>
            <div>
              {images.map(
                ({ image }, index) =>
                  image === "../img/imgSecurity.svg" && (
                    <img key={index} src={image} alt="" />
                  )
              )}
            </div>
          </div>
        ))}
    </section>
  );
};

export default SectionSecurity;
