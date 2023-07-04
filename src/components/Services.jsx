import React from 'react'
import s1 from "../resources/s1.png"
import s2 from "../resources/s2.jpg"
import s3 from "../resources/s3.jpg"
import s4 from "../resources/s4.png"

const Services = () => {
  return (
    <div className='flex-row justify-center items-center'>
      <div className='text-center text-[#5E6282]'>CATEGORY</div>
      <div className='text-center font-bold text-[50px]'>We Offer Best Services</div><br/><br/>
      <div className='flex gap-28 justify-center items-center text-center mx-auto'>
        <div>
          <img src={s1} className='mx-auto'/>
          <div>Calculated Weather</div>
          <div>Built Wicket longer admire do barton vanity itself do in it.</div>
        </div>
        <div>
          <img src={s2} className='w-[110px] mx-auto'/>
          <div>Best Flights</div>
          <div>Engrossed listening. Park gate sell they west hard for the.</div>
        </div>
        <div>
          <img src={s3} className='w-[100px] mx-auto'/>
          <div>Local Events</div>
          <div>Barton vanity itself do in it. Preferd to men it engrossed listening. </div>
        </div>
        <div>
          <img src={s4} className='mx-auto'/>
          <div>Customization</div>
          <div>We deliver outsourced aviation services for military customers</div>
        </div>
      </div>
    </div>
  )
}

export default Services