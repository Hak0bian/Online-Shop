import { useState, useRef } from 'react'
import { Routes, Route } from "react-router-dom"
import { Home, Products, Product, Cart, Buy, NotFound } from "./pages/index"
import { Layout } from "./components/index"
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const [toBuy, setToBuy] = useState([])
  const cartRef = useRef(null)
  
  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if(existingProduct) {
        cartRef.current = prevCart.map((item) => item.id === product.id ? { 
            ...item, 
            count: item.count + 1 
          } 
          : item
        )
        localStorage.setItem('cart', JSON.stringify(cartRef.current))
        return cartRef.current;

      }else {
        cartRef.current = [
          ...prevCart, {
          ...product, 
          count: 1 
        }];

        localStorage.setItem('cart', JSON.stringify(cartRef.current))
        return cartRef.current;
      }
    });
  };

  console.log("Cart", cart);
  console.log("toBuy", toBuy);
  

  return (
    <section>
        <Routes>
          <Route path='/' element={<Layout cart={cart}/>}>
            <Route index element={<Home/>}/>
            <Route path='/products' element={<Products addToCart={addToCart} />} />
            <Route path='/products/:category' element={<Products addToCart={addToCart} />} />
            <Route path='/products/:category/:id' element={<Product addToCart={addToCart} />} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} setToBuy={setToBuy}/>} />
            <Route path='/cart/buy' element={<Buy toBuy={toBuy} />} />
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
    </section>
  )
}

export default App