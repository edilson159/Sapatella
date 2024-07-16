import dataSapatella from "../DataSapatella/DataSapatela";
import "./SectionPayment.css";

const SectionPayment = () => {
  return (
    <section className="container-section-payment">
      {dataSapatella
        .find((e) => e.sectionPayment)
        .sectionPayment.map(({ title, images }, index) => (
          <div className="container-card-section-payment" key={index}>
            <h2>{title}</h2>

            <div className="container-card-section-payment-images">
              {images.map(({ image }, index) => (
                <img key={index} src={image} alt="" />
              ))}
            </div>
          </div>
        ))}
    </section>
  );
};

export default SectionPayment;
