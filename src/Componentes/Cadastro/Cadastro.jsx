import dataSapatella from "../DataSapatella/DataSapatela";
import "./Cadastro.css";

const Cadastro = () => {
  return (
    <section className="container-cadastro">
      {dataSapatella[0].cadastro.map(
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
        <button>{dataSapatella[0].cadastro[0].button}</button>
      </div>
    </section>
  );
};

export default Cadastro;
