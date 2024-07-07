import React from 'react'
import { motion } from 'framer-motion';

function Button({className , children}) {
  return (
    <>
    <motion.button
    initial={{opacity:0}}
    whileInView={{opacity:1 , transition:{delay:.5}}}
    whileHover={{scale:1.03 , rotate:'4deg'}}
    
      className={`border border-zinc-200 rounded-full p-2 px-3 font-Mont  ${className}`}

    >
      {children}
    </motion.button>
    </>
  )
}

export default Button
