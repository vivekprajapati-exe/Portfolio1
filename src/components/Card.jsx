import React from 'react'
import {Button} from './index'

function Card({captions=[] , title , className}) {
  return (
    <div className="card flex flex-col p-2 font-['Montserrat'] w-1/2  h-[95vh] gap-4  ">
        <ul className='list-disc pl-5'>
            <li className='text-xl font-semibold ' >{title}</li>
        </ul>
        <div className="card-box w-full rounded-lg h-full bg-teal-950 flex items-center justify-center duration-300 hover:scale-95">
            sample box
        </div>
        <div className="card-bottom flex  gap-2">
            {
                captions.map((cap , index)=>(
                    <Button key={index}  className={"uppercase flex-wrap flex-shrink-0 md:text-xl"}>{cap}</Button>
                ))
            }

        </div>
    </div>
  )
}

export default Card
