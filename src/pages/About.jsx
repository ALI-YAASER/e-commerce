/* eslint-disable no-unused-vars */

import React from 'react'
import Title from '../component/Title'
import {assets} from '../assets/frontend_assets/assets'
import NewsletterBox from '../component/NewsletterBox'


const About = () => {
  return (
    <div>
      <div className="text-3xl text-center px-8 py-5 border-t">
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className="my-10 flex flex-col sm:flex-row gap-16">
        <div className="">
          <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
        </div>
        <div className="my-10 flex-col justify-center gap-6 md:w-2/4  text-gray-600 ">
          <p>
          Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes</p>
          <p className='py-5'>Since our inception ,we ve worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <b className='py-5'>Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We are dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'Why'} text2={'Choose Us'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About