import ProductCard from "./ProductCard";
import style from "./ProductsCards.module.css";

const ProductsCards = ({ products, addToCart, removeToCart }) => {
  return (
    <div className={style.wrapper}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeToCart={removeToCart}
        />
      ))}
    </div>
  );
};

export default ProductsCards;
