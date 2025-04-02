import { useState, useRef, createContext } from 'react'
import { Routes, Route } from "react-router-dom"
import { Home, Products, Product, Cart, Buy, NotFound } from "./pages/index"
import { Layout } from "./components/index"
import './App.css'

export const Context = createContext(null)

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
  

  return (
    <section>
      <Context.Provider value={[cart, addToCart, setCart, setToBuy, toBuy]}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:category' element={<Products/>} />
            <Route path='/products/:category/:id' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/cart/buy' element={<Buy/>} />
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </Context.Provider>
    </section>
  )
}

export default App