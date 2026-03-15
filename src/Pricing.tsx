export default function Pricing(){
    const plans = [
        {
            name: 'Starter',
            price: '$499',
            description: 'Perfect for small businesses getting started online',
            features: [
                '5-page responsive website',
                'Modern design & branding',
                'Mobile optimization',
                'Basic SEO setup',
                'Contact form integration',
                '30 days support'
            ],
            popular: false
        },
        {
            name: 'Professional',
            price: '$999',
            description: 'Ideal for growing businesses with advanced needs',
            features: [
                '10-page responsive website',
                'Custom design & branding',
                'Advanced SEO optimization',
                'E-commerce integration',
                'Analytics & tracking',
                '90 days support'
            ],
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'Tailored solutions for large organizations',
            features: [
                'Unlimited pages',
                'Custom functionality',
                'Advanced integrations',
                'Priority support',
                'Performance optimization',
                'Security enhancements'
            ],
            popular: false
        }
    ];

    return(
        <div id="pricing" className="bg-white py-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-orange-500/5 to-transparent"></div>

            <section className="max-w-7xl mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium mb-4">
                        Pricing Plans
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Simple, <span className="gradient-text">Transparent</span> Pricing
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect plan for your business needs. All plans include our premium design service and ongoing support.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, i) => (
                        <div key={i} className={`relative bg-[#faf9f7] rounded-3xl overflow-hidden transition-all duration-300 ${plan.popular ? 'shadow-2xl shadow-orange-500/25 ring-2 ring-orange-500 scale-105' : 'shadow-lg hover:shadow-xl'}`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-0 right-0 gradient-bg text-white text-center py-2 text-sm font-medium">
                                    Most Popular
                                </div>
                            )}
                            <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                                
                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    {plan.price !== 'Custom' && <span className="text-gray-500">/one-time</span>}
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <div className="w-5 h-5 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                                            </div>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-full font-semibold transition-all ${
                                    plan.popular 
                                        ? 'gradient-bg text-white hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1' 
                                        : 'bg-gray-900 text-white hover:bg-orange-600 hover:-translate-y-1'
                                }`}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-gray-500 mb-4">Need something different? We offer custom solutions tailored to your specific requirements.</p>
                    <button className="px-8 py-4 bg-[#faf9f7] text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-orange-500 hover:text-orange-600 transition-all">
                        Contact Us for Custom Quote
                    </button>
                </div>
            </section>
        </div>
    )
}
