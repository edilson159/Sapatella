import CardBannerMobile from "../CardBannerMobile/CardBannerMobile";
import DataBannerMobile from "../DataBannerMobile/DataBannerMobile";
import "./BannerMobile.css";

const BannerMobile = () => {
  return (
    <section>
      {DataBannerMobile.map((props) => (
        <CardBannerMobile key={props.id} imgBanner={props.imgBanner} />
      ))}
    </section>
  );
};

export default BannerMobile;
