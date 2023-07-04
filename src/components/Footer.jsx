import React from 'react'
import Jadoo from '../resources/Jadoo.jpg';
import fb from '../resources/fb.png';
import insta from '../resources/insta.svg';
import twitter from '../resources/twitter.png';
import playstore from "../resources/playstore.jpg"
import appstore from "../resources/appstore.jpg"

const Footer = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-between'>
        <div>
          <img src={Jadoo}/>
          <p className='text-[#5E6282]'>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div>
          <p className='text-[#080809] text-[21px]'>Company</p>
          <p className='text-[#5E6282]'>About</p>
          <p className='text-[#5E6282]'>Careers</p>
          <p className='text-[#5E6282]'>Mobile</p>
        </div>
        <div>
          <p className='text-[#080809] text-[21px]'>Contact</p>
          <p className='text-[#5E6282]'>Help/FAQ</p>
          <p className='text-[#5E6282]'>Press</p>
          <p className='text-[#5E6282]'>Affilates</p>
        </div>
        <div>
          <p className='text-[#080809] text-[21px]'>More</p>
          <p className='text-[#5E6282]'>Airlinefees</p>
          <p className='text-[#5E6282]'>Low fare tips</p>
          <p className='text-[#5E6282]'>Airline</p>
        </div>
        <div className='flex-row justify-between items-center text-center'>
          <div className='flex'>
            <img src={fb} className='hover:scale-110 hover:transition-transform'/>
            <img src={insta} className='w-14 hover:scale-110 hover:transition-transform'/>
            <img src={twitter} className='hover:scale-110 hover:transition-transform'/>
          </div>
          <p className='text-[#5E6282] font-semibold'>Discover our app</p><br/>
          <div className='flex'>
            <img src={playstore} className='w-24 h-10'/>
            <img src={appstore} className='w-24 h-10'/>
          </div>
        </div>
      </div>
      <div className='text-center font-bold'>All rights reserved@jadoo.co</div>
      <div className='text-center font-bold'>Handicrafted with ❤️ by Aditya Chaudhary ( 22DCS002 )</div>
    </div>
    
  )
}

export default Footer