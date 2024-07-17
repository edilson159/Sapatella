import Slider from "react-slick";
import dataSapatella from "../DataSapatella/DataSapatela";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="container-banner-mobile">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings}>
        {dataSapatella
          .find((e) => e.banner)
          .banner.map(({ img }, index) => (
            <div key={index} className="container-card-banner-mobile">
              <img src={img} alt="" />
            </div>
          ))}
      </Slider>
    </section>
  );
};

export default Banner;
