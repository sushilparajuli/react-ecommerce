import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCart from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log("shope cate map", categoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <div key={title}>
          <h2> {title} </h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
export default Shop;
