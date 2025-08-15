export default function Testimonial(){
    return(
        <div id="testimonial" className="bg-hero min-h-screen">
            <section className="text-white">
                <div className="mx-auto flex flex-col items-center pt-10">
                    <h2 className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 bg-clip-text text-transparent font-geist text-4xl font-semibold">Testimonial</h2>
                    <span className="font-geist text-2xl text-slate-300 pt-16">Our work creates impact. Here’s what clients say about partnering with FusionKode.</span>
                    <div className="flex flex-col gap-4 pt-16">
                        <div className="bg-white rounded-3xl w-[1000px] h-[200px] text-black text-2xl p-8">
                            <p>FusionKode transformed our outdated site into a modern, fast, and mobile-friendly platform. The attention to detail was outstanding!</p>
                            <p className="pt-2">— Sarah L., Marketing Director</p>
                        </div>
                        <div className="bg-white rounded-3xl w-[1000px] h-[200px] text-black text-2xl p-8">
                            <p>From Figma designs to a fully functional website, everything was smooth and professional. Our SEO rankings have improved dramatically.</p>
                            <p className="pt-2">— James R., Startup Founder</p>
                        </div>
                        <div className="bg-white rounded-3xl w-[1000px] h-[200px] text-black text-2xl p-8">
                            <p>Clean code, fast load times, and a stunning design—FusionKode delivers exactly what they promise.</p>
                            <p className="pt-2">— Adeel M., Business Owner</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}