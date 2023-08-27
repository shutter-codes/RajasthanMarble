import React from 'react'
import ProductCard from '../coomponents/ProductCard'
import Navbar from '../coomponents/navbar'

import FootPage from '../coomponents/foot'
import ProductInfo from '../coomponents/ProductInfo'
// import ProductCard from '../coomponents/ProductCard'



function SingleProductPage() {
  return (
   
        <div>
      {/* navbar */}
    <Navbar/>
     
      {/* body */}
     
     
   <ProductInfo/>
    
      {/* footer */}
      <FootPage/>
    </div>
   
  )
}

export default SingleProductPage
