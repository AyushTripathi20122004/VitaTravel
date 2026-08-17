import React from 'react'
import { Plus, PlusIcon } from 'lucide-react'
import StepsSection from './StepsSection'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const CombineRetreat = () => {
    useGSAP(() => {
        const CRtl = gsap.timeline({
            scrollTrigger: {
                trigger: '.Combine-Retreat-Section',
                markers: false,
            }
        })
        CRtl.from('.CrHeroText h1,.CrHeroText div', {
            y: 40,
            filter: 'blur(10px)',
            opacity: 0,
            ease: 'power1.in',
            stagger: 0.25
        })
    })


    return (
        <div className='flex relative Combine-Retreat-Section  lg:h-full h-screen w-full flex-col justify-between'>
            {/* text */}
            <div className='absolute    top-0 h-full flex justify-between flex-col'>
                <div className='py-16 text-white CrHeroText px-5'>
                    <h1 className='font-semibold text-5xl mb-10 '>Combine Retreat</h1>
                    <div className='flex items-center gap-1 lg:text-4xl text-4xl font-semibold'>
                        <PlusIcon strokeWidth={4} size={30} className='text-white/50' /> Stay
                    </div>
                    <div className='flex items-center gap-1 lg:text-4xl text-4xl font-semibold'>
                        <PlusIcon strokeWidth={4} size={30} className='text-white/50' /> Transfers
                    </div>
                    <div className='flex items-center gap-1 lg:text-4xl text-4xl font-semibold'>
                        <PlusIcon strokeWidth={4} size={30} className='text-white/50' /> Extras
                    </div>
                </div>

                <StepsSection />

            </div>

            <div className='h-full w-full '>
                <img src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b1f5e0aeba6bb251058df_illustration.webp" alt="" srcset="" className='h-full w-full object-cover' />
            </div>
        </div>
    )
}

export default CombineRetreat
