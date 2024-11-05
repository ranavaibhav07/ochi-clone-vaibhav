import { motion } from 'framer-motion'
import React from 'react'
const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=' w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-zinc-900'>
        <div className=' text border-t-2 border-b-2 border-zinc-300 flex font-[Founder-Xc] whitespace-nowrap '>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} 
        className=' text-[25vw] -mt-[4.5vw] font-black pr-20 gap-10 tracking-tight leading-none'>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} 
        className='text-[25vw] -mt-[4.5vw] font-black pr-20 gap-10 tracking-tight leading-none'>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} 
        className='text-[25vw -mt-[4.5vw] font-black pr-20 tracking-tight leading-none'>WE ARE OCHI</motion.h1>
        </div>
        
    </div>
  )
}

export default Marquee
