import React, { useState } from 'react';
import { Route } from 'react-router-dom';

//contexts
import { ProductContext } from './contexts/ProductContext.js'
import { CartContext } from './contexts/CartContext.js'
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{cart, addItem}}>
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/" component ={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
      
    </ProductContext.Provider>
		
	);
}

export default App;
