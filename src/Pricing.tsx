export default function Pricing(){
    return(
        <div id="pricing" className="bg-black min-h-screen">
            <section className="text-white">
                <div className="mx-auto flex flex-col items-center pt-10">
                    <h2 className="font-geist text-4xl font-normal">Pricing</h2>
                    <div className="flex gap-32 pt-56 text-black text-center">
                        <div style={{background: 'white'}} className="rounded-3xl w-[300px] h-[400px]">
                            <h2 className="font-geist text-3xl font-bold pt-4">
                                <span>Basic</span>
                                <p className="font-geist text-lg text-black mt-8">For small businesses and startups</p>
                                <ul className="list-disc list-inside text-lg mt-8">
                                    <li>1-5 Pages Custom Website</li>
                                    <li>Mobile Responsive</li>
                                    <li>From $499</li>
                                </ul>
                            </h2>
                            <button className="bg-black text-white px-4 py-2 rounded-md mt-20">Get Started</button>
                        </div>
                        <div style={{background: 'white'}} className="rounded-3xl w-[300px] h-[400px]">
                            <h2 className="font-geist text-3xl font-bold pt-4"><span>Pro</span>
                                <p className="font-geist text-lg text-black mt-8">For growing businesses & startups</p>
                                <ul className="list-disc list-inside text-lg mt-8">
                                    <li>5-7 Pages Custom Website</li>
                                    <li>UI/UX Design in Figma</li>
                                    <li>Contact Forms</li>
                                    <li>Mobile Responsive</li>
                                    <li>From $999</li>
                                </ul>
                            </h2>
                            <button className="bg-black text-white px-4 py-2 rounded-md mt-8">Get Started</button>
                        </div>
                        <div style={{background: 'white'}} className="rounded-3xl w-[300px] h-[400px]">
                            <h2 className="font-geist text-3xl font-bold pt-4">
                                <span>Enterprise</span>
                                <p className="font-geist text-lg text-black mt-8">Full-scale projects & advanced systems</p>
                                <ul className="list-disc list-inside text-lg mt-8">
                                    <li>10-12 Pages Custom Website</li>
                                    <li>UI/UX Design in Figma</li>
                                    <li>Custom Web Applications</li>
                                    <li>API & Database Integrations</li>
                                    <li>From $1499</li>
                                </ul>
                            </h2>
                            <button className="bg-black text-white px-4 py-2 rounded-md mt-8">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}