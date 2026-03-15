export default function Projects(){
    return(
        <div id="projects" className="bg-white py-24 relative overflow-hidden">
            <div className="absolute top-20 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>

            <section className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium mb-4">
                        Our Work
                    </div>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our portfolio of stunning websites crafted for clients across various industries.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    <div className="group bg-[#faf9f7] rounded-3xl overflow-hidden shadow-lg card-hover w-full max-w-xl">
                        <div className="relative h-72 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"></div>
                            <img 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                src="/project-1.png" 
                                alt="Granient Law Firm" 
                            />
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full">
                                    Law Firm
                                </span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                                Granient
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Premium website design for a prestigious law firm featuring modern aesthetics and professional credibility.
                            </p>
                            <button 
                                onClick={() => window.open('https://grainient.vercel.app/')}
                                className="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all"
                            >
                                View Project
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
