import React from 'react'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/react'

const CorporateTerm = ({title, meaning}) => {
    return (
      <div className='w-4/5 h-fit rounded-lg hover:delay-150 hover:-translate-y-1 hover:translate-x-1 hover:transition hover:shadow-lg hover:shadow-slate-700 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white justify-center items-center text-center m-10 gap-10'>
        <Card className='w-full h-full'>
          <CardHeader className='flex gap-1'>
            <div className="flex flex-col">
              <p className="text-xl ml-10 ">{title}</p>
            </div>
          </CardHeader>
          <Divider className='w-11/12 ml-6'/>
          <CardBody>
          <div className='flex flex-col text-md text-white justify-center text-justify text-balance p-2'>
            <span className='gap-0.5 font-bold p-1 ml-10'> m. 
            <span className='gap-0.5 font-medium p-1 ml-10'>
            {meaning}
            </span>
             </span>
          </div>
          </CardBody>
        </Card>
      </div>
    )
  }

  export default CorporateTerm