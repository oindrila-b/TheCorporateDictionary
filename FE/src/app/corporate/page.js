import React from 'react'
import Navbar from '../navigation'
import CorporateTerm from '../components/corporateTerm'

const Corporate = () => {
  return (
    <div className='flex flex-column min-h-screen justify-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black'>
      <Navbar />
      <div className='container relative w-full top-28 grid grid-col-2'> 
        <CorporateTerm title={"title"} meaning={""}/>
      </div>
    </div>
  )
}

export default Corporate