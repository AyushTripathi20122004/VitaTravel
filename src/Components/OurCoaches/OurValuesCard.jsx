import React from 'react'

const OurValuesCard = () => {
    const OurValuesCard = [
        {
            imgLink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6989da3f7e8204dfd1428f2b_icon-5.svg',
            heading: 'Honesty',
            Paragraph: `Having the courage to be transparent in our feelings and what we do`
        },
        {
            imgLink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6989da3f4df05ec43c96a304_icon-6.svg',
            heading: 'Self-responsibility',
            Paragraph: `Taking responsibility for our situation in life and not engaging in the blame game`
        },
        {
            imgLink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6989da3f08bdf9b17548ce65_icon-7.svg',
            heading: 'Kindness',
            Paragraph: `Show compassion, empathy, and patience to enhance comfort and joy in life.`
        },
        {
            imgLink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6989da3f76666dfa1c25e0f8_icon-8.svg',
            heading: 'Dedication',
            Paragraph: `Taking on the challenge of the journey and focus upon the vision we want to manifest`
        },
        {
            imgLink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6989da3fecbf09170d11575e_icon-9.svg',
            heading: 'Service',
            Paragraph: `Placing our gifts and talents at the services of increasing the loving consciousness of the world`
        },
        {
            imgLink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6989da3fe4a0725437ea678b_icon-10.svg',
            heading: 'Beauty',
            Paragraph: `Expressing openly the core essence that inhabits each one of us`
        },
        {
            imgLink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6989da3f9b961b9a3be9a08c_icon-11.svg',
            heading: 'Human Wellbeing',
            Paragraph: `In the end, we are all in the business of human wellbeing`
        },
        {
            imgLink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6989da3f2b49b10e5bd7b4a1_icon-12.svg',
            heading: 'Travel & track progress',
            Paragraph: `Use VITA Journal to reflect and rebook.`
        }
    ]

    return (
        <div className='bg-[#091B20] py-20 px-5 lg:h-auto  mt-20'>
            <div className="vita-work-content flex lg:flex-row flex-col text-white lg:px-5 lg:mt-0 lg:mb-0 mb-4 mt-20 w-full lg:gap-0 gap-2  lg:items-center">
                <div className="featured-retreats-large-text  lg:w-1/2">
                    <h2 className="text-5xl font-semibold tracking-tight m-0">Our values</h2>
                </div>
                <div className="featured-retreats-small-text ">
                    <p className="m-0 lg:text-xs w-sm  text-white/50 tracking-wider">
                        As a company we've been inspired to be a link in the chain of
                        happiness in the world. In order to manifest that inspiration,
                        we strive to embody these
                    </p>
                </div>
            </div>
            {/* Cards */}
            <div className="cards-container grid lg:grid-cols-4 lg:gap-6  grid-cols-2  items-center lg:px-5 gap-10  mt-10">
                {
                    OurValuesCard.map((card, index) => {
                        return (
                            <div className="card flex lg:gap-0 gap-2 p-2 flex-col justify-between ">
                                <div className='flex gap-1'>
                                    <div className='h-8 '>
                                        <img src={card.imgLink} alt="card-image" className="w-full h-full object-cover rounded-lg" />
                                    </div>
                                    <div className='text-white/40 text-[8px]'>
                                        0{index + 1}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="lg:text-sm font-semibold text-white mt-4">{card.heading}</h3>
                                    <p className="text-white/70 lg:text-xs w-40 text-wrap lg:tracking-wider mt-2">{card.Paragraph}</p>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default OurValuesCard
