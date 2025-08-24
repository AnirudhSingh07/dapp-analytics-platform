'use client';

export default function FooterGlow() {
  return (
    <footer className="relative z-10 mt-16 mx-5 mb-5 overflow-hidden bg-black rounded-3xl shadow-lg border border-green-500/20">
      {/* Subtle glow effect at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
      {/* Green glow effect */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="mx-auto max-w-7xl p-8 md:p-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-8">
          {/* Column 1: Book a Call */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4 font-sans">Book a Free 15-Min Intro Call</h3>
            <p className="text-white text-sm mb-6 font-sans">
              Let's chat and see how we can help—no pressure!
            </p>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 border border-green-500 rounded-full text-sm text-green-500 font-medium hover:bg-green-500 hover:text-black transition-colors"
            >
              Book a call
            </a>
          </div>

          {/* Column 2: Email */}
          <div>
            <p className="text-white text-sm mb-2 font-sans">Drop hello at</p>
            <a href="mailto:Hey@fromstudios.com" className="text-green-500 text-sm font-medium underline hover:text-green-400 font-sans">
              Hey@socia.com
            </a>
          </div>

          {/* Column 3: Main Links */}
          <div>
            <h3 className="text-green-500 font-medium mb-4 font-sans">Socia Analytics®</h3>
            <ul className="space-y-3 font-sans">
              <li>
                <a href="#" className="text-white hover:text-green-500 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-500 text-sm">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Secondary Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-green-500 font-medium mb-4 font-sans">Other</h3>
              <ul className="space-y-3 font-sans">
                <li>
                  <a href="#" className="text-white hover:text-green-500 text-sm">
                    T&C
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-green-500 text-sm">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Logo at the bottom */}
        <div className="mt-20 flex justify-center">
          <div className="flex flex-col md:flex-row items-center">
            <span className="text-8xl md:text-7xl font-bold text-green-500">SA</span>
            <span className="mt-2 md:mt-0 ml-0 md:ml-5 text-8xl md:text-5xl font-bold text-white tracking-tight">SociaAnalytics</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
