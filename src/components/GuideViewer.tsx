import React, { useState } from 'react';
import { 
  Compass, HeartPulse, Home, Snowflake, Users, AlertTriangle, 
  CalendarClock, ShieldAlert, Sparkles, Wheat, Skull, Flame, Crown, Anchor, 
  ChevronDown, ChevronUp, Star, Lightbulb, AlertCircle, CheckCircle2, Shield
} from 'lucide-react';
import { GuideSection, GuideLevel } from '../types';

interface GuideViewerProps {
  guides: GuideSection[];
  guideLevel: GuideLevel;
  searchQuery: string;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="h-5 w-5" />,
  HeartPulse: <HeartPulse className="h-5 w-5" />,
  Home: <Home className="h-5 w-5" />,
  Snowflake: <Snowflake className="h-5 w-5" />,
  Users: <Users className="h-5 w-5" />,
  AlertTriangle: <AlertTriangle className="h-5 w-5" />,
  CalendarClock: <CalendarClock className="h-5 w-5" />,
  ShieldAlert: <ShieldAlert className="h-5 w-5" />,
  Sparkles: <Sparkles className="h-5 w-5" />,
  Wheat: <Wheat className="h-5 w-5" />,
  Skull: <Skull className="h-5 w-5" />,
  Flame: <Flame className="h-5 w-5" />,
  Crown: <Crown className="h-5 w-5" />,
  Anchor: <Anchor className="h-5 w-5" />
};

