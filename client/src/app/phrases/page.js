
import React from 'react'
import NavigationBar from '../components/navigation/navigation';

const Phrases = () => {
  return (
    <div
    className='flex min-h-screen flex-col items-center p-10 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900'>
      <NavigationBar/>
      <div>
        <p1> PHRASES </p1>
      </div>
    </div>
  )
}

export default Phrases;