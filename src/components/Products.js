import React from "react";

const Products = () => {
  function addToCart() {
    alert("Your product has been added successfully to cart.");
  }

  function removeFromCart() {
    alert("Your product has been removed successfully to cart.");
  }

  return (
    <div className="container">
      <div className="images">
        <div className="firstProduct">
          <img src="image1.jpg" className="Image1" alt="Image1"></img>
          <div className="btns">
            <button onClick={addToCart}>Add to Cart</button>
            <button onClick={removeFromCart}>Remove from Cart</button>
          </div>
        </div>
        <div className="secondProduct">
          <img src="image2.jpg" className="Image2" alt="Image2"></img>
          <div className="btns">
            <button>Add to Cart</button>
            <button>Remove from Cart</button>
          </div>
        </div>

        <div className="thirdProduct">
          <img src="image3.jpg" className="Image3" alt="Image3"></img>
          <div className="btns">
            <button>Add to Cart</button>
            <button>Remove from Cart</button>
          </div>
        </div>
      </div>
      <div className="pay">
        <button className="payBtn">View Cart</button>
        <button className="payBtn">Total to Pay</button>
      </div>
    </div>
  );
};

export default Products;
