import React from 'react';
import HomeBanner from './HomeBanner';
import AboutUs from './AboutUs';
import Services from './Services';
import WhyChoose from './WhyChoose';
import Teams from './Teams';
import Testimonials from './Testimonials';
import Blog from './Blog';
const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <AboutUs/>
      <Services/>
      <WhyChoose/>      
      <Testimonials/>
      <Teams/>
      <Blog/>
      </div>
  )
}

export default HomeComponents;