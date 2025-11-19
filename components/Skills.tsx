"use client";

import React from "react";
import SkillItem from "./SkillsItem";


export default function Skills() {
  const skills = [
    "python.webp",
    "c.webp",
    "c++.webp",
    "css.webp",
    "java.webp",
    "html.webp",
    "pycharm.webp",
    "sklearn.webp",
    "vscode.webp",
    "opencv.webp",
    "sql.webp",
    "tensorflow.webp",

  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h3 className="uppercase tracking-[14px] text-gray-400 text-2xl mb-10">
        Skills
      </h3>

      <p className="text-gray-400 mb-8 text-sm">
        A quick look at the skills that power my work.
      </p>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-8">
        {skills.map((img, index) => (
          <SkillItem key={index} img={img} title={""} />
        ))}
      </div>
    </div>
  );
}
