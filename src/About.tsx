export default function About(){
    const scrollToSection = (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <div id="about" className="bg-[#faf9f7] py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

            <section className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium">
                            About Us
                        </div>
                        
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Crafting <span className="gradient-text">Digital Excellence</span>
                        </h1>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                            FusionKode is a team of passionate designers and developers dedicated to building stunning, functional websites that help businesses thrive in the digital landscape.
                        </p>
                        
                        <div className="grid grid-cols-3 gap-6 pt-4">
                            {[
                                { number: '10+', label: 'Projects' },
                                { number: '3+', label: 'Years' },
                                { number: '98%', label: 'Satisfaction' },
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-4 bg-white rounded-2xl shadow-sm">
                                    <p className="text-2xl font-bold text-orange-600">{stat.number}</p>
                                    <p className="text-sm text-gray-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <button onClick={() => scrollToSection('contact')} className="px-8 py-4 gradient-bg text-white rounded-full font-semibold hover:shadow-xl hover:shadow-orange-500/20 transition-all hover:-translate-y-1">
                            Let's Work Together
                        </button>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <img src="/feature-image.jpeg" alt="Office" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <img src="/hero.jpg" alt="Team" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <img src="/project-1.png" alt="Project" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <img src="/project-2.png" alt="Design" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
