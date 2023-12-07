import React from 'react';
import Image from 'next/image';

import SectionTitle from '../components/SectionTitle';

import about_section_img from '../assets/images/about_img.png';
import HoverAccrodione from '../components/HoverAccrodione';

// import facebook_img from '../s'

const AboutUs = () => {
  return (
    <section className='section pt-[5vh] lg:pt-[10vh]' id='about'>
      <div className='inner-wrapper'>
        <SectionTitle text='About Us As a Company' />

        <article className='relative w-full flex flex-col justify-start gap-y-8 lg:flex-row lg:text-lg  lg:gap-x-16 lg:items-center'>
          <p data-aos='fade-right' className='text-black font-normal text-left'>
            Welcome to Fennec Digital, an Algerian mobile game development
            company merging cutting-edge technology with local creativity. We're
            committed to crafting high-quality, engaging experiences that
            transcend boundaries. Join us on this exciting journey of innovation
            and limitless possibilities in digital entertainment.
          </p>

          <Image
            data-aos='fade-left'
            src={about_section_img}
            className='duration-300 hover:animate-powel'
          />
        </article>

        <article
          data-aos='fade-right'
          className='mt-8 w-full flex flex-col justify-start lg:text-lg text-left'
        >
          <h3 className='text-black text-xl font-semibold mb-4'>
            What We Do ?
          </h3>

          <p className='w-full lg:w-1/2 text-black font-normal text-left pl-4 relative before:absolute before:h-full before:w-1 before:rounded-full before:top-0 before:left-0 before:bg-primary_color'>
            Fennec Digital specializes in creating cutting-edge mobile games,
            blending innovative technology with local creativity. Our commitment
            is to deliver high-quality, engaging gaming experiences that
            transcend boundaries and captivate audiences worldwide.
          </p>
        </article>

        <HoverAccrodione />

        <article
          data-aos='fade-right'
          className='w-full flex flex-col justify-start lg:text-lg text-left mt-16'
        >
          <h3 className='text-black text-xl font-semibold mb-4'>
            Values and Mission
          </h3>

          <p className='w-full lg:w-1/2 text-black font-normal text-left pl-4 relative before:absolute before:h-full before:w-1 before:rounded-full before:top-0 before:left-0 before:bg-primary_color'>
            At Fennec Digital, our values center around innovation, creative
            excellence, and a player-centric approach. We strive to pioneer
            breakthroughs, craft aesthetic marvels, and enrich player
            experiences, redefining the gaming landscape with passion and
            commitment.
          </p>
        </article>

        <div
          data-aos='fade-up'
          className='flex flex-col gap-x-8 gap-y-6 justify-between items-center w-full lg:flex-row mt-6 '
        >
          <div className='flex flex-col items-center justify-start p-8 rounded-xl bg-white duration-300 hover:shadow-lg hover:translate-y-[-10px] cursor-default'>
            <h5 className='text-primary_color mb-4 font-semibold text-lg lg:text-xl'>
              Innovation Pioneers
            </h5>
            <p className='text-sm lg:text-sm font-semibold text-[#444]'>
              Description: Fennec Digital pioneers innovation, pushing
              technological boundaries to create groundbreaking mobile gaming
              experiences. Our mission is to consistently introduce cutting-edge
              solutions that redefine the industry.
            </p>
          </div>
          <div className='flex flex-col items-center justify-start p-8 rounded-xl bg-white duration-300 hover:shadow-lg hover:translate-y-[-10px] cursor-default'>
            <h5 className='text-primary_color mb-4 font-semibold text-lg lg:text-xl'>
              Creative Excellence
            </h5>
            <p className='text-sm lg:text-sm font-semibold text-[#444]'>
              Description: In the pursuit of creative excellence, Fennec
              Digital's Graphic and Art Design Department meticulously crafts
              visually stunning and immersive experiences, setting new standards
              in aesthetic design for mobile games.
            </p>
          </div>

          <div className='flex flex-col items-center justify-start p-8 rounded-xl bg-white duration-300 hover:shadow-lg hover:translate-y-[-10px] cursor-default'>
            <h5 className='text-primary_color mb-4 font-semibold text-lg lg:text-xl'>
              Player-Centric Development
            </h5>
            <p className='text-sm lg:text-sm font-semibold text-[#444]'>
              Description: Our Game Development Department is committed to
              enriching player experiences. Focused on storytelling and engaging
              gameplay, we strive to create captivating and memorable moments
              for gamers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
