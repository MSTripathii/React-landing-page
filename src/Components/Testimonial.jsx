import React from 'react'
import { testimonials } from '../Constant'

const Testimonial = () => {
  return (
    <div className='mt-20 tracking-tight'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>What People are Saying</h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((userr,index)=>(
                <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2" key={index}>
                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                        <p>{userr.text}</p>
                        <div className="flex mt-8 items-start">
                            <img src={userr.image} alt={userr.user}className='h-12 w-12 rounded-full border border-neutral-300 mr-6'/>
                            <div className="">
                                <h6>{userr.user}</h6>
                                <span className='text-sm font-normal italic text-neutral-600'>{userr.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonial
