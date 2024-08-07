import "./Banner2.css";
import dataSapatella from "../DataSapatella/DataSapatela";

const Banner2 = () => {
  return (
    <section className="container-banner-2">
      {dataSapatella
        .find((e) => e.banner2)
        .banner2.map(({ image }, index) => (
          <div key={index} className="container-card-banner-2">
            <img src={image} alt="" />
          </div>
        ))}
    </section>
  );
};

export default Banner2;
