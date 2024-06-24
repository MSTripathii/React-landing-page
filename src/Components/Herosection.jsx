import video1 from "../Assests/video1.mp4";
import video2 from "../Assests/video2.mp4";
import React from 'react'

const Herosection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            VirtualR Tools <span className="bg-gradient-to-l from-orange-500 to-orange-800 text-transparent bg-clip-text">for Developers</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">Empower your creativity and bring your VR app ideas to Life with our 
            intuitive development tools. Get started today and turn your imagination
            into immersive reality! 
        </p>
        <div className="flex justify-center mt-10">
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Start for Free</a>
            <a href="#" className="py-2 px-3 mx-4 rounded-md border">Documentation</a>
        </div>

        <div className="flex flex-col justify-center items-center lg:mt-20 mt-16 lg:flex-row m-auto">
            <video src={video1} className="w-full border lg:w-1/2 border-orange-700 rounded-md mx-4 my-4 shadow shadow-orange-600" autoPlay loop muted>Your Browser dosent support the video</video>
            <video src={video2} className="w-full border lg:w-1/2 border-orange-700 rounded-md my-4 shadow shadow-orange-600" autoPlay loop muted>Your Browser dosent support the video</video>
        </div>

    </div>
  )
}

export default Herosection
