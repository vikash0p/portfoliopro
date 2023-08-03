"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { usePathname } from 'next/navigation'

const links=[
  {
    href:'/',
    name:'Home',
  },
  {
    href:'/about',
    name:'About',
  },
  {
    href:'/blog',
    name:'Blog',
  },
  {
    href:'/contact',
    name:'Contact',
  },
  {
    href:'/portfolio',
    name:'Portfolio',
  },

]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-400 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className='text-white text-2xl'>Vikash</h1>
          </div>
          <div className="hidden md:block">
            {
              links.map((value)=>{
                return(
                 <Link href={value.href}   key={value.name} className={` ${pathname == value.href ? 'text-black' : ' text-white' } px-3 text-xl`} >{value.name} </Link>
                )
              })
            }
          </div>
          <div className="md:hidden flex items-center">
            <button type='button' onClick={toggleNavbar} className="focus:outline-none px-2 text-white" >
              
              {isOpen ? <AiOutlineClose className='text-xl' /> : <AiOutlineMenu className='text-xl'/> }
            </button>
          </div>
        </div>
      </div>
      {/* Responsive menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col ">
         
         {
              links.map((value)=>{
                return(
                 <Link href={value.href} key={value.name} className={` ${pathname == value.href ? 'text-black' : ' text-white' } px-3 text-xl py-2`}  >{value.name} </Link>
                )
              })
            }
        </div>
      )}
    </nav>
  );
};

export default Navbar;
