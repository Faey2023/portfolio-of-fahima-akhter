'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  IoHome,
  IoPerson,
  IoBriefcase,
  IoMailSharp,
  IoMenu,
  IoClose,
} from 'react-icons/io5';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '/', label: 'Home', icon: <IoHome /> },
    { href: '/about', label: 'About', icon: <IoPerson /> },
    { href: '/projects', label: 'Projects', icon: <IoBriefcase /> },
    { href: '/contact', label: 'Contact', icon: <IoMailSharp /> },
  ];

  return (
    <>
      {/* Large Screen Nav */}
      <div>
        <ul className="hidden flex-col gap-5 md:flex">
          {navItems.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            return (
              <li className="group relative" key={label}>
                <Link href={href}>
                  <div className="flex h-10 w-10 items-center rounded-[50px] font-semibold uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:w-32 group-hover:bg-[#800020] group-hover:text-white group-hover:opacity-100">
                    <p className="ml-3">{label}</p>
                  </div>

                  <div
                    className={`absolute top-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border-2 text-xl transition-all duration-300 ease-in-out ${isActive ? 'border-[#800020] bg-[#800020]' : 'border-[#800020] bg-[#eeeeee]'} group-hover:bg-[#800020] group-hover:text-white`}
                  >
                    <span
                      className={`${isActive ? 'text-white' : 'text-black'} group-hover:text-white`}
                    >
                      {icon}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Small Nav */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="fixed top-4 right-4 z-50 text-3xl text-[#800020] focus:outline-none"
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-white text-xl font-semibold uppercase">
            {navItems.map(({ href, label, icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 transition ${isActive ? 'bg-[#800020] text-white' : 'text-[#800020] hover:bg-[#800020] hover:text-white'} `}
                >
                  <span className="text-2xl">{icon}</span>
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
