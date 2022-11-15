import Button from "./Button";
import ProductsCards from "./ProductsCards";
import style from "./ProductsList.module.css";

const addToCart = (product) => {
  console.log(product);
};

const removeToCart = (product) => {
  console.log(product);
};

const ProductList = ({ products }) => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Shop online</h1>
      <ProductsCards
        products={products}
        addToCart={addToCart}
        removeToCart={removeToCart}
      />

      <Button>Show Cart</Button>
    </div>
  );
};

export default ProductList;
