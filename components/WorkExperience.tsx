"use client"; 
import { motion } from 'framer-motion'
import React from 'react'
import ExprerienceCard from './ExprerienceCard';
import ExperienceCard1 from './ExperienceCard1';

type Props = {}

export default function WorkExperience({}: Props) {
  return (
 <motion.div
      className="h-screen flex flex-col items-center justify-start 
                 px-10 max-w-full mx-auto overflow-hidden"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mt-20 mb-10">
        Experience 
      </h3>

      <div
        className="w-full flex justify-center items-center space-x-10 overflow-x-scroll p-10 
                   snap-x snap-mandatory overflow-hidden"
      >
        <ExprerienceCard />
        <ExperienceCard1 />
       
      </div>
    </motion.div>
  )
}

