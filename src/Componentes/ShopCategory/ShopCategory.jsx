import dataSapatella from "../DataSapatella/DataSapatela";
import "./ShopCategory.css";

const ShopCategory = () => {
  return (
    <section className="container-shop-category">
      <div className="container-card-shop-category">
        {dataSapatella
          .find((e) => e.shopCategory)
          .shopCategory.map(
            ({ tittle }, index) =>
              tittle && (
                <div key={index} className="container-Card-shop-category-1">
                  <div className="container-card-shop-1">
                    <h2>{tittle}</h2>
                  </div>
                </div>
              )
          )}
        <div className="container-shop-category-main">
          {dataSapatella
            .find((e) => e.shopCategory)
            .shopCategory.map(({ img, description }, index) => (
              <div key={index} className="container-shop-category-item">
                <div className="container-Card-shop">
                  <div className="container-card-shop-category-2">
                    <img src={img} alt="" />
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;
