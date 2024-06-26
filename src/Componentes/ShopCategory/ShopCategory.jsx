import CardShopCategory from "../CardShopCategory/CardShopCategory";
import CardShopCategory1 from "../CardShopCategory1/CardShopCategory1";
import DataShopCategory from "../DataShopCategory/DataShopCategory";
import "./ShopCategory.css";

const ShopCategory = () => {
  const DataShopCategoryTittle = DataShopCategory.slice(0, 1);
  return (
    <section className="container-shop-category">
      <div className="container-Card-shop-category-1">
        {DataShopCategoryTittle.map((props) => (
          <CardShopCategory1 key={props.id} tittle={props.tittle} />
        ))}
      </div>
      <div className="container-Card-shop">
        {DataShopCategory.map((props) => (
          <CardShopCategory
            key={props.id}
            tittle={props.tittle}
            imgCategory={props.imgCategory}
            paragraph={props.paragraph}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopCategory;
