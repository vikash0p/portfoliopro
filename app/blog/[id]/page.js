import React from 'react'

const page = async ({params}) => {
  console.log(params)
 
  
  return (
    <div className='bg-green-400 mt-24  p-10 md:w-[75%] md:m-auto md:mt-36 lg:w-[50%] '>
      <h1 className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laudantium.</h1>
      <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi fugiat, dolore sequi corrupti consequuntur veritatis doloremque corporis voluptate alias harum sit numquam et minima molestias quia, consectetur recusandae ipsam expedita? Nihil velit tempore a vel iste, perspiciatis suscipit dignissimos, quod adipisci ex expedita alias nulla, mollitia hic inventore?</p>
    </div>
  )
}

export default page
    