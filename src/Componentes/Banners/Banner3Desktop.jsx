import dataSapatella from "../DataSapatella/DataSapatela";
import "./Banner3Desktop.css";

const Banner3Desktop = () => {
  return (
    <section className="container-banner-3-desktop">
      {dataSapatella
        .find((e) => e.banner3Desktop)
        .banner3Desktop.map(({ image }, index) => (
          <div className="container-card-banner-3-desktop" key={index}>
            <img src={image} alt="" />
          </div>
        ))}
    </section>
  );
};

export default Banner3Desktop;
