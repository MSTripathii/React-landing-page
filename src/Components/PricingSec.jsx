import React from 'react'
import { CheckCircle2, SpaceIcon } from 'lucide-react'
import { pricingOptions } from '../Constant'

const PricingSec = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-5xl mb-8 text-center lg:border-t lg:border-t-neutral-600 py-2 px-* lg:bg-neutral-900 lg:rounded-full'>Pricing</h1>
            <div className="flex flex-wrap lg:mt-20">
                {pricingOptions.map((option, index) => (
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-3" key={index}>
                        <div className="border border-neutral-700 rounded-xl p-10">
                            <p className='text-4xl mb-8'>
                                {option.title}
                                {option.title==='Pro' && <span className='bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text text-2xl lg:text-4xl mb-4 ml-2'>(Most Pupular)</span>}
                            </p>
                            <p className='mb-8'>
                                <span className='mt-6 mr-2 text-5xl'>{option.price}</span>
                                <span className='text-neutral-400 tracking-tight'>/Month</span>
                            </p>
                            <ul>
                                {option.features.map((item, index)=>(
                                    <li key={index} className='mt-8 flex items-center'>
                                        <CheckCircle2/>
                                        <span className='ml-3'>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className='inline-block justify-center items-center text-center py-4 text-xl w-full  border border-orange-600 shadow-orange-400 shadow mt-10 rounded-md hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-800 font-bold duration-300'>Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingSec
