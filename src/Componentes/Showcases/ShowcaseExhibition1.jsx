import dataSapatella from "../DataSapatella/DataSapatela";
import "./ShowcaseExhibition1.css";

const ShowcaseExhibition1 = () => {
  return (
    <section className="container-showcase-exhibition1">
      {dataSapatella.map((props, index) => (
        <div key={index} className="container-card-showcase-exhibition1">
          <div className="container-card-showcase-exhibition1-p1">
            <h2>{props.showcaseExhibition1[0].title}</h2>
            <p>{props.showcaseExhibition1[0].description}</p>
          </div>
          <div className="container-card-showcase-exhibition1-p2">
            <div className="container-card-showcase-exhibition1-p2-1">
              <a href={props.showcaseExhibition1[1].link}>
                {props.showcaseExhibition1[1].title}
              </a>
              <img src={props.showcaseExhibition1[1].icon} alt="" />
            </div>
            <img
              className="container-card-showcase-exhibition1-p2-img"
              src={props.showcaseExhibition1[1].image}
              alt=""
            />
          </div>
          <div className="container-card-showcase-exhibition1-p3">
            <div className="container-card-showcase-exhibition1-p3-1">
              <img
                className="container-card-showcase-exhibition1-p3-1-img"
                src={props.showcaseExhibition1[2].image}
                alt=""
              />
              <div className="container-card-showcase-exhibition1-p3-1-link">
                <a href={props.showcaseExhibition1[2].link}>
                  {props.showcaseExhibition1[2].title}
                </a>
                <img src={props.showcaseExhibition1[2].icon} alt="" />
              </div>
            </div>
            <div className="container-card-showcase-exhibition1-p3-2">
              <img
                className="container-card-showcase-exhibition1-p3-2-img"
                src={props.showcaseExhibition1[3].image}
                alt=""
              />
              <div className="container-card-showcase-exhibition1-p3-2-description">
                <h2>{props.showcaseExhibition1[3].title}</h2>
                <p>{props.showcaseExhibition1[3].description}</p>
                <div className="container-card-showcase-exhibition1-p3-2-description-link">
                  <a href={props.showcaseExhibition1[3].link}>
                    {props.showcaseExhibition1[4].title}
                  </a>
                  <img src={props.showcaseExhibition1[4].icon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ShowcaseExhibition1;
