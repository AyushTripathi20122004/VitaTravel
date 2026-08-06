import React from 'react'

const VitaWork = () => {
    const vitaWorkCard = [
        {
            imgLink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b4ca99831f5d3ba3e38ac_icon-1.svg',
            heading: 'Tell us your goals',
            Paragraph: <>Trusted by travelers looking for <br /> more than ordinary vacations.</>
        },
        {
            imgLink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b4caacaa12fec64081c6c_icon-2.svg',
            heading: 'Get curated matches',
            Paragraph: <>We recommend retreats and <br /> stays that fit.</>
        },
        {
            imgLink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b4caae3cc55404d552d02_icon-3.svg',
            heading: 'Customize your package',
            Paragraph: <>Add transfers, spa, and <br /> extras in one checkout.</>
        },
        {
            imgLink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b4caa7fe5ce94a391888e_icon-4.svg',
            heading: 'Travel & track progress',
            Paragraph: <>Use VITA Journal to reflect <br /> and rebook.</>
        }
    ]



    return (
        <div className='bg-[#091B20] py-20 px-5 lg:h-auto h-screen'>
            <div className="vita-work-content flex lg:flex-row flex-col text-white lg:px-5 lg:mt-0 lg:mb-0 mb-4 mt-20 w-full lg:gap-0 gap-2  lg:items-center">
                <div className="featured-retreats-large-text  lg:w-1/2">
                    <h2 className="text-5xl font-semibold tracking-tight m-0">How Vita Works</h2>
                </div>
                <div className="featured-retreats-small-text  lg:w-[55%]">
                    <p className="m-0 lg:text-xs text-white/50 tracking-wider">
                        Browse certified experts with verified<br />
                        credentials and guest testimonials.</p>
                </div>
            </div>
            {/* Cards */}
            <div className="cards-container grid lg:grid-cols-4 lg:gap-6  grid-cols-2  items-center lg:px-5 gap-10  mt-10">
                {
                    vitaWorkCard.map((card, index) => {
                        return (
                            <div className="card flex  lg:h-[14rem] w-[30rem] lg:gap-0 gap-2 p-2 flex-col justify-between ">
                                <div className='flex gap-1'>
                                    <div className='lg:h-12 h-20'>
                                        <img src={card.imgLink} alt="card-image" className="w-full object-center h-full object-cover rounded-lg" />
                                    </div>
                                    <div className='text-white/40 text-xs'>
                                        0{index+1}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="lg:text-sm font-semibold text-white mt-4">{card.heading}</h3>
                                    <p className="text-white/70 lg:text-xs lg:w-auto w-1/3 text-wrap lg:tracking-wider mt-2">{card.Paragraph}</p>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default VitaWork
