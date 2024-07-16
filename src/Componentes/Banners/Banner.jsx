import dataSapatella from "../DataSapatella/DataSapatela";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      {dataSapatella
        .find((e) => e.banner)
        .banner.map(({ img }, index) => (
          <div key={index} className="container-card-banner-mobile">
            <img src={img} alt="" />
          </div>
        ))}
    </section>
  );
};

export default Banner;
