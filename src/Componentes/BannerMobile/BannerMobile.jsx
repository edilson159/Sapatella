import dataSapatella from "../DataSapatella/DataSapatela";
import "./BannerMobile.css";

const BannerMobile = () => {
  return (
    <section>
      {dataSapatella[0].bannerMobile.map(({ img }, index) => (
        <div key={index} className="container-card-banner-mobile">
          <img src={img} alt="" />
        </div>
      ))}
    </section>
  );
};

export default BannerMobile;
