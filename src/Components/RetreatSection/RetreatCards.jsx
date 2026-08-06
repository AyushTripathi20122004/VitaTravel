import React from 'react'

const RetreatCards = () => {
    const CardData = [
        {
            heading: 'Introvert Retreats',
            Branches: '/ 78+ Countries',
            Imagelink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6971da641fb15bbf6432e993_statistic-1.webp'
        },
        {
            heading: 'Yoga Retreats',
            Branches: '/ 89+ Countries',
            Imagelink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6971da644ade29a121769faf_statistic-2.webp'
        },
        {
            heading: 'Detox',
            Branches: '/ 56+ Countries',
            Imagelink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6971da64c60674c148d40058_statistic-3.webp'
        }
    ]
    return (
        <div className='flex lg:w-auto w-screen   overflow-x-auto'>
            {CardData.map((card, index) => (
                <div key={index} className={ `  lg:mb-0 mb-5 lg:w-auto w-[100vh] p-8 border-[0.1px] border-white/10 ${index==CardData.length-1 ? 'border-r-0':''} ${index==1 ? 'border-r-0 border-l-0':''} ${index==0 ? 'border-l-0':''}`}>
                    <div className={`flex justify-between font-semibold text-sm text-white py-2 `}>
                        <h3>{card.heading}</h3>
                        <p className='text-white/50'>{card.Branches}</p>
                    </div>
                    <div className='lg:w-auto w-[35vh] overflow-hidden'>
                        <img src={card.Imagelink} alt={card.heading} className='h-full w-full object-cover' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RetreatCards
