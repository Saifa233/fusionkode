export default function Footer() {
    const footerLinks = {
        company: [
            { label: 'About Us', href: '#about' },
            { label: 'Careers', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Press', href: '#' },
        ],
        services: [
            { label: 'Web Development', href: '#' },
            { label: 'UI/UX Design', href: '#' },
            { label: 'E-commerce', href: '#' },
            { label: 'SEO Marketing', href: '#' },
        ],
        support: [
            { label: 'Help Center', href: '#' },
            { label: 'Contact Us', href: '#contact' },
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
        ]
    };

    return (
        <footer className="bg-gray-900 text-gray-300 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">FK</span>
                            </div>
                            <span className="text-xl font-bold text-white">FusionKode</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            We craft high-performance digital experiences that blend design, technology, and strategy to help your business grow.
                        </p>
                       
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="hover:text-orange-500 transition-colors">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="hover:text-orange-500 transition-colors">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="hover:text-orange-500 transition-colors">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 pb-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-2">Subscribe to our newsletter</h3>
                            <p className="text-gray-400">Get the latest updates and industry insights.</p>
                        </div>
                        <div className="flex gap-3">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="px-5 py-3 bg-gray-800 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button className="px-6 py-3 gradient-bg text-white rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} FusionKode. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
