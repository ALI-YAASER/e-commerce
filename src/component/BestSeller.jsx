/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
const BestSeller = () => {

    const {products} = useContext(ShopContext) ;
    const[bestseller,setBestSeller] = useState([]);

    
    useEffect(()=>{
    // const bestProduct = products.filter((item)=>(item.bestSeller));
    // setBestSeller(bestProduct.slice(0,5));



    const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));





},[products])

  return (
    <div className='py-10'>
 <div className="text-center py-8 text-3xl">
            <Title text1={'BEST'} text2={'SELLER'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                
        </div>
        {/* best product */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-py-6 ">
    
{bestseller.length > 0 ? (
    bestseller.map((item) => (
        <ProductItem key={item._id} id={item._id} name={item.name} image={item.images} price={item.price} />
    ))
) : (
    <p className="text-center text-gray-500 col-span-full">No best-selling products available.</p>
)}
        </div>

    </div>
  )
}

export default BestSeller