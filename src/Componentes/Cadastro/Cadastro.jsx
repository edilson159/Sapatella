import dataSapatella from "../DataSapatella/DataSapatela";
import "./Cadastro.css";

const Cadastro = () => {
  return (
    <section className="container-cadastro">
      {dataSapatella
        .find((e) => e.cadastro)
        .cadastro.map(
          (
            { description, description2, span, input, placeholder, button },
            index
          ) => (
            <div className="container-card-cadastro" key={index}>
              <div className="container-card-cadastro-p1">
                {description && (
                  <div className="container-card-cadastro-p1-1">
                    <p>{description}</p>
                    <span>{span}</span>
                    <p>{description2}</p>
                  </div>
                )}

                <input type={input} placeholder={placeholder} />
              </div>
            </div>
          )
        )}
      <div className="container-card-cadastro-button">
        <button>
          {
            dataSapatella.find((e) => e.cadastro).cadastro.find((e) => e.button)
              .button
          }
        </button>
      </div>
    </section>
  );
};

export default Cadastro;
