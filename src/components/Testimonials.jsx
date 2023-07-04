import React, { useEffect, useState } from 'react'
import testi from "../resources/testi.png"
import down from "../resources/down.svg"
import up from "../resources/up.svg"

const slider = [
  {
    id:1,
    desc:"“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    author:"Mike taylor",
    place:"Lahore, Pakistan",
  },
  {
    id:2,
    desc:"“Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe hic possimus molestias eveniet corrupti ut.”",
    author:"Aditya Chaudhary",
    place:"Rajasthan, India",
  },
  {
    id:3,
    desc:"“Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe hic possimus molestias eveniet corrupti ut. Lorem ipsum dolor sit amet.”",
    author:"Vladimir Puitn",
    place:"Leningrad, Russia",
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const rightHandler = () => {
		if (index == slider.length - 1) setIndex(0);
		else setIndex(index + 1);
	};
  const leftHandler = () => {
		if (index == 0) setIndex(slider.length - 1);
		else setIndex(index - 1);
	};

  return (
    <div className='flex gap-20 justify-between'>
      <div className='w-[40%]'>
        <p className='text-[#5E6282]'>TESTIMONIALS</p>
        <p className='text-[#14183E] font-bold text-[50px]'>What people say about Us.</p>
      </div>
      <div className='w-[45%]'>
        <img src={testi}/>
        <div className='border w-[70%] p-5 shad rounded-xl'>
          <p>{slider[index].desc}</p><br/>
          <p>{slider[index].author}</p>
          <p>{slider[index].place}</p>
        </div>
        <p className='ml-10 font-semibold'>Chris Thomas</p>
        <p className='ml-10'>CEO of Red Button</p>
      </div>
      <div className='w-[15%] flex-row m-auto'>
        <img src={up} className='w-12 hover:scale-125 hover:transition-transform' onClick={()=>leftHandler()}/>
        <img src={down} className='w-12 hover:scale-125 hover:transition-transform' onClick={()=>rightHandler()}/>
      </div>
    </div>
  )
}

export default Testimonials