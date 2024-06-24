import React from 'react'
import code from '../Assests/code.jpg'
import { checklistItems } from '../Constant'
import { CheckCircle2 } from 'lucide-react'

const WorkflowSection = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mx-10'>Accelerate your <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'>Coding Workflow</span></h1>
            <div className="flex flex-wrap justify-center items-center">
                <div className="p-2 w-full lg:w-full flex justify-end 2xl:w-1/4">
                    <img src={code} alt="code Image" className='lg:max-w-[500px]'/>
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                    {checklistItems.map((item, index)=>(
                        <div key={index} className='flex mb-12'>
                            <div className="text-green-400 flex justify-center items-center rounded-full bg-neutral-900 h-10 w-10 mx-6"><CheckCircle2/></div>
                            <div>
                                <h5 className='mb-2 mt-1 text-xl'>{item.title}</h5>
                                <p className='text-neutral-500 text-md'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkflowSection
