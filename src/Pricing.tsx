export default function Pricing(){
    return(
        <div id="pricing" className="bg-gradient-to-t from-purplish to-hero min-h-screen">
            <section className="text-white p-8 md:p-16 lg:p-32">
                <div className="flex flex-col items-center gap-16 lg:gap-32">
                    <h2 className="font-geist text-purplish text-3xl md:text-4xl font-semibold text-center">Pricing</h2>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-16 text-black text-center">
                        <div className="rounded-3xl w-full md:w-[360px] h-auto md:h-full p-6 md:p-8 bg-white mx-auto md:mx-0">
                            <h2 className="font-geist text-2xl md:text-3xl font-bold pt-4">
                                <span className="bg-black bg-clip-text text-transparent">Basic</span>
                                <p className="font-geist text-base md:text-lg text-black mt-6 md:mt-8">For small businesses and startups</p>
                                <ul className="list-disc list-inside text-base md:text-lg mt-6 md:mt-8">
                                    <li>1-5 Pages Custom Website</li>
                                    <li>Mobile Responsive</li>
                                    <li>From $499</li>
                                </ul>
                            </h2>
                            <button className="bg-black text-white px-4 py-2 rounded-md mt-12 md:mt-20">Get Started</button>
                        </div>
                        <div className="rounded-3xl w-full md:w-[360px] h-auto md:h-full p-6 md:p-8 bg-white mx-auto md:mx-0">
                            <h2 className="font-geist text-2xl md:text-3xl font-bold pt-4">
                            <span className="bg-black bg-clip-text text-transparent">Pro</span>
                                <p className="font-geist text-base md:text-lg text-black mt-6 md:mt-8">For growing businesses & startups</p>
                                <ul className="list-disc list-inside text-base md:text-lg mt-6 md:mt-8">
                                    <li>5-7 Pages Custom Website</li>
                                    <li>UI/UX Design in Figma</li>
                                    <li>Contact Forms</li>
                                    <li>Mobile Responsive</li>
                                    <li>From $999</li>
                                </ul>
                            </h2>
                            <button className="bg-black text-white px-4 py-2 rounded-md mt-6 md:mt-8">Get Started</button>
                        </div>
                        <div className="rounded-3xl w-full md:w-[360px] h-auto md:h-full p-6 md:p-8 bg-white mx-auto md:mx-0">
                            <h2 className="font-geist text-2xl md:text-3xl font-bold pt-4">
                                <span className="bg-black bg-clip-text text-transparent">Enterprise</span>
                                <p className="font-geist text-base md:text-lg text-black mt-6 md:mt-8">Full-scale projects & advanced systems</p>
                                <ul className="list-disc list-inside text-base md:text-lg mt-6 md:mt-8">
                                    <li>10-12 Pages Custom Website</li>
                                    <li>UI/UX Design in Figma</li>
                                    <li>Custom Web Applications</li>
                                    <li>API & Database Integrations</li>
                                    <li>From $1499</li>
                                </ul>
                            </h2>
                            <button className="bg-black text-white px-4 py-2 rounded-md mt-6 md:mt-8">Get Started</button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}