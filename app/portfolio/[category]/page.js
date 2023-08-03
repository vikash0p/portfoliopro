import Image from 'next/image'
import React from 'react'

const data = [
  {
    id: 1,
    img: 'https://media.istockphoto.com/id/1227047582/vector/new-technologies-a-side-view-of-an-open-laptop-millennials-at-work-a-startup-industry.webp?b=1&s=612x612&w=0&k=20&c=3ZuQEju6SVldslCJiSbcsrZd2QzvImsxhXwEMvKztHo=',
    param: 'illustrations',
    des: '"Discover a stunning collection of illustrations that breathe life into imagination. Our gallery showcases a diverse range of styles, from vibrant and whimsical to intricate and awe-inspiring. Whether for personal projects or commercial use, our high-quality illustrations will captivate and inspire. Explore our gallery and unlock a world of visual creativity!"'
  },
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2016/04/25/08/23/man-1351393_640.png',
    param: 'website',
    des: '"Explore the captivating world of knowledge and discovery on our website! Immerse yourself in a vast array of articles, videos, and interactive content that cover diverse topics, from science and technology to arts and culture. Unleash your curiosity and expand your horizons with our engaging and informative platform. Start exploring today!"'
  },
  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_640.jpg',
    param: 'application',
    des: '"Application Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, earum cum. Debitis mollitia ratione at alias aut impedit vel sapiente iure velit, magnam animi sint pariatur placeat blanditiis. Eaque tempora dolorum, necessitatibus nostrum neque maxime vero, consequuntur quas sunt quae distinctio. Eum quis commodi vitae aliquid ea natus, odio vero".'
  },
]

export default function Category({ params }) {
  
  return (
    <div className='container max-auto'>
      {
        data.filter(value => value.param == params.category).map((value) => {
          return (
            <div key={value.id}>
              <h1 className='text-green-800 text-center text-3xl md:text-5xl py-5'>{params.category} </h1>
              <div className='flex flex-col w-full min-h-[70vh] md:ps-5 justify-center items-center md:flex-row'>
                <div className='flex-1'>
                  <div className=' relative w-[500px] h-[400px] '>
                  <Image src={value.img} alt='images' loading='eager'  fill={true} priority className='object-contain' />

                  </div>
                </div>
                <div className='flex-1'>
                  <h1 className='text-xl px-1'>{value.des} </h1>
                </div>
              </div>
            </div>

          )
        })
      }
    </div>
  )
}
