import "./SectionVerao.css";

import CardSectionVerao from "../CardSectionVerao/CardSectionVerao";
import dataSapatella from "../DataSapatella/DataSapatela.js";

const SectionVerao = () => {
  return (
    <section className="container-section-verao">
      {dataSapatella.map((props) => (
        <CardSectionVerao
          key={props.id}
          imgVerao={props.imgVerao}
          title={props.title}
          paragraph={props.paragraph}
          button={props.button}
        />
      ))}
    </section>
  );
};

export default SectionVerao;
