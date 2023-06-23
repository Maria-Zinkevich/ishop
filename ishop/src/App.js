import { products } from './products/products';
import { Table } from './components/Table';
import './App.css';

function App() {
  return (
    <div className="App">
       <Table
        shopname={'iBagShop'}
        products={products}
      />
    </div>
  );
}

export default App;
