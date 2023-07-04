import React from 'react'
import Jadoo from '../resources/Jadoo.jpg';

const Navbar = () => {
  return (
    <div className='flex md:justify-between items-center'>
      <img src={Jadoo} alt="logo" className="w-[13%]" />
      <div className="flex gap-1 md:gap-20 md:w-auto w-[87%]">
        <div className="hover:transition-transform hover:text-orange-500 hover:cursor-pointer">Destinations</div>
        <div className="hover:transition-transform hover:text-orange-500 hover:cursor-pointer">Hotels</div>
        <div className="hover:transition-transform hover:text-orange-500 hover:cursor-pointer">Flights</div>
        <div className="hover:transition-transform hover:text-orange-500 hover:cursor-pointer">Bookings</div>
        <div className="hover:transition-transform hover:text-orange-500 hover:cursor-pointer">Login</div>
        <div className="hover:transition-transform hover:text-orange-500 hover:cursor-pointer">Signup</div>
        <div className='hover:transition-transform hover:text-orange-500 hover:cursor-pointer'>EN</div>
      </div>
    </div>
  )
}

export default Navbar