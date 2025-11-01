
export default function About(){
    return(
        <div id="about" className="bg-gray-50 min-h-screen">
            <section className="text-white p-8 md:p-16 lg:p-48">
                <div className="flex gap-8">
                    <div className="text-black max-w-4xl">
                        <h1 className="font-geist text-4xl md:text-5xl font-bold">Who We <span className="text-redish">Are</span></h1>
                        <p className="font-geist text-lg md:text-xl pt-8 font-normal text-slate-500">FusionKode is a team of designers and developers building stunning, functional, award-worthy websites. From law firms to real estate to hospitality, we help businesses shine online.</p>
                        <div className="flex flex-col gap-4 pt-8">
                            <span>
                                <h4 className="font-geist font-semibold text-lg md:text-xl">Years of Experience</h4>
                                <p className="font-geist text-lg md:text-xl font-normal text-slate-500">Crafting digital experiences</p>
                            </span>
                            <span>
                                <h4 className="font-geist font-semibold text-lg md:text-xl">Projects Completed</h4>
                                <p className="font-geist text-lg md:text-xl font-normal text-slate-500">Across multiple industries</p>
                            </span>
                            <span>
                                <h4 className="font-geist font-semibold text-lg md:text-xl">Support Available</h4>
                                <p className="font-geist text-lg md:text-xl font-normal text-slate-500">We're here when you need us</p>
                            </span>
                        </div>
                        <button className="text-xl rounded-3xl bg-redish px-8 py-2 mt-8 text-white">Discover More</button>
                    </div>
                    <div className="border border-slate-50 shadow shadow-lg rounded-3xl overflow-hidden">
                        <img className="w-full h-full object-cover" src="/feature-image.jpeg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}