import { motion, useAnimation } from 'framer-motion'
import React from 'react'

const Featured = () => {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    const handleHover = (index) =>{
        cards[index].start({y: "0"})
    }
    const handleHoverEnd = (index) =>{
        cards[index].start({y: "100%"})
    }
  return (
    <div className='w-full py-20'>
        <div className='w-full'>
            <h1 className='text-6xl px-10 mb-10 font-[About]'> Featured projects</h1>
        </div>
        <div className=' h-full w-full border-t-[1px] border-zinc-300 mb-11 '>
            <div className=' w-full h-full flex py-10 gap-5 mr-10 ml-10'>
                <motion.div onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHoverEnd(0)}
                 className=' w-[95vh] relative'>
                    <div className='flex gap-2 '>
                    <div className='h-2 w-2 mt-2 rounded-full bg-white '></div>
                    <h6 className='font-[About]'>FYDE</h6> 
                    </div>
                    <div>
                    <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 z-[9] top-1/2 -translate-y-1/2 font-[Founder-Reg] text-[#CDEA68] text-8xl tracking-tighter leading-none'> 
                    {"FYDE".split("").map((items,index) =>( 
                        <motion.span key={index} initial={{y:"100%"}} 
                        animate={cards[0]} 
                        transition={{ease:[0.22, 1, 0.36, 1], delay:index*.05}} className='inline-block'>{items}</motion.span>
                    ))}</h1></div>
                   
                    <img className=' rounded-lg mt-3 mb-5 overflow-hidden ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    <div className=' flex gap-2 font-[About]'>
                        <a className=' border p-1 border-gray-300 text-center rounded-3xl py-1 px-3 text-md ' href="#">AUDIT</a>
                        <a className=' border p-1 border-gray-300 text-center rounded-3xl py-1 px-3 text-md' href="#">COPYWRITING</a>
                        <a className=' border p-1 border-gray-300 text-center rounded-3xl py-1 px-3 text-md' href="#">SALES DECK</a>
                        <a className=' border p-1 border-gray-300 text-center rounded-3xl py-1 px-3 text-md' href="#">SLIDES DESIGN</a>
                    </div>
                </motion.div>

                <motion.div onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleHoverEnd(1)}
                    className='w-[95vh] relative'><div className='flex gap-2'>
                    <div className='h-2 w-2 mt-2 rounded-full bg-white'></div>
                    <h6 className='font-[About]'>VISE</h6> 
                    <h1 className='absolute right-full flex overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 font-[Founder-Reg] text-[#CDEA68] text-8xl tracking-tighter leading-none'>
                    {"VISE".split("").map((items,index) =>( 
                        <motion.span key={index} initial={{y:"100%"}} 
                        animate={cards[1]} 
                        transition={{ease:[0.22, 1, 0.36, 1], delay:index*.05}} className='inline-block'>{items}</motion.span>
                    ))}</h1>
                    </div>
                    <img className=' rounded-lg mt-3 mb-5 overflow-hidden' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    <div className=' flex gap-2 font-[About]'>
                        <a className=' border p-1 border-gray-300 text-center rounded-3xl py-1 px-3 text-md ' href="#">AGENCY</a>
                        <a className=' border p-1 border-gray-300 text-center rounded-3xl py-1 px-3 text-md' href="#">COMPANY PRESENTATION</a></div>
                </motion.div>
             </div>
             <div className=' w-full h-full flex py-10 gap-5 mr-10 ml-10'>
             <motion.div onMouseEnter={() => handleHover(2)} onMouseLeave={() => handleHoverEnd(2)}
                 className=' w-[95vh] relative'>
                    <div className='flex gap-2 '>
                    <div className='h-2 w-2 mt-2 rounded-full bg-white '></div>
                    <h6 className='font-[About]'>TRAWA</h6> 
                    </div>
                    <div>
                    <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 z-[9] top-1/2 -translate-y-1/2 font-[Founder-Reg] text-[#CDEA68] text-8xl tracking-tighter leading-none'> 
                    {"TRAWA".split("").map((items,index) =>( 
                        <motion.span key={index} initial={{y:"100%"}} 
                        animate={cards[2]} 
                        transition={{ease:[0.22, 1, 0.36, 1], delay:index*.05}} className='inline-block'>{items}</motion.span>
                    ))}</h1></div>
                   
                    <img className=' rounded-lg mt-3 mb-5 overflow-hidden ' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
                    <div className=' flex gap-2 font-[About]'>
                        <a className=' border p-1 border-gray-300 text-center rounded-3xl py-1 px-3 text-md ' href="#">BRAND IDENTITY</a>
                        <a className=' border p-1 border-gray-300 text-center rounded-3xl py-1 px-3 text-md' href="#">DESIGN RESEARCH</a>
                        <a className=' border p-1 border-gray-300 text-center rounded-3xl py-1 px-3 text-md' href="#">INVESTOR DECK</a>
                    </div>
                </motion.div>

                <motion.div onMouseEnter={() => handleHover(3)} onMouseLeave={() => handleHoverEnd(3)}
                    className='w-[95vh] relative'><div className='flex gap-2'>
                    <div className='h-2 w-2 mt-2 rounded-full bg-white'></div>
                    <h6 className='font-[About]'>PREMIUM_BLEND</h6> 
                    <h1 className='absolute right-full flex overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 font-[Founder-Reg] text-[#CDEA68] text-8xl tracking-tighter leading-none'>
                    {"PREMIUM_BLEND".split("").map((items,index) =>( 
                        <motion.span key={index} initial={{y:"100%"}} 
                        animate={cards[3]} 
                        transition={{ease:[0.22, 1, 0.36, 1], delay:index*.05}} className='inline-block'>{items}</motion.span>
                    ))}</h1>
                    </div>
                    <img className=' rounded-lg mt-3 mb-5 overflow-hidden' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="" />
                    <div className=' flex gap-2 font-[About]'>
                        <a className=' border p-1 border-gray-300 text-center rounded-3xl py-1 px-3 text-md ' href="#">BRAND TEMPLATE</a></div>
                </motion.div>
             </div> 
        </div>
    </div>
  )
}

export default Featured