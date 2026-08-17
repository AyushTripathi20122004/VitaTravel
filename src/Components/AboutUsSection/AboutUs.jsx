import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {

    useGSAP(() => {
        const AboutUsTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.AboutUsSection',
                markers: false
            }
        })
        AboutUsTl
            .from('.AboutUs-Logo', {
                y: -20,
                filter: 'blur(10px)',
                opacity: 0
            }, 'start')
            .from('.About-Char', {
                opacity: 0,
                stagger: 0.025,
                ease: 'power1.in'
            }, 'start')
            .from('.AboutUs-Img', {
                x: -80,
                opacity: 0,
                ease: 'power1.in'
            }, 'start')
            .from('.AboutUS-para span', {
                opacity: 0.1,
                stagger:0.005,
                ease: 'power1.in'
            }, 'start')
            .from('.AboutUs-Travel-Country h3,.AboutUs-Travel-Country p', {
                y: 40,
                opacity: 0,
                filter:'blur(10px)',
                stagger: 0.1,
                duration: 0.35,
                ease: 'power1.in'
            }, '>')
            .from('.AboutUs-Attendent h3,.AboutUs-Attendent p', {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                ease: 'power1.in'
            }, '>')
            .from('.AboutUS-hero-Section p,.AboutUS-hero-Section img', {
                y: 40,
                opacity: 0,
                stagger: 0.1,
                ease: 'power1.in'
            }, '>')
    })

    let AboutPara = 'Not just trips experiences that nurture body and soul';
    let AboutUsHeroText=`Vita Travel is a premium wellness travel marketplace that blends the ease of booking with the feel of an editorial magazine. Discover curated programs, match them with  exceptional stays, and book seamlessly. `

    return (
        <div className='bg-[#091B20] AboutUsSection py-20 '>
            <div className="flex lg:flex-row flex-col z-10 py-10 lg:gap-40 gap-10 px-5  w-full ">
                {/* logo of retreat */}
                <div className=' AboutUs-Logo  items-center h-fit border-white/40 flex justify-start px-4 gap-2 hover:text-orange-500 '>
                    <svg class="Retreat-logo__icon" className='fill-white/40' width="15" height="15" viewBox="0 0 20 20" fill='' xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 17.205L13.6095 13.6996C12.4133 12.9782 11.6823 11.6852 11.6823 10.2906L11.6823 9.70778C11.6823 8.31409 12.4124 7.02172 13.6074 6.30002C15.3397 5.25382 20 2.82159 20 2.82159L20 7.68382L16.3212 9.34147C16.0543 9.46172 15.8827 9.72688 15.8827 10.0191C15.8828 10.3084 16.051 10.5714 16.314 10.6933L20 12.4016L20 17.205Z" fill=""></path>
                        <path d="M6.2872e-07 17.205L6.39049 13.6996C7.5867 12.9782 8.31769 11.6852 8.31769 10.2906L8.31769 9.70778C8.31769 8.31409 7.5876 7.02172 6.3926 6.30002C4.66027 5.25382 0 2.82159 0 2.82159L2.12535e-07 7.68382L3.67879 9.34147C3.94569 9.46172 4.11726 9.72688 4.11726 10.0191C4.11724 10.3084 3.94899 10.5714 3.68602 10.6933L4.18757e-07 12.4016L6.2872e-07 17.205Z" fill=""></path>
                        <path d="M17.1936 0L13.6802 6.37594C12.9571 7.56942 11.6612 8.29875 10.2634 8.29876H9.67924C8.28237 8.29875 6.98705 7.57032 6.26371 6.37805C5.21512 4.64966 2.77734 0 2.77734 0H7.65067L9.31209 3.67042C9.43262 3.9367 9.69839 4.10788 9.99123 4.10788C10.2812 4.10787 10.5448 3.94 10.667 3.67763L12.3792 0H17.1936Z" fill=""></path>
                        <path d="M2.75172 20L6.26513 13.6241C6.98819 12.4306 8.28413 11.7012 9.68189 11.7012L10.2661 11.7012C11.6629 11.7012 12.9583 12.4297 13.6816 13.622C14.7302 15.3503 17.168 20 17.168 20L12.2946 20L10.6332 16.3296C10.5127 16.0633 10.2469 15.8921 9.95408 15.8921C9.66412 15.8921 9.4005 16.06 9.27835 16.3224L7.56607 20L2.75172 20Z" fill=""></path>
                    </svg>
                    <h1 className='text-nowrap text-white text-xs font-semibold'>About Us</h1>
                </div>
                <div className="AboutUs-paragraph-field ">
                    <p className='text-white lg:text-5xl text-5xl tracking-wide w-full font-semibold  md:font-semibold lg:w-[67%]'>
                        {[...AboutPara].map((elem, idx) => {
                            return (
                                <span className='inline-block About-Char'>{elem == ' ' ? '\u00A0' : elem}</span>
                            )
                        })
                        }
                    </p>
                </div>
            </div>

            {/* image and text */}
            <div className="flex lg:flex-row flex-col gap-5 px-5  py-10">
                {/* Image Section */}
                <div className=" AboutUs-Img flex-1">
                    <img src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6979a5eeee86150be7247f79_illustration-about.jpg" alt="About Us" className="w-full " />
                </div>

                {/* Text and Divs Section */}
                <div className='flex flex-col justify-between '>
                    <div className=" flex flex-col">
                        <div className="">
                            <p className="text-white AboutUS-para   lg:text-[16px] text-xl tracking-wider   font-medium lg:w-lg">
                                {
                                    [...AboutUsHeroText].map((char,index)=>{
                                        return(
                                            <span>{char==' '?'\u00A0 ':char}</span>
                                        )
                                    })
                                }
                            </p>
                        </div>

                        {/* Two subsections */}
                        <div className="flex   justify-between gap-4 w-full  lg:w-[70%] mt-10">
                            {/* Section 1 */}
                            <div className=" AboutUs-Travel-Country">
                                <h3 className="text-white font-semibold  mb-2 text-4xl">100+</h3>
                                <p className="text-white/70 text-sm">Total countries
                                    travelled</p>
                            </div>

                            {/* Section 2 */}
                            <div className=" AboutUs-Attendent">
                                <h3 className="text-white font-semibold  mb-2 text-4xl">1472+</h3>
                                <p className="text-white/70 text-sm">Total retreats
                                    attended</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex h-full items-end AboutUS-hero-Section lg:mt-0 mt-20'>
                        <p className='text-white/50 text-sm'>
                            Trusted by travelers looking for more than ordinary vacations.
                        </p>
                        <div className='flex gap-5'>
                            <div className='opacity-95'>
                                <img src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6979c88e48ff7d66e04b4f57_logo-1.svg" alt="" srcset="" />
                            </div>
                            <div className='opacity-95'>
                                <img src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6979c88e6cc38feb34058869_logo-2.svg" alt="" srcset="" />
                            </div>
                            <div className='opacity-95'>
                                <img src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6979c88e719c9487a173c80a_logo-3.svg" alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs

