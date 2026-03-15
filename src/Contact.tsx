export default function Contact() {
    const contactInfo = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            ),
            label: 'Location',
            value: 'Karachi, Pakistan'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            ),
            label: 'Email',
            value: 'info@fusionkode.com'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            ),
            label: 'Phone',
            value: '+(208) 279-5309'
        }
    ];

    return (
        <div id="contact" className="bg-[#faf9f7] py-24 relative overflow-hidden">
            <div className="absolute top-20 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

            <section className="max-w-7xl mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium mb-4">
                        Get In Touch
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Let's Work <span className="gradient-text">Together</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ready to start your project? Get in touch with us and let's create something amazing.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="John"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all">
                                    <option>Website Development</option>
                                    <option>UI/UX Design</option>
                                    <option>E-commerce</option>
                                    <option>Custom Development</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea 
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none"
                                ></textarea>
                            </div>
                            <button className="w-full py-4 gradient-bg text-white rounded-full font-semibold hover:shadow-xl hover:shadow-orange-500/25 transition-all hover:-translate-y-1">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <div className="grid gap-6">
                            {contactInfo.map((info, i) => (
                                <div key={i} className="flex items-start gap-6 p-6 bg-white rounded-2xl hover:bg-orange-50 transition-colors">
                                    <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-orange-600">{info.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                                        <p className="text-lg font-semibold text-gray-900">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
