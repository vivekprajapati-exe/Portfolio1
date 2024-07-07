import React, { useEffect , useState } from 'react'
import { FlipLink, Logo } from '../index'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./Navbar.css"

function Navbar() {
  const [isMegaNavOpen, setIsMegaNavOpen] = useState(false);

  const toggleNav = () => {
    setIsMegaNavOpen(!isMegaNavOpen);
  };

  const closeMegaNav = () => {
    setIsMegaNavOpen(false);
  };

  const container = {
    hidden: { opacity: 1, },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
    <nav className='navbar fixed z-[999]  w-full px-20 py-8 flex justify-between items-center font-Mont '>
        <div className="Logo ">
        <Logo width='30px'  />
        </div>
        <div className="nav-items flex gap-3">
          <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:.7 , ease:"easeIn"}} className='bg-transperant  border-none' onClick={toggleNav}>
            Menu
          </motion.button>
        </div>
    </nav>
    
      {isMegaNavOpen && (
        <motion.div initial="hidden" animate="visible" variants={container} className=" navbar fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col text-white overflow-y-auto">
          <button 
            className="self-end text-3xl p-4 hover:text-gray-300 focus:outline-none"
            onClick={closeMegaNav}
          >
            &times;
          </button>
          <div className="flex flex-wrap justify-around p-8">
            <div className="flex-1 min-w-[200px] m-4">
              <ul className='text-6xl'>
                <motion.li  variants={item} className="mb-2">
                  <Link to="/"  onClick={closeMegaNav}>
                  <FlipLink>
                    Home
                  </FlipLink>
                  </Link>
                </motion.li>
                <motion.li variants={item} className="mb-2 ">
                  <Link to="/about"  onClick={closeMegaNav}>
                  <FlipLink>
                    About
                  </FlipLink>
                  </Link>
                </motion.li>
                <motion.li variants={item} className="mb-2">
                  <Link to="/projects"  onClick={closeMegaNav}>
                  <FlipLink>
                    Projects
                  </FlipLink>
                  </Link>
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar



