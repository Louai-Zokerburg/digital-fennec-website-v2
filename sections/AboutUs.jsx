import React from 'react';
import Image from 'next/image';

import SectionTitle from '../components/SectionTitle';

import about_section_img from '../assets/images/about_img.png';
import HoverAccrodione from '../components/HoverAccrodione';

const AboutUs = () => {
  return (
    <section className='section pt-[5vh] lg:pt-[10vh]' id='about'>

      <div className='inner-wrapper'>


        <SectionTitle text='About Us As a Company' />



        <article className='w-full flex flex-col justify-start gap-y-8 lg:flex-row lg:text-lg  lg:gap-x-16 lg:items-center'>
          <p
            data-aos='fade-right'
            className='text-black font-normal text-left'
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, ipsa
            non deserunt iste voluptate illo a repellat nulla veritatis, placeat
            similique cumque provident ullam quasi voluptatibus dolor, quam
            atque ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos possimus aut non odit esse quam laudantium, rerum eius
            quo omnis ipsam atque optio aliquam placeat deserunt! Illo
            praesentium iure dicta.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, ipsa
            non deserunt iste voluptate illo a repellat nulla veritatis, placeat
            similique cumque provident ullam quasi voluptatibus.
          </p>
        </article>

        <HoverAccrodione />

        <article
          data-aos='fade-right'
          className='w-full flex flex-col justify-start lg:text-lg text-left mt-16'
        >
          <h3 className='text-black text-xl font-semibold mb-4'>
            What We Do ?
          </h3>

          <p className='w-full lg:w-1/2 text-black font-normal text-left pl-4 relative before:absolute before:h-full before:w-1 before:rounded-full before:top-0 before:left-0 before:bg-primary_color'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, ipsa
            non deserunt iste voluptate illo a repellat nulla veritatis, placeat
            similique cumque provident ullam quasi voluptatibus.
          </p>
        </article>

        <div  data-aos='fade-up' className='flex flex-col gap-x-8 gap-y-6 justify-between items-center w-full lg:flex-row mt-6 '>

        <div className='flex flex-col items-center justify-start p-8 rounded-xl bg-white duration-300 hover:shadow-lg hover:translate-y-[-10px] cursor-default'>
            <h5 className='text-primary_color mb-4 font-semibold text-lg lg:text-xl'>
              Mission
            </h5>
            <p className='text-sm lg:text-sm font-semibold text-[#444]'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              nobis, vel impedit sequi beatae a qui ratione earum hic dolores
              quo sint obcaecati numquam repellat quia dignissimos praesentium.
              Cupiditate, nesciunt?
            </p>
          </div>
          <div className='flex flex-col items-center justify-start p-8 rounded-xl bg-white duration-300 hover:shadow-lg hover:translate-y-[-10px] cursor-default'>
            <h5 className='text-primary_color mb-4 font-semibold text-lg lg:text-xl'>
              Mission
            </h5>
            <p className='text-sm lg:text-sm font-semibold text-[#444]'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              nobis, vel impedit sequi beatae a qui ratione earum hic dolores
              quo sint obcaecati numquam repellat quia dignissimos praesentium.
              Cupiditate, nesciunt?
            </p>
          </div>

          <div className='flex flex-col items-center justify-start p-8 rounded-xl bg-white duration-300 hover:shadow-lg hover:translate-y-[-10px] cursor-default'>
            <h5 className='text-primary_color mb-4 font-semibold text-lg lg:text-xl'>
              Mission
            </h5>
            <p className='text-sm lg:text-sm font-semibold text-[#444]'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              nobis, vel impedit sequi beatae a qui ratione earum hic dolores
              quo sint obcaecati numquam repellat quia dignissimos praesentium.
              Cupiditate, nesciunt?
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
