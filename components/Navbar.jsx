import { useState } from 'react';
// import Link from 'next/link';
import Image from 'next/image';

import { Link, animateScroll as scroll } from 'react-scroll';

import logo from '../assets/images/logo.svg';
import menu from '../assets/images/menu.svg';
import close from '../assets/images/close.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className='fixed top-0 z-10 w-full '>
      <div className='inner-wrapper  flex justify-between items-center'>
        <Image src={logo} alt='The Logo' />

        <Image
          src={menuOpen ? close : menu}
          alt='Menu Icon'
          className='z-10 lg:hidden cursor-pointer'
          onClick={toggleMenu}
        />

        <ul
          className={`absolute right-1 top-2 pt-10 px-16 pb-4 flex flex-col rounded-xl bg-black justify-center items-center gap-x-4 duration-300  lg:relative lg:flex-row lg:bg-transparent lg:p-0 lg:right-0 lg:top-0 ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          <li>
          <Link
              className='nav-link'
              activeClass='active'
              to='home'
              duration={300}
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='nav-link'
              activeClass='active'
              to='contact'
              duration={300}
              spy={true}
              smooth={true}
            >
              Contact
            </Link>
          </li>
          <li>
          <Link
              className='nav-link'
              activeClass='active'
              to='about'
              duration={300}
              spy={true}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li>
          <Link
              className='nav-link'
              activeClass='active'
              to='products'
              duration={300}
              spy={true}
              smooth={true}
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
