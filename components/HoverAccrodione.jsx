import React, { useState, useEffect } from 'react';

const HoverAccrodione = () => {
  const [selected, setSeletected] = useState(1);

//   useEffect(() => {
//     const mTimeOut = setTimeout(() => {
//       if (selected < 3) {
//         setSeletected(selected + 1);
//       } else {
//         setSeletected(1);
//       }
//     }, 2000);
//   }, [selected]);

  const changeSelected = (index) => {
    setSeletected(index);
    console.log(index);
  };

  return (
    <div data-aos='fade-up' className='flex justify-start items-center gap-x-4 lg:gap-x-8 gap-y-12 mt-6'>
      <div
        //   onMouseLeave={() => setSeletected(1)}
        onMouseEnter={() => changeSelected(1)}
        className={`h-[25vh] ${
          selected === 1 ? 'w-[calc(100%-20%-32px)] lg:w-[calc(100%-20%-64px)]' : 'w-[10%]'
        } bg-primary_color duration-300 rounded-lg`}
      ></div>
      <div
        //   onMouseLeave={() => setSeletected(1)}
        onMouseEnter={() => changeSelected(2)}
        className={`h-[25vh] ${
          selected === 2 ? 'w-[calc(100%-20%-32px)] lg:w-[calc(100%-20%-64px)]' : 'w-[10%]'
        } bg-primary_color duration-300 rounded-lg`}
      ></div>
      <div
        //   onMouseLeave={() => setSeletected(1)}
        onMouseEnter={() => changeSelected(3)}
        className={`h-[25vh] ${
          selected === 3 ? 'w-[calc(100%-20%-32px)] lg:w-[calc(100%-20%-64px)]' : 'w-[10%]'
        } bg-primary_color duration-300 rounded-lg`}
      ></div>

      {/* <div className='w-full h-10 bg-primary_color duration-300 rounded-lg hover:h-20'></div>
      <div className='w-full h-20 bg-primary_color duration-300 rounded-lg hover:w-1/3'></div>
  <div className='w-full h-20 bg-primary_color duration-300 rounded-lg hover:w-1/3'></div> */}
    </div>
  );
};

export default HoverAccrodione;
