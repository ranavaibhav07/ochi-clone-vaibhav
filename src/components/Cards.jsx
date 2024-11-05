import React from 'react'

const Cards = () => {
  return (
    <div>
        <div className=' grid grid-cols-4 gap-5 ml-10 mr-10'>
            <div className='card1 h-[55vh] col-span-2 rounded-lg  bg-[#004D43]'>
            <div className=' flex justify-center mt-32 h-16 overflow-hidden '><img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            </div>
            <button className='border mt-28 ml-2 border-[#CDEA68] rounded-3xl px-1 text-sm font-[About] text-[#CDEA68]'>©2019–2022</button>
            </div>
            <div className='card2 bg-[#212121] h-[55vh] rounded-lg'>
            <div className=' flex justify-center mt-32 overflow-hidden '><img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            </div>
            <button className='mt-28 ml-2 border border-gray-200 text-center rounded-3xl px-1 text-sm font-[About] text-gray-200 flex text '>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='card3 bg-[#212121] h-[55vh] rounded-lg relative '>
            <div className='absolute'>
            <div className=' size-28 mt-28 ml-24 overflow-hidden '><img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            </div>
            <button className='mt-20 ml-2 border border-gray-200 text-center rounded-3xl px-1 text-sm font-[About] text-gray-200 '>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
            </div>
        </div>
    </div>
   )  
}

export default Cards 