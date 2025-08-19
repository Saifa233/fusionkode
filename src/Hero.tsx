
export default function Hero() {
    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div className='bg-gradient-to-t from-purplish to-hero min-h-screen'>
        <section className="text-white flex flex-col gap-32 p-32 relative">
          <div className="absolute top-0 left-0 w-full px-10 py-4 flex items-center">
            <div className="flex-shrink-0">
              <img src="/logo.png" alt="logo" className="h-12 ml-10 -mt-2" />
            </div>
            <nav className="absolute left-1/2 transform -translate-x-1/2 text-md font-geist font-normal text-slate-300 space-x-12">
              <span onClick={() => scrollToSection('projects')} className="cursor-pointer">Projects</span>
              <span onClick={() => scrollToSection('features')} className="cursor-pointer">Features</span>
              <span onClick={() => scrollToSection('testimonial')} className="cursor-pointer">Testimonial</span>
              <span onClick={() => scrollToSection('pricing')} className="cursor-pointer">Pricing</span>
            </nav>
            <button className="cursor-pointer bg-white text-black text-md px-8 py-1 rounded-lg shadow-lg shadown-black/20 absolute right-10">Book a Call</button>
          </div>
          <div className="flex justify-center mt-32">
            <div className="flex flex-col gap-12">
              <h1 className="font-geist text-8xl font-semibold max-w-4xl ">Crafted to <span className="bg-gradient-to-r from-purplish to-white bg-clip-text text-transparent">Inspire</span></h1>
                <p className="bg-gradient-to-r from-white/90 via-white/70 to-white/50 bg-clip-text text-transparent text-center font-geist text-2xl max-w-3xl tracking-tight">At FusionKode, we craft stunning, high-performance websites that blend pixel-perfect Figma designs with pure, clean code for unmatched speed, security, and user experience.</p>
                <div className="flex gap-4 mt-8 mx-auto">
                <button onClick={() => scrollToSection('pricing')} className="cursor-pointer bg-white text-black text-xl px-12 py-3 rounded-2xl shadow-lg shadown-black/20">Get Started</button>
                <button onClick={() => scrollToSection('features')} className=" cursor-pointer bg-black text-white text-xl px-8 py-3 rounded-2xl shadow-lg shadown-black/20">Learn More</button> 
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}