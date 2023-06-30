import { Shop } from './components/Shop';
import { products } from './products/products';
import './App.css';

function App() {
  return (
    <div className="App">
       <Shop shopname={'iBagShop'} productsArray={products} />
    </div>
  );
}

export default App;
