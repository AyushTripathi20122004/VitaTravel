import React from 'react'
import { Plus, PlusIcon } from 'lucide-react'

const CombineRetreat = () => {
    return (
        <div className='flex relative lg:h-full h-screen w-full flex-col justify-between'>
            {/* text */}
            <div className='absolute    top-0 h-full flex justify-between flex-col'>
                <div className='py-16 text-white px-5'>
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

                <div className='stepsSection flex lg:flex-row flex-col backdrop-blur-sm mt-6 '>
                    <div className='flex-1 p-6 border border-l-0 border-white/20 py-5 text-sm '>
                        <p className=' text-white tracking-wider  font-semibold '>
                            Combine Retreat into one seamless
                            checkout. Instant confirmations where
                            available, or concierge support for
                            bespoke itineraries.
                        </p>
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-2 flex-2 '>

                        <div className='flex-1 p-6 flex flex-col justify-between lg:h-60 h-52 border border-l-0 text-white border-white/20 '>
                            <div className=''>
                                <h2 className='lg:text-4xl text-6xl font-semibold'>01</h2>
                                <div className='text-xs text-white/60'>Steps</div>
                            </div>
                            <div>
                                <h1 className='font-semibold'>Choose <br /> Retreat</h1>
                            </div>
                        </div>
                        <div className='flex-1 p-6 flex flex-col justify-between lg:h-60 h-52 border-l-0 border text-white border-white/20 '>
                            <div className=''>
                                <h2 className='lg:text-4xl text-6xl font-semibold'>02</h2>
                                <div className='text-xs text-white/60'>Steps</div>
                            </div>
                            <div>
                                <h1 className='font-semibold'>Match Boutique <br /> Stay</h1>
                            </div>
                        </div>
                        <div className='flex-1 p-6 flex flex-col justify-between border-l-0 lg:h-60 h-52 border text-white border-white/20 '>
                            <div className=''>
                                <h2 className='lg:text-4xl text-6xl font-semibold'>03</h2>
                                <div className='text-xs text-white/60'>Steps</div>
                            </div>
                            <div>
                                <h1 className='font-semibold'>Add Transfers & <br /> Extras</h1>
                            </div>
                        </div>
                        <div className='flex-1 p-6 flex flex-col border-r-0 border-l-0 justify-between lg:h-60 h-52 border text-white border-white/20 '>
                            <div className=''>
                                <h2 className='lg:text-4xl text-6xl font-semibold'>04</h2>
                                <div className='text-xs text-white/60'>Steps</div>
                            </div>
                            <div>
                                <h1 className='font-semibold'>Secure <br /> Payment</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='h-full w-full '>
                <img src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b1f5e0aeba6bb251058df_illustration.webp" alt="" srcset="" className='h-full w-full object-cover' />
            </div>
        </div>
    )
}

export default CombineRetreat
