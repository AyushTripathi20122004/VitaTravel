import { Calendar, MapPin, Users } from 'lucide-react';
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const RetreatsCards = () => {

    const retreatsData = [
        {
            heading: <>7 Day Mystic Mountain <br /> Retreat <br /> in Romania</>,
            Pricing: `$1,000`,
            location: 'Gura Humorului, Romania',
            date: 'Feb 15 - 21, 2026 ',
            days: '(7 days, 6 nights)',
            NoOfGuests: '12 guests',
            TrustedBy: 'Trusted by 190+ ',
            PageLink: '',
            Imagelink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b0f75d450e622eb69bbb9_1.webp',
        },
        {
            heading: `Yoga & Outdoor Retreat in Tuscany, Italy`,
            Pricing: `$1,328`,
            location: 'Province of Grosseto, Tuscany, Italy',
            date: 'Jan 15 - 21, 2026',
            days: '(7 days, 6 nights)',
            NoOfGuests: '6 guests',
            TrustedBy: 'Trusted by 125+',
            PageLink: '',
            Imagelink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b0f759c0200e2421e8d01_2.webp',
        },
        {
            heading: `Photography Retreat & Tour in Magical Morocco`,
            Pricing: `$5,575`,
            location: 'Morocco',
            date: 'March 06 - 20, 2026',
            days: '(15 days, 14 nights)',
            NoOfGuests: '18 guests',
            TrustedBy: 'Trusted by 312+ ',
            PageLink: '',
            Imagelink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b0f75e8fb56ed1c7f7c90_3.webp',
        },
        {
            heading: `Morocco Holiday & Desert Moon`,
            Pricing: `$3,829`,
            location: 'Marrakesh, Marrakesh-Safi, Morocco',
            date: 'April 12 - 20, 2026 ',
            days: ' (8 days, 7 nights)',
            NoOfGuests: '6 guests',
            TrustedBy: 'Trusted by 412+ ',
            PageLink: '',
            Imagelink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b0f75cd93fd313dfcc0bd_4.webp',
        },
        {
            heading: `8 Day Juice Detox, Retreat in Portugal`,
            Pricing: `$1,294`,
            location: 'Portugal',
            date: 'Feb 06 - 14, 2026',
            days: '(8 days, 7 nights)',
            NoOfGuests: '12 guests',
            TrustedBy: 'Trusted by 112+',
            PageLink: '',
            Imagelink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b162748ae928115f5f8ee_5.webp',
        },
        {
            heading: `7 Day Solo Travelers Retreat: Fun in Bali`,
            Pricing: `$406`,
            location: 'Ubud, Bali, Indonesia',
            date: 'Jan | Feb | Mar | Apr | May',
            days: '(7 days, 6 nights)',
            NoOfGuests: 'Solo',
            TrustedBy: 'Trusted by 287+',
            PageLink: '',
            Imagelink: 'https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b16276a09f35cfb31e223_6.webp',
        }
    ];


    useGSAP(() => {
        const Cards = gsap.utils.toArray('.fr-card');

        Cards.forEach((Card) => {

            const FRCtl = gsap.timeline({
                scrollTrigger: {
                    trigger: Card,
                    markers: false
                }
            });

            FRCtl
                .from(Card.querySelectorAll(
                    '.r-heading, .r-pricing, .r-location, .r-date, .r-no-of-Guest, .r-TruestedBy'
                ), {
                    y: 20,
                    filter: 'blur(20px)',
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.5
                },'start')
                .from(Card.querySelector(
                    '.r-exploreBtn'
                ), {
                    filter: 'blur(20px)',
                    opacity: 0,
                    scale:0,
                },'>')
                .from(Card.querySelector('.r-image'), {
                    x: -20,
                    filter: 'blur(20px)',
                    opacity: 0,
                    duration: 0.5
                }, 'start');
        });
    }, []);

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 items-center mt-14 justify-center '>
            {
                retreatsData.map((card, index) => {
                    return (
                        <div key={index} className={`justify-center fr-card p-8 h-full w-full border-[0.01px]  flex lg:flex-row flex-col ${index % 2 === 0 ? 'lg:border-l-0 md:border-l-0 border-white/20 lg:border-r-0 md:border-r-0' : 'lg:border-r-0 md:border-r-0 border-white/20'}`}>
                            <div className=' lg:w-1/2 lg:order-0 order-3  flex flex-col justify-between gap-10  text-white'>
                                {/* header */}
                                <div>
                                    {/* heading */}
                                    <div><h1 className='text-xl r-heading font-semibold text-wrap leading-[1] mb-2'>{card.heading}</h1></div>
                                    {/* pricing */}
                                    <div className=' text-sm font-semibold r-pricing flex gap-1 items-center'>
                                        <span className='text-white/40 text-xs font-normal '>from</span>{card.Pricing}
                                    </div>
                                </div>
                                {/* information */}
                                <div className='flex flex-col gap-1 '>
                                    {/* location */}
                                    <div className='flex r-location items-center lg:text-[10px] text-sm justify-between'>
                                        <span>{card.location}</span>
                                        <MapPin size={12} className="text-white/40" />
                                    </div>
                                    {/* date and days */}
                                    <div className='flex r-date items-center lg:text-[10px] text-sm justify-between'>
                                        <div>{card.date} <span className='text-white/40'>{card.days}</span></div>
                                        <Calendar size={12} className="text-white/40" />
                                    </div>
                                    <div className='flex r-no-of-Guest items-center lg:text-[10px] text-sm justify-between'>
                                        <span>{card.NoOfGuests}</span>
                                        <Users size={12} className="text-white/40" />
                                    </div>
                                    <div className='flex items-center r-TruestedBy lg:text-[10px] text-sm justify-between'>
                                        <div>{card.TrustedBy} <span className='text-white/40'>clients worldwide</span></div>
                                        <div><img src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b13a6c05aa0554867732d_stars.svg" alt="StarsImage" /></div>
                                    </div>

                                    {/* button */}
                                    <div className='mt-2  r-exploreBtn'>
                                        <button className=' flex items-center justify-between lg:text-xs bg-[#0d2e37] border-white/40 lg:py-2 py-3 lg:hover:bg-[#FB9826] active:bg-[#fb9826] transition-all duration-300 px-5 font-medium lg:rounded-2xl rounded-3xl  w-full'>
                                            Explore Retreat
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0C8 0 7.32057 2.41553 7.32057 4C7.32057 5.58447 8 8 8 8C8 8 5.58447 7.32057 4 7.32057C2.41553 7.32057 0 8 0 8C0 8 0.679427 5.58447 0.679427 4C0.679427 2.41553 0 0 0 0C0 0 2.41553 0.679426 4 0.679426C5.58447 0.679426 8 0 8 0Z" fill="white"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className='h-full overflow-hidden  lg:order-0 order-2 lg:mb-0 mb-10 lg:w-1/2 lg:px-4'>
                                <img src={card.Imagelink} className='r-image' alt="" srcset="" />
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default RetreatsCards
