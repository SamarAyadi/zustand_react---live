import "./App.css";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { PRODUCTS } from "./products";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to the Store</h1>
      </header>
      <main className='App-main'>
        <ProductList products={PRODUCTS} />
        <Cart />
      </main>
    </div>
  );
}

export default App;
