import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import fullstack_dev_img from '../assets/images/fullstack_dev_img.png'
import graphic_design_img from '../assets/images/graphic_design_img.png'
import game_dev_img from '../assets/images/game_dev_img.png'

const HoverAccrodione = () => {
  const [selected, setSeletected] = useState(1);

  const changeSelected = (index) => {
    setSeletected(index);
    console.log(index);
  };

  return (
    <div
      data-aos='fade-up'
      className='flex  justify-start items-center gap-x-4 lg:gap-x-8 gap-y-12 mt-6'
    >
      <div
        onMouseEnter={() => changeSelected(1)}
        className={`
        relative flex flex-col justify-center items-center h-[40vh] 
        ${
          selected === 1
            ? 'w-[calc(100%-20%-32px)] lg:w-[calc(100%-40%-64px)]'
            : 'w-[10%] lg:w-[20%]'
        }
        p-4 lg:p-6 duration-300 rounded-lg overflow-hidden
        bg-no-repeat bg-cover bg-center bg-fixed
        `}
      >
        <Image src={fullstack_dev_img} alt='something' className='absolute h-full bg-cover' />

        <h5
          className={`
          z-10 text-red-400 mb-6 font-bold text-lg lg:text-xl
          ${selected === 1 ? 'opacity-100' : 'opacity-0'}
          duration-300`}
        >
          Full-Stack Development
        </h5>
        <p
          className={`
          relative z-10 text-sm lg:text-gl text-white_color font-normal leading-7 lg:w-[65%]
          ${selected === 1 ? 'opacity-100' : 'opacity-0'}
          duration-300`}
        >
          Delivering end-to-end solutions, our Full Stack Department combines
          front-end and back-end expertise to ensure seamless, efficient, and
          innovative development for Fennec Digital's mobile games.
        </p>
        <div
          style={{ backdropFilter: selected === 1 ? 'blur(5px)' : 'blur(0px)' }}
          className={`
          absolute top-0 left-0 w-full h-full bg-black
          ${selected === 1 ? 'bg-opacity-40' : 'bg-opacity-0'}
          duration-300
          `}
        ></div>
      </div>

      <div
        onMouseEnter={() => changeSelected(2)}
        className={`
        relative flex flex-col justify-center items-center h-[40vh] 
        ${
          selected === 2
            ? 'w-[calc(100%-20%-32px)] lg:w-[calc(100%-40%-64px)]'
            : 'w-[10%] lg:w-[20%]'
        }
        p-4 lg:p-6 duration-300 rounded-lg overflow-hidden
        bg-no-repeat bg-cover bg-center bg-fixed
        `}
      >
        <Image src={graphic_design_img} alt='something' className='absolute h-full bg-cover' />

        <h5
          className={`
          z-10 text-red-400 mb-6 font-bold text-lg lg:text-xl
          ${selected === 2 ? 'opacity-100' : 'opacity-0'}
          duration-300`}
        >
          Graphic and Art Design Department:
        </h5>
        <p
          className={`
          relative z-10 text-sm lg:text-gl text-white_color font-normal leading-7 lg:w-[65%]
          ${selected === 2 ? 'opacity-100' : 'opacity-0'}
          duration-300`}
        >
          In the Graphic and Art Design Department, creativity meets precision.
          Our talented team crafts visually stunning and immersive experiences,
          adding a unique aesthetic touch to Fennec Digital's games.
        </p>
        <div
          style={{ backdropFilter: selected === 2 ? 'blur(5px)' : 'blur(0px)' }}
          className={`
          absolute top-0 left-0 w-full h-full bg-black
          ${selected === 2 ? 'bg-opacity-40' : 'bg-opacity-0'}
          duration-300
          `}
        ></div>
      </div>

      <div
        onMouseEnter={() => changeSelected(3)}
        className={`
        relative flex flex-col justify-center items-center h-[40vh] 
        ${
          selected === 3
            ? 'w-[calc(100%-20%-32px)] lg:w-[calc(100%-40%-64px)]'
            : 'w-[10%] lg:w-[20%]'
        }
        p-4 lg:p-6 duration-300 rounded-lg overflow-hidden 
        bg-no-repeat bg-cover bg-center bg-fixed
        `}
      >
        <Image src={game_dev_img} alt='something' className='absolute h-full bg-cover' />

        <h5
          className={`
          z-10 text-red-400 mb-6 font-bold text-lg lg:text-xl
          ${selected === 3 ? 'opacity-100' : 'opacity-0'}
          duration-300`}
        >
          Game Development Department
        </h5>
        <p
          className={`
          relative z-10 text-sm lg:text-gl text-white_color font-normal leading-7 lg:w-[65%]
          ${selected === 3 ? 'opacity-100' : 'opacity-0'}
          duration-300`}
        >
          At the heart of innovation, our Game Development Department brings
          concepts to life. Passionate about storytelling and gameplay, we
          create captivating and engaging experiences for players worldwide at
          Fennec Digital.
        </p>
        <div
          style={{ backdropFilter: selected === 3 ? 'blur(5px)' : 'blur(0px)' }}
          className={`
          absolute top-0 left-0 w-full h-full bg-black
          ${selected === 3 ? 'bg-opacity-40' : 'bg-opacity-0'}
          duration-300
          `}
        ></div>
      </div>
    </div>
  );
};

export default HoverAccrodione;
