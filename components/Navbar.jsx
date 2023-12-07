import { useState } from 'react';
import Image from 'next/image';

import { Link, animateScroll as scroll } from 'react-scroll';

import logo from '../assets/images/logo.svg';
import menu from '../assets/images/menu.svg';
import close from '../assets/images/close.svg';

const Navbar = ({ overlay }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 z-10 w-full bg-black shadow-sm duration-300 py-1 lg:py-2 ${
        overlay ? 'bg-opacity-100' : 'bg-opacity-0'
      }`}
    >
      <div className='inner-wrapper  flex justify-between items-center'>
        <Image src={logo} alt='The Logo' className='h-12 lg:h-12'/>

        <Image
          src={menuOpen ? close : menu}
          alt='Menu Icon'
          className='z-50 lg:hidden cursor-pointer'
          onClick={toggleMenu}
        />

        <ul
          className={`absolute  pt-10 px-16 pb-4 flex flex-col gap-y-4 rounded-xl bg-black justify-center items-center duration-300 ${
            menuOpen
              ? 'opacity-100 right-2 top-2'
              : 'opacity-0 right-[-50%] top-[-50%]'
          } lg:hidden`}
        >
          <li>
            <Link
              onClick={() => toggleMenu()}
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
              onClick={() => toggleMenu()}
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
              onClick={() => toggleMenu()}
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
              onClick={() => toggleMenu()}
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

        <ul
          className={`left-0 translate-x-[-42%] top-0 aboslute hidden justify-center items-center gap-x-6 duration-300 lg:flex`}
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
