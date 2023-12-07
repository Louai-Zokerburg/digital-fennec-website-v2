import React from 'react';
import Image from 'next/image';

import SectionTitle from '../components/SectionTitle';
import CtaButton from '../components/CtaButton';

import contact_section_img from '../assets/images/contact_img.png';
import arrow_img from '../assets/images/arrow.svg';
import facebook_img from '../assets/images/facebook_img.svg';
import instagram_img from '../assets/images/instagram_img.svg';
import twitter_img from '../assets/images/twitter_img.svg';
import gmail_img from '../assets/images/gmail_img.svg';

// import somebting from '../assets/images/facebook_img.svg'

const ContactSection = () => {
  return (
    <section className='section' id='contact'>
      <div className='inner-wrapper'>
        <SectionTitle text='Getin Touch With Us' />

        <article
          data-aos='fade-right'
          className='mt-8 w-full flex flex-col justify-start lg:text-lg text-left'
        >
          <h3 className='text-black text-xl font-semibold mb-4'>
            Get in Touch
          </h3>

          <p className='w-full lg:w-1/2 text-black font-normal text-left pl-4 relative before:absolute before:h-full before:w-1 before:rounded-full before:top-0 before:left-0 before:bg-primary_color'>
            For any inquiries, collaborations, or just to share your thoughts,
            Fennec Digital welcomes your messages. Feel free to reach out
            through the provided form, and let's start a conversation. Your
            feedback matters to us!
          </p>
        </article>

        <div className='w-full flex flex-col lg:flex-row justify-between items-center mt-12 gap-x-8 gap-y-8'>
          <form
            data-aos='fade-right'
            className='flex flex-col justify-start w-full gap-y-4'
          >
            <h3 className='text-black text-xl font-semibold text-left'>
              What We Do ?
            </h3>
            <div className='w-full flex justify-between items-center gap-x-4'>
              <input
                placeholder='First name'
                type='text'
                className='font-semibold w-full bg-transparent py-2 px-4 outline-none border-2 border-border_color rounded-lg
                    '
              />
              <input
                placeholder='Last name'
                type='text'
                className='font-semibold w-full bg-transparent py-2 px-4 outline-none border-2 border-border_color rounded-lg
                    '
              />
            </div>
            <input
              placeholder='Email'
              type='text'
              className='font-semibold w-full bg-transparent py-2 px-4 outline-none border-2 border-border_color rounded-lg
                    '
            />
            <textarea
              rows={5}
              placeholder='Subject'
              type='text'
              className='font-semibold w-full bg-transparent py-2 px-4 outline-none border-2 border-border_color rounded-lg'
            />

            <CtaButton
              image={arrow_img}
              text='Send Email'
              filled={true}
              isFullWidth={true}
            />
          </form>
          <Image
            data-aos='fade-left'
            src={contact_section_img}
            alt='Cotact Section Image'
          />
        </div>

        <div className='mt-12 flex flex-col justify-start items-start'>
          <h3 className='text-black text-xl font-semibold mb-4'>
            What We Do ?
          </h3>

          <iframe
            data-aos='fade-up'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20387.947288559142!2d2.930197155630883!3d36.75949594270917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb12d7d49ba0d%3A0x71039645ae39f177!2sDigital%20Fennec!5e0!3m2!1sen!2sdz!4v1675835167458!5m2!1sen!2sdz'
            className='w-full rounded-lg h-[40vh]'
          ></iframe>
        </div>

        <div className='mt-12 flex flex-col justify-start items-start'>
          <h3 className='text-black text-xl font-semibold mb-4'>
            What We Do ?
          </h3>

          <div
            data-aos='fade-up'
            className='flex flex-col gap-x-8 gap-y-6 justify-between items-center w-full lg:flex-row mt-4 '
          >
            <div className='w-full flex flex-col justify-start items-center gap-y-4 p-6 rounded-lg bg-white hover:shadow-lg hover:translate-y-[-10px] duration-300'>
              <Image src={facebook_img} alt='facebook image' />

              <h5>Digital Fennec</h5>
            </div>
            <div className=' w-full flex flex-col justify-start items-center gap-y-4 p-6 rounded-lg bg-white hover:shadow-lg hover:translate-y-[-10px] duration-300'>
              <Image src={instagram_img} alt='facebook image' />

              <h5>Digital Fennec</h5>
            </div>
            <div className=' w-full flex flex-col justify-start items-center gap-y-4 p-6 rounded-lg bg-white hover:shadow-lg hover:translate-y-[-10px] duration-300'>
              <Image src={gmail_img} alt='facebook image' />

              <h5>Digital Fennec</h5>
            </div>
            <div className=' w-full flex flex-col justify-start items-center gap-y-4 p-6 rounded-lg bg-white hover:shadow-lg hover:translate-y-[-10px] duration-300'>
              <Image src={twitter_img} alt='facebook image' />

              <h5>Digital Fennec</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
