import React from 'react';
import Navigationbar from './Components/Navigationbar';
import Herosection from './Components/Herosection';
import Featuresection from './Components/Featuresection';
import WorkflowSection from './Components/WorkflowSection';
import PricingSec from './Components/PricingSec';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Navigationbar></Navigationbar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Herosection></Herosection>
      <Featuresection></Featuresection>
      <WorkflowSection></WorkflowSection>
      <PricingSec></PricingSec>
      <Testimonial></Testimonial>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
