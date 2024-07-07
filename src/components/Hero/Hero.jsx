import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {Button, FlipLink} from '../index'
import { motion } from 'framer-motion';

function Hero() {

  const date = new Date
  const month = date.getMonth()
  const day = date.getDate()
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const monthName = monthNames[month];
const container = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren:0.02
    }
  }
}

const head = {
  hidden:{y:'100%'},
  visible:{
    y:0,
    transition:{
      ease:"easeOut",
    },
  }


}

  return (
    <div className='w-full h-screen bg-zinc-900 pt-[8em] ' id='home'>
      <motion.div  initial="hidden" animate="visible" variants={container}  className="heading flex  px-30 py-14">
        <div className="head-left  w-[50vw]">
          <div className="head-wrapper">
      <div  className="hero-masker w-fit overflow-hidden cursor-default" >
        <h1 
        className='uppercase leading-none tracking-tighest font-semibold text-[7vw]  font-Mont'
        >
        {
          ["C","r","e","a","t","i","v","e"].map((l,i)=>(
            <motion.span className='inline-block ' whileHover={{color:'#6195c2' , scale:1.05  , transition:{duration:0.1}}} variants={head} key={i} >{l}</motion.span>
          ))
        }
        </h1>
      </div>
      <div className="hero-masker  w-fit overflow-hidden cursor-default" >
        <h1 
        className='uppercase leading-none tracking-tighest font-semibold text-[7vw] pl-[4rem] font-Mont'
        >
          {
          ["d","e","v","e","l","o","p","e","r"].map((l,i)=>(
            <motion.span className='inline-block '  whileHover={{color:'#6195c2', scale:1.05 , transition:{duration:0.1}}} variants={head} key={i} >{l}</motion.span>
          ))
        }
        </h1>      
      </div>
          </div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5 , duration:1, ease:'easeIn' }} className="subhead-wrapper pl-20 pt-3">
            <p>I can transform your offline presence to online and take it to next level , to increase your leads and attract many clients doe your buisness and agencies </p>
          </motion.div>
        </div>
      </motion.div>
      <div className=" flex border-t-[1px] align-center py-4 border-zinc-700 mt-23">
        <motion.div initial={{x:'-100%'}} animate={{x:0}} transition={{delay:1, duration:1, ease:'easeIn' }} className="btn-wrapper  h-[4srem] ">
        <Button className={'h-full flex justify-center items-center gap-4'}>
        <p>{monthName} {day} available for work </p>
        <FaArrowRight/>
        </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
