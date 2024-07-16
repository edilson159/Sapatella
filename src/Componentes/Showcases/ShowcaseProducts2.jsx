import "./ShowcaseProducts2.css";
import Slider from "react-slick";
import dataSapatella from "../DataSapatella/DataSapatela.js";

const ShowcaseProducts2 = () => {
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
    <section className="container-vitrini-products-2">
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

      {dataSapatella
        .find((e) => e.showcaseProducts1)
        .showcaseProducts1.map(({ title }, index) => (
          <div key={index} className="container-card-vitrini-products-2-title">
            <h2>{title}</h2>
          </div>
        ))}

      <Slider {...settings}>
        {dataSapatella
          .find((e) => e.showcaseProducts1)
          .showcaseProducts1.map(
            (
              {
                image,
                discount,
                heartIcon,
                name,
                description,
                currentPrice,
                oldPrice,
              },
              index
            ) => (
              <div key={index} className="container-card-vitrini-products-2">
                <div className="container-card-vitrini-products-2-discount">
                  <p>{discount}</p>
                </div>
                <img
                  className="container-card-vitrini-products-2-img-heart"
                  src={heartIcon}
                  alt="Icone de um coração"
                />

                <div className="container-card-vitrini-products-2-img">
                  <img src={image} alt="Imagem do produto" />
                </div>

                <div className="container-card-vitrini-products-2-description">
                  <div className="container-card-vitrini-products-2-description-name">
                    <p>{name}</p>
                  </div>
                  <div className="container-card-vitrini-products-2-description-price">
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

export default ShowcaseProducts2;
