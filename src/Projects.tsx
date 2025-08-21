
export default function Projects(){
    return(
        <div id="projects" className="bg-gradient-to-t from-purplish to-hero min-h-screen">
            <section className="text-white p-8 md:p-16 lg:p-32">
                <div className="mx-auto flex flex-col items-center">
                    <h2 className="bg-purplish bg-clip-text text-transparent font-geist text-3xl md:text-4xl font-semibold text-center">Our Work</h2>
                    <div className="flex flex-col md:flex-row pt-8 md:pt-16 gap-6 md:gap-32 text-black text-center w-full justify-center">
                        <div onClick={() => window.open("https://cloudconda.com", "_blank")} className="cursor-pointer bg-white rounded-lg w-3/4 md:w-[300px] h-[150px] md:h-[200px] mx-auto md:mx-0"><h2 className="font-geist text-xl md:text-2xl font-normal pt-4"><span>Cloudconda</span></h2></div>
                        <div onClick={() => window.open("https://potential-rose.vercel.app/", "_blank")} className="cursor-pointer bg-white rounded-lg w-3/4 md:w-[300px] h-[150px] md:h-[200px] mx-auto md:mx-0"><h2 className="font-geist text-xl md:text-2xl font-normal pt-4"><span>Potential</span></h2></div>
                        <div onClick={() => window.open("https://grainient.vercel.app/", "_blank")} className="cursor-pointer bg-white rounded-lg w-3/4 md:w-[300px] h-[150px] md:h-[200px] mx-auto md:mx-0"><h2 className="font-geist text-xl md:text-2xl font-normal pt-4"><span>Granient</span></h2></div>
                    </div>
                    <div className="flex justify-center items-center pt-8 md:pt-16">
                        <img className="w-full md:w-[1000px] h-[200px] md:h-[500px] rounded-lg object-cover" src="/projects-image.jpg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}