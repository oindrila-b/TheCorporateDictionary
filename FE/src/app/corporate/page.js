import React from 'react'
import Navbar from '../navigation'
import CorporateTerm from '../components/corporateTerm'

const Corporate = () => {
  return (
    <div className='flex flex-column min-h-screen justify-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black'>
      <Navbar />
      <div className='container h-full relative w-full top-28 m-10 grid grid-cols-2'> 
        <CorporateTerm title={"title"} meaning={"A Corporate term"}/>
        <CorporateTerm title={"title"} meaning={"A Corporate term"}/>
        <CorporateTerm title={"title"} meaning={"A Corporate term"}/>
        <CorporateTerm title={"title"} meaning={"A Corporate term"}/>
        <CorporateTerm title={"title"} meaning={"A Corporate term"}/>
        <CorporateTerm title={"title"} meaning={"A Corporate term"}/>
        <CorporateTerm title={"title"} meaning={"A Corporate term"}/>
        <CorporateTerm title={"title"} meaning={"A Corporate term"}/>
      </div>
    </div>
  )
}

export default Corporate