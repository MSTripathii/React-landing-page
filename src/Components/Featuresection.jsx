import { features } from '../Constant'
import React from 'react'

const Featuresection = () => {
  return (
    <div className="relative mt-20 border border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className='bg-neutral-900 text-orange-400 rounded-full h-6 lg:text-3xl font-medium px-2 py-1 uppercase text-4xl'>FEATURE</span>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl mt-10 lg:mt-20 tracking-wide'>Easily build <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text text-2xl sm:text-3xl lg:text-4xl'>your code</span></h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20  m-5 lg:m-10">
        {features.map((feature, index) =>(
            <div key={index} className="w-screen sm:w-1/2 lg:w-1/3 rounded-lg">
                <div className="flex mt-6">
                    <div className="flex justify-center items-center h-10 mx-6 w-10 p-2 bg-neutral-900 text-orange-700 rounded-full">{feature.icon}</div>
                    <div>
                        <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                        <p className='font-md p-2 mb-10 ml-[-10]  text-neutral-500'>{feature.description}</p>
                    </div>
                </div>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default Featuresection
