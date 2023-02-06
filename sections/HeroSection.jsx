import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import arrow from '../assets/images/arrow.svg';
import CtaButton from '../components/CtaButton';
import SocailProvCard from '../components/SocailProvCard';

const HeroSection = () => {
  return (
    <section
      id='home'
      className='section bg-[url(../assets/images/img_one.png)] bg-no-repeat bg-cover bg-center bg-fixed'
    >
      <div className='absolute top-0 right-0 h-screen w-full bg-[#002010] bg-opacity-80 flex flex-col justify-center items-start pl-4 text-left text-white lg:w-1/2'>
        <article className=''>
          <h2 className='text-2xl mb-2 lg:text-3xl'>Digital Fennec</h2>
          <h1 className='text-3xl lg:text-5xl'>
          <h1 className='text-3xl lg:text-5xl'>Mobile Games With</h1>
            <span className='text-primary_color'>Algerian</span> Touch
          </h1>

          <p className='text-xs mt-6 leading-6 font-semibold mr-[10%] lg:mr-[30%]'>
          Do you want to submit your application? Just contact us! We will evaluate your app and let you know if we can help. We answer 100% of emails received.
          </p>

          <div className='mt-8 flex gap-x-4'>
            {/* First Call To Action Button */}
            <CtaButton to='#hero' text='Contact Us' filled={true} />
            {/* Second Call To Action Button */}
            <CtaButton to='#hero' text='Our Work' filled={false} />
          </div>

          <div className='mt-12 flex justify-start items-center gap-x-4'>
            {/*  Social Prove Card goes here */}
            <SocailProvCard state='45+' text='Built Projects' />
            <SocailProvCard state='05+' text='Industry Experience' />
            <SocailProvCard state='1M+' text='Satisfied User' />
          </div>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;
