import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard1({}: Props) {
  return (
 <article className="flex flex-col items-center justify-center 
 bg-[#222222] rounded-lg p-10 w-[750px] h-[550px] snap-center 
 hover:opacity-100 opacity-60 transition-all duration-300 ">

  <motion.img
    initial={{ y: -80, opacity: 0 }}
    transition={{ duration: 0.8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="w-28 h-28 rounded-full object-cover object-center"
    src="infolabz.jpg"
    alt=""
  />

  <div className="text-center px-4">
    <h4 className="text-2xl font-light">Internship Trainee</h4>
    <p className="font-bold text-xl mt-1">InfolabZ</p>

    <div className="flex justify-center space-x-3 my-3">
      <img className="h-10 w-10" src="/python.webp" />
      <img className="h-10 w-10" src="/ml.webp" />
      <img className="h-10 w-10" src="/pycharm.webp" />

    </div>

    <p className="uppercase py-2 text-gray-300 text-sm">
      July 2023 – August 2023
    </p>

     <ul className="text-left list-disc space-y-3 ml-5 text-base">
      <li>Completed internship focused on Python, machine learning, and real-world data projects.</li>
      <li>Built a prediction model using pandas, scikit-learn, and matplotlib and other python libraries.</li>
      <li>Applied Regression/Classification techniques</li>
    </ul> 
  </div>
</article>

  )
}