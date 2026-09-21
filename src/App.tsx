import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GuideViewer } from './components/GuideViewer';
import { ConsoleViewer } from './components/ConsoleViewer';
import { CrockpotViewer } from './components/CrockpotViewer';
import { KitingViewer } from './components/KitingViewer';
import { FavoritesViewer } from './components/FavoritesViewer';
import { BiomesViewer } from './components/BiomesViewer';
import { CraftingTreeViewer } from './components/CraftingTreeViewer';
import { CharactersViewer } from './components/CharactersViewer';
import { EarlyGameChecklist } from './components/EarlyGameChecklist';
import { GUIDES_DATA } from './data/guidesData';
import { COMMANDS_DATA } from './data/commandsData';
import { CROCKPOT_RECIPES } from './data/crockpotData';
import { KITING_DATA } from './data/kitingData';
import { MainTab, GuideLevel } from './types';
import { ArrowUp, Flame, CheckSquare, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('guide');
  const [guideLevel, setGuideLevel] = useState<GuideLevel>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [showChecklistModal, setShowChecklistModal] = useState<boolean>(false);

  // Favorites state persisted to localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dst_guide_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('dst_guide_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites', e);
    }
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  // Track scroll position for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#12100c] text-[#ece4d0] flex flex-col font-sans selection:bg-[#c9a227] selection:text-[#12100c]">
      {/* Header with Navigation and Search */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        guideLevel={guideLevel}
        setGuideLevel={setGuideLevel}
        favoriteCount={favorites.length}
        showChecklistModal={showChecklistModal}
        setShowChecklistModal={setShowChecklistModal}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 md:px-8 md:py-8 space-y-6">
        {/* Toggleable Early Game Checklist Banner or Modal view */}
        {showChecklistModal && (
          <div className="relative animate-in fade-in duration-200">
            <EarlyGameChecklist onClose={() => setShowChecklistModal(false)} />
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="space-y-6">
            {!showChecklistModal && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-[#3d311e] bg-gradient-to-r from-[#1c160e] to-[#16120b] p-3.5 sm:p-4 text-xs text-[#dcd1b8]">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#271d10] text-[#facc15] border border-[#4d3a20]">
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#f5ebd3] text-sm">
                      Checklist Survival Awal Pemula (Day 1–20)
                    </h4>
                    <p className="text-[#a4977f]">
                      Temukan lokasi base strategis, buat tas punggung (backpack), dan racik Crock Pot sebelum musim dingin tiba.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowChecklistModal(true)}
                  className="rounded-lg border border-[#d4af37]/60 bg-[#2b2112] px-3 py-1.5 font-bold text-[#f5ebd3] hover:bg-[#382b18] transition-all self-start sm:self-auto shadow-sm"
                >
                  Buka Checklist Interaktif
                </button>
              </div>
            )}

            <GuideViewer
              guides={GUIDES_DATA}
              guideLevel={guideLevel}
              searchQuery={searchQuery}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          </div>
        )}

        {activeTab === 'characters' && (
          <CharactersViewer
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'biomes' && (
          <BiomesViewer
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'crafting' && (
          <CraftingTreeViewer
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'crockpot' && (
          <CrockpotViewer
            recipes={CROCKPOT_RECIPES}
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'kiting' && (
          <KitingViewer
            enemies={KITING_DATA}
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'commands' && (
          <ConsoleViewer
            categories={COMMANDS_DATA}
            searchQuery={searchQuery}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}

        {activeTab === 'favorites' && (
          <FavoritesViewer
            favorites={favorites}
            guides={GUIDES_DATA}
            categories={COMMANDS_DATA}
            toggleFavorite={toggleFavorite}
            clearAllFavorites={clearAllFavorites}
          />
        )}
      </main>

      {/* Back to top floating button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#4d3e27] bg-[#221c13] text-[#d4af37] shadow-xl hover:bg-[#2d2417] hover:border-[#c9a227] transition-all"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-[#261f15] bg-[#0d0c09] py-8 text-center text-xs text-[#7e735d]">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm text-[#b8ab91]">
            <Flame className="h-4 w-4 text-[#e5a93c]" />
            <span className="font-serif font-bold text-[#e5dbbf]">Don't Starve Together Guide &amp; Console</span>
          </div>
          <p>
            Panduan lengkap pemula, menengah, dan ahli beserta kumpulan perintah konsol terlengkap berbahasa Indonesia.
          </p>
          <p className="text-[#595241]">
            Don't Starve Together merupakan merek dagang dari Klei Entertainment Inc. Konten panduan komunitas di bawah lisensi CC-BY-SA.
          </p>
        </div>
      </footer>
    </div>
  );
}
