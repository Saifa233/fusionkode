
export default function Projects(){
    return(
        <div id="projects" className="bg-gradient-to-t from-purplish to-hero min-h-screen">
            <section className="text-white">
                <div className="mx-auto flex flex-col items-center pt-10">
                    <h2 className="bg-purplish bg-clip-text text-transparent font-geist text-4xl font-semibold">Our Work</h2>
                    <div className="flex pt-16 gap-32 text-black text-center w-full justify-center">
                        <div onClick={() => window.open("https://cloudconda.com", "_blank")} className="cursor-pointer bg-white rounded-lg w-[300px] h-[200px]"><h2 className="font-geist text-2xl font-normal pt-4"><span>Cloudconda</span></h2></div>
                        <div onClick={() => window.open("https://potential-rose.vercel.app/", "_blank")} className="cursor-pointer bg-white rounded-lg w-[300px] h-[200px]"><h2 className="font-geist text-2xl font-normal pt-4"><span>Potential</span></h2></div>
                        <div onClick={() => window.open("https://cinebase-azure.vercel.app/", "_blank")} className="cursor-pointer bg-white rounded-lg w-[300px] h-[200px]"><h2 className="font-geist text-2xl font-normal pt-4"><span>Cinebase</span></h2></div>
                    </div>
                    <div className="flex justify-center items-center pt-16">
                        <img className="w-[1000px] h-[500px] rounded-lg" src="/projects-image.jpg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}