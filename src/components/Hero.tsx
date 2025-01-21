
import { Button } from "@mui/material"
import Image from "next/image"
import banner_image from "../../public/assests/img2.svg"

export default function Hero() {
  return (
    <div className="relative min-h-screen aurora-bg overflow-hidden">
      <div className="aurora"></div>
      <div className="star-field">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Exploring the fusion of{' '}
            <span className="text-blue-400">SCIENCE</span> with {' '}
            <span className="text-blue-400">ADVERTISING</span> and{' '}
            <span className="text-blue-400">ART</span> with {' '}
            <span className="text-blue-400">TECHNOLOGY</span>{' '}
          </h1>
          
          <div className="space-y-6 text-gray-300 text-lg">
            {/* <p>
              Since pioneering the digital universe 15 years ago, Analyzen has evolved into a multiverse of
              reanalyzing creative's core. We seamlessly weave science into the art of advertising
              communication, encompassing all media from offline to digital, and intricately infuse art into
              the science of technological advancement.
            </p> */}
          </div>
          
          <div className="flex space-x-4">
            <Button  className="text-white border-white hover:bg-white hover:text-black">
              Learn More
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative w-full h-[600px]">
            <Image
              src={banner_image}
              alt="Superhero Illustration"
              fill
              className="object-contain"
            />
          </div>
          {/* <div className="absolute bottom-10 right-10 text-white text-4xl font-bold italic">
            Brand Strategy & Architecture
          </div> */}
        </div>
      </div>
    </div>
  )
}

