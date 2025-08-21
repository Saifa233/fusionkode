
export default function Features(){
    return(
        <div id="features" className="bg-gradient-to-t from-hero to-purplish min-h-screen">
            <section className="text-white p-8 md:p-16 lg:p-32">
                <div className="mx-auto flex flex-col items-center">
                    <h2 className="bg-black bg-clip-text text-transparent font-geist text-3xl md:text-4xl font-semibold text-center">Our Expertise</h2>
                    <div className="flex flex-col md:flex-row pt-8 md:pt-16 gap-6 md:gap-16 text-black text-center w-full justify-center">
                        <div className="rounded-lg w-3/4 lg:w-full md:w-[300px] h-[150px] md:h-[200px] bg-white mx-auto md:mx-0"><h2 className="font-geist text-xl md:text-2xl font-normal pt-4">Data Scraping</h2></div>
                        <div className="bg-white rounded-lg w-3/4 lg:w-full md:w-[300px] h-[150px] md:h-[200px] mx-auto md:mx-0"><h2 className="font-geist text-xl md:text-2xl font-normal pt-4">Web Development</h2></div>
                        <div className="bg-white rounded-lg w-3/4 lg:w-full md:w-[300px] h-[150px] md:h-[200px] mx-auto md:mx-0"><h2 className="font-geist text-xl md:text-2xl font-normal pt-4">App Development</h2></div>
                        <div className="bg-white rounded-lg w-3/4 lg:w-full md:w-[300px] h-[150px] md:h-[200px] mx-auto md:mx-0"><h2 className="font-geist text-xl md:text-2xl font-normal pt-4">UI/UX design</h2></div>
                        <div className="bg-white rounded-lg w-3/4 lg:w-full md:w-[300px] h-[150px] md:h-[200px] mx-auto md:mx-0"><h2 className="font-geist text-xl md:text-2xl font-normal pt-4">AI Agent</h2></div>
                    </div>
                    <div className="hidden md:flex justify-center pt-8 md:pt-16 px-4 md:px-0">
                        <img className="w-full h-[200px] md:h-[500px] object-cover rounded-2xl" src="/features-image.jpeg" alt="" />
                    </div>

                </div>
            </section>
        </div>
    )
}