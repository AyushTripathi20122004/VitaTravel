import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const Navbar = () => {
    // animation for menu
    const tl = useRef();
    const [OpenMenu, SetOpenMenu] = useState('hidden')
    const [Menu, SetMenu] = useState(0)
    const menuBar1 = useRef(null);
    const menuBar2 = useRef(null);
    const MenuPage = useRef(null);
    useEffect(() => {
        tl.current = gsap.timeline({ paused: true ,duration:0.25})
        tl.current
            .to(menuBar2.current, {
                width: '100%',
                rotateZ: '-45deg',
                y: -6,
                x: 1,
                duration: 0.25
            }, 'start')
            .to(menuBar1.current, {
                width: '100%',
                rotateZ: '45deg',
                y: 5,
                x: 2,
                duration: 0.25
            }, 'start')
            .to('.Navbar',{
                backgroundColor:'#091B20',
                duration:0.1,
            },'start')
            // Menu animation
            .fromTo(MenuPage.current,
                {
                    y: '-100%',
                    opacity: 0,
                    filter: 'blur(20px)'
                },
                {
                    y: '0%',
                    opacity: 1,
                    filter: 'blur(0px)',
                    duration: 0.4,
                    ease: 'power2.out'
                },
                'start'
            )
    }, [])

    useEffect(() => {
        if (Menu == 1) {
            tl.current.play();
            SetOpenMenu('flex')
        } else {
            tl.current.reverse();
            SetOpenMenu('hidden')

        }
    }, [Menu]);

    // Animation for Navbar
    
    const NavTl=gsap.timeline()
    useEffect(()=>{
        NavTl
        .from('.Logo, .NavLink a, .Btn1, .Btn2',{
            y:-20,
            stagger:0.2,
            opacity:0,
            filter:'blur(10px)'
        })
    },[])



    return (
        <div className={`Navbar flex fixed z-999 backdrop-blur-sm border-b-[0.1px] border-white/20 lg:w-full w-screen  justify-between top-0`}>
            <div className='order-1 Logo group border-[0.1px]  border-l-0 border-r-0 p-3 border-white/20 flex items-center px-4 gap-2 '>
                <svg class="header-logo-img text-white group-hover:text-orange-500  transition-colors duration-300" width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 17.205L13.6095 13.6996C12.4133 12.9782 11.6823 11.6852 11.6823 10.2906L11.6823 9.70778C11.6823 8.31409 12.4124 7.02172 13.6074 6.30002C15.3397 5.25382 20 2.82159 20 2.82159L20 7.68382L16.3212 9.34147C16.0543 9.46172 15.8827 9.72688 15.8827 10.0191C15.8828 10.3084 16.051 10.5714 16.314 10.6933L20 12.4016L20 17.205Z" fill="currentColor"></path>
                    <path d="M6.2872e-07 17.205L6.39049 13.6996C7.5867 12.9782 8.31769 11.6852 8.31769 10.2906L8.31769 9.70778C8.31769 8.31409 7.5876 7.02172 6.3926 6.30002C4.66027 5.25382 0 2.82159 0 2.82159L2.12535e-07 7.68382L3.67879 9.34147C3.94569 9.46172 4.11726 9.72688 4.11726 10.0191C4.11724 10.3084 3.94899 10.5714 3.68602 10.6933L4.18757e-07 12.4016L6.2872e-07 17.205Z" fill="currentColor"></path>
                    <path d="M17.1936 0L13.6802 6.37594C12.9571 7.56942 11.6612 8.29875 10.2634 8.29876H9.67924C8.28237 8.29875 6.98705 7.57032 6.26371 6.37805C5.21512 4.64966 2.77734 0 2.77734 0H7.65067L9.31209 3.67042C9.43262 3.9367 9.69839 4.10788 9.99123 4.10788C10.2812 4.10787 10.5448 3.94 10.667 3.67763L12.3792 0H17.1936Z" fill="currentColor"></path>
                    <path d="M2.75172 20L6.26513 13.6241C6.98819 12.4306 8.28413 11.7012 9.68189 11.7012L10.2661 11.7012C11.6629 11.7012 12.9583 12.4297 13.6816 13.622C14.7302 15.3503 17.168 20 17.168 20L12.2946 20L10.6332 16.3296C10.5127 16.0633 10.2469 15.8921 9.95408 15.8921C9.66412 15.8921 9.4005 16.06 9.27835 16.3224L7.56607 20L2.75172 20Z" fill="currentColor"></path>
                </svg>
                <h1 className='text-white  tracking-tight group-hover:text-orange-500 transition-colors duration-300    text-nowrap  text-[18px] font-semibold'>Vita Travels</h1>
            </div>

            <div className=' NavLink order-2 p-3 hidden justify-end lg:flex md:flex items-center text-xs font-semibold tracking-tight  w-full border-[0.1px] border-white/20   text-white'>
                <div className='flex gap-4  px-4 '>
                    <a href='#home' className='hover:text-orange-500'>Retreats</a>
                    <a href='#services' className='hover:text-orange-500'>Coaches</a>
                    <a href='#contact' className='hover:text-orange-500'>Contact</a>
                </div>
            </div>

            <div className='Btn1 order-3 p-3 lg:flex md:flex border-[0.1px] border-l-0 font-semibold border-r-0 border-white/20 hidden items-center justify-center  text-xs'>
                <button className='rounded  px-5 py-2 text-white text-nowrap hover:text-orange-500'>Explore</button>
            </div>


            {/* menu for  small devices */}
            <div onClick={() => {
                 SetMenu(prev => prev === 0 ? 1 : 0)
            }}
                className='order-3 btn-2  p-3 lg:hidden md:hidden flex border-[0.1px] border-l-0 font-semibold border-r-0 border-white/20  items-center justify-center  text-xs'>

                <button className='flex flex-col items-end justify-center w-8 gap-2'>
                    <div ref={menuBar1} className='h-0 menuBar1 w-full border-[1.5px] bg-white border-white'></div>
                    <div ref={menuBar2} className='h-0 menuBar2 w-1/2  border-[1.5px] bg-white border-white'></div>
                </button>
            </div>
            {/* menu */}
            <div ref={MenuPage} className={`h-[100vh] py-20 z-1 px-5 lg:hidden md:hidden ${OpenMenu} justify-between flex-col  absolute top-13 bg-[#091B20] w-screen overflow-hidden`}>
                <div className='flex flex-col font-medium text-white gap-5'>
                    <div className='flex items-center text-7xl'>
                        <Plus size={60} />
                        <span>Retreats</span>
                    </div>
                    <div className='flex items-center text-7xl'>
                        <Plus size={60} />
                        <span>Coaches</span>
                    </div>
                    <div className='flex items-center text-7xl'>
                        <Plus size={60} />
                        <span>Contacts</span>
                    </div>
                </div>
                <div className='w-full'>
                    <button className='flex w-full z-1 justify-center items-center gap-3 rounded-full hover:bg-[#fb9826] hover:text-white transition-all duration-300 bg-white px-10 mt-8 py-6 text-sm font-semibold text-black  shadow-lg  '>
                        <span>Explore Retreats</span>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C8 0 7.32057 2.41553 7.32057 4C7.32057 5.58447 8 8 8 8C8 8 5.58447 7.32057 4 7.32057C2.41553 7.32057 0 8 0 8C0 8 0.679427 5.58447 0.679427 4C0.679427 2.41553 0 0 0 0C0 0 2.41553 0.679426 4 0.679426C5.58447 0.679426 8 0 8 0Z" fill="CurrentColor"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
