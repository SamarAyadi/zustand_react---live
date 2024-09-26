import "./ProductList.css";
import { useCartStore } from "./store/cart-store";

const ProductList = ({ products }) => {
  const addToCart = useCartStore((state) => 
    {state.addToCart});

  return (
    <div className='product-list'>
      {products?.map((product) => (
        <div key={product.id} className='product-card'>
          <h3 className='product-name'>{product.name}</h3>
          <p className='product-description'>{product.description}</p>
          <button
            className='add-to-cart-button'
            onClick={() => addToCart(product)} 
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

