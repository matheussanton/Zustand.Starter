
import { useCartStore } from './Cart/Stores/CartStore'
import './app.css'

export function App() {

  //use the cart store
  const { availableItems, items, addToCart, removeFromCart } = useCartStore((state) => ({
      availableItems: state.availableItems,
      items: state.items,
      addToCart: state.addToCart,
      removeFromCart: state.removeFromCart
    })
  );

  return (
    <>
      <div className="app">
        <header>Shopping Cart</header>
        <div className="content">
          <div className="column">
            <h2>Available Items</h2>
            <ul>
              {availableItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h2>Cart</h2>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
