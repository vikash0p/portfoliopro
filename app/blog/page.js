import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

export const metadata={
  title:'MyblogPage',
  description:'This is a blog page of my portfolio page.'
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
 
  if (!res.ok) {
    return notFound();
  }
 
  return res.json()
}

const Blog = async () => {

  const posts = await getData();
  if(!posts || posts.length === 0)  return notFound();
  
  return (
    <div className='container mx-auto'>
      <div className='columns-1 mt-5 md:columns-3 lg:columns-4'>
      {
        posts.map((value) => {
          return (
            <Link href={`/blog/${value.id}`} className='rounded  ' key={value.id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg   hover:bg-green-400 hover:text-white ">
                <div className="px-6 py-4 h-52 my-3 ">
                  <div className="font-bold text-xl mb-2">{value.title.substring(0, 15)}</div>
                  <p className="text-gray-700 text-base mb-4">{value.body.substring(0, 60)}... </p>
                </div>
              </div>
            </Link>
          )
        })
      }
      </div>
     
    </div>
  )
}

export default Blog
