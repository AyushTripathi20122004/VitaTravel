import React from 'react'
import RetreatsCards from './RetreatsCards'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const FeaturedRetreats = () => {
    useGSAP(() => {
        const Frtl = gsap.timeline({
            scrollTrigger: {
                trigger: '.featured-retreats-section',
                markers: false,
            }
        })
        Frtl.from('.featured-retreats-content h2,.featured-retreats-content p',{
            y:40,
            opacity:0,
            filter:'blur(10px)',
            ease:'power1.in',
            stagger:0.25
        })
    })


    return (
        <div id='FeaturedRetreats' className="featured-retreats-section bg-[#091B20]  lg:py-10 py-20 md:py-10 w-full">
            <div className="featured-retreats-content flex lg:flex-row flex-col text-white px-5 w-full lg:gap-0 gap-5  lg:items-center">
                <div className="featured-retreats-large-text  w-1/2">
                    <h2 className="text-5xl font-semibold m-0">Featured Retreats</h2>
                </div>
                <div className="featured-retreats-small-text  lg:w-1/2 md:w-[50%] w-full">
                    <p className="m-0 lg:text-xs lg:w-xs text-base  text-white/50">
                        Discover unique locations, engaging activities, and expert-
                        led workshops designed to inspire and refresh your spirit.
                    </p>
                </div>
            </div>
            <RetreatsCards />
        </div>
    )
}

export default FeaturedRetreats
