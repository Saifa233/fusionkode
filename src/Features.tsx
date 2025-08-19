
export default function Features(){
    return(
        <div id="features" className="bg-gradient-to-t from-hero to-purplish min-h-screen">
            <section className="text-white">
                <div className="mx-auto flex flex-col items-center pt-10">
                    <h2 className="bg-black bg-clip-text text-transparent font-geist text-4xl font-semibold">Our Expertise</h2>
                    <div className="flex pt-16 gap-16 text-black text-center">
                        <div className="rounded-lg w-[300px] h-[200px] bg-white"><h2 className="font-geist text-2xl font-normal pt-4">Data Scraping</h2></div>
                        <div className="bg-white rounded-lg w-[300px] h-[200px]"><h2 className="font-geist text-2xl font-normal pt-4">Web Development</h2></div>
                        <div className="bg-white rounded-lg w-[300px] h-[200px]"><h2 className="font-geist text-2xl font-normal pt-4">App Development</h2></div>
                        <div className="bg-white rounded-lg w-[300px] h-[200px]"><h2 className="font-geist text-2xl font-normal pt-4">UI/UX design</h2></div>
                        <div className="bg-white rounded-lg w-[300px] h-[200px]"><h2 className="font-geist text-2xl font-normal pt-4">AI Agent</h2></div>
                    </div>
                    <div className="flex justify-center pt-16">
                        <img className="w-full h-[500px] object-cover rounded-2xl" src="/features-image.jpeg" alt="" />
                    </div>

                </div>
            </section>
        </div>
    )
}