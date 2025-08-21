export default function Testimonial(){
    return(
        <div id="testimonial" className="bg-gradient-to-t from-hero to-purplish min-h-screen">
            <section className="text-white p-12 lg:p-16">
                <div className="mx-auto flex flex-col items-center">
                    <h2 className="bg-black bg-clip-text text-transparent font-geist text-3xl md:text-4xl font-semibold text-center">Testimonial</h2>
                    <span className="font-geist text-lg md:text-2xl text-slate-300 pt-8 md:pt-16 text-center px-4 md:px-0">Our work creates impact. Here's what clients say about partnering with FusionKode.</span>
                    <div className="flex flex-col gap-4 pt-8 md:pt-16 w-full">
                        <div className="bg-white rounded-3xl w-full md:w-[1000px] h-auto md:h-[200px] text-black text-lg md:text-2xl p-6 md:p-8 mx-auto">
                            <p>FusionKode transformed our outdated site into a modern, fast, and mobile-friendly platform. The attention to detail was outstanding!</p>
                            <p className="pt-2">— Sarah L., Marketing Director</p>
                        </div>
                        <div className="bg-white rounded-3xl w-full md:w-[1000px] h-auto md:h-[200px] text-black text-lg md:text-2xl p-6 md:p-8 mx-auto">
                            <p>From Figma designs to a fully functional website, everything was smooth and professional. Our SEO rankings have improved dramatically.</p>
                            <p className="pt-2">— James R., Startup Founder</p>
                        </div>
                        <div className="bg-white rounded-3xl w-full md:w-[1000px] h-auto md:h-[200px] text-black text-lg md:text-2xl p-6 md:p-8 mx-auto">
                            <p>Clean code, fast load times, and a stunning design—FusionKode delivers exactly what they promise.</p>
                            <p className="pt-2">— Adeel M., Business Owner</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}