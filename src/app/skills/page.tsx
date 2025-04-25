'use client';

import Heading from '@/components/Shared/designs/Heading';
import PageWrapper from '@/components/Shared/designs/PageWrapper';
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
import {
  FaHeadphonesAlt,
  FaSyncAlt,
  FaClock,
  FaCheckCircle,
  FaRegCalendarAlt,
  FaTasks,
} from 'react-icons/fa';

const skills = [
  {
    name: 'CSS',
    icon: <SiCss3 className="text-blue-500" />,
    description: 'Style web pages with cascading stylesheets.',
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className="text-yellow-500" />,
    description: 'Backend platform with database and auth.',
  },
  {
    name: 'GitHub',
    icon: <SiGithub className="text-gray-800" />,
    description: 'Code hosting and version control.',
  },
  {
    name: 'HTML',
    icon: <SiHtml5 className="text-orange-500" />,
    description: 'Markup language for web page structure.',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="text-yellow-400" />,
    description: 'Programming language for web interactivity.',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-green-500" />,
    description: 'NoSQL database for flexible data storage.',
  },
  {
    name: 'Mongoose',
    icon: <SiMongoose className="text-red-500" />,
    description: 'MongoDB object modeling for Node.js.',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="text-black" />,
    description: 'React framework with SSR support.',
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs className="text-green-600" />,
    description: 'Runtime for server-side JavaScript.',
  },
  {
    name: 'Nuxt',
    icon: <SiNuxtdotjs className="text-green-400" />,
    description: 'Vue framework with SSR and static site generation.',
  },
  {
    name: 'React',
    icon: <SiReact className="text-sky-500" />,
    description: 'UI library for building dynamic interfaces.',
  },
  {
    name: 'Redux',
    icon: <SiRedux className="text-[#764ABC]" />,
    description: 'State management for React apps.',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-cyan-400" />,
    description: 'Utility-first CSS framework.',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-blue-500" />,
    description: 'Typed superset of JavaScript.',
  },
  {
    name: 'Vercel',
    icon: <SiVercel className="text-black" />,
    description: 'Platform to deploy frontend apps.',
  },
  {
    name: 'Vue',
    icon: <SiVuedotjs className="text-green-500" />,
    description: 'Progressive framework for building UIs.',
  },
];

const softSkills = [
  {
    name: 'Active Listening',
    icon: <FaHeadphonesAlt className="text-2xl text-[#800020]" />,
  },
  {
    name: 'Adaptability',
    icon: <FaSyncAlt className="text-2xl text-[#800020]" />,
  },
  {
    name: 'Punctuality',
    icon: <FaClock className="text-2xl text-[#800020]" />,
  },
  {
    name: 'Self-Discipline',
    icon: <FaCheckCircle className="text-2xl text-[#800020]" />,
  },
  {
    name: 'Time Flexibility',
    icon: <FaRegCalendarAlt className="text-2xl text-[#800020]" />,
  },
  {
    name: 'Time Management',
    icon: <FaTasks className="text-2xl text-[#800020]" />,
  },
];

const Skills = () => {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-6xl pb-10">
        <Heading heading={'My'} small={'Skills'} title={'expertise'} />
        {/* experience */}
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
            <li>
              Enhanced UI components to improve performance and usability.
            </li>
            <li>
              Delivered responsive and reusable designs for cross-platform
              compatibility.
            </li>
          </ul>
        </motion.div>
        {/* skills */}
        <Heading heading={'Tech'} small={'Skills'} title={''} />
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
              className="group relative flex cursor-pointer flex-col items-center gap-3 rounded-xl bg-gray-100 p-3 shadow transition hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl">{skill.icon}</div>
              <div className="text-sm font-semibold text-gray-700">
                {skill.name}
              </div>
              <div className="absolute bottom-full mb-2 w-40 scale-0 rounded bg-black px-2 py-1 text-center text-xs text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                {skill.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* soft skills */}
        <Heading heading={'Soft'} small={' Skills'} title={''} />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3 rounded-xl bg-gray-100 p-6 shadow-md transition hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl">{skill.icon}</div>
              <div className="text-xl font-bold text-gray-800">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
