import React from 'react'
import NavigationBar from '../components/navigation/navigation';

const Articles = () => {
  return (
    <div
    className='flex min-h-screen flex-col items-center p-10 bg-gradient-to-r from-slate-900 to-slate-700'>
      <NavigationBar/>
      <div>
        <p1> ARTICLES </p1>
      </div>
    </div>
  )
}

export default Articles