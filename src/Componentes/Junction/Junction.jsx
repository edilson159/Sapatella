import dataSapatella from "../DataSapatella/DataSapatela";
import "./Junction.css";

const Junction = () => {
  return (
    <section className="container-junction">
      <div className="container-card-junction">
        <div className="container-junction-social">
          {dataSapatella
            .find((e) => e.sectionSocial)
            .sectionSocial.filter(
              (e) => e.image === "../img/logoSapatellaG.svg"
            )
            .map(({ image }, index) => (
              <a href="//">
                {" "}
                <img
                  className="container-junction-social-item-main"
                  key={index}
                  src={image}
                  alt=""
                />
              </a>
            ))}
          <div className="container-junction-social-p1">
            {dataSapatella
              .find((e) => e.sectionSocial)
              .sectionSocial.filter(
                (e) => e.image !== "../img/logoSapatellaG.svg"
              )
              .map(({ image }, index) => (
                <img
                  className="container-junction-social-item"
                  key={index}
                  src={image}
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="container-junction-information-payment-and-security">
          <div className="container-junction-information">
            {dataSapatella
              .find((e) => e.sectionInformation)
              .sectionInformation.map(({ title, children }, index) => (
                <div
                  className="container-card-junction-information"
                  key={index}
                >
                  <h2>{title}</h2>
                  <div className="container-junction-information-p1">
                    {children.map(({ name }, index) => (
                      <a href="//">
                        <p key={index}>{name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
          </div>
          <div className="container-junction-payment-and-security">
            <div className="container-junction-payment">
              {dataSapatella
                .find((e) => e.sectionPayment)
                .sectionPayment.map(({ title, images }, index) => (
                  <div key={index} className="container-card-junction-payment">
                    {" "}
                    <h2>{title}</h2>
                    <div className="container-card-junction-payment-images">
                      {images.map(({ image }, index) => (
                        <a key={index} href="//">
                          <img src={image} alt="" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            <div className="container-junction-security">
              {dataSapatella
                .find((e) => e.sectionSecurity)
                .sectionSecurity.map(({ title, images }, index) => (
                  <div key={index} className="container-card-junction-security">
                    <h2>{title}</h2>
                    <div>
                      {images.map(({ image }, index) => (
                        <a key={index} href="//">
                          <img src={image} alt="" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Junction;
