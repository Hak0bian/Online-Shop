import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Home, Products, Product, Cart } from "./pages/index"
import { Layout } from "./components/index"
import './App.css'

function App({data}) {
  const [count, setCount] = useState(0)

  return (
    <section>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/products' element={<Products data={data}/>}/>
            <Route path='/products/product/:id' element={<Product data={data}/>}/>
            <Route path='/cart' element={<Cart data={data}/>}/>
          </Route>
        </Routes>
    </section>
  )
}

export default App
