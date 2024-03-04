import React from 'react'

const Title = () => {
  return (
    <div className='flex flex-col left-5 mt-52 text-gray-400/80 ml-28 cursor-pointer items-center'>
       <div className='text-9xl text-center items-center text-white'>
        <h1>Tech Terms</h1>
        <p className='text-ellipsis text-balance text-2xl m-16 break-words'> Tech Terms is a platform where the reader can find different <span className='underline decoration-pink-900 hover:underline hover:decoration-pink-500'>terminologies</span> and what they mean, 
          <span className='underline decoration-sky-900 hover:underline hover:decoration-sky-500'> articles</span> written on different topics, <span className='underline decoration-pink-900 hover:underline hover:decoration-pink-500'>discussions</span> on different topics 
          and all things <span className='underline decoration-sky-900 hover:underline hover:decoration-sky-500'>corporate</span>.
          <br/>
          <p>
          Tech Terms focuses on providing relevant information collected from a combination of <span className='underline decoration-emerald-900 hover:underline hover:decoration-emerald-500'>different sources</span>. Readers are also encouraged to <span className='underline decoration-teal-900 hover:underline hover:decoration-teal-500'>contribute</span> in the case of any new terminology.
         <p> Tech Terms content is focused on these different sections.</p>
          </p>
        </p>
       </div>
       <div className='flex flex-row items-center '>
       <h1 className='text-2xl text-white m-10 relative hover:text-gray-200/90 hover:scale-105 transition delay-75 duratio-100 border-solid border-2 border-gray-400 rounded-lg p-3'>
          <a href='/glossary'>Word Book</a>
        </h1>
        <h1 className='text-2xl text-white  m-9 relative hover:text-gray-200/90 hover:scale-105 transition delay-75 duratio-100 border-solid border-2 border-gray-400 rounded-lg p-3'>
          <a href='/articles'>Articles</a>
        </h1>
        <h1 className='text-2xl text-white  m-9 relative hover:text-gray-200/90 hover:scale-105 transition delay-75 duratio-100 border-solid border-2 border-gray-400 rounded-lg p-3'>
          <a href='/discussions'>
          Discussions
          </a>
        </h1>
        <h1 className='text-2xl m-9 text-white  relative hover:text-gray-200/90 hover:scale-105 transition delay-75 duratio-100 border-solid border-2 border-gray-400 rounded-lg p-3'>
          <a href='/corporate'>
          Corporate 
          </a>
        </h1>
       </div>
    </div>
  )
}

export default Title