import React from 'react'

const Title = () => {
  return (
    <div className='flex flex-col left-5 mt-48 text-gray-800/50 ml-28 cursor-pointer'>
        <h1 className='text-8xl mt-9 relative hover:text-gray-500/50 hover:scale-105 transition delay-75 duratio-100'>
          <a href='/glossary'>Word Book</a>
        </h1>
        <h1 className='text-8xl mt-9 relative hover:text-gray-500/50 hover:scale-105 transition delay-75 duratio-100'>
          <a href='/articles'>Articles</a>
        </h1>
        <h1 className='text-8xl mt-9 relative hover:text-gray-500/50 hover:scale-105 transition delay-75 duratio-100'>
          <a href='/discussions'>
          Discussions
          </a>
        </h1>
        <h1 className='text-8xl mt-9 relative hover:text-gray-500/50 hover:scale-105 transition delay-75 duratio-100'>
          <a href='/corporate'>
           Feat. Corporate 
          </a>
        </h1>
    </div>
  )
}

export default Title