import { useState } from 'react'

export default function Hero() {
    const [showNumber, setShowNumber] = useState(false)
    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div className='bg-gray-50 min-h-screen'>
        <section className="text-white flex flex-col gap-16 md:gap-32 p-8 md:p-16 lg:p-32 relative">
          <div className="absolute top-0 left-0 w-full px-4 md:px-10 py-4 flex items-center">
            <div className="flex-shrink-0">
              <img src="/logo.png" alt="logo" className="bg-black h-13 rounded-md px-4 pb-2" />
            </div>
            <nav className="absolute left-1/2 transform -translate-x-1/2 text-sm md:text-lg font-geist font-normal space-x-4 md:space-x-8 lg:space-x-12 hidden md:block text-black">
              <span onClick={() => scrollToSection('about')} className="cursor-pointer">About</span>
              <span onClick={() => scrollToSection('projects')} className="cursor-pointer">Projects</span>
              <span onClick={() => scrollToSection('features')} className="cursor-pointer">Features</span>
              <span onClick={() => scrollToSection('pricing')} className="cursor-pointer">Pricing</span>
            </nav>
            <button onClick={() => setShowNumber((v) => !v)} className="mt-3 md:mt-0 cursor-pointer bg-black text-white text-sm md:text-lg px-4 md:px-8 py-1 rounded-lg shadow-lg shadown-black/20 absolute right-4 md:right-10">
              Book a Call
              {showNumber && (
                <span className="ml-2 hidden md:inline whitespace-nowrap">+(208) 279-5309</span>
              )}
            </button>
            {showNumber && (
              <span className="md:hidden absolute right-4 top-14 bg-white text-black text-xs px-2 py-1 rounded shadow-lg">+(208) 279-5309</span>
            )}
          </div>
          <div className="flex justify-center mt-36 md:mt-32">
            <div className="flex flex-col gap-16 md:gap-12 px-4 md:px-0">
              <h1 className="font-geist bg-gradient-to-r from-redish to-black/70 bg-clip-text text-transparent text-6xl lg:text-8xl font-semibold max-w-4xl text-center md:text-left">Crafted to Inspire</h1>
                <p className="text-black text-center font-geist text-lg md:text-xl lg:text-2xl max-w-3xl tracking-tight">At FusionKode, we craft stunning, high-performance websites that blend pixel-perfect Figma designs with pure, clean code for unmatched speed, security, and user experience.</p>
                <div className="flex gap-4 mt-2 md:mt-8 mx-auto">
                <button onClick={() => scrollToSection('projects')} className="cursor-pointer bg-white text-black text-md md:text-xl px-8 md:px-12 py-3 rounded-2xl shadow-lg shadown-black/20">View Our Work</button>
                <button onClick={() => scrollToSection('features')} className=" cursor-pointer bg-black text-white text-md md:text-xl px-6 md:px-8 py-3 rounded-2xl shadow-lg shadown-black/20">Book a Call</button> 
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}