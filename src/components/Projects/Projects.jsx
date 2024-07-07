import React from 'react'
import {Card, FlipLink} from '../index'

function Projects() {

    const projects = [
        {
            title:"Plannner Hub",
            captions:["React" , "ui/ux" , "frontend"]
        },
        {
            title:"GIthub",
            captions:["React" , "vue" , "backend"]
        },
    ]
  return (
    <div className="proj w-full py-3   font-Mont flex flex-col " id='contact'>
        <div className="proj-head-wrapper">
            <h1 className='proj-head  text-9xl w-fit  pl-10 pt-7  font-semibold uppercase font-Mont  '>
                <FlipLink>Projects</FlipLink>
            </h1>
        </div>
        <div className="proj-content flex ">
            {
                projects.map((card , index)=>(
                    <Card key={index} captions={card.captions} title={card.title} />
                ))
            }
        </div>
    </div>
  )
}

export default Projects
