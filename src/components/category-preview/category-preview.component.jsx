import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h1>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h1>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
