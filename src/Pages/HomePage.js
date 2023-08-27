import React from 'react'
import ProductCard from '../coomponents/ProductCard'
import Navbar from '../coomponents/navbar'

import FootPage from '../coomponents/foot'



function HomePage() {
  return (
   
        <div>
      {/* navbar */}
    <Navbar/>
     
      {/* body */}
      
      <ProductCard/>
      {/* <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/> */}
     
     
      {/* pagination */}
    
      {/* footer */}
      <FootPage/>
    </div>
   
  )
}

export default HomePage
