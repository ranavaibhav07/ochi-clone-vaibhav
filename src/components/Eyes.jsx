'use client'
import React, { useState, useEffect } from 'react';
const Eyes = () => {
    const [rotate, setRotate] = useState()

     useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
        let mouseX=e.clientX;
        let mouseY= e.clientY;

        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerWidth/2;

        var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
        setRotate(angle-180);
    })
})

  return (
    <div className='h-screen w-full overflow-hidden'>
        <div className='relative h-full w-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <div className='w-40 h-40 flex items-center justify-center rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full flex items-center justify-center bg-zinc-900 '>
            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 '>
            <div className='w-5 h-5 rounded-full bg-zinc-100'>
            </div>
             </div>
            </div>
             </div>
        <div className='w-40 h-40  rounded-full flex justify-center items-center bg-zinc-100'>
        <div className='relative w-2/3 h-2/3 rounded-full flex items-center justify-center bg-zinc-900 '>
        <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 '>
            <div className='w-5 h-5 rounded-full bg-zinc-100'>
            </div>
             </div>
            </div> 
            </div>
        </div>
        </div>
    </div>
  )
}

export default Eyes