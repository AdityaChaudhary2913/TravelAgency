import React from 'react'
import Jadoo from '../resources/Jadoo.jpg';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <img src={Jadoo} alt="logo" className="object-contain" />
      </div>
      <div className="flex gap-5 md:gap-20">
        <div className="">Destinations</div>
        <div className="">Hotels</div>
        <div className="">Flights</div>
        <div className="">Bookings</div>
        <div className="">Login</div>
        <div className="">Signup</div>
        <div>EN</div>
      </div>
    </div>
  )
}

export default Navbar