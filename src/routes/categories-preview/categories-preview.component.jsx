import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  //   const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          ></CategoryPreview>
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
