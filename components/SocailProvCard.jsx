import React from 'react';

const SocailProvCard = ({ state, text }) => {
  return (
    <div className='min-w-[22%] lg:min-w-[16%] py-6 px-4 border-[1px] border-white_color rounded-lg flex flex-col justify-center items-center text-center gap-y-2 cursor-default duration-300 hover:translate-y-[-10px]'>
      <h3 className='text-2xl text-primary_color lg:text-4xl'>{state}</h3>
      <p className='font-bold text-sm lg:text-lg'>
        {text.split(' ')[0]} <br /> {text.split(' ')[1]}
      </p>
    </div>
  );
};

export default SocailProvCard;
