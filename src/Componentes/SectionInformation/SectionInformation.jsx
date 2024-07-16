import { useState } from "react";
import dataSapatella from "../DataSapatella/DataSapatela";
import "./SectionInformation.css";

const SectionInformation = () => {
  const [open, setOpen] = useState(false);

  function togleOpen() {
    setOpen(!open);
  }
  return (
    <section className="container-section-information">
      {dataSapatella
        .find((e) => e.sectionInformation)
        .sectionInformation.map(({ title, icon, children }, index) => (
          <details className="container-card-section-information" key={index}>
            <summary
              onClick={togleOpen}
              className="container-card-section-information-summary"
            >
              {title}
              <img className="img-arrow" src={icon} alt="" />
            </summary>
            {children.map(({ name }, index) => (
              <div
                className="container-card-section-information-summary-children"
                key={index}
              >
                <p>{name}</p>
              </div>
            ))}
          </details>
        ))}
    </section>
  );
};

export default SectionInformation;
