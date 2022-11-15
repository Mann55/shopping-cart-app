import ProductList from './components/ProductsList';

const products = [
  {
    id: 1,
    name: 'jacket',
    price: 20,
    color: 'white',
    picture: '/assets/images/image1.jpg',
  },
  {
    id: 2,
    name: 'jeansJacket',
    price: 60,
    color: 'light-blue',
    picture: '/assets/images/image2.jpg',
  },
  {
    id: 3,
    name: 'blackShirt',
    price: 30,
    color: 'black',
    picture: '/assets/images/image3.jpg',
  },

];

function App() {
  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default App;
