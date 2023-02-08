import React from 'react';

import Image from 'next/image';


const CtaButton = ({ text, filled, isFullWidth = false, image }) => {
  return (
    <button
      className={`${isFullWidth ? 'w-full' : 'w-fit' } group flex justify-between items-center py-2 px-4 gap-x-2 bg-primary_color font-bold text-sm rounded-lg  duration-300 hover:bg-opacity-50 border-2 border-primary_color ${!filled && 'bg-opacity-0'} lg:py-3 lg:px-6 lg:gap-x-4 lg:text-lg text-white`}
    >
     {text}
      <Image src={image} alt='arrow icon' className='group-hover:translate-x-2 duration-300' />
    </button>
  );
};

export default CtaButton;


