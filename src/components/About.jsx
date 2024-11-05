import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
GoArrowUpRight
const About = () => {
  return (
    <div>
    <div className=' w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68]'>
        <p className='font-["About"] font-normal text-[3.5vw] py-6 px-10 mr-52 leading-none text-black'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds,
             sell products, explain complex ideas, and hire great people.</p>
    </div>
    <div className='h-full w-full mr-60 border-t-2 border-gray-600 bg-[#CDEA68] text-black' >
        <div className='flex justify-between px-10 py-5 '>
        <p>What you can expect:</p>
        <div className='flex-col whitespace-nowrap '>
        <p className=' mb-11'>We create tailored presentations to <br /> help you persuade your colleagues, clients,<br /> or  investors. Whether it’s live or digital,  <br /> 
            delivered for one or a hundred people.</p>
        <p className='mb-20'>We believe the mix of strategy and <br /> design (with a bit of coffee) 
            is what  <br />makes your message clear, convincing, <br /> and captivating.</p>
        </div>
        <div className=' mt-20 mr-20'>
            <h6 className='mb-7'>Source:</h6>
            <a href="#" className=' underline'>Instagram</a><br />
            <a href="#"className=' underline'>Facebook</a><br />
            <a href="#" className=' underline'>LinkedIn</a><br />
            <a href="#"className=' underline'>Twitter</a>
            
        </div>
        </div>
    </div>
    <div className='flex justify-between h-full w-full border-t-2 border-gray-600 bg-[#CDEA68] '>
    <div className=' text-black' >
        <h1 className=' text-4xl mb-6 mt-10 px-10'>Our approach:</h1>
        <div className='px-10'>
        <button className='bg-black rounded-full gap-10 uppercase flex items-center text-white text-sm pl-7 py-2 px-[.5vw]'> read more 
            <div className='h-10 w-10 text-black bg-white rounded-full border-2 flex items-center border-white justify-center text-xl'><GoArrowUpRight/> </div></button>
        </div>
        </div>
        <div className='mt-10 mr-20 relative'><img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="about_img" className=' rounded-xl' /></div>
</div>
    </div>
  )
}

export default About