
export default function Hero() {
    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className='bg-black min-h-screen'>
        <section className="text-white flex flex-col gap-32 p-32 relative">
          <div className="flex">
            <div className="absolute top-0 mt-8">
              <h2 className="font-geist text-2xl font-normal">FusionKode</h2>
            </div>
            
            <div className='flex items-center ml-120'>
              <nav className='absolute top-0 mt-8 space-x-16 text-xl font-geist font-normal text-slate-300'>
                <span onClick={() => scrollToSection('projects')} className="cursor-pointer">Projects</span>
                <span onClick={() => scrollToSection('features')} className="cursor-pointer">Features</span>
                <span onClick={() => scrollToSection('testimonial')} className="cursor-pointer">Testimonial</span>
                <span onClick={() => scrollToSection('pricing')} className="cursor-pointer">Pricing</span>
              </nav>  
            </div>
      
          </div>
  
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="font-geist text-8xl font-normal max-w-4xl leading-tighter tracking-tighter">We Design. We <span className="text-blue-500">Code</span>. We Deliver.</h1>
                <p className="font-geist text-2xl text-slate-300 max-w-3xl tracking-tight leading-tight">At FusionKode, we craft stunning, high-performance websites that blend pixel-perfect Figma designs with pure, clean code for unmatched speed, security, and user experience.</p>
                <div className="flex gap-4 mt-8">
                <button onClick={() => scrollToSection('pricing')} className="cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 text-white text-xl px-12 py-3 rounded-md">Get Started</button>
                <button onClick={() => scrollToSection('features')} className=" cursor-pointer bg-black text-white border border-blue-500 shadow shadow-lg text-xl px-8 py-3 rounded-md">Our Features</button> 
              </div>
            </div>
            <div className="absolute top-0 left-0 z-[-10]">
              <img className="w-screen h-screen object-cover" src='/hero.png' alt="hero" />
            </div>
          </div>
        </section>
      </div>
    )
}