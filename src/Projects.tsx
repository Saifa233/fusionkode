
export default function Projects(){
    return(
        <div id="projects" className="bg-gray-50 min-h-screen py-16 md:py-24">
            <section className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-col">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
                        Our Recent <span className="text-redish">Projects</span>
                    </h1>
                    <p className="text-lg md:text-xl font-normal text-slate-600 text-center max-w-4xl mx-auto mb-16">
                        Discover how we've helped businesses across industries create stunning digital experiences that drive results and engage customers.
                    </p>
                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {/* Project 1 */}
                        <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:cursor-pointer">
                            <div className="relative overflow-hidden">
                                <img 
                                    className="w-full h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105" 
                                    src="/project-1.png" 
                                    alt="Legal Excellence Law Firm Website" 
                                />
                            </div>
                            <div onClick={() => window.open('https://grainient.vercel.app/')} className="p-6 md:p-8">
                                <span className="bg-redish rounded-full text-white text-sm font-medium px-4 py-2 inline-block mb-4 -ml-2">
                                    Landing Page
                                </span>
                                <h4 className="font-geist text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Granient
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Premium website design for a prestigious law firm featuring modern aesthetics and professional credibility.
                                </p>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:cursor-pointer">
                            <div className="relative overflow-hidden">
                                <img 
                                    className="w-full h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105" 
                                    src="/project-2.png" 
                                    alt="Luxury Properties Real Estate Website" 
                                />
                            </div>
                            <div onClick={() => window.open('https://potential-rose.vercel.app/')} className="p-6 md:p-8">
                                <span className="bg-redish rounded-full text-white text-sm font-medium px-4 py-2 inline-block mb-4 -ml-2">
                                    Landing Page
                                </span>
                                <h4 className="font-geist text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Potential
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Elegant platform showcasing luxury properties with immersive visuals and seamless user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}