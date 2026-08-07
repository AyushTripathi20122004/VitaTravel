import React, { useEffect } from 'react'
import gsap from 'gsap'

const Intro = () => {
  const IntroTl=gsap.timeline();


  useEffect(()=>{
    IntroTl.from('.Intro-Heading, .Intro-Paragraph, .Intro-btn ',{
      y:40,
      filter:'blur(10px)',
      opacity:0,
      stagger:0.2
    })
  })



  return (
    <div className='relative w-full  lg:h-[119vh] h-[100vh] lg:overflow-none overflow-hidden   leading-[1]'>

      <div className='lg:h-auto h-full'>
        <img className='object-cover h-full scale-[100.99%] w-full' src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69b131f7e83fd36f79be5b78_bg-part-1.webp" alt="Intro Image" />
      </div>

      <div className='absolute lg:h-auto h-full  z-1  top-[10%] lg:top-[28%]'>
        <img className='w-full h-full object-cover    scale-[101%]' src='https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69b131f75b251dd705fc8bb9_bg-part-2.webp' alt="Intro Image" />
      </div>
      {/* Heading Behind Image */}
      <h1 className="absolute tracking-tighter Intro-Heading top-[40%] lg:top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 text-[10rem] font-[600] text-white">
        Travel
      </h1>

      {/* Content Above Image */}
      <div className="absolute lg:top-[60%] Intro-Paragraph top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30  flex flex-col justify-between items-center">
        <div className="text-white lg:w-sm w-screen    text-center tracking-wider text-xl leading-tight  font-bold">
          With purpose. Book retreats, active 
          tours, and boutique stays  in one place.
        </div>
        <div className='Intro-btn'>
          <button className='flex z-1 items-center  gap-3 rounded-full hover:bg-[#fb9826] hover:text-white transition-all duration-300 bg-white px-10 mt-8 py-3 text-xs font-semibold text-black  shadow-lg  '>
          <span>Explore Retreats</span>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C8 0 7.32057 2.41553 7.32057 4C7.32057 5.58447 8 8 8 8C8 8 5.58447 7.32057 4 7.32057C2.41553 7.32057 0 8 0 8C0 8 0.679427 5.58447 0.679427 4C0.679427 2.41553 0 0 0 0C0 0 2.41553 0.679426 4 0.679426C5.58447 0.679426 8 0 8 0Z" fill="CurrentColor"></path>
          </svg>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Intro
