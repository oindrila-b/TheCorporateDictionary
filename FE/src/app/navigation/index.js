import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between flex-row fixed top-0  w-11/12 h-20 bg-slate-700/60 rounded-full p-8 m-8 z-50'>
      <Link href='/'>
        <h1 className='font-Poppins text-3xl m-2 p-2 font-bold'> Tech Terms </h1>
      </Link>
      <div className='md:block md:w-auto'>
      <Link href='/glossary'>
        <span className='font-Poppins m-2 p-2 font-bold'> Word Book </span>
      </Link>
      <a href='/articles'>
        <span className='font-Poppins m-2 p-2 font-bold'> Articles </span>
      </a>
      <a href='/discussions'>
        <span className='font-Poppins m-2 p-2 font-bold'> Discussions </span>
      </a>
      <a href='/corporate'>
        <span className='font-Poppins m-2 p-2 font-bold'> Corporate </span>
      </a>
      </div>
    </div>
  )
}

export default Navbar;