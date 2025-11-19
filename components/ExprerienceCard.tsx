import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

export default function ExprerienceCard({}: Props) {
  return (
<article className="flex flex-col items-center justify-center 
 bg-[#222222] rounded-lg p-10 w-[750px] h-[550px] snap-center 
 hover:opacity-100 opacity-60 transition-all duration-300">

  <motion.img
    initial={{ y: -80, opacity: 0 }}
    transition={{ duration: 0.8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="w-28 h-28 rounded-full object-cover object-center"
    src="/techno_it_hub_edtech_logo.jpg"
    alt=""
  />

  <div className="text-center px-4">
    <h4 className="text-2xl font-light">Intern</h4>
    <p className="font-bold text-xl mt-1">Techno IT Hub</p>

    <div className="flex justify-center space-x-3 my-3">
      <img className="h-10 w-10" src="/web.webp" />
      <img className="h-10 w-10" src="/css.webp" />
      <img className="h-10 w-10" src="/vscode.webp" />
    </div>

    <p className="uppercase py-2 text-gray-300 text-sm">
      September 2022 – May 2023
    </p>

     <ul className="text-left list-disc space-y-3 ml-5 text-base">
      <li>Completed internship gaining exposure to web technologies.</li>
      <li>Applied Full Stack concepts for front-end & back-end.</li>
      <li>Developed responsive UIs using HTML & CSS.</li>
    </ul> 
  </div>
</article>

  )
}