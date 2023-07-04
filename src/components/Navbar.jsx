import React from 'react'
import Jadoo from '../resources/Jadoo.jpg';

const Navbar = () => {
  return (
    <div className='flex md:justify-between items-center'>
      <img src={Jadoo} alt="logo" className="w-[13%]" />
      <div className="flex gap-1 md:gap-20 md:w-auto w-[87%]">
        <div className="hover:transition-transform hover:text-orange-500">Destinations</div>
        <div className="hover:transition-transform hover:text-orange-500">Hotels</div>
        <div className="hover:transition-transform hover:text-orange-500">Flights</div>
        <div className="hover:transition-transform hover:text-orange-500">Bookings</div>
        <div className="hover:transition-transform hover:text-orange-500">Login</div>
        <div className="hover:transition-transform hover:text-orange-500">Signup</div>
        <div className='hover:transition-transform hover:text-orange-500'>EN</div>
      </div>
    </div>
  )
}

export default Navbar