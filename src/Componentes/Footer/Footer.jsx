import dataSapatella from "../DataSapatella/DataSapatela";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="container-footer">
      {dataSapatella[0].footer.map(({ description, images }, index) => (
        <div key={index} className="container-card-footer">
          <p>{description}</p>
          <div className="container-card-footer-images">
            {images.map(({ image }, index) => (
              <img key={index} src={image} alt="" />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Footer;
