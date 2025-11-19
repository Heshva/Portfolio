"use client";

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count]= useTypewriter({
        words:["Hello! I’m Heshva Soni,",
        "a student, creator, and lifelong learner."],
        loop : true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />

        <img  className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/heshva.jpg"
        alt="Heshva"/>
<div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            AI-ML ENGINEER
        </h2>

<h1 className="text-5xl lg:text-6xl italic font-light tracking-tight px-10">
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
        </h1>

   <div className='pt-5'>
    <a href='#about'>   
     <button className='herobutton'>About</button>
</a>

<a href='#experience'>
    <button className='herobutton'>Experience</button>
</a>

<a href='#skills'>
    <button className='herobutton'>Skills</button>
</a>



   </div>
    </div> 
    </div>
  )
}