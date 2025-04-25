import { FaDownload } from 'react-icons/fa';
import Heading from '@/components/Shared/designs/Heading';
import Link from 'next/link';

const About = () => {
  return (
    <div className="mx-auto max-w-6xl p-10 md:p-0">
      <Heading heading={'About'} small={'me'} title={'Resume'} />
      {/* info div */}
      <div className="flex flex-col justify-between md:flex-row">
        <div>
          <h3 className="mb-5 hidden text-2xl font-bold text-gray-700 uppercase md:flex">
            Personal Infos
          </h3>
          <div className="my-5 flex flex-col justify-between gap-2 md:flex-row md:gap-16">
            {/* info div 1 */}
            <ul className="flex flex-col gap-5 font-normal text-[#666666]">
              <li>
                First Name: <span className="font-semibold">Mst Fahima</span>
              </li>
              <li>
                Last Name: <span className="font-semibold">Akhter</span>
              </li>
              <li>
                Age:<span className="font-semibold"> 24 Years</span>
              </li>
              <li>
                Nationality: <span className="font-semibold"> Bangladeshi</span>
              </li>
              <li>
                Job Availability:{' '}
                <span className="font-semibold">Available</span>
              </li>
            </ul>
            {/* info div 2 */}
            <ul className="flex flex-col gap-5 font-normal text-[#666666]">
              <li>
                Address:{' '}
                <span className="font-semibold">Cumilla, Bangladesh</span>
              </li>
              <li>
                Phone: <span className="font-semibold">+8801951351359</span>
              </li>
              <li>
                Email:{' '}
                <Link
                  className="font-semibold underline"
                  href="mailto:f.akhter2320@gmail.com"
                  target="blank"
                >
                  f.akhter2320@gmail.com
                </Link>
              </li>
              <li>
                LinkedIn:{' '}
                <Link
                  className="font-semibold underline"
                  href="https://www.linkedin.com/in/fahima-akhter-faey2023"
                  target="blank"
                >
                  Fahima Akhter
                </Link>
              </li>

              <li>
                Languages:{' '}
                <span className="font-semibold">Bangla, English, Hindi</span>
              </li>
            </ul>
          </div>
        </div>
        {/* experience div */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* div 1 */}
          <div className="rounded-lg border-2 p-7 text-[#666666] shadow">
            <p className="text-5xl font-bold text-[#800020]">
              1<span className="text-3xl font-normal">+</span>
            </p>
            <p className="uppercase">Years of Experience</p>
          </div>
          {/* div 2 */}
          <div className="rounded-lg border-2 p-7 text-[#666666] shadow">
            <p className="text-5xl font-bold text-[#800020]">
              12<span className="text-3xl font-normal">+</span>
            </p>
            <p className="uppercase">Projects</p>
          </div>
          {/* div 3 */}
          <div className="rounded-lg border-2 p-7 text-[#666666] shadow">
            <p className="text-5xl font-bold text-[#800020]">
              10<span className="text-3xl font-normal">+</span>
            </p>
            <p className="uppercase">Technologies Used</p>
          </div>
          {/* div 4 */}
          <div className="rounded-lg border-2 p-7 text-[#666666] shadow">
            <p className="text-5xl font-bold text-[#800020]">
              3<span className="text-3xl font-normal">+</span>
            </p>
            <p className="uppercase">Group Projects</p>
          </div>
        </div>
      </div>
      {/*  */}
      <Link
        target="blank"
        href="https://docs.google.com/document/d/1onRuHtS2L5d4MszIeWUbP0pruhCLaJjwZ4DvvXpk09o/edit?usp=sharing"
      >
        <button className="group relative m-5 box-border h-12 w-48 cursor-pointer rounded-lg border-2 border-[#800020] bg-transparent text-xl text-[#666666]">
          <span className="pr-9">Resume</span>
          <span className="absolute top-0 right-0 flex h-full w-10 items-center justify-center bg-[#800020] px-1 duration-300 group-hover:w-full group-hover:bg-[#800020] group-hover:duration-300">
            <FaDownload className="text-white" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default About;
