import React from 'react'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/react'

const TerminologyCard = ({title, meaning, content}) => {
  return (
    <div className='w-10/12 h-fit rounded-lg hover:delay-150 hover:-translate-y-1 hover:translate-x-1 hover:transition hover:shadow-lg hover:shadow-slate-700 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white justify-center items-center text-center m-7 p-4'>
      <Card className='w-full h-full'>
        <CardHeader className='flex gap-3 justify-center text-center m-1'>
          <div className="flex flex-col ">
            <p className="text-2xl ">{title}</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
        <div className='flex flex-col text-md text-white justify-center text-justify text-balance p-4'>
          <span className='gap-0.5 font-bold p-1'> m. 
          <span className='gap-0.5 font-medium p-1'>
          {meaning}
          </span>
           </span>
        <p>
          def. {content}
        </p>
        </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default TerminologyCard