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
  IoCodeSlash,
} from 'react-icons/io5';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '/', label: 'Home', icon: <IoHome /> },
    { href: '/about', label: 'About', icon: <IoPerson /> },
    { href: '/projects', label: 'Projects', icon: <IoBriefcase /> },
    { href: '/skills', label: 'Expertise', icon: <IoCodeSlash /> },
    { href: '/contact', label: 'Contact', icon: <IoMailSharp /> },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 rounded-full border border-gray-200 bg-white p-2 text-3xl text-[#800020] shadow-lg focus:outline-none"
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
  );
};

export default MobileNav;
