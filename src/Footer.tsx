export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div className="flex flex-col mr-20">
          <h2 className="text-white font-bold text-2xl mb-4">FusionKode</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We craft high-performance digital experiences that blend design, 
            technology, and strategy to help your business grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#testimonial" className="hover:text-white">Testimonials</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>SEO & Marketing</li>
            <li>Brand Strategy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Get in Touch</h3>
          <div className="flex flex-col gap-4">
            <p className="text-sm">📍 Karachi, Pakistan</p>
            <p className="text-sm">📧 info@fusionkode.com</p>
            <p className="text-sm">📞 +(208) 279-5309</p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-sm text-gray-500 mt-8 pt-4 translate-y-6">
        © {new Date().getFullYear()} FusionKode. All rights reserved.
      </div>
    </footer>
  );
}
