import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Home, Products, Product, Cart, NotFound } from "./pages/index"
import { Layout } from "./components/index"
import './App.css'

function App({data}) {
  const [cart, setCart] = useState([]);
  console.log(cart);
  
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if(existingProduct) {
        return prevCart.map((item) => item.id === product.id ? { 
            ...item, 
            count: item.count + 1 
          } 
          : item
        )
      }else {
        return [...prevCart, {
          ...product, 
          count: 1 
        }];
      }
    });
  };

  return (
    <section>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/products' element={<Products data={data} addToCart={addToCart} />} />
            <Route path='/products/product/:id' element={<Product data={data} addToCart={addToCart} />} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
    </section>
  )
}

export default App