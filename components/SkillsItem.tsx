"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  img: string;
  title: string;
  directionLeft?: boolean;
};

export default function SkillItem({ img, title, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border-2 border-darkGreen object-cover 
        w-35 h-35 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 
        2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={img}
        alt={title}
      />
    </div>
  );
}
