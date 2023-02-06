import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import arrow from '../assets/images/arrow.svg';

const CtaButton = ({ text, to, filled }) => {
  return (
    <Link
      href={to}
      className={`group flex justify-between items-center py-2 px-4 gap-x-2 bg-primary_color w-fit font-bold text-sm rounded-lg  duration-300 hover:bg-opacity-50 border-2 border-primary_color ${!filled && 'bg-opacity-0'} lg:py-3 lg:px-6 lg:gap-x-4 lg:text-lg`}
    >
     {text}
      <Image src={arrow} alt='arrow icon' className='group-hover:translate-x-2 duration-300' />
    </Link>
  );
};

export default CtaButton;
