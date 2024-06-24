import React from 'react'
import { resourcesLinks } from '../Constant'
import { platformLinks } from '../Constant'
import { communityLinks } from '../Constant'

const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-600'>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 m-12">
            <div className="">
                <h3 className='text-xl font-semibold mb-4'>Resources</h3>
                <ul>
                    {resourcesLinks.map((link,index)=>(
                        <li key={index} className='mb-4'><a href={link.href} className='text-neutral-300 hover:text-orange-400'>{link.text}</a></li>
                    ))}
                </ul>
            </div>
            <div className="">
                <h3 className='text-xl font-semibold mb-4'>Platform</h3>
                <ul>
                    {platformLinks.map((link,index)=>(
                        <li key={index} className='mb-4'><a href={link.href} className='text-neutral-300 hover:text-orange-400'>{link.text}</a></li>
                    ))}
                </ul>
            </div>
            <div className="mt-10 lg:m-0">
                <h3 className='text-xl font-semibold mb-4'>Community</h3>
                <ul>
                    {communityLinks.map((link,index)=>(
                        <li key={index} className='mb-4'><a href={link.href} className='text-neutral-300 hover:text-orange-400'>{link.text}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
