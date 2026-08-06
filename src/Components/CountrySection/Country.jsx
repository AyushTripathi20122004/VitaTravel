import React from 'react'

const Country = () => {
    return (
        <div className='relative'>
            <div className='absolute h-full top-0 w-full'>
                <div className="flex  z-10 py-16 gap-40 px-5  w-full ">
                    {/* logo of retreat */}
                    <div className=' items-center h-fit border-white/40 flex justify-start px-4 gap-2 hover:text-orange-500 '>
                        <svg class="Retreat-logo__icon " width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 17.205L13.6095 13.6996C12.4133 12.9782 11.6823 11.6852 11.6823 10.2906L11.6823 9.70778C11.6823 8.31409 12.4124 7.02172 13.6074 6.30002C15.3397 5.25382 20 2.82159 20 2.82159L20 7.68382L16.3212 9.34147C16.0543 9.46172 15.8827 9.72688 15.8827 10.0191C15.8828 10.3084 16.051 10.5714 16.314 10.6933L20 12.4016L20 17.205Z" fill="white"></path>
                            <path d="M6.2872e-07 17.205L6.39049 13.6996C7.5867 12.9782 8.31769 11.6852 8.31769 10.2906L8.31769 9.70778C8.31769 8.31409 7.5876 7.02172 6.3926 6.30002C4.66027 5.25382 0 2.82159 0 2.82159L2.12535e-07 7.68382L3.67879 9.34147C3.94569 9.46172 4.11726 9.72688 4.11726 10.0191C4.11724 10.3084 3.94899 10.5714 3.68602 10.6933L4.18757e-07 12.4016L6.2872e-07 17.205Z" fill="white"></path>
                            <path d="M17.1936 0L13.6802 6.37594C12.9571 7.56942 11.6612 8.29875 10.2634 8.29876H9.67924C8.28237 8.29875 6.98705 7.57032 6.26371 6.37805C5.21512 4.64966 2.77734 0 2.77734 0H7.65067L9.31209 3.67042C9.43262 3.9367 9.69839 4.10788 9.99123 4.10788C10.2812 4.10787 10.5448 3.94 10.667 3.67763L12.3792 0H17.1936Z" fill="white"></path>
                            <path d="M2.75172 20L6.26513 13.6241C6.98819 12.4306 8.28413 11.7012 9.68189 11.7012L10.2661 11.7012C11.6629 11.7012 12.9583 12.4297 13.6816 13.622C14.7302 15.3503 17.168 20 17.168 20L12.2946 20L10.6332 16.3296C10.5127 16.0633 10.2469 15.8921 9.95408 15.8921C9.66412 15.8921 9.4005 16.06 9.27835 16.3224L7.56607 20L2.75172 20Z" fill="white"></path>
                        </svg>
                        <h1 className='text-nowrap text-white text-xs font-semibold'>Country</h1>
                    </div>
                    <div className="paragraph-field ">
                        <h1 className='text-5xl mb-10 text-white font-semibold'>Explore by Destination</h1>
                        <p className='text-white leading-tight  text-lg font-medium w-2xl'>
                            Discover your next adventure! <br />
                            Choose from stunning destinations across Europe with 289 <br />
                            options, vibrant Asia with 90 experiences, and the diverse USA <br />
                            featuring 180 unique locations.
                        </p>
                    </div>
                </div>
                {/* blinking locators */}
                <div className='relative bottom-0 h-1/2 w-full '>
                    <div className='h-2 w-2 absolute top-38 left-15  rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>

                    <div className='h-2 w-2 absolute top-40 left-[38.9%]  rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse duration-75'>    
                    </div>

                    <div className='h-1 w-1 absolute top-44  left-[42.2%]   rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>

                    <div className='h-1 w-1 absolute top-53 left-[41%]   rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>
                    <div className='h-2 w-2 absolute top-69 left-[38%]   rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>
                     <div className='h-1 w-1 absolute top-88 left-[37.5%]   rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>
                    <div className='h-2 w-2 absolute top-48 left-[47.5%]   rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>
                    <div className='h-1 w-1 absolute top-59 left-[45.5%]   rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>

                    <div className='h-2 w-2 absolute top-62 left-[49%]   rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>

                     <div className='h-1 w-1 absolute top-58 left-[52%]   rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>

                    <div className='h-1 w-1 absolute top-49 left-[55%]   rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>

                     <div className='h-1 w-1 absolute top-67 left-[53%]   rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>

                    <div className='h-1 w-1 absolute top-74 left-[51%]   rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>

                    <div className='h-2 w-2 absolute top-78 left-[90%]   rounded-full bg-amber-500 shadow-[0_0_10px_#fb9826,0_0_20px_#fb9826] animate-pulse'>    
                    </div>

                </div>
            </div>
            <div>
                <img src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b4b8b3132f745287378ec_bg-illustration.png" alt="" srcset="" />
            </div>
        </div>
    )
}

export default Country
