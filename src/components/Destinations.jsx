import React from 'react'
import d1 from "../resources/d1.png"
import d2 from "../resources/d2.jpg"
import d3 from "../resources/d3.png"

const Destinations = () => {
  return (
    <div>
      <div className='text-[#5E6282] text-center'>Top Selling</div>
      <div className='text-[#14183E] font-bold text-[50px] text-center'>Top Destinations</div>
      <div className='flex justify-evenly flex-wrap text-[#5E6282] mx-auto'>
        <div className='flex-row md:w-[33%] rounded-lg'>
          <img src={d1} className='grayscale hover:grayscale-0 hover:scale-105 hover:delay-150 hover:transition-transform'/>
          <div className='flex justify-between -mt-32'>
            <p className='ml-10'>Rome, Italy</p>
            <p className='mr-10'>$5.42k</p>
          </div>
          <div className='text-center'>10 Days Trip</div>
        </div>
        <div className='flex-row md:w-[33%] rounded-lg'>
          <img src={d2} className='grayscale hover:grayscale-0 hover:scale-105 hover:delay-150 hover:transition-transform'/>
          <div className='flex justify-between -mt-32'>
            <p className='ml-10'>London, UK</p>
            <p className='mr-10'>$4.2k</p>
          </div>
          <div className='text-center'>12 Days Trip</div>
        </div>
        <div className='flex-row md:w-[33%] rounded-lg'>
          <img src={d3} className='grayscale hover:grayscale-0 hover:scale-105 hover:delay-150 hover:transition-transform'/>
          <div className='flex justify-between -mt-32'>
            <p className='ml-10'>Full Europe</p>
            <p className='mr-10'>$15k</p>
          </div>
          <div className='text-center'>28 Days Trip</div>
        </div>
      </div>
    </div>
  )
}

export default Destinations