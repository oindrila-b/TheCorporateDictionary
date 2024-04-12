'use client'
import React, { useState } from 'react'
import Navbar from '../navigation'
import TerminologyCard from '../components/termilonogyCard'
import Dialog from '../components/dialog'

const Glossary = () => {

  const [isDialogOpen, setIsDialogOpen] = useState(true)

  const handleOnClick = () => {
    // TODO: Create a modal for this component

    Dialog()

  }

  const content = "The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis."
  return (
    <div className='flex flex-col min-h-screen overflow-hidden relative items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black'>
      <Navbar />
      <div className='w-full flex fixed h-52 z-30 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black'>
        <div>

        </div>
        <div className='absolute bottom-0  right-0 m-8'> 
          <button onClick={handleOnClick} className='w-40 h-11 bg-slate-700/60 rounded-lg relative text-white hover:bg-slate-700/40 hover:delay-150 hover:transition hover:shadow-md hover:shadow-slate-500 '>
            Add New Word
            </button>
        </div>
      </div>
      <div className='relative w-full overflow:hidden'>
        <div>
          <div className='relative w-full m-16 p-36 justify-center items-center flex '>
            <div className='grid grid-cols-3 w-full gap-8 justify-center items-center'>
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />
              <TerminologyCard title={"Title"} content={content} meaning={"meaning"} />

            </div>
          </div>
        </div>
      </div>
      <div className='m-10 w-96 h-14 bg-gray-300/20 flex justify-center text-center items-center rounded-full'>
        <p>
          Sorry folks, that's all we have at the moment!
        </p>
      </div>
    </div>
  )
}

export default Glossary