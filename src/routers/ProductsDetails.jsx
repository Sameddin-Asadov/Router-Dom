import React from 'react'
import { useParams } from 'react-router-dom'
import {products} from '../routers/data'
import Product from '../components/Product'

function ProductsDetails() {

    const {id} = useParams()
    console.log(id, products)

  return (
    <div>
      {
        products && products.map((product)=>{
         console.log(product)
         if(product.id == id){
           return <Product product={product}/>
         }
        })
      }
      
    </div>
  )
}

export default ProductsDetails
