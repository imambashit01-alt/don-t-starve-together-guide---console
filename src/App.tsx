import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GuideViewer } from './components/GuideViewer';
import { ConsoleViewer } from './components/ConsoleViewer';
import { CrockpotViewer } from './components/CrockpotViewer';
import { KitingViewer } from './components/KitingViewer';
import { FavoritesViewer } from './components/FavoritesViewer';
import { GUIDES_DATA } from './data/guidesData';
import { COMMANDS_DATA } from './data/commandsData';
import { CROCKPOT_RECIPES } from './data/crockpotData';
import { KITING_DATA } from './data/kitingData';
import { MainTab, GuideLevel } from './types';
import { ArrowUp, Flame, BookOpen, UtensilsCrossed, Swords, Terminal } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('guide');
  const [guideLevel, setGuideLevel] = useState<GuideLevel>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

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
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 md:px-8 md:py-8">
        {activeTab === 'guide' && (
          <GuideViewer
            guides={GUIDES_DATA}
            guideLevel={guideLevel}
            searchQuery={searchQuery}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
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
