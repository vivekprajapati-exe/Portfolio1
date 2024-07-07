import React from 'react'
import './About.css'
import { delay, motion } from 'framer-motion';
import {MyPic} from '../index';

function About() {
  return (
    <div className="about w-full h-screen relative p-10 font-Mont flex" id='about'>
      <div className="about-content-left w-1/2 h-100 pt-[5vw] flex flex-col gap-9">
        <h3 className=' text-8xl font-semibold tracking-tightest'>Hello I am Vivek</h3>
        <p className=' text-3xl'>
            I use my passion and skills to create digital products and experiences . creation implementation and managment of their digital products . I can take your online presence to 
            <motion.span   
            initial={{scale:1}}
            whileHover={{ scale: 1.09, color: '#ff5722', transition: { duration: 0.3 } }}
            className='uppercase pl-1 pr-1 inline-block font-semibold relative'>
              next level
            </motion.span> come take a leap
        </p>
      </div>
      <div className="about-content-right  w-1/2   flex justify-center items-center overflow-hidden">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1 , transition:{delay:.5}   }} className="div flex justify-center items-center">
        <MyPic className={"rounded-2xl "} width={"50%"} />
      </motion.div>
      </div>
    </div>
  )
}

export default About
