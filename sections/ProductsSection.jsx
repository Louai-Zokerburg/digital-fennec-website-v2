import React from 'react';
import Image from 'next/image';

import products_img from '../assets/images/products_img.png';

import game_1 from '../assets/images/game_1.png';
import game_2 from '../assets/images/game_2.png';
import game_3 from '../assets/images/game_3.png';
import game_4 from '../assets/images/game_4.png';
import game_5 from '../assets/images/game_5.png';
import game_6 from '../assets/images/game_6.png';

// loug is th best programmer on the eart ou muother fut

import SectionTitle from '../components/SectionTitle';

const ProductsSection = () => {
  return (
    <section className='section' id='products'>
      <div className='inner-wrapper'>
        <SectionTitle text='Our Fancky Games' />
        <article className='relative w-full flex flex-col justify-start gap-y-8 lg:flex-row lg:text-lg  lg:gap-x-16 lg:items-center'>
          <p data-aos='fade-right' className='text-black font-normal text-left'>
            Welcome to "Our Funky Games," where the spirit of Fennec comes to
            life in a playful and vibrant gaming universe. Each title exudes the
            unique charm inspired by our Fennec roots, offering players
            delightful, innovative, and truly fun experiences. Dive into the
            whimsical world of Fennec Digital's games, where entertainment knows
            no bounds.
          </p>

          <Image
            data-aos='fade-left'
            src={products_img}
            className='duration-300 hover:animate-powel'
          />
        </article>
        <article
          data-aos='fade-right'
          className='mt-8 w-full flex flex-col justify-start lg:text-lg text-left'
        >
          <h3 className='text-black text-xl font-semibold mb-4'>
            Fennec Funscapes
          </h3>

          <p className='w-full lg:w-1/2 text-black font-normal text-left pl-4 relative before:absolute before:h-full before:w-1 before:rounded-full before:top-0 before:left-0 before:bg-primary_color'>
            Dive into the enchanting universe of Fennec Digital's games, a
            collection lovingly crafted by our dedicated teams. From innovative
            gameplay to mesmerizing visuals, each title in our repertoire
            promises a unique and immersive adventure, ensuring that Fennec
            Funscapes captivate players with joy and excitement.
          </p>
        </article>

        <div
          data-aos='fade-up'
          className='mt-12 flex justify-start items-center gap-x-4 w-full overflow-y-auto pt-4 overflow-x-scroll scrollbar-hide'
        >
          <Image
            src={game_1}
            alt='game image'
            className='w-1/2 lg:w-1/4 hover:translate-y-[-10px] duration-300'
          />
          <Image
            src={game_2}
            alt='game image'
            className='w-1/2 lg:w-1/4 hover:translate-y-[-10px] duration-300'
          />
          <Image
            src={game_3}
            alt='game image'
            className='w-1/2 lg:w-1/4 hover:translate-y-[-10px] duration-300'
          />
          <Image
            src={game_4}
            alt='game image'
            className='w-1/2 lg:w-1/4 hover:translate-y-[-10px] duration-300'
          />
          <Image
            src={game_5}
            alt='game image'
            className='w-1/2 lg:w-1/4 hover:translate-y-[-10px] duration-300'
          />
          <Image
            src={game_6}
            alt='game image'
            className='w-1/2 lg:w-1/4 hover:translate-y-[-10px] duration-300'
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
