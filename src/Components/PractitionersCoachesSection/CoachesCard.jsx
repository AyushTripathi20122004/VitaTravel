import { Earth, MapPin } from 'lucide-react'
import React from 'react'
import yoga from '../../assets/YOGA.png'

const CoachesCard = () => {
    const CoachCard=[
        {
            CoachName:'Lauren Thompson',
            Field:'Yoga Couch',
            CoachImageLink:'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6cc589808c226f0cd7_ea8e8b2e1274331d29db4f187ea3aebb_1.webp',
            CoachInfo:[
                {
                    Location:'USA',
                    paragraph1:`I work with yoga as a practical tool for improving mobility, balance, and body awareness. My sessions focus on breath, alignment, and calm strength, without pressure or competition. I support people who want to build a steady practice that fits real life and long-term wellbeing.`,
                    paragraph2:`My approach is grounded, structured, and accessible for different experience levels.`,
                    CountryTravaled:'14',
                    retreatAttend:'18'
                }
            ]
        },
        {
            CoachName:'Michael Wilson',
            Field:'Meditation Coach',
            CoachImageLink:'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6ccb670b10285a47bf_12.webp',
            CoachInfo:[
                {
                    Location:'Europe',
                    paragraph1:`I work with meditation as a practical tool for emotional stability, focus, and self-discipline. My approach is structured and accessible, helping people build a consistent practice that fits into real life.`,
                    paragraph2:`I support participants in developing awareness and resilience through techniques that can be applied both during retreats and in everyday situations.`,
                    CountryTravaled:'19',
                    retreatAttend:'56'
                }
            ]
        },
        {
            CoachName:'Sarah Johnson',
            Field:'Nutrition Specialist',
            CoachImageLink:'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6c6400b1ebc3956333_43c66f9116f860d81fe61e822e465e88_10.webp',
            CoachInfo:[
                {
                    Location:'Europe',
                    paragraph1:`I support retreat participants with nutrition that is simple, nourishing, and adapted to real needs. My work focuses on whole foods, energy balance, and practical eating habits that support focus and recovery. I help people understand how nutrition affects their physical and mental state, without strict rules or unnecessary restrictions, and with respect for individual lifestyles.`,
                    paragraph2:``,
                    CountryTravaled:'17',
                    retreatAttend:'89'
                }
            ]
        },
        {
            CoachName:'Isabelle Martin',
            Field:'Stress-Relief Guide',
            CoachImageLink:'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6cb4387b1312d7ae14_9.webp',
            CoachInfo:[
                {
                    Location:'Europe',
                    paragraph1:`I work with stress reduction through structured breathing practices, gentle movement, and nervous system regulation. My sessions focus on restoring balance, improving emotional stability, and reducing physical tension. I support people who experience long-term stress and want practical, repeatable tools they can use in everyday life. My approach is calm, grounded, and focused on sustainable recovery rather than quick fixes.`,
                    paragraph2:``,
                    CountryTravaled:'14',
                    retreatAttend:'18'
                }
            ]
        },

    ]
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 lg:order-1 order-2 md:order-2'>
        {
            CoachCard.map((Card,index)=>{
                return(
                    <div className={`p-7 group transition-all duration-300 border-[0.1px] lg:hover:border-0  md:hover:border-0 active:border-0 relative border-white/20 lg:${index==0 || index==2 ?'border-l-0':''} md: lg:${index==0 || index==2 ?'border-l-0':''}`}>
                        {/* front card */}
                        <div className='relative lg:group-hover:opacity-0 group-active:opacity-0 transition-all duration-300  z-1'>
                            <div><img src={Card.CoachImageLink} alt="" srcset="" /></div>
                            <div className='absolute top-0 inset-0 bg-gradient-to-b from-transparent to-black/40 '></div>
                            <div className='absolute bottom-0 text-white leading-[0.8] px-2 py-4'>
                                <h1 className='text-[14px]'>{Card.CoachName}</h1>
                                <span className='text-[10px]'>{Card.Field}</span>
                            </div>
                        </div>
                        {/* coach information card behind */}
                        <div className='absolute text-white bg-[#0A1E24]  flex-col gap-3 group-active:flex lg:group-hover:flex transition-all duration-300 p-7 hidden top-0 z-[0] inset-0 justify-between'>
                            <span className='flex items-center gap-1 '>{Card.CoachInfo[0].Location} <MapPin className='text-white/40' size={10} /></span>
                            <div className='leading-[0.8]'>
                                <h1 className='text-sm'>{Card.CoachName}</h1>
                                <span className='text-xs'>{Card.Field}</span>
                            </div>
                            <div className='text-[11px] text-white/40 flex flex-col gap-2'>
                                <p>{Card.CoachInfo[0].paragraph1 || ''}</p>
                                <p>{Card.CoachInfo[0].paragraph2 || ''}</p>
                            </div>

                            <div className='text-xs'>
                                <div className='flex justify-between'>
                                    <span className='text-xs'>Countries travelled:</span>
                                    <span className='flex items-center gap-1'>{Card.CoachInfo[0].CountryTravaled} <img src='https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897a49b1a14c60272a1674_earth.svg' className='h-3' alt="" srcset="" /></span>
                                </div>
                                <div className='flex justify-between '>
                                    <span className='text-xs'>Retreats attended:</span>
                                    <span className='flex items-center gap-1'>{Card.CoachInfo[0].retreatAttend}
                                        <img src='https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897a49b9177022708b735a_yoga.svg' className='' alt="" srcset="" />
                                    </span>
                                </div>
                            </div>



                        </div>






                    </div>
                )
            })
        }
      
    </div>
  )
}

export default CoachesCard
