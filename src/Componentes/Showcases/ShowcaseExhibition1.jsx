import dataSapatella from "../DataSapatella/DataSapatela";
import "./ShowcaseExhibition1.css";
import React from "react";

const ShowcaseExhibition1 = () => {
  return (
    <section className="container-showcase-exhibition1">
      <div className="container-card-showcase-exhibition1">
        <div className="container-card-showcase-exhibition1-p">
          {dataSapatella
            .find((e) => e.showcaseExhibition1)
            .showcaseExhibition1.slice(0, 1)
            .map(({ title, description }, index) => (
              <div
                key={index}
                className="container-card-showcase-exhibtion1-title"
              >
                <h2>{title}</h2>
                <div className="container-card-showcase-exhibition1-p1">
                  <p>{description}</p>
                </div>
              </div>
            ))}
          {dataSapatella
            .find((e) => e.showcaseExhibition1)
            .showcaseExhibition1.slice(1, 2)
            .map(({ title, link, icon, image }, index) => (
              <div
                key={index}
                className="container-card-showcase-exhibition1-p2"
              >
                <div className="container-card-showcase-exhibition1-p2-1">
                  <a href={link}>{title}</a>
                  <img src={icon} alt="" />
                </div>
                <img
                  className="container-card-showcase-exhibition1-p2-img"
                  src={image}
                  alt=""
                />
              </div>
            ))}
        </div>
        <div className="container-card-showcase-exhibition1-p3">
          {dataSapatella
            .find((e) => e.showcaseExhibition1)
            .showcaseExhibition1.slice(2, 3)
            .map(({ image, title, link, icon }, index) => (
              <div
                key={index}
                className="container-card-showcase-exhibition1-p3-1"
              >
                <img
                  className="container-card-showcase-exhibition1-p3-1-img"
                  src={image}
                  alt=""
                />
                <div className="container-card-showcase-exhibition1-p3-1-link">
                  <a href={link}>{title}</a>
                  <img src={icon} alt="" />
                </div>
              </div>
            ))}
          <div className="container-card-showcase-exhibition1-p3-2">
            {dataSapatella
              .find((e) => e.showcaseExhibition1)
              .showcaseExhibition1.slice(3, 4)
              .map(({ image, title, description }, index) => (
                <React.Fragment key={index}>
                  <img
                    className="container-card-showcase-exhibition1-p3-2-img"
                    src={image}
                    alt=""
                  />

                  <div className="container-card-showcase-exhibition1-p3-2-description">
                    {title === "Tênis" &&
                      description ===
                        "Os tênis femininos se tornaram um item básico na moda e nos calçados do dia a dia." && (
                        <>
                          <h2>{title}</h2>
                          <p>{description}</p>{" "}
                        </>
                      )}
                    {dataSapatella
                      .find((e) => e.showcaseExhibition1)
                      .showcaseExhibition1.slice(4, 5)
                      .map(({ link, title, icon }, index) => (
                        <div
                          key={index}
                          className="container-card-showcase-exhibition1-p3-2-description-link"
                        >
                          <a href={link}>{title}</a>
                          <img src={icon} alt="" />
                        </div>
                      ))}
                  </div>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseExhibition1;
