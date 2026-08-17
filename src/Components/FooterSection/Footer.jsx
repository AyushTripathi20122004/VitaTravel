import React from 'react'
import { Plus } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="footer bg-[#091B20]  w-full pt-20 ">
            <div className="footer-image lg:px-10 lg:h-auto h-[50vh] relative lg:py-10">
                <img src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b6310adee6f369b84c520_illustration.webp" alt="Footer visual" className='h-full w-full lg:object-center object-[-23rem] object-cover' />
                <div className='absolute inset-0 top-0 bg-[#091B20]/40'></div>
            </div>

            <div className="footer-content flex lg:flex-row flex-col justify-between w-[85%] items-start text-white lg:px-10 px-5 py-10 lg:gap-0 gap-10">
                <a href="/#">
                    <div className=' group  flex items-center  gap-2 '>
                    <svg class="Retreat-logo__icon" className='fill-white/40 transition-colors duration-300 group-hover:fill-orange-500' width="15" height="15" viewBox="0 0 20 20" fill='' xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 17.205L13.6095 13.6996C12.4133 12.9782 11.6823 11.6852 11.6823 10.2906L11.6823 9.70778C11.6823 8.31409 12.4124 7.02172 13.6074 6.30002C15.3397 5.25382 20 2.82159 20 2.82159L20 7.68382L16.3212 9.34147C16.0543 9.46172 15.8827 9.72688 15.8827 10.0191C15.8828 10.3084 16.051 10.5714 16.314 10.6933L20 12.4016L20 17.205Z" fill=""></path>
                        <path d="M6.2872e-07 17.205L6.39049 13.6996C7.5867 12.9782 8.31769 11.6852 8.31769 10.2906L8.31769 9.70778C8.31769 8.31409 7.5876 7.02172 6.3926 6.30002C4.66027 5.25382 0 2.82159 0 2.82159L2.12535e-07 7.68382L3.67879 9.34147C3.94569 9.46172 4.11726 9.72688 4.11726 10.0191C4.11724 10.3084 3.94899 10.5714 3.68602 10.6933L4.18757e-07 12.4016L6.2872e-07 17.205Z" fill=""></path>
                        <path d="M17.1936 0L13.6802 6.37594C12.9571 7.56942 11.6612 8.29875 10.2634 8.29876H9.67924C8.28237 8.29875 6.98705 7.57032 6.26371 6.37805C5.21512 4.64966 2.77734 0 2.77734 0H7.65067L9.31209 3.67042C9.43262 3.9367 9.69839 4.10788 9.99123 4.10788C10.2812 4.10787 10.5448 3.94 10.667 3.67763L12.3792 0H17.1936Z" fill=""></path>
                        <path d="M2.75172 20L6.26513 13.6241C6.98819 12.4306 8.28413 11.7012 9.68189 11.7012L10.2661 11.7012C11.6629 11.7012 12.9583 12.4297 13.6816 13.622C14.7302 15.3503 17.168 20 17.168 20L12.2946 20L10.6332 16.3296C10.5127 16.0633 10.2469 15.8921 9.95408 15.8921C9.66412 15.8921 9.4005 16.06 9.27835 16.3224L7.56607 20L2.75172 20Z" fill=""></path>
                    </svg>
                    <h1 className='text-white  tracking-tight group-hover:text-orange-500 transition-colors duration-300    text-nowrap  text-[18px] font-semibold'>Vita Travels</h1>
                </div>
                </a>

                <div className="footer-links flex flex-col">
                    <a href="/#coaches" className='hover:text-orange-500 transition-colors duration-300 flex text-4xl items-center'>
                        <Plus size={46} />Coaches
                    </a>
                    <a href="/#contact" className='flex hover:text-orange-500 transition-colors duration-300 text-4xl items-center'>
                        <Plus size={46} /> Contacts
                    </a>
                </div>

                <div className="footer-contact text-sm flex flex-col gap-1">
                    <p className='hover:text-orange-500 transition-colors duration-300'>+1 012 345 678</p>
                    <a className='hover:text-orange-500 transition-colors duration-300' href='vita-travels@gmail.com' target='_blank' rel="noopener noreferrer">vita-travels@gmail.com</a>
                </div>

            </div>

            <div className="footer-bottom flex lg:flex-row flex-col justify-between mt-5 border-[0.1px] text-white border-white/20 border-l-0 border-b-0 border-r-0  ">
                <div className="footer-copy  text-xs text-white/40 flex flex-1 border-[0.01px] px-10 py-5 border-white/20 border-l-0 border-b-0  ">
                    © 2026 Vita Travel
                    All rights reserved.
                </div>

                <div className="footer-legal flex lg:flex-row flex-col flex-3 text-xs text-white/40 justify-between px-10 py-5">
                    <div className='flex items-center gap-1'>Made by <img className='h-3 w-3' src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69d918ebba9db173b795b62f_logo.svg" alt="" />Phenomenon Studio</div>
                    <div className="footer-legal-links flex gap-5 lg:mt-0 mt-10">
                        <span className='hover:text-orange-500 transition-colors duration-300'>Terms and Conditions</span>
                        <span className='hover:text-orange-500 transition-colors duration-300'>Private Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
