import { useState } from "react";
import "./CardSumaryMobile.css";

const CardSumaryMobile = (props) => {
  const [SumaryOpen, SetSumaryOpen] = useState(false);
  const [SumaryOpen2, SetSumaryOpen2] = useState(false);
  const [SumaryOpen3, SetSumaryOpen3] = useState(false);
  const [SumaryOpen4, SetSumaryOpen4] = useState(false);
  const [SumaryOpen5, SetSumaryOpen5] = useState(false);
  const [SumaryOpen6, SetSumaryOpen6] = useState(false);
  return (
    <div className="container-card-sumary-mobile">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
        rel="stylesheet"
      />
      <details>
        <summary
          onClick={() => SetSumaryOpen(!SumaryOpen)}
          className="item-card-sumary-mobile-1"
        >
          {props.name}{" "}
          <img
            className={
              SumaryOpen
                ? "img-card-sumary-mobile-open"
                : "img-card-sumary-mobile"
            }
            src={props.icone}
            alt=""
          />
        </summary>
        <div className="item-card item1">
          <p>{props.option}</p>
        </div>
        <div className="item-card item2">
          <p>{props.option2}</p>
        </div>
        <div className="item-card item3">
          <p>{props.option3}</p>
        </div>
        <div className="item-card item4">
          <p>{props.option4}</p>
        </div>
        <div className="item-card item5">
          <p>{props.option5}</p>
        </div>
        <div className="item-card item6">
          <p>{props.option6}</p>
        </div>
        <div className="item-card item7">
          <p>{props.option7}</p>
        </div>
        <div className="item-card item8">
          <p>{props.option8}</p>
        </div>
        <div className="item-card item9">
          <p>{props.option9}</p>
        </div>
        <div className="item-card item10">
          <p>{props.option10}</p>
        </div>
      </details>
      <details>
        <summary
          onClick={() => SetSumaryOpen2(!SumaryOpen2)}
          className="item-card-sumary-mobile-2"
        >
          {props.name2}{" "}
          <img
            className={
              SumaryOpen2
                ? "img-card-sumary-mobile-open"
                : "img-card-sumary-mobile"
            }
            src={props.icone}
            alt=""
          />
        </summary>
        <div className="item-card item1">
          <p>{props.option}</p>
        </div>
        <div className="item-card item2">
          <p>{props.option2}</p>
        </div>
        <div className="item-card item3">
          <p>{props.option3}</p>
        </div>
        <div className="item-card item4">
          <p>{props.option4}</p>
        </div>
        <div className="item-card item5">
          <p>{props.option5}</p>
        </div>
        <div className="item-card item6">
          <p>{props.option6}</p>
        </div>
        <div className="item-card item7">
          <p>{props.option7}</p>
        </div>
        <div className="item-card item8">
          <p>{props.option8}</p>
        </div>
        <div className="item-card item9">
          <p>{props.option9}</p>
        </div>
        <div className="item-card item10">
          <p>{props.option10}</p>
        </div>
      </details>
      <details>
        <summary
          onClick={() => SetSumaryOpen3(!SumaryOpen3)}
          className="item-card-sumary-mobile-3"
        >
          {props.name3}{" "}
          <img
            className={
              SumaryOpen3
                ? "img-card-sumary-mobile-open"
                : "img-card-sumary-mobile"
            }
            src={props.icone}
            alt=""
          />
        </summary>
        <div className="item-card item1">
          <p>{props.option}</p>
        </div>
        <div className="item-card item2">
          <p>{props.option2}</p>
        </div>
        <div className="item-card item3">
          <p>{props.option3}</p>
        </div>
        <div className="item-card item4">
          <p>{props.option4}</p>
        </div>
        <div className="item-card item5">
          <p>{props.option5}</p>
        </div>
        <div className="item-card item6">
          <p>{props.option6}</p>
        </div>
        <div className="item-card item7">
          <p>{props.option7}</p>
        </div>
        <div className="item-card item8">
          <p>{props.option8}</p>
        </div>
        <div className="item-card item9">
          <p>{props.option9}</p>
        </div>
        <div className="item-card item10">
          <p>{props.option10}</p>
        </div>
      </details>
      <details>
        <summary
          onClick={() => SetSumaryOpen4(!SumaryOpen4)}
          className="item-card-sumary-mobile-4"
        >
          {props.name4}{" "}
          <img
            className={
              SumaryOpen4
                ? "img-card-sumary-mobile-open"
                : "img-card-sumary-mobile"
            }
            src={props.icone}
            alt=""
          />
        </summary>
        <div className="item-card item1">
          <p>{props.option}</p>
        </div>
        <div className="item-card item2">
          <p>{props.option2}</p>
        </div>
        <div className="item-card item3">
          <p>{props.option3}</p>
        </div>
        <div className="item-card item4">
          <p>{props.option4}</p>
        </div>
        <div className="item-card item5">
          <p>{props.option5}</p>
        </div>
        <div className="item-card item6">
          <p>{props.option6}</p>
        </div>
        <div className="item-card item7">
          <p>{props.option7}</p>
        </div>
        <div className="item-card item8">
          <p>{props.option8}</p>
        </div>
        <div className="item-card item9">
          <p>{props.option9}</p>
        </div>
        <div className="item-card item10">
          <p>{props.option10}</p>
        </div>
      </details>
      <details>
        <summary
          onClick={() => SetSumaryOpen5(!SumaryOpen5)}
          className="item-card-sumary-mobile-5"
        >
          {props.name5}{" "}
          <img
            className={
              SumaryOpen5
                ? "img-card-sumary-mobile-open"
                : "img-card-sumary-mobile"
            }
            src={props.icone}
            alt=""
          />
        </summary>
        <div className="item-card item1">
          <p>{props.option}</p>
        </div>
        <div className="item-card item2">
          <p>{props.option2}</p>
        </div>
        <div className="item-card item3">
          <p>{props.option3}</p>
        </div>
        <div className="item-card item4">
          <p>{props.option4}</p>
        </div>
        <div className="item-card item5">
          <p>{props.option5}</p>
        </div>
        <div className="item-card item6">
          <p>{props.option6}</p>
        </div>
        <div className="item-card item7">
          <p>{props.option7}</p>
        </div>
        <div className="item-card item8">
          <p>{props.option8}</p>
        </div>
        <div className="item-card item9">
          <p>{props.option9}</p>
        </div>
        <div className="item-card item10">
          <p>{props.option10}</p>
        </div>
      </details>
      <details>
        <summary
          onClick={() => SetSumaryOpen6(!SumaryOpen6)}
          className="item-card-sumary-mobile-6"
        >
          {props.name6}{" "}
          <img
            className={
              SumaryOpen6
                ? "img-card-sumary-mobile-open"
                : "img-card-sumary-mobile"
            }
            src={props.icone}
            alt=""
          />
        </summary>
        <div className="item-card item1">
          <p>{props.option}</p>
        </div>
        <div className="item-card item2">
          <p>{props.option2}</p>
        </div>
        <div className="item-card item3">
          <p>{props.option3}</p>
        </div>
        <div className="item-card item4">
          <p>{props.option4}</p>
        </div>
        <div className="item-card item5">
          <p>{props.option5}</p>
        </div>
        <div className="item-card item6">
          <p>{props.option6}</p>
        </div>
        <div className="item-card item7">
          <p>{props.option7}</p>
        </div>
        <div className="item-card item8">
          <p>{props.option8}</p>
        </div>
        <div className="item-card item9">
          <p>{props.option9}</p>
        </div>
        <div className="item-card item10">
          <p>{props.option10}</p>
        </div>
      </details>
      <div className="item-card-sumary-mobile-7">{props.name7}</div>
    </div>
  );
};

export default CardSumaryMobile;
