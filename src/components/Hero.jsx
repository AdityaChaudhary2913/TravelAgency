import React from 'react';
import traveller from "../resources/Traveller 1.png";
import plane from "../resources/plane.png"
import play from "../resources/PLAY.jpg"

const Hero = () => {
  return (
    <div className='flex flex-wrap'>
      <div className='w-[45%] flex-row'>
        <div className='text-[#DF6951] font-semibold'>BEST DESTINATIONS AROUND THE WORLD</div>
        <div className='text-[#181E4B] font-bold text-[84px]'>Travel, enjoy and live a new and full life</div>
        <div className='text-[#5E6282]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</div><br/>
        <div className='flex gap-10'>
          <div className='bg-[#F1A501] w-28 p-2 text-sm text-white rounded-lg'>Find out more</div>
          <div className='flex gap-2 items-center'>
            <img src={play} className='w-[35px]'/>
            <p>Play Demo</p>
          </div>
        </div>
      </div>
      <div className='w-[55%]'>
        <img src={traveller} className='w-[765px] h-[764px] -mt-20'/>
        <img src={plane} className='-mt-[700px]'/>
        <img src={plane}/>
      </div>
    </div>
  )
}

export default Hero