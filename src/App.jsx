import { useState } from 'react'
import { Routes, Router, Route } from 'react-router-dom'
import './App.css'
import Home from './routers/Home'
import About from './routers/About'
import Contact from './routers/Contact'
import Products from './routers/Products'
import Header from './components/Header'
import Notpage from './routers/Notpage'
import Employee from './routers/Employee'
import Company from './routers/Company'
import ProductsDetails from './routers/ProductsDetails'

function App() {


  return (
    <div>
      <Header/>
      <Routes>
        <Route path ='/' element = {<Home/>}/>
        <Route path='about' element={<About/>}>
             <Route path ='employee' element={ <Employee/> } />
             <Route path ='company' element={ <Company/> } />
       </Route>
        <Route path ='contact' element={<Contact/>} />
        <Route path='products' element={<Products/>}  />
        <Route path='/products-detail/:id' element={<ProductsDetails/>}  />
        <Route path='*' element={<Notpage/>} />

      </Routes>

    </div>
  )
}

export default App
