import React from 'react';
import { 
  Flame, Search, BookOpen, UtensilsCrossed, Swords, 
  Terminal, Star, Compass, Layers, Users, CheckSquare 
} from 'lucide-react';
import { MainTab, GuideLevel } from '../types';

interface HeaderProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  guideLevel: GuideLevel;
  setGuideLevel: (level: GuideLevel) => void;
  favoriteCount: number;
  showChecklistModal?: boolean;
  setShowChecklistModal?: (show: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  guideLevel,
  setGuideLevel,
  favoriteCount,
  showChecklistModal,
  setShowChecklistModal,
}) => {
  return (
    <header className="border-b border-[#2e261a] bg-gradient-to-b from-[#1b1711] to-[#14110c] px-4 py-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top bar with title and search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#4a3d28] bg-[#221c13] shadow-md shadow-black/40 text-[#d4af37]">
              <Flame className="h-7 w-7 animate-pulse text-[#e5a93c]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#f2ead2]">
                  Don't Starve Together
                </h1>
                <span className="hidden sm:inline-block rounded border border-[#52442b] bg-[#292217] px-2 py-0.5 text-[11px] font-mono text-[#d4af37]">
                  vIndo 2026
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#a89d84]">
                Panduan Komprehensif Survival • Bioma • Karakter • Pohon Sains • Resep Masak &amp; Konsol
              </p>
            </div>
          </div>

          {/* Quick Action & Search Bar */}
          <div className="flex items-center gap-2.5 w-full md:w-auto">
            {setShowChecklistModal && (
              <button
                onClick={() => setShowChecklistModal(!showChecklistModal)}
                className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition-all whitespace-nowrap ${
                  showChecklistModal
                    ? 'border-[#facc15] bg-[#2d2413] text-[#facc15]'
                    : 'border-[#3d3322] bg-[#1a150e] text-[#d4af37] hover:bg-[#251e13]'
                }`}
                title="Buka Checklist Misi Awal Pemula (Day 1-20)"
              >
                <CheckSquare className="h-4 w-4 text-[#e5a93c]" />
                <span className="hidden sm:inline">Checklist</span> Pemula
              </button>
            )}

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8c8069]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari karakter, bioma, pohon riset, resep..."
                className="w-full rounded-lg border border-[#3d3322] bg-[#1a150e] py-2 pl-9 pr-8 text-sm text-[#ece4d0] placeholder-[#7d715a] outline-none transition-colors focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8c8069] hover:text-[#ece4d0]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#2a2217] pt-3.5">
          <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveTab('guide')}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'guide'
                  ? 'border border-[#d4af37]/40 bg-[#2b2316] text-[#f5ebd3] shadow-sm font-semibold'
                  : 'text-[#a69a81] hover:bg-[#1f1911] hover:text-[#ece4d0]'
              }`}
            >
              <BookOpen className="h-4 w-4 text-[#d4af37]" />
              <span>Panduan Survival</span>
            </button>

            <button
              onClick={() => setActiveTab('characters')}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'characters'
                  ? 'border border-[#d4af37]/40 bg-[#2b2316] text-[#f5ebd3] shadow-sm font-semibold'
                  : 'text-[#a69a81] hover:bg-[#1f1911] hover:text-[#ece4d0]'
              }`}
            >
              <Users className="h-4 w-4 text-[#38bdf8]" />
              <span>Karakter DST</span>
            </button>

            <button
              onClick={() => setActiveTab('biomes')}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'biomes'
                  ? 'border border-[#d4af37]/40 bg-[#2b2316] text-[#f5ebd3] shadow-sm font-semibold'
                  : 'text-[#a69a81] hover:bg-[#1f1911] hover:text-[#ece4d0]'
              }`}
            >
              <Compass className="h-4 w-4 text-[#22c55e]" />
              <span>Bioma &amp; Ekologi</span>
            </button>

            <button
              onClick={() => setActiveTab('crafting')}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'crafting'
                  ? 'border border-[#d4af37]/40 bg-[#2b2316] text-[#f5ebd3] shadow-sm font-semibold'
                  : 'text-[#a69a81] hover:bg-[#1f1911] hover:text-[#ece4d0]'
              }`}
            >
              <Layers className="h-4 w-4 text-[#facc15]" />
              <span>Pohon Riset (Crafting)</span>
            </button>

            <button
              onClick={() => setActiveTab('crockpot')}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'crockpot'
                  ? 'border border-[#d4af37]/40 bg-[#2b2316] text-[#f5ebd3] shadow-sm font-semibold'
                  : 'text-[#a69a81] hover:bg-[#1f1911] hover:text-[#ece4d0]'
              }`}
            >
              <UtensilsCrossed className="h-4 w-4 text-[#e5a93c]" />
              <span>Crock Pot</span>
            </button>

            <button
              onClick={() => setActiveTab('kiting')}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'kiting'
                  ? 'border border-[#d4af37]/40 bg-[#2b2316] text-[#f5ebd3] shadow-sm font-semibold'
                  : 'text-[#a69a81] hover:bg-[#1f1911] hover:text-[#ece4d0]'
              }`}
            >
              <Swords className="h-4 w-4 text-[#c45a4a]" />
              <span>Kiting &amp; Boss</span>
            </button>

            <button
              onClick={() => setActiveTab('commands')}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'commands'
                  ? 'border border-[#d4af37]/40 bg-[#2b2316] text-[#f5ebd3] shadow-sm font-semibold'
                  : 'text-[#a69a81] hover:bg-[#1f1911] hover:text-[#ece4d0]'
              }`}
            >
              <Terminal className="h-4 w-4 text-[#60a5fa]" />
              <span>Perintah Konsol</span>
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'favorites'
                  ? 'border border-[#d4af37]/40 bg-[#2b2316] text-[#f5ebd3] shadow-sm font-semibold'
                  : 'text-[#a69a81] hover:bg-[#1f1911] hover:text-[#ece4d0]'
              }`}
            >
              <Star className="h-4 w-4 text-[#facc15]" />
              <span>Favorit</span>
              {favoriteCount > 0 && (
                <span className="rounded-full bg-[#d4af37]/20 px-1.5 py-0.2 text-[10px] font-semibold text-[#facc15]">
                  {favoriteCount}
                </span>
              )}
            </button>
          </nav>

          {/* Sub-level pills when on Guide tab */}
          {activeTab === 'guide' && (
            <div className="flex items-center gap-1 rounded-lg border border-[#2e261a] bg-[#16130d] p-1 text-xs">
              <span className="px-2 font-medium text-[#7d715a]">Tingkat:</span>
              <button
                onClick={() => setGuideLevel('all')}
                className={`rounded px-2.5 py-1 font-medium transition-colors ${
                  guideLevel === 'all'
                    ? 'bg-[#2e2417] text-[#f2ead2]'
                    : 'text-[#9c9077] hover:text-[#ece4d0]'
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setGuideLevel('pemula')}
                className={`flex items-center gap-1 rounded px-2.5 py-1 font-medium transition-colors ${
                  guideLevel === 'pemula'
                    ? 'bg-[#1b3420] text-[#7ee787] border border-[#238636]/40'
                    : 'text-[#9c9077] hover:text-[#ece4d0]'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#238636]"></span>
                Pemula
              </button>
              <button
                onClick={() => setGuideLevel('menengah')}
                className={`flex items-center gap-1 rounded px-2.5 py-1 font-medium transition-colors ${
                  guideLevel === 'menengah'
                    ? 'bg-[#3b2d13] text-[#f2b84b] border border-[#d4af37]/40'
                    : 'text-[#9c9077] hover:text-[#ece4d0]'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#e5a93c]"></span>
                Menengah
              </button>
              <button
                onClick={() => setGuideLevel('ahli')}
                className={`flex items-center gap-1 rounded px-2.5 py-1 font-medium transition-colors ${
                  guideLevel === 'ahli'
                    ? 'bg-[#3b1717] text-[#f87171] border border-[#c45a4a]/40'
                    : 'text-[#9c9077] hover:text-[#ece4d0]'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#c45a4a]"></span>
                Ahli
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
