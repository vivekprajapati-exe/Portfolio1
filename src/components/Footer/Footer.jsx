import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Logo } from '../index'

function Footer() {
  return (
    <footer className="relative  text-white bg-[#303030] font-Monst flex py-16 overflow-hidden">
      <div className="footer-left items-center flex w-1/2">
          <div className=" text-4xl  p-2 ">
            <Logo/>
          </div>
          <div className="footer-title">
        <h2 className="text-3xl font-bold mb-2">Vivek Prajapati</h2>
        <p className="text-xl  ">Crafting Digital Experiences</p>
        <p>all rights reserved &#64; 2024</p>
          </div>
      </div>
      <div className="flex-right w-1/2">
        <div className="flex  items-end flex-col space-x-6">
          <div className="sociallinks-wrapper">
          <h3>Social Links:</h3>
          <div className="linkswrapper flex justify-center space-x-6 ">
          <SocialIcon href="#" Icon={FaGithub} />
          <SocialIcon href="#" Icon={FaLinkedin} />
          <SocialIcon href="#" Icon={FaTwitter} />
          <SocialIcon href="#" Icon={FaInstagram} />
          </div>
          </div>
        </div>
      </div>
  </footer>
  );
};


const SocialIcon = ({ href, Icon }) => {
  return (
    <a 
      href={href} 
      className="text-white text-2xl hover:text-[#6195c2] transition-colors duration-300 transform hover:scale-110"
    >
      <Icon />
    </a>
  );
};

export default Footer
