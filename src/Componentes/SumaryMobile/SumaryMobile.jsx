import CardSumaryMobile from "../CardSumaryMobile/CardSumaryMobile";
import DataSumaryMobile from "../DataSumaryMobile/DataSumaryMobile";
import "./SumaryMobile.css";

const SumaryMobile = () => {
  return (
    <section className="container-sumary-mobile">
      {DataSumaryMobile.map((props) => (
        <CardSumaryMobile
          key={props.id}
          name={props.name}
          name2={props.name2}
          name3={props.name3}
          name4={props.name4}
          name5={props.name5}
          name6={props.name6}
          name7={props.name7}
          option={props.option}
          option2={props.option2}
          option3={props.option3}
          option4={props.option4}
          option5={props.option5}
          option6={props.option6}
          option7={props.option7}
          option8={props.option8}
          option9={props.option9}
          option10={props.option10}
          icone={props.icone}
        />
      ))}
    </section>
  );
};

export default SumaryMobile;