export const GuideViewer: React.FC<GuideViewerProps> = ({
  guides,
  guideLevel,
  searchQuery,
  favorites,
  toggleFavorite,
}) => {
  // Store expanded state per guide ID; default to all expanded
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedMap(prev => ({
      ...prev,
      [id]: prev[id] === undefined ? false : !prev[id]
    }));
  };

  const filteredGuides = guides.filter(guide => {
    // Level filter
    if (guideLevel !== 'all' && guide.level !== guideLevel) {
      return false;
    }
    // Search filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = guide.title.toLowerCase().includes(q);
      const matchSub = guide.subtitle.toLowerCase().includes(q);
      const matchOverview = guide.overview.toLowerCase().includes(q);
      const matchPoints = guide.keyPoints.some(kp => 
        kp.heading.toLowerCase().includes(q) || 
        kp.description.toLowerCase().includes(q) ||
        kp.items?.some(i => i.toLowerCase().includes(q))
      );
      return matchTitle || matchSub || matchOverview || matchPoints;
    }
    return true;
  });

  const getLevelBadge = (level: GuideSection['level']) => {
    switch (level) {
      case 'pemula':
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-[#238636]/40 bg-[#142817] px-2.5 py-0.5 text-xs font-medium text-[#7ee787]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#238636]"></span>
            Tingkat Pemula
          </span>
        );
      case 'menengah':
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-[#d4af37]/40 bg-[#291f0c] px-2.5 py-0.5 text-xs font-medium text-[#f2b84b]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5a93c]"></span>
            Tingkat Menengah
          </span>
        );
      case 'ahli':
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-[#c45a4a]/40 bg-[#2b1212] px-2.5 py-0.5 text-xs font-medium text-[#f87171]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c45a4a]"></span>
            Tingkat Ahli / Endgame
          </span>
        );
    }
  };

  if (filteredGuides.length === 0) {
    return (
      <div className="rounded-xl border border-[#332b1e] bg-[#1a1610] p-10 text-center text-[#9c917b]">
        <p className="text-base font-medium">Tidak ada panduan yang cocok dengan pencarian "{searchQuery}".</p>
        <p className="mt-1 text-sm text-[#736855]">Coba ubah kata kunci atau ganti filter tingkat kesulitan.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Quick guide overview banner */}
      <div className="rounded-xl border border-[#3a3020] bg-gradient-to-r from-[#201a12] via-[#261f14] to-[#1c1710] p-4 sm:p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#f5ecd3]">
              Kurikulum Survival The Constant
            </h2>
            <p className="text-xs sm:text-sm text-[#a89d84]">
              {guideLevel === 'all' && 'Menampilkan seluruh jenjang: Pemula (Day 1-35), Menengah (Day 36-100), dan Ahli (Endgame).'}
              {guideLevel === 'pemula' && 'Fokus Pemula: Memahami statistik, hari-hari pertama, pembuatan base, dan bertahan di musim dingin pertama.'}
              {guideLevel === 'menengah' && 'Fokus Menengah: 4 musim berputar, kiting bos musiman, menembus gua (Caves), dan pertanian sayur raksasa.'}
              {guideLevel === 'ahli' && 'Fokus Ahli: Penaklukan Ruins, Raid Bosses (Dragonfly, Bee Queen, Klaus), Ancient Fuelweaver, dan Pulau Bulan.'}
            </p>
          </div>
          <div className="text-xs font-mono text-[#d4af37] bg-[#16120b] border border-[#3d3322] px-3 py-1.5 rounded-md self-start sm:self-auto">
            {filteredGuides.length} Panduan Tersedia
          </div>
        </div>
      </div>

      {/* Guide Cards */}
      <div className="space-y-5">
        {filteredGuides.map((guide) => {
          const isExpanded = expandedMap[guide.id] !== false; // default expanded
          const isFav = favorites.includes(guide.id);

          return (
            <article
              key={guide.id}
              className="rounded-xl border border-[#332a1b] bg-[#1c1811] shadow-md transition-all hover:border-[#4d3f2a]"
            >
              {/* Header card */}
              <div className="p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[#4d3d25] bg-[#272016] text-[#d4af37]">
                      {ICON_MAP[guide.iconName] || <Compass className="h-5 w-5" />}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        {getLevelBadge(guide.level)}
                        {guide.estimatedDays && (
                          <span className="rounded-md bg-[#282115] px-2 py-0.5 font-mono text-[11px] text-[#baa784] border border-[#3b301e]">
                            ⏱️ {guide.estimatedDays}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1.5 font-serif text-lg sm:text-xl font-bold text-[#f2ead2]">
                        {guide.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#a89d84]">
                        {guide.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-start">
                    <button
                      onClick={() => toggleFavorite(guide.id)}
                      title={isFav ? "Hapus dari favorit" : "Tambah ke favorit"}
                      className={`rounded-lg border p-2 transition-colors ${
                        isFav
                          ? 'border-[#facc15]/50 bg-[#2d2711] text-[#facc15]'
                          : 'border-[#382e1d] bg-[#1e1911] text-[#7d715a] hover:text-[#d4af37]'
                      }`}
                    >
                      <Star className={`h-4 w-4 ${isFav ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => toggleExpand(guide.id)}
                      className="flex items-center gap-1.5 rounded-lg border border-[#382e1d] bg-[#1e1911] px-3 py-2 text-xs font-medium text-[#b5a990] hover:bg-[#272116] hover:text-[#f2ead2]"
                    >
                      <span>{isExpanded ? 'Tutup' : 'Buka Detail'}</span>
                      {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[#c7bc9f]">
                  {guide.overview}
                </p>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="border-t border-[#2d2518] bg-[#17130d]/70 p-4 sm:p-5 space-y-4">
                  {/* Key Points */}
                  <div className="space-y-3.5">
                    {guide.keyPoints.map((point, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-[#2d2518] bg-[#201a12] p-4"
                      >
                        <h4 className="font-sans font-semibold text-sm sm:text-base text-[#e5a93c]">
                          {point.heading}
                        </h4>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#dcd1b8]">
                          {point.description}
                        </p>

                        {/* List items if any */}
                        {point.items && point.items.length > 0 && (
                          <ul className="mt-2.5 space-y-1.5 pl-1">
                            {point.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="flex items-start gap-2 text-xs sm:text-sm text-[#b8ac92]"
                              >
                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#a89053]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Warning Box */}
                        {point.warning && (
                          <div className="mt-3 flex items-start gap-2 rounded-md border border-[#c45a4a]/40 bg-[#2b1414] p-2.5 text-xs text-[#fca5a5]">
                            <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#f87171]" />
                            <div>
                              <strong className="font-semibold text-[#fecaca]">Peringatan Kritis: </strong>
                              <span>{point.warning}</span>
                            </div>
                          </div>
                        )}

                        {/* Pro Tip Box */}
                        {point.proTip && (
                          <div className="mt-3 flex items-start gap-2 rounded-md border border-[#d4af37]/40 bg-[#292211] p-2.5 text-xs text-[#fde047]">
                            <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#eab308]" />
                            <div>
                              <strong className="font-semibold text-[#fef08a]">Pro Tip: </strong>
                              <span>{point.proTip}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Recommended Items */}
                  {guide.recommendedItems && guide.recommendedItems.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#292015]">
                      <span className="flex items-center gap-1 text-xs font-semibold text-[#a89d84]">
                        <Shield className="h-3.5 w-3.5 text-[#d4af37]" />
                        Item Sangat Disarankan:
                      </span>
                      {guide.recommendedItems.map((item, i) => (
                        <span
                          key={i}
                          className="rounded-md border border-[#423724] bg-[#221c12] px-2 py-0.5 text-xs font-mono text-[#dcd1b8]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};
