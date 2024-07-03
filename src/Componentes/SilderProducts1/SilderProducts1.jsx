import "./SilderProducts1.css";
import Slider from "react-slick";
import dataSapatella from "../DataSapatella/DataSapatela.js";

const SilderProducts1 = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="container-vitrini-products">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />

      {dataSapatella.map((props) => (
        <div className="container-card-vitrini-products-1-title">
          <h2>{props.showcaseProducts1[0].title}</h2>
        </div>
      ))}

      <Slider {...settings}>
        {dataSapatella[0].showcaseProducts1.map(
          ({
            image,
            discount,
            heartIcon,
            name,
            description,
            currentPrice,
            oldPrice,
          }) => (
            <div className="container-card-vitrini-products-1">
              <div className="container-card-vitrini-products-1-discount">
                <p>{discount}</p>
              </div>
              <img
                className="container-card-vitrini-products-img-heart"
                src={heartIcon}
                alt="Icone de um coração"
              />

              <div className="container-card-vitrini-products-1-img">
                <img src={image} alt="Imagem do produto" />
              </div>

              <div className="container-card-vitrini-products-1-description">
                <div className="container-card-vitrini-products-1-description-name">
                  <p>{name}</p>
                </div>
                <div className="container-card-vitrini-products-1-description-price">
                  <p>{currentPrice}</p>

                  <p>{oldPrice}</p>
                </div>
                <p className="container-option-the-payment">{description}</p>
              </div>
            </div>
          )
        )}
      </Slider>
    </section>
  );
};

export default SilderProducts1;
