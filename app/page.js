import React from 'react'
import img from '../public/images/home.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <section className='px-1 '>
      <div className='flex flex-col mt-10 w-full min-h-screen mb-10  items-center gap-24 md:flex-row md:mt-0'>
        <div className='flex-1 flex flex-col gap-5 '>
          <h1 className='text-5xl md:text-7xl linearGradient '>Better Design for your digital Products.</h1>
          <p className='text-xl'>Welcome to our innovative application, designed to simplify your life and boost productivity. With a user-friendly interface, our app offers a plethora of features, from organization tools. </p>
          
          <Link href={'/portfolio'} className='bg-green-400 px-7 py-3 rounded-full text-lg mt-5 w-max'>See Our Website</Link>
        </div>
        <div className='flex-1'>
          <Image src={img} alt='homeImage'  className='object-cover  ' />
        </div>
      </div>
    </section>

  )
}
