import "./SectionVerao.css";

import CardSectionVerao from "../CardSectionVerao/CardSectionVerao";
import DataSectionVerao from "../DataSectionVerao/DataSectionVerao.jsx";

const SectionVerao = () => {
  return (
    <section className="container-section-verao">
      {DataSectionVerao.map((props) => (
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
