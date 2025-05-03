'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import avatar from '../../public/avatar.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center md:m-10 md:flex-row md:gap-10">
      <div
        style={{ transform: 'rotate(-15deg)' }}
        className="fixed -top-[50%] -left-[83%] hidden h-[200%] w-full bg-[#800020] md:flex"
      ></div>
      <Image
        width={224}
        height={224}
        className="my-auto mt-10 h-56 w-56 rounded-full border-4 border-[#800020] bg-black pt-2 md:top-10 md:left-10 md:z-[111] md:mt-0 md:h-[85vh] md:w-[35%] md:rounded-[30px] md:border-0"
        src={avatar}
        alt="profile-image"
      />

      <motion.div
        className="mx-auto flex flex-col justify-center p-10 md:w-2/4 md:p-0"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="relative text-3xl font-bold text-[#800030] uppercase before:absolute before:top-9 before:left-0 before:hidden before:h-1 before:w-10 before:rounded-2xl before:bg-[#800020] before:content-[''] md:pl-16 md:text-[52px] md:before:block">
          I am Fahima
          <span className="block text-[#666666] md:my-5">Web developer</span>
        </h1>

        <p className="text leading-9 text-[#666666] italic md:text-lg">
          A Frontend Developer based in Bangladesh. Currently, I&#39;m seeking
          opportunities. Passionate about crafting engaging user experiences.
          Let&#39;s collaborate on something great!
        </p>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-5"
        >
          <Link href="/about">
            <button className="group relative box-border h-12 w-48 cursor-pointer rounded-lg border-2 border-[#800020] bg-transparent text-xl text-[#666666]">
              <span className="pr-9"> About Me</span>
              <span className="absolute top-0 right-0 flex h-full w-10 items-center justify-center bg-[#800020] px-1 duration-300 group-hover:w-full group-hover:bg-[#800020] group-hover:duration-300">
                <FaArrowRight className="text-white" />
              </span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
