import React from 'react'

const SectionTitle = ({text}) => {
  return (
    <h1  data-aos='fade-up' className='lg:mb-16 py-4 text-3xl lg:text-5xl font-semibold mb-[10vh] relative after:h-1 after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-1/6 after:rounded-full after:bg-primary_color'>
        {`${text.split(' ')[0]} `}
        <span className='text-primary_color'>{text.split(' ')[1]}</span>
        {text.split(' ').map((word, i) => (i > 1) && ` ${word} `)}
    </h1>
  )
}

export default SectionTitle