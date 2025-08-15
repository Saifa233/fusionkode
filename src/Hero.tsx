
export default function Hero() {
    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className='bg-hero min-h-screen bg-[url("/hero.png")] bg-cover bg-center'>
        <section className="text-white flex flex-col gap-32 p-32 relative">
          <div className="flex">
            <div className="absolute top-0 mt-7">
              <img src='/logo2.png' alt="logo" className="w-50 h-12" />
            </div>
            
            <div className='mx-auto'>
              <nav className='absolute top-0 mt-8 space-x-16 text-xl font-geist font-normal text-slate-300'>
                <span onClick={() => scrollToSection('projects')} className="cursor-pointer">Projects</span>
                <span onClick={() => scrollToSection('features')} className="cursor-pointer">Features</span>
                <span onClick={() => scrollToSection('testimonial')} className="cursor-pointer">Testimonial</span>
                <span onClick={() => scrollToSection('pricing')} className="cursor-pointer">Pricing</span>
              </nav>  
            </div>
      
          </div>
  
          <div className="flex justify-center">
            <div className="flex flex-col gap-8">
              <h1 className="font-geist text-8xl font-normal max-w-4xl leading-tighter tracking-tighter">We Design. We <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 bg-clip-text text-transparent">Code</span> <span className="block text-center">We Deliver.</span></h1>
                <p className="font-geist text-2xl text-slate-300 max-w-3xl tracking-tight leading-tight mx-auto">At FusionKode, we craft stunning, high-performance websites that blend pixel-perfect Figma designs with pure, clean code for unmatched speed, security, and user experience.</p>
                <div className="flex gap-4 mt-8 mx-auto">
                <button onClick={() => scrollToSection('pricing')} className="cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 text-white text-xl px-12 py-3 rounded-md">Get Started</button>
                <button onClick={() => scrollToSection('features')} className=" cursor-pointer bg-black text-white border border-blue-500 shadow shadow-lg text-xl px-8 py-3 rounded-md">Our Features</button> 
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}