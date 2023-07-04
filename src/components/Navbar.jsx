import React from 'react'
import Jadoo from '../resources/Jadoo.jpg';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <img src={Jadoo} alt="logo" className="object-contain" />
      </div>
      <div className="flex gap-5 md:gap-20">
        <div className="hover:scale-105 hover:transition-transform hover:font-bold">Destinations</div>
        <div className="hover:scale-105 hover:transition-transform hover:font-bold">Hotels</div>
        <div className="hover:scale-105 hover:transition-transform hover:font-bold">Flights</div>
        <div className="hover:scale-105 hover:transition-transform hover:font-bold">Bookings</div>
        <div className="hover:scale-105 hover:transition-transform hover:font-bold">Login</div>
        <div className="hover:scale-105 hover:transition-transform hover:font-bold">Signup</div>
        <div className='hover:scale-105 hover:transition-transform hover:font-bold'>EN</div>
      </div>
    </div>
  )
}

export default Navbar