import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";

function App() {
  const productDetails = [
    {
      productName: "jacket",
      price: "20€",
      color: "white",
    },
    {
      productName: "jeansJacket",
      price: "60€",
      color: "light-blue",
    },
    {
      productName: "blackShirt",
      price: "30€",
      color: "black",
    },
  ];

  return (
    <div className="App">
      <h2 className="heading">Clothing Shopping App</h2>
      <Products />
    </div>
  );
}

export default App;
