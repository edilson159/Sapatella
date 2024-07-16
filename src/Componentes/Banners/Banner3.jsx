import dataSapatella from "../DataSapatella/DataSapatela";
import "./Banner3.css";

const Banner3 = () => {
  return (
    <section className="container-banner-3">
      {dataSapatella
        .find((e) => e.banner3)
        .banner3.map(({ image }, index) => (
          <div className="container-card-banner-3" key={index}>
            <img src={image} alt="" />
          </div>
        ))}
    </section>
  );
};

export default Banner3;
