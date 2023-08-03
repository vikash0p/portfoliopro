import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export const metadata = {
  title: 'Portfolio',
  description: 'This is my portfolio Website.',
}


export default function Portfolio() {
  return (
    <div className='container mx-auto px-2'>
      <h1 className=' text-5xl md:text-6xl mt-6 md:mt-16'>Our Works.</h1>
      <h5 className='text-2xl mt-8 mb-5'>Choose a Gallery.</h5>
      <div className='flex flex-col justify-center items-center gap-12 md:flex-row md:justify-start '>
      <Link href={`/portfolio/illustrations`}>
        <div className='w-44 h-56 relative' >
          <Image loading='eager' priority src={"https://media.istockphoto.com/id/1227047582/vector/new-technologies-a-side-view-of-an-open-laptop-millennials-at-work-a-startup-industry.webp?b=1&s=612x612&w=0&k=20&c=3ZuQEju6SVldslCJiSbcsrZd2QzvImsxhXwEMvKztHo="} alt='alt' fill={true} className='object-cover' />
          <h1 className='absolute bottom-2 left-2 text-xl  text-green-800  hover:text-green-800'>illustration</h1>
        </div>
      </Link>
      <Link href={`/portfolio/website`}>
        <div className='w-44 h-56 relative' >
          <Image loading='eager' priority src={"https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_640.jpg"} alt='alt' fill={true} className='object-cover' />
          <h1 className='absolute bottom-2 left-2 text-xl text-green-800  hover:text-green-800 '>Website</h1>
        </div>
      </Link>
      <Link href={`/portfolio/application`}>
        <div className='w-44 h-56 relative' >
          <Image loading='eager' priority src={"https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_640.jpg"} alt='alt' fill={true} className='object-cover' />
          <h1 className='absolute bottom-2 left-2 text-xl text-green-800  hover:text-green-800'>Application</h1>
        </div>
      </Link>
    </div>
    </div>
  )
}
