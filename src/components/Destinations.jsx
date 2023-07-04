import React from 'react'
import d1 from "../resources/d1.png"
import d2 from "../resources/d2.jpg"
import d3 from "../resources/d3.png"

const Destinations = () => {
  return (
    <div>
      <div className='text-[#5E6282] text-center'>Top Selling</div>
      <div className='text-[#14183E] font-bold text-[50px] text-center'>Top Destinations</div>
      <div className='flex justify-evenly gap-2 p-4 text-[#5E6282] bg-slate-100'>
        <div className='flex-row rounded-lg'>
          <img src={d1}/>
          <div className='flex justify-between -mt-32'>
            <p className='ml-10'>Rome, Italy</p>
            <p className='mr-10'>$5.42k</p>
          </div>
          <div className='text-center'>10 Days Trip</div>
        </div>
        <div>
          <img src={d2}/>
          <div className='flex justify-between -mt-32'>
            <p className='ml-10'>London, UK</p>
            <p className='mr-10'>$4.2k</p>
          </div>
          <div className='text-center'>12 Days Trip</div>
        </div>
        <div>
          <img src={d3}/>
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