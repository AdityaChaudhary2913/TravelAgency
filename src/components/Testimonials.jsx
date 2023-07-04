import React from 'react'
import testi from "../resources/testi.png"

const Testimonials = () => {
  return (
    <div className='flex gap-80 justify-between'>
      <div>
        <p className='text-[#5E6282]'>TESTIMONIALS</p>
        <p className='text-[#14183E] font-bold text-[50px]'>What people say about Us.</p>
      </div>
      <div>
        <img src={testi}/>
        <div className='border w-[70%] p-3 shad'>
          <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p><br/>
          <p>Mike taylor</p>
          <p>Lahore, Pakistan</p>
        </div>
        <p className='ml-10 font-semibold'>Chris Thomas</p>
        <p className='ml-10'>CEO of Red Button</p>
      </div>
    </div>
  )
}

export default Testimonials