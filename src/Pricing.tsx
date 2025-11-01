// export default function Pricing(){
//     return(
//         <div id="pricing" className="bg-gradient-to-t from-purplish to-hero min-h-screen">
//             <section className="text-white p-8 md:p-16 lg:p-32">
//                 <div className="flex flex-col items-center gap-16 lg:gap-32">
//                     <h2 className="font-geist text-purplish text-3xl md:text-4xl font-semibold text-center">Pricing</h2>
//                     <div className="flex flex-col md:flex-row gap-6 md:gap-16 text-black text-center">
//                         <div className="rounded-3xl w-full md:w-[360px] h-auto md:h-full p-6 md:p-8 bg-white mx-auto md:mx-0">
//                             <h2 className="font-geist text-2xl md:text-3xl font-bold pt-4">
//                                 <span className="bg-black bg-clip-text text-transparent">Basic</span>
//                                 <p className="font-geist text-base md:text-lg text-black mt-6 md:mt-8">For small businesses and startups</p>
//                                 <ul className="list-disc list-inside text-base md:text-lg mt-6 md:mt-8">
//                                     <li>1-5 Pages Custom Website</li>
//                                     <li>Mobile Responsive</li>
//                                     <li>From $499</li>
//                                 </ul>
//                             </h2>
//                             <button className="bg-black text-white px-4 py-2 rounded-md mt-12 md:mt-20">Get Started</button>
//                         </div>
//                         <div className="rounded-3xl w-full md:w-[360px] h-auto md:h-full p-6 md:p-8 bg-white mx-auto md:mx-0">
//                             <h2 className="font-geist text-2xl md:text-3xl font-bold pt-4">
//                             <span className="bg-black bg-clip-text text-transparent">Pro</span>
//                                 <p className="font-geist text-base md:text-lg text-black mt-6 md:mt-8">For growing businesses & startups</p>
//                                 <ul className="list-disc list-inside text-base md:text-lg mt-6 md:mt-8">
//                                     <li>5-7 Pages Custom Website</li>
//                                     <li>UI/UX Design in Figma</li>
//                                     <li>Contact Forms</li>
//                                     <li>Mobile Responsive</li>
//                                     <li>From $999</li>
//                                 </ul>
//                             </h2>
//                             <button className="bg-black text-white px-4 py-2 rounded-md mt-6 md:mt-8">Get Started</button>
//                         </div>
//                         <div className="rounded-3xl w-full md:w-[360px] h-auto md:h-full p-6 md:p-8 bg-white mx-auto md:mx-0">
//                             <h2 className="font-geist text-2xl md:text-3xl font-bold pt-4">
//                                 <span className="bg-black bg-clip-text text-transparent">Enterprise</span>
//                                 <p className="font-geist text-base md:text-lg text-black mt-6 md:mt-8">Full-scale projects & advanced systems</p>
//                                 <ul className="list-disc list-inside text-base md:text-lg mt-6 md:mt-8">
//                                     <li>10-12 Pages Custom Website</li>
//                                     <li>UI/UX Design in Figma</li>
//                                     <li>Custom Web Applications</li>
//                                     <li>API & Database Integrations</li>
//                                     <li>From $1499</li>
//                                 </ul>
//                             </h2>
//                             <button className="bg-black text-white px-4 py-2 rounded-md mt-6 md:mt-8">Get Started</button>
//                         </div>
//                     </div>
//                 </div>

//             </section>
//         </div>
//     )
// }


export default function Pricing(){
    return(
        <div id="pricing" className="bg-gray-50 min-h-screen py-16 md:py-24">
            <section className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-col">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
                        Flexible Plans for <span className="text-redish">Every Business</span>
                    </h1>
                    <p className="text-lg md:text-xl font-normal text-slate-500 text-center max-w-4xl mx-auto mb-16">
                        Choose the perfect plan for your business needs. All plans include our premium design service and ongoing support.
                    </p>
                    {/* Pricing Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Pricing 1 */}
                        <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:cursor-pointer">
                            <div className="relative overflow-hidden p-8 space-y-8">
                                <h3 className="font-geist text-2xl md:text-3xl font-bold text-gray-900 mb-3">Starter</h3>
                                <p className="font-geist text-base md:text-lg text-gray-700 mb-3">Perfect for small businesses getting started online</p>
                                <h4><span className="font-geist text-2xl md:text-3xl font-bold text-gray-900 mb-3">$499</span> /one-time</h4>
                                <div>
                                <ul className="space-y-4">
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            5-page responsive website
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Modern design & branding
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Mobile optimization
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Basic SEO setup
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Contact form integration
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            30 days support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Pricing 2 */}
                        <div className="group bg-white border-3 border-redish rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:cursor-pointer">
                            <div className="relative overflow-hidden p-8 space-y-8">
                                <h3 className="font-geist text-2xl md:text-3xl font-bold text-gray-900 mb-3">Professional</h3>
                                <p className="font-geist text-base md:text-lg text-gray-700 mb-3">Ideal for growing businesses with advanced needs</p>
                                <h4><span className="font-geist text-2xl md:text-3xl font-bold text-gray-900 mb-3">$999</span> /one-time</h4>
                                <div>
                                    <ul className="space-y-4">
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            10-page responsive website
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Custom design & branding
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Advanced SEO optimization
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            E-commerce integration
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Analytics & tracking
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            90 days support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Pricing 3 */}
                        <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:cursor-pointer">
                            <div className="relative overflow-hidden p-8 space-y-8">
                                <h3 className="font-geist text-2xl md:text-3xl font-bold text-gray-900 mb-3">Enterprise</h3>
                                <p className="font-geist text-base md:text-lg text-gray-700 mb-3">Tailored solutions for large organizations</p>
                                <h4><span className="font-geist text-2xl md:text-3xl font-bold text-gray-900 mb-3">Custom</span> /pricing</h4>
                                <div>
                                    <ul className="space-y-4">
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Unlimited pages
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Custom functionality
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Advanced integrations
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Priority support
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Performance optimization
                                        </li>
                                        <li className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> 
                                            Security enhancements
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Call to Action */}
                    <div className="text-center mt-16 flex gap-64 justify-center p-8">
                        <span>
                            <p className="font-geist text-sm md:text-md font-normal text-slate-500">Need something different? We offer custom solutions tailored to your specific requirements.</p>
                            <button className="mt-8 bg-redish hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Start a project
                            </button>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}