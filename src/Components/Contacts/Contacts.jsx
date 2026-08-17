import React from 'react'

const Contacts = () => {
  return (
    <div className="contacts-container grid lg:grid-cols-2   pb-5 pt-24 bg-[#091B20]">
      {/* Section 1: Image */}
      <section className="contacts-image-section lg:w-auto md:w-auto w-screen lg:order-1  order-2 lg:px-10 px-5 md:px-10 pb-10 lg:border-r  lg:border-b  border-white/40">
        <img src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/6989df5258a6f0a8174626f3_illustration-contact.webp" className='h-full w-full object-cover' alt="contacts" />
      </section>

      {/* Section 2: Form */}
      <section className="contacts-form-section lg:border-b  py-5 lg:order-1  order-1 border-white/40 flex flex-col justify-center text-white px-10">
        {/* Form Header Section */}
        <div className="form-header flex flex-col gap-2">
          <div className=' AboutUs-Logo  items-center h-fit border-white/40 flex justify-start  gap-2 hover:text-orange-500 '>
            <svg class=" " width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 17.205L13.6095 13.6996C12.4133 12.9782 11.6823 11.6852 11.6823 10.2906L11.6823 9.70778C11.6823 8.31409 12.4124 7.02172 13.6074 6.30002C15.3397 5.25382 20 2.82159 20 2.82159L20 7.68382L16.3212 9.34147C16.0543 9.46172 15.8827 9.72688 15.8827 10.0191C15.8828 10.3084 16.051 10.5714 16.314 10.6933L20 12.4016L20 17.205Z" fill="white"></path>
              <path d="M6.2872e-07 17.205L6.39049 13.6996C7.5867 12.9782 8.31769 11.6852 8.31769 10.2906L8.31769 9.70778C8.31769 8.31409 7.5876 7.02172 6.3926 6.30002C4.66027 5.25382 0 2.82159 0 2.82159L2.12535e-07 7.68382L3.67879 9.34147C3.94569 9.46172 4.11726 9.72688 4.11726 10.0191C4.11724 10.3084 3.94899 10.5714 3.68602 10.6933L4.18757e-07 12.4016L6.2872e-07 17.205Z" fill="white"></path>
              <path d="M17.1936 0L13.6802 6.37594C12.9571 7.56942 11.6612 8.29875 10.2634 8.29876H9.67924C8.28237 8.29875 6.98705 7.57032 6.26371 6.37805C5.21512 4.64966 2.77734 0 2.77734 0H7.65067L9.31209 3.67042C9.43262 3.9367 9.69839 4.10788 9.99123 4.10788C10.2812 4.10787 10.5448 3.94 10.667 3.67763L12.3792 0H17.1936Z" fill="white"></path>
              <path d="M2.75172 20L6.26513 13.6241C6.98819 12.4306 8.28413 11.7012 9.68189 11.7012L10.2661 11.7012C11.6629 11.7012 12.9583 12.4297 13.6816 13.622C14.7302 15.3503 17.168 20 17.168 20L12.2946 20L10.6332 16.3296C10.5127 16.0633 10.2469 15.8921 9.95408 15.8921C9.66412 15.8921 9.4005 16.06 9.27835 16.3224L7.56607 20L2.75172 20Z" fill="white"></path>
            </svg>
            <h1 className='text-nowrap text-white text-xs font-semibold'>Contacts</h1>
          </div>
          <h1 className='text-5xl font-semibold tracking-tighter'>Get in Touch</h1>
          <span className='text-white/40'>Contact the Vita Travel team today!</span>
        </div>

        {/* Form Content Section */}
        <form className="contact-form flex flex-col w-full gap-10">
          {/* Name */}
          <div className="form-row flex lg:flex-row md:flex-row flex-col mt-10 gap-10   ">
            <div className="form-group py-1  border-b w-full border-white/40 flex flex-col ">
              <label htmlFor="name" className='text-xs'>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className='focus:outline-0 text-lg font-medium'
              />
            </div>
            {/* email */}
            <div className="form-group py-1 flex w-full  border-b border-white/40  flex-col">
              <label htmlFor="email" className='text-xs'>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className=' focus:outline-0 text-lg  font-medium'
              />
            </div>

          </div>
          {/* message text area */}
          <div className='flex flex-col'>
            <label htmlFor="Message " className='text-xs'>Message</label>
            <textarea
              name="message"
              placeholder='Message'
              id="message"
              className='min-h-32 resize-none focus:outline-0 text-lg font-medium border-b border-white/40'
            ></textarea>
          </div>
          {/* submit button */}
          <div className='contact-form-submit-btn'>
            <button type='submit' className='flex z-1 items-center  gap-3 rounded-full active:bg-[#fb9826] active:text-white lg:hover:bg-[#fb9826] lg:hover:text-white transition-all duration-300 bg-white px-10 mt-8 py-3 text-xs font-semibold text-black  shadow-lg  '>
              <span>Submit</span>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C8 0 7.32057 2.41553 7.32057 4C7.32057 5.58447 8 8 8 8C8 8 5.58447 7.32057 4 7.32057C2.41553 7.32057 0 8 0 8C0 8 0.679427 5.58447 0.679427 4C0.679427 2.41553 0 0 0 0C0 0 2.41553 0.679426 4 0.679426C5.58447 0.679426 8 0 8 0Z" fill="CurrentColor"></path>
              </svg>
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Contacts
