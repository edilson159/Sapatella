import React from "react";
import dataSapatella from "../DataSapatella/DataSapatela";
import "./Cadastro.css";

const Cadastro = () => {
  return (
    <section className="container-cadastro">
      {dataSapatella
        .find((e) => e.cadastro)
        .cadastro.map(
          ({ description, description2, span }, index) =>
            description && (
              <div key={index} className="container-card-cadastro-p1-1">
                <p>{description}</p>
                <span>{span}</span>
                <p>{description2}</p>
              </div>
            )
        )}
      <div className="inputs-and-button">
        <div className="container-cadastro-inputs">
          {dataSapatella
            .find((e) => e.cadastro)
            .cadastro.map(({ input, placeholder }, index) => (
              <React.Fragment key={index}>
                <input
                  className={
                    placeholder === "Nome"
                      ? "container-cadastro-input-1"
                      : "container-cadastro-input-2"
                  }
                  type={input}
                  placeholder={placeholder}
                />
              </React.Fragment>
            ))}
        </div>

        <div className="container-card-cadastro-button">
          <button>
            {
              dataSapatella
                .find((e) => e.cadastro)
                .cadastro.find((e) => e.button).button
            }
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cadastro;
