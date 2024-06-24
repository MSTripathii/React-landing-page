import {Menu, X} from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import logo from '../Assests/Logo.png';
import { navItems } from '../Constant';

const Navigationbar = () => {

    const [mobiledrawerOpen, SetmobiledrawerOpen] = useState(false);

    const toggleNavbar = () =>{
        SetmobiledrawerOpen(!mobiledrawerOpen)
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
                        <span className='text-xl tracking-tight'>VirtualR</span>
                    </div>
                    <ul className='hidden lg:flex mx-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center items-center space-x-12">
                        <a href="#" className='px-3 py-2 border rounded-md'>Sign In</a>
                        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an Account</a>
                    </div>

                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>
                                {mobiledrawerOpen ? <X></X> : <Menu></Menu>}
                            </button>
                        </div>
                </div>
                {
                    mobiledrawerOpen && (
                        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                            <ul>
                                {
                                    navItems.map((item, index) => (
                                        <li className='py-4' key={index}>
                                            <a href={item.href}>{item.label}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="lg:hidden flex justify-center items-center space-x-6 mt-10">
                                <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                                <a href="#" className='py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Create an Account</a>
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    );
}

export default Navigationbar;
