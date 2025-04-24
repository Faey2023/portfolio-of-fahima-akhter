import { IoHome, IoPerson, IoBriefcase, IoMailSharp } from 'react-icons/io5';
import Link from 'next/link';

const NavBar = () => {
  // Links for bigger screen with styles
  const Links = (
    <>
      <li className="group relative">
        <Link href="/">
          <div className="flex h-12 w-12 items-center rounded-[50px] font-semibold uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:w-28 group-hover:bg-[#800020] group-hover:text-white group-hover:opacity-100">
            <p className="ml-2.5">Home</p>
          </div>
          <div className="absolute top-0 right-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#800020] bg-[#eeeeee] text-xl transition-all duration-300 ease-in-out group-hover:bg-[#800020] group-hover:text-white">
            <IoHome className="text-black group-hover:text-white" />
          </div>
        </Link>
      </li>
      <li className="group relative">
        <Link href="/about">
          <div className="flex h-12 w-12 items-center rounded-[50px] font-semibold uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:w-28 group-hover:bg-[#800020] group-hover:text-white group-hover:opacity-100">
            <p className="ml-2.5">About</p>
          </div>
          <div className="absolute top-0 right-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#800020] bg-[#eeeeee] text-xl transition-all duration-300 ease-in-out group-hover:bg-[#800020] group-hover:text-white">
            <IoPerson className="text-black group-hover:text-white" />
          </div>
        </Link>
      </li>
      <li className="group relative">
        <Link href="/project">
          <div className="flex h-12 w-12 items-center rounded-[50px] font-semibold uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:w-36 group-hover:bg-[#800020] group-hover:text-white group-hover:opacity-100">
            <p className="ml-2.5">Projects</p>
          </div>
          <div className="absolute top-0 right-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#800020] bg-[#eeeeee] text-xl transition-all duration-300 ease-in-out group-hover:bg-[#800020] group-hover:text-white">
            <IoBriefcase className="text-black group-hover:text-white" />
          </div>
        </Link>
      </li>
      <li className="group relative">
        <Link href="/contact">
          <div className="flex h-12 w-12 items-center rounded-[50px] font-semibold uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:w-36 group-hover:bg-[#800020] group-hover:text-white group-hover:opacity-100">
            <p className="ml-2.5">Contact</p>
          </div>
          <div className="absolute top-0 right-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#800020] bg-[#eeeeee] text-xl transition-all duration-300 ease-in-out group-hover:bg-[#800020] group-hover:text-white">
            <IoMailSharp className="text-black group-hover:text-white" />
          </div>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div>
        {/* navbar for bigger screens */}
        <ul className="hidden flex-col gap-5 md:flex">{Links}</ul>
      </div>
    </>
  );
};

export default NavBar;
