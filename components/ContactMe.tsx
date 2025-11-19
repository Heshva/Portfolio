"use client"
import { EnvelopeIcon, MapIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  Name: string
  Email: string
  Subject: string
  Message: string
}

type Props = {}

export default function ContactMe({}: Props) {

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

const onSubmit: SubmitHandler<Inputs> = (data) => {
  window.location.href = `mailto:heshvaasoni@gmail.com?subject=${encodeURIComponent(
    data.Subject
  )}&body=${encodeURIComponent(
    `Hi, my name is ${data.Name}.\n\n${data.Message}\n\nMy email: ${data.Email}`
  )}`;
};

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>




<div className='flex flex-col space-y-10 '>

    <h4 className='text-4xl font-semibold text-center'>
        Let's Connect 
    </h4>

    <div className='space-y-10'>
      <div className='flex items-center justify-center'>
        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
        <p className='text-2xl'>Ahmedabad,Gujarat</p>
      </div>

        <div className='flex items-center justify-center'>
        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
        <p className='text-2xl'>heshvaasoni@gmail.com</p>
      </div>
    </div>

<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>

  <div className='flex space-x-2'>
    <input {...register("Name")} placeholder='Name' className='contactInput' type="text" />
    <input {...register("Email")} placeholder='Email' className='contactInput' type="email" />
  </div>

  <input {...register("Subject")} placeholder='Subject' className='contactInput' type="text" />

  <textarea {...register("Message")} placeholder='Message' className='contactInput'/>
  <button type='submit' className='bg-[#f7ab0a]/70 py-5 px-10 rounded-md text-black font-bold text-lg '>Submit</button>
</form>

</div>
</div>
  )
}