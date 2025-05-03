'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  IoHome,
  IoPerson,
  IoBriefcase,
  IoMailSharp,
  IoCodeSlash,
} from 'react-icons/io5';

const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: <IoHome /> },
    { href: '/about', label: 'About', icon: <IoPerson /> },
    { href: '/projects', label: 'Projects', icon: <IoCodeSlash /> },
    { href: '/skills', label: 'Expertise', icon: <IoBriefcase /> },
    { href: '/contact', label: 'Contact', icon: <IoMailSharp /> },
  ];

  return (
    <>
      <div>
        <ul className="hidden flex-col gap-5 md:flex">
          {navItems.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            return (
              <li className="group relative overflow-hidden" key={label}>
                <Link href={href}>
                  <div className="flex h-10 w-10 items-center rounded-[50px] font-semibold uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:w-32 group-hover:bg-[#800020] group-hover:text-white group-hover:opacity-100">
                    <p className="pl-0 transition-all duration-300 ease-in-out group-hover:pl-3.5">
                      {label}
                    </p>
                  </div>

                  <div
                    className={`absolute top-0 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-xl transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'border-[#800020] bg-[#800020]'
                        : 'border-[#800020] bg-[#eeeeee]'
                    } group-hover:bg-[#800020] group-hover:text-white`}
                  >
                    <span
                      className={`${
                        isActive ? 'text-white' : 'text-black'
                      } group-hover:text-white`}
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
    </>
  );
};

export default NavBar;
