import React from 'react'
import RetreatsCards from './RetreatsCards'

const FeaturedRetreats = () => {
    return (
        <div className="featured-retreats-section bg-[#091B20]  py-10 w-full">
            <div className="featured-retreats-content flex lg:flex-row flex-col text-white px-5 w-full lg:gap-0 gap-5  lg:items-center">
                <div className="featured-retreats-large-text  w-1/2">
                    <h2 className="text-5xl font-semibold m-0">Featured Retreats</h2>
                </div>
                <div className="featured-retreats-small-text  lg:w-[55%]">
                    <p className="m-0 lg:text-xs lg:w-xs text-lg  text-white/50">
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
