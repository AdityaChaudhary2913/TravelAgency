import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#DFD7F9] p-14 rounded-lg rounded-tl-full'>
      <p className='text-center text-[35px] text-[#5E6282] w-[60%] p-7 mx-auto'>Subscribe to get information, latest news and other interesting offers about Cobham</p><br/>
      <div className='flex justify-center gap-5'>
        <input placeholder='Your Email' className='border-2 rounded-lg w-80 text-center h-10'></input>
        <div className='bg-[#FF7D68] w-28 p-2 text-base text-center text-white rounded-lg hover:scale-110 hover:transition-transform'>Subscribe</div>
      </div>
    </div>
  )
}

export default Contact