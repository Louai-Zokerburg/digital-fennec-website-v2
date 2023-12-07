import React from 'react';

import Image from 'next/image';
import { Link } from 'react-scroll';

import logo from '../assets/images/logo.svg';
import facebook_img from '../assets/images/facebook_img.svg';
import instagram_img from '../assets/images/instagram_img.svg';
import twitter_img from '../assets/images/twitter_img.svg';
import gmail_img from '../assets/images/gmail_img.svg';

const Footer = () => {
  return (
    <footer className='w-full h-[50vh] bg-black py-8 px-4'>
      <div className='inner-wrapper'>

        <div className='flex justify-between items-start gap-x-4'>
          <Image src={logo} alt='logo' />

          <div className='flex flex-col justify-start items-start gap-y-2'>
            <Link
              className='text-white cursor-pointer'
              to='home'
              duration={300}
              spy={true}
              smooth={true}
            >
              Home
            </Link>
            <Link
              className='text-white cursor-pointer'
              to='home'
              duration={300}
              spy={true}
              smooth={true}
            >
              About
            </Link>
            <Link
              className='text-white cursor-pointer'
              to='home'
              duration={300}
              spy={true}
              smooth={true}
            >
              Contact
            </Link>
            <Link
              className='text-white cursor-pointer'
              to='home'
              duration={300}
              spy={true}
              smooth={true}
            >
              Products
            </Link>
          </div>
          <div className='flex flex-col justify-start items-start gap-y-2'>
            <Link
              className='text-white cursor-pointer'
              to='home'
              duration={300}
              spy={true}
              smooth={true}
            >
              Home
            </Link>
            <Link
              className='text-white cursor-pointer'
              to='home'
              duration={300}
              spy={true}
              smooth={true}
            >
              About
            </Link>
            <Link
              className='text-white cursor-pointer'
              to='home'
              duration={300}
              spy={true}
              smooth={true}
            >
              Contact
            </Link>
            <Link
              className='text-white cursor-pointer'
              to='home'
              duration={300}
              spy={true}
              smooth={true}
            >
              Products
            </Link>
          </div>
        </div>

        <div className='my-12 w-[80%] mx-auto h-[2px] rounded-lg bg-white_color'></div>

        <div className="flex justify-center w-full items-center gap-x-4">
            <Image src={facebook_img} alt='facebook icon' className='w-12 cursor-pointer'/>
            <Image src={instagram_img} alt='facebook icon'  className='w-12 cursor-pointer' />
            <Image src={gmail_img} alt='facebook icon'  className='w-12 cursor-pointer' />
            <Image src={twitter_img} alt='facebook icon'  className='w-12 cursor-pointer' />
        </div>

        <p className='text-white mt-6'>This is just a showcase this is <span className='text-red-500'>NOT THE REAL WEBSITE</span></p>
      </div>
    </footer>
  );
};

export default Footer;
