import { useState } from 'react';
import LauncherCard from './components/LauncherCard';
import Header from './components/Header';
import { launchers, Launcher } from './data/launchers';

function App() {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['all', ...new Set(launchers.map(l => l.category))];

  const filteredLaunchers = launchers.filter((launcher: Launcher) => {
    const matchesCategory = filter === 'all' || launcher.category === filter;
    const matchesSearch = launcher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          launcher.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white relative overflow-x-hidden">
      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0052FF 1px, transparent 1px),
            linear-gradient(to bottom, #0052FF 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gradient orbs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#0052FF] rounded-full blur-[200px] opacity-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00D4FF] rounded-full blur-[150px] opacity-5 pointer-events-none" />

      <div className="relative z-10">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Hero Section */}
          <section className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0052FF]/30 bg-[#0052FF]/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="text-xs md:text-sm text-[#00D4FF] font-mono uppercase tracking-wider">Live on Base</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">Base Chain</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#00D4FF]">Launchers</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed px-4">
              Your complete directory of token launchers on Base. Discover, compare, and launch your next project on the fastest-growing L2.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative mb-8">
              <input
                type="text"
                placeholder="Search launchers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-4 bg-[#12121A] border border-[#1E1E2A] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0052FF] transition-colors font-mono text-sm"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 md:px-5 py-2.5 rounded-lg font-mono text-xs md:text-sm uppercase tracking-wider transition-all duration-300 ${
                    filter === cat
                      ? 'bg-[#0052FF] text-white shadow-[0_0_20px_rgba(0,82,255,0.4)]'
                      : 'bg-[#12121A] text-gray-400 border border-[#1E1E2A] hover:border-[#0052FF]/50 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
            {[
              { label: 'Total Launchers', value: launchers.length },
              { label: 'Categories', value: categories.length - 1 },
              { label: 'Network', value: 'Base L2' },
              { label: 'Status', value: 'Active' }
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#12121A] border border-[#1E1E2A] rounded-xl p-4 md:p-5 text-center"
              >
                <div className="text-xl md:text-2xl font-bold text-white font-mono">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Launchers Grid */}
          <section>
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold">
                <span className="text-[#0052FF]">//</span> All Launchers
              </h2>
              <span className="text-sm text-gray-500 font-mono">{filteredLaunchers.length} found</span>
            </div>

            {filteredLaunchers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredLaunchers.map((launcher, index) => (
                  <LauncherCard key={launcher.name} launcher={launcher} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-400">No launchers found matching your criteria</p>
              </div>
            )}
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#1E1E2A] mt-16 md:mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#0052FF] to-[#00D4FF]" />
                <span className="font-mono text-sm text-gray-400">Base Launchers Directory</span>
              </div>
              <p className="text-xs text-gray-600 font-mono">
                Requested by @vladyy__01 · Built by @clonkbot
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
