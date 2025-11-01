
export default function Features(){
    return(
        <div id="features" className="bg-gray-50 min-h-screen py-16 md:py-24">
            <section className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-col">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
                        Our <span className="text-redish">Approach</span>
                    </h1>
                    <p className="text-lg md:text-xl font-normal text-slate-600 text-center max-w-4xl mx-auto mb-16">
                    We combine cutting-edge technology with creative excellence to deliver websites that don't just look amazing—they drive real business results.
                    </p>
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {/* Feature 1 */}
                        <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:cursor-pointer">
                            <div className="relative overflow-hidden">
                                <img 
                                    className="w-full h-fit p-16 object-cover transition-transform duration-300 group-hover:scale-105" 
                                    src="/feature-1.png" 
                                    alt="Legal Excellence Law Firm Website" 
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <h4 className="font-geist text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Modern Responsive Designs
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Beautiful, fast-loading websites that work perfectly on all devices and screen sizes.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:cursor-pointer">
                            <div className="relative overflow-hidden">
                                <img 
                                    className="w-full h-fit p-16 object-cover transition-transform duration-300 group-hover:scale-105" 
                                    src="/feature-2.png" 
                                    alt="Luxury Properties Real Estate Website" 
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <h4 className="font-geist text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Global Research + Local Expertise
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    We combine worldwide best practices with deep understanding of local markets.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:cursor-pointer">
                            <div className="relative overflow-hidden">
                                <img 
                                    className="w-full h-fit p-16 object-cover transition-transform duration-300 group-hover:scale-105" 
                                    src="/feature-3.png" 
                                    alt="Gourmet Bistro Restaurant Website" 
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <h4 className="font-geist text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Award-Winning Aesthetics
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Stunning visual designs that capture attention and reflect your brand's unique identity.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:cursor-pointer">
                            <div className="relative overflow-hidden">
                                <img 
                                    className="w-full h-fit p-16 object-cover transition-transform duration-300 group-hover:scale-105" 
                                    src="/feature-4.png" 
                                    alt="Advanced Healthcare Center Website" 
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <h4 className="font-geist text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    Clean, Scalable Code
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Well-structured, maintainable code that grows with your business needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Call to Action */}
                    <div className="bg-white text-center mt-16 flex gap-64 justify-center shadow-lg rounded-3xl p-8">
                        <span>
                            <h4 className="font-geist text-2xl md:text-4xl font-bold text-gray-900 mb-3 text-redish">99%</h4>
                            <p className="font-geist text-md md:text-lg font-normal text-slate-500">Client Satisfaction Rate</p>
                        </span>
                        <span>
                            <h4 className="font-geist text-2xl md:text-4xl font-bold text-gray-900 mb-3 text-redish">48h</h4>
                            <p className="font-geist text-md md:text-lg font-normal text-slate-500">Average Response Time</p>
                        </span>
                        <span>
                            <h4 className="font-geist text-2xl md:text-4xl font-bold text-gray-900 mb-3 text-redish">150%</h4>
                            <p className="font-geist text-md md:text-lg font-normal text-slate-500">Average ROI Increase</p>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}