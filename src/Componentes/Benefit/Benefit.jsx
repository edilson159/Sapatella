import Slider from "react-slick";
import dataSapatella from "../DataSapatella/DataSapatela";
import "./Benefit.css";

const Benefit = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="container-frete-free">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
        rel="stylesheet"
      />
      <Slider {...settings}>
        {dataSapatella
          .find((e) => e.benefit)
          .benefit.map(({ img, description }, index) => (
            <div key={index}>
              <div className="container-card-frete-free">
                <div className="container-card-frete-free-item">
                  <img src={img} alt="" />
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </section>
  );
};

export default Benefit;
