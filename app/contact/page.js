import React from 'react'
import img from '../../public/images/profile.svg'
import Image from 'next/image'
export const metadata = {
  title: 'Contact',
  description: 'This is my portfolio Website for contact page.',
}


export default function Contact() {
  return (
    <div className='flex flex-col md:flex-row w-full min-h-screen gap-100 px-5 mt-6 mb-28 md:mb-0'>
      <div className="flex-1 ">
        <Image src={img} alt='profileImage' width={500} height={400} loading='eager' className='object-cover mt-10 ' />
      </div>
      <div className="flex-1">
        <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
        <input type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Enter your name" />

        <label htmlFor="helper-email" className="block mb-2 mt-8 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" id="helper-email" aria-describedby="helper-email-explanation" className="bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name@flowbite.com" />

        <label htmlFor="message" className="block mb-2 mt-8 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-green-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Write your thoughts here..."></textarea>


        <button type="submit" className='px-8 py-2 bg-green-300  rounded-full mt-5'>Submit</button>
      </div>
    </div>
  )
}
