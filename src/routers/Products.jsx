import React from 'react'
import {products} from  '../routers/data'
import Product from '../components/Product'
function Products() {


  return (
    <div>
     {products && products.map((product)=>(
        <Product key={product.id} product = {product}/>
     ))

     }
    </div>
  )
}

export default Products