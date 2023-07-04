import React from 'react'
import b1 from "../resources/b1.png"
import b2 from "../resources/b2.png"
import b3 from "../resources/b3.png"
import bm from "../resources/bm.jpg"

const BookTrip = () => {
  return (
    <div>
      <div className='text-[#5E6282]'>Easy and Fast</div>
      <div className='flex justify-around items-center'>
        <div className=''>
          <div className='text-[#14183E] text-[50px] font-bold'>Book your next trip in 3 easy steps</div>
          <div className='text-[#5E6282] flex-row'>
            <div className='flex gap-5'>
              <img src={b1}/>
              <div>
                <p className='font-bold'>Choose Destination</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
              </div>
            </div>
            <br/>
            <div className='flex gap-5'>
              <img src={b2}/>
              <div>
                <p className='font-bold'>Make Payment</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
              </div>
            </div>
            <br/>
            <div className='flex gap-5'>
              <img src={b3}/>
              <div>
                <p className='font-bold'>Reach Airport on Selected Date</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
              </div>
            </div>
          </div>
        </div>
        <div className='border-2 rounded-lg text-[#84829A] bshad'>
          <div>
            <img src={bm} className='w-[85%] mx-auto mt-5'/>
          </div>
          <p className='font-bold ml-4'>Trip to Greece</p>
          <p className='ml-4'>14-29June | by Robbin june</p>
          <p className='ml-4'>24 people going</p>
        </div>
      </div>
    </div>
  )
}

export default BookTrip