import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div className=' w-full h-screen bg- bg-zinc-900 pt-1'>
      
        <div className='textstructure mt-44 px-20'>
            {["We create","eye-opening","presentation"].map((items,index)=>{
                return (<div className='masker'> 
                <div className='w-fit flex items-end overflow-hidden '>
                  {index===1 && ( 
                  <motion.div initial={{width: 0}} animate={{width:"9vw"}} transition={{ease :[0.45, 0, 0.55, 1], duration: 1}}
                  className='relative block -top-[0.2vw]'> <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                   alt="" className=' rounded-md h-[5.55vw] mr-4 '/> </motion.div> )}
                <h1 className='uppercase leading-[3.8vw] pt-[2vw] mb-[1.6vw] font-["Founder-Xc"] text-[9vw] '>
                  {items}</h1>
                </div>
            </div>
            );
            })}
 
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-24 flex justify-between px-20 py-5' >
          {["For public and private companies", "From the first pitch to IPO"].map((items,index)=>( 
            <p className='text-base font-light tracking-tight leading-none'>{items}</p> ))}
            <div className='start flex gap-2 items-center ' >
              <div className='px-5 py-2 border-2 rounded-full border-zinc-500 tracking-tight leading-none font-light text-base uppercase' >Start The project</div>
              <div className='h-9 w-9 rounded-full border-2 border-zinc-500 flex items-center justify-center text-xl'> <GoArrowUpRight/></div>
            </div>
         </div>
    </div>
  )
}

export default LandingPage