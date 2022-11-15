import Button from "./Button";
import style from "./ProductCard.module.css";

const ProductCard = ({ product, addToCart, removeToCart }) => {
  console.log(product);
  return (
    <div className={style.wrapper}>
      <div className={style.imgWrapper}>
        <img src={product.picture} alt={product.name} />
      </div>
      <div className={style.wrapperData}>
        <h3 className={style.name}>{product.name}</h3>
        <p>{product.price}€</p>
        <p>{product.color}</p>
        <Button onClick={() => addToCart(product)}>Add to cart</Button>
        <Button onClick={() => removeToCart(product)}>Remove to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
