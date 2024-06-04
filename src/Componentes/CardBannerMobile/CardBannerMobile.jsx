import "./CardBannerMobile.css";

const CardBannerMobile = (props) => {
  return (
    <div className="container-card-banner-mobile">
      <img src={props.imgBanner} alt="" />
    </div>
  );
};

export default CardBannerMobile;
