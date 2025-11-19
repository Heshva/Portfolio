"use client";
import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{ duration: 1.5}}

    className='flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>about
             </h3>

    <motion.img
  src="\heshva-about.jpg"

  initial={{ x: -200, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1.5, ease: "easeOut" }}

  className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
   md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
/>

<div className='space-y-10 px-0 md:px-10'>

  <h4 className='text-4xl font-semibold'>Here's a little background </h4>

  <p className='text-sm'>
    I enjoy solving problems creatively. I’m pursuing a B.Tech in Information Technology at the Institute of Advanced Research, Gandhinagar, and 
    I completed my Diploma in IT from Government Polytechnic for Girls, Ahmedabad. I’ve done two internships focused on Python and machine learning, 
    and I’m deeply interested in AI/ML. My skills include Python, AI/ML, Java, SQL, and Digital Marketing. 
    Outside tech, I’m passionate about music and literature. </p>

</div>
    </motion.div>
  )
}
