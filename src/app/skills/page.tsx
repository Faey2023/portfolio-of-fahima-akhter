'use client';

import Heading from '@/components/Shared/designs/Heading';
import { motion } from 'framer-motion';
import {
  SiCss3,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from 'react-icons/si';

const skills = [
  { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'GitHub', icon: <SiGithub className="text-gray-800" /> },
  { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Mongoose', icon: <SiMongoose className="text-red-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
  { name: 'Nuxt', icon: <SiNuxtdotjs className="text-green-400" /> },
  { name: 'React', icon: <SiReact className="text-sky-500" /> },
  { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Vercel', icon: <SiVercel className="text-black" /> },
  { name: 'Vue', icon: <SiVuedotjs className="text-green-500" /> },
];

const Skills = () => {
  return (
    <div className="mx-auto max-w-6xl pb-10">
      <Heading heading={'My'} small={'Skills'} title={'expertise'} />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12 rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200"
      >
        <h3 className="text-lg font-bold text-gray-800">
          Front-End Developer (Full-Time)
        </h3>
        <p className="text-sm text-gray-600">
          Codelabs Digital | Sylhet, Bangladesh <br />
          <span className="text-gray-500 italic">August 2024 – Present</span>
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>
            Built and developed dashboard templates using React, Next.js, Vue,
            Svelte, and Nuxt.
          </li>
          <li>Enhanced UI components to improve performance and usability.</li>
          <li>
            Delivered responsive and reusable designs for cross-platform
            compatibility.
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-3 rounded-xl bg-gray-100 p-3 shadow transition hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl">{skill.icon}</div>
            <div className="text-sm font-semibold text-gray-700">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
