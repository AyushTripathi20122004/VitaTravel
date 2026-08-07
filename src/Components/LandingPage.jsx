import React from 'react'
import Intro from './IntroSection/Intro'
import Retreat from './RetreatSection/Retreat'
import Lenis from 'lenis'
import AboutUs from './AboutUsSection/AboutUs'
import FeaturedRetreats from './FeaturedRetreatsSection/FeaturedRetreats'
import CombineRetreat from './CombineRetreat/CombineRetreat'
import Country from './CountrySection/Country'
import VitaWork from './VitaWorkSection/VitaWork'
import PracCoach from './PractitionersCoachesSection/PracCoach'



const LandingPage = () => {
  // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


  return (
    <div className=' flex flex-col  lg:w-full overflow-hidden w-screen'>
      <Intro />
      <Retreat />
      <AboutUs />
      <FeaturedRetreats />
      <CombineRetreat />
      <Country />
      <VitaWork />
      <PracCoach />
    </div>
  )
}

export default LandingPage

