"use client";

import React from 'react'
import Link from "next/link";
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div 
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className='flex flex-row items-center space-x-4'
      >
        {/* Social Icons */}
        <SocialIcon url="https://twitter.com/heshvaa" fgColor='white' bgColor='transparent'/>
        <SocialIcon url="https://github.com/heshva" fgColor='white' bgColor='transparent'/>
        <SocialIcon url="https://www.linkedin.com/in/heshvaa" fgColor='white' bgColor='transparent'/>
      </motion.div>

      {/* Get in Touch */}
      <motion.div className='flex flex-row items-center space-x-2 text-gray-300'>
        <SocialIcon network='email' fgColor='gray' bgColor='transparent'/>
        <Link href='#ContactMe'>
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400 cursor-pointer'>
            Get in Touch
          </p>
        </Link>
      </motion.div>
    </header>
  )
}
