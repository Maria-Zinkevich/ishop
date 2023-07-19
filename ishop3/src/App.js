import { Shop } from './components/Shop';
import  productsData   from './products/products.json'
import './App.css';

function App() {
  return (
    <div className="App">
       <Shop shopname={'iBagShop'} productsArray={productsData.products} />
    </div>
  );
}

export default App;
