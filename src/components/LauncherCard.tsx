import { Launcher } from '../data/launchers';

interface LauncherCardProps {
  launcher: Launcher;
  index: number;
}

export default function LauncherCard({ launcher, index }: LauncherCardProps) {
  const categoryColors: Record<string, string> = {
    'Fair Launch': 'text-green-400 border-green-400/30 bg-green-400/5',
    'Bonding Curve': 'text-[#00D4FF] border-[#00D4FF]/30 bg-[#00D4FF]/5',
    'Presale': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
    'Launchpad': 'text-purple-400 border-purple-400/30 bg-purple-400/5',
    'Meme': 'text-pink-400 border-pink-400/30 bg-pink-400/5',
    'DEX': 'text-orange-400 border-orange-400/30 bg-orange-400/5'
  };

  return (
    <div
      className="group relative bg-[#12121A] border border-[#1E1E2A] rounded-2xl p-5 md:p-6 transition-all duration-500 hover:border-[#0052FF]/50 hover:shadow-[0_0_40px_rgba(0,82,255,0.15)]"
      style={{
        animationDelay: `${index * 50}ms`
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0052FF]/0 via-[#0052FF]/5 to-[#00D4FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#1E1E2A] to-[#12121A] border border-[#2A2A3A] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
            {launcher.icon}
          </div>
          <div>
            <h3 className="font-bold text-white text-base md:text-lg group-hover:text-[#00D4FF] transition-colors">{launcher.name}</h3>
            <span className={`inline-block text-[10px] md:text-xs px-2 py-0.5 rounded-full border font-mono uppercase tracking-wider ${categoryColors[launcher.category] || 'text-gray-400 border-gray-400/30'}`}>
              {launcher.category}
            </span>
          </div>
        </div>
        {launcher.verified && (
          <div className="w-6 h-6 rounded-full bg-[#0052FF]/20 flex items-center justify-center" title="Verified">
            <svg className="w-3.5 h-3.5 text-[#0052FF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2 relative">
        {launcher.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-5">
        {launcher.features.slice(0, 3).map((feature, i) => (
          <span
            key={i}
            className="px-2.5 py-1 text-[10px] md:text-xs bg-[#1E1E2A] text-gray-400 rounded-md font-mono"
          >
            {feature}
          </span>
        ))}
        {launcher.features.length > 3 && (
          <span className="px-2.5 py-1 text-[10px] md:text-xs text-gray-500 font-mono">
            +{launcher.features.length - 3} more
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-[#0A0A0F] rounded-lg p-3">
          <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-1">Tokens Launched</div>
          <div className="text-base md:text-lg font-bold text-white font-mono">{launcher.tokensLaunched}</div>
        </div>
        <div className="bg-[#0A0A0F] rounded-lg p-3">
          <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-1">TVL</div>
          <div className="text-base md:text-lg font-bold text-white font-mono">{launcher.tvl}</div>
        </div>
      </div>

      {/* Action */}
      <a
        href={launcher.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 md:py-3.5 rounded-xl bg-[#1E1E2A] text-white font-medium text-sm transition-all duration-300 group-hover:bg-[#0052FF] group-hover:shadow-[0_0_20px_rgba(0,82,255,0.3)]"
      >
        <span>Visit Platform</span>
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
