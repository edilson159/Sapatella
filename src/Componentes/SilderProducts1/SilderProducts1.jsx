import "./SilderProducts1.css";
import Slider from "react-slick";
import CardVitriniProducts1 from "../CardVitriniProducts1/CardVitriniProducts1.jsx";
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
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section>
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

      <Slider {...settings}>
        {dataSapatella.map((props) => (
          <CardVitriniProducts1
            key={props.id}
            title={props.title}
            discount={props.discount}
            heartIcon={props.heartIcon}
            image={props.image}
            name={props.name}
            currentPrice={props.currentPrice}
            oldPrice={props.oldPrice}
            description={props.description}
          />
        ))}
      </Slider>
    </section>
  );
};

export default SilderProducts1;
