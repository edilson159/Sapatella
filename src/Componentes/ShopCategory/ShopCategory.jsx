import dataSapatella from "../DataSapatella/DataSapatela";
import "./ShopCategory.css";

const ShopCategory = () => {
  return (
    <section className="container-shop-category">
      {dataSapatella.map((props, index) => (
        <div key={index} className="container-Card-shop-category-1">
          <div className="container-card-shop-1">
            <h2>{props.shopCategory[0].tittle}</h2>
          </div>
        </div>
      ))}
      <div className="container-shop-category-main">
        {dataSapatella[0].shopCategory.map(({ description, img }, index) => (
          <div className="container-shop-category-item" key={index}>
            <div className="container-Card-shop">
              <div className="container-card-shop-category">
                <img src={img} alt="" />
                <p>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopCategory;
