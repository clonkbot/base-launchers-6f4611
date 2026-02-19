import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#1E1E2A] bg-[#0A0A0F]/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#0052FF] to-[#00D4FF] flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-[#0A0A0F] animate-pulse" />
            </div>
            <div>
              <h1 className="font-bold text-lg md:text-xl text-white">Base Launchers</h1>
              <p className="text-[10px] md:text-xs text-gray-500 font-mono tracking-wider">CHAIN_ID: 8453</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Directory</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Submit Launcher</a>
            <a
              href="https://base.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0052FF] text-white text-sm font-medium hover:bg-[#0052FF]/90 transition-colors"
            >
              <span>Visit Base</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#1E1E2A] py-4">
            <nav className="flex flex-col gap-3">
              <a href="#" className="px-4 py-3 text-gray-400 hover:text-white hover:bg-[#12121A] rounded-lg transition-colors">Directory</a>
              <a href="#" className="px-4 py-3 text-gray-400 hover:text-white hover:bg-[#12121A] rounded-lg transition-colors">Submit Launcher</a>
              <a
                href="https://base.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0052FF] text-white text-sm font-medium"
              >
                <span>Visit Base</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
