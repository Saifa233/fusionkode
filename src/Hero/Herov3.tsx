
export default function HeroV3() {
    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div className="min-h-screen bg-[#faf9f7] relative overflow-hidden">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{backgroundImage: 'radial-gradient(#ea580c 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
        </div>

        {/* Large Background Letters */}
        <div className="absolute top-1/4 -left-20 text-[320px] font-bold text-orange-500/5 leading-none select-none">F</div>
        <div className="absolute bottom-0 -right-20 text-[320px] font-bold text-amber-500/5 leading-none select-none">K</div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/90 backdrop-blur-md border-b border-orange-200/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">FK</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Work</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Pricing</button>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => scrollToSection('contact')} className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
                Let's Talk
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content - BOLD TYPOGRAPHY */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left: Big Bold Typography */}
              <div className="lg:col-span-7">
                <p className="text-orange-600 font-semibold tracking-wider uppercase mb-6">Digital Agency</p>
                
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8">
                  <span className="text-gray-900">We Build</span> <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Digital</span> <br/>
                  <span className="text-gray-900">Products</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-md leading-relaxed mb-10">
                  We craft beautiful, functional websites that help businesses grow and stand out in the digital world.
                </p>

                <div className="flex flex-wrap gap-5">
                  <button onClick={() => scrollToSection('projects')} className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-orange-600 transition-all hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1">
                    View Projects
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-orange-500 transition-all hover:-translate-y-1">
                    Get in Touch
                  </button>
                </div>
               
              </div>

              {/* Right: Minimal Visual Elements */}
              <div className="lg:col-span-5 relative">
                <div className="relative">
                  {/* Main Card */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">F</span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">FusionKode</p>
                          <p className="text-xs text-gray-500">Web Agency</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="h-3 bg-gray-100 rounded w-full"></div>
                      <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                      <div className="h-3 bg-gray-100 rounded w-3/5"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-orange-50 rounded-xl p-4">
                        <p className="text-2xl font-bold text-orange-600">50+</p>
                        <p className="text-xs text-gray-500">Projects</p>
                      </div>
                      <div className="bg-amber-50 rounded-xl p-4">
                        <p className="text-2xl font-bold text-amber-600">98%</p>
                        <p className="text-xs text-gray-500">Satisfaction</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -right-4 top-1/3 bg-white rounded-2xl shadow-xl p-4 z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Project Done!</p>
                        <p className="text-xs text-gray-500">Delivered on time</p>
                      </div>
                    </div>
                  </div>

                  {/* Small Card */}
                  <div className="absolute -left-6 bottom-8 bg-white rounded-2xl shadow-xl p-4 z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold">24/7</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Support</p>
                        <p className="text-xs text-gray-500">Always available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Tags */}
        <div className="py-12 border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {['Web Development', 'UI/UX Design', 'E-commerce', 'SEO', 'Brand Identity'].map((tag, i) => (
                <span key={i} className="px-6 py-3 bg-white rounded-full text-gray-600 font-medium border border-gray-200 hover:border-orange-500 hover:text-orange-600 transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}
