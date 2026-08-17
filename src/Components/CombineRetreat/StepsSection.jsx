import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const StepsSection = () => {
    useGSAP(() => {
        const CRtlCard = gsap.timeline({
            scrollTrigger: {
                trigger: '.stepsSection',
                markers: false,
            }
        })
        CRtlCard
        .from('.Cr-Paragraph p', {
            y: 40,
            filter: 'blur(10px)',
            opacity: 0,
            ease: 'power1.in',
            stagger: 0.25
        },'start')
         .from('.CrCards', {
            x: -40,
            filter: 'blur(10px)',
            opacity: 0,
            ease: 'power1.in',
            stagger: 0.25
        },'start')
        .from('.CrCardHeading h2,.CrCardHeading div,.CrCardText h1', {
            y:10,
            filter: 'blur(10px)',
            opacity: 0,
            ease: 'power1.in',
            stagger: 0.15
        },'start')
    })
    const stepsData = [
        {
            number: '01',
            title: <>Choose <br /> Retreat</>
        },
        {
            number: '02',
            title: <>Match Boutique <br /> Stay</>
        },
        {
            number: '03',
            title: <>Add Transfers & <br /> Extras</>
        },
        {
            number: '04',
            title: <>Secure <br /> Payment</>
        }
    ];
    return (
        <div className='stepsSection flex lg:flex-row flex-col backdrop-blur-sm mt-6 '>
            <div className='flex-1 p-6 border Cr-Paragraph border-l-0 border-white/20 py-5 text-sm '>
                <p className=' text-white tracking-wider text-base  font-medium '>
                    Combine Retreat into one seamless
                    checkout. Instant confirmations where
                    available, or concierge support for
                    bespoke itineraries.
                </p>
            </div>
            <div className='grid lg:grid-cols-4  grid-cols-2 flex-2 '>
                {
                    stepsData.map((Data,idx) => {
                        return (
                            <div key={idx} className='flex-1 p-6 flex flex-col CrCards justify-between lg:h-60 h-52 border border-l-0 text-white border-white/20 '>
                                <div className='CrCardHeading'>
                                    <h2 className='lg:text-4xl text-7xl font-semibold'>{Data.number}</h2>
                                    <div className='text-xs text-white/60'>Steps</div>
                                </div>
                                <div className='CrCardText'>
                                    <h1 className='font-semibold'>{Data.title}</h1>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default StepsSection
