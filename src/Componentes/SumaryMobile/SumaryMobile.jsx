import { useState } from "react";
import dataSapatella from "../DataSapatella/DataSapatela";
import "./SumaryMobile.css";

const SumaryMobile = () => {
  const [SumaryOpen, SetSumaryOpen] = useState(false);
  return (
    <section className="container-sumary-mobile">
      {dataSapatella[0].summaryMenuMobile.map(
        ({ name, icone, children }, index) => (
          <details key={index}>
            <summary
              onClick={() => SetSumaryOpen(!SumaryOpen)}
              className={
                name === "Sandálias" || name === "OFF"
                  ? "item-card-sumary-mobile-1 pink"
                  : "item-card-sumary-mobile-1"
              }
            >
              {name}
              <img
                className={
                  SumaryOpen
                    ? "img-card-sumary-mobile-open"
                    : "img-card-sumary-mobile"
                }
                src={icone}
                alt=""
              />
            </summary>
            {children.map(({ name }, index) => (
              <div
                key={index}
                className={
                  name === "Ver todos"
                    ? "item-card item10 pink"
                    : "item-card item1 "
                }
              >
                {name === "Ver todos" ? <a href="##">{name}</a> : <p>{name}</p>}
              </div>
            ))}
          </details>
        )
      )}
    </section>
  );
};

export default SumaryMobile;
