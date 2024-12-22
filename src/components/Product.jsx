import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({product}) {

  const navigate = useNavigate()


    const {name, id, price } =product
  return (
    <div>
      <h2>Mehsul haqqinda</h2>
      <h2>Mehsul adi: {name}</h2>
      <h2>Mehsul qiymeti: {price}</h2>

      <button onClick={()=>{navigate('/products-detail/' + id)}}>Etrafli</button>
    </div>
  )
}

export default Product
