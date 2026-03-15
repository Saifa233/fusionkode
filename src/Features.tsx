export default function Features(){
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            ),
            title: "Modern Responsive Designs",
            description: "Beautiful, fast-loading websites that work perfectly on all devices and screen sizes.",
            color: "bg-orange-500/10 text-orange-600"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            ),
            title: "Global Research + Local Expertise",
            description: "We combine worldwide best practices with deep understanding of local markets.",
            color: "bg-amber-500/10 text-amber-600"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
            ),
            title: "Award-Winning Aesthetics",
            description: "Stunning visual designs that capture attention and reflect your brand's unique identity.",
            color: "bg-orange-500/10 text-orange-600"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            ),
            title: "Clean, Scalable Code",
            description: "Well-structured, maintainable code that grows with your business needs.",
            color: "bg-green-500/10 text-green-600"
        }
    ];

    const stats = [
        { number: '99%', label: 'Client Satisfaction' },
        { number: '48h', label: 'Average Response' },
        { number: '150%', label: 'Average ROI' },
    ];

    return(
        <div id="features" className="bg-[#faf9f7] py-24 relative overflow-hidden">
            <section className="max-w-7xl mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium mb-4">
                        Why Choose Us
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="gradient-text">Approach</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We combine cutting-edge technology with creative excellence to deliver websites that drive real business results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <div key={i} className="group p-8 bg-white rounded-3xl hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 card-hover">
                            <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 gradient-bg rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-5xl lg:text-6xl font-bold text-white mb-2">{stat.number}</p>
                                <p className="text-white/80 text-lg">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
