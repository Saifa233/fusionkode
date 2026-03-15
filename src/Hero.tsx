import { useState } from 'react'

export default function Hero() {
    const [showNumber, setShowNumber] = useState(false)
    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div className="min-h-screen bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '32px 32px'}}>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900">FusionKode</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-primary transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-primary transition-colors font-medium">Projects</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-primary transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-primary transition-colors font-medium">Pricing</button>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowNumber((v) => !v)} 
                className="hidden sm:flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Book a Call
                {showNumber && <span className="text-gray-300">+(208) 279-5309</span>}
              </button>
              {showNumber && (
                <span className="sm:hidden absolute top-16 right-6 bg-white shadow-xl text-gray-900 text-sm px-4 py-2 rounded-lg">+(208) 279-5309</span>
              )}
              <button className="md:hidden p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <section className="pt-32 pb-20 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  Available for new projects
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  We Build <br/>
                  <span className="gradient-text">Digital Experiences</span>
                  <br/>That Convert
                </h1>
                
                <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                  Transform your online presence with stunning, high-performance websites that blend creative design with clean code for unmatched speed and user experience.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
                  >
                    View Our Work
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
                  >
                    Get a Quote
                  </button>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white flex items-center justify-center text-white text-sm font-medium">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      ))}
                      <span className="ml-2 font-semibold text-gray-900">5.0</span>
                    </div>
                    <p className="text-sm text-gray-500">From 50+ happy clients</p>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative lg:h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 gradient-bg opacity-10 rounded-3xl"></div>
                <div className="relative w-full max-w-lg aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl backdrop-blur-xl"></div>
                  <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="h-8 bg-gray-100 flex items-center gap-2 px-4">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl"></div>
                      <div className="flex gap-2">
                        <div className="h-8 w-20 bg-primary/20 rounded-lg"></div>
                        <div className="h-8 w-20 bg-gray-200 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                  {/* Floating Cards */}
                  <div className="absolute -right-4 top-20 bg-white p-4 rounded-xl shadow-xl animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Project Delivered</p>
                        <p className="text-xs text-gray-500">On time, every time</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -left-4 bottom-32 bg-white p-4 rounded-xl shadow-xl animate-float" style={{animationDelay: '1s'}}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">98%</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Client Satisfaction</p>
                        <p className="text-xs text-gray-500">Rated by 50+ clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <div className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '5+', label: 'Years Experience' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-4xl font-bold text-white">{stat.number}</p>
                  <p className="text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}
