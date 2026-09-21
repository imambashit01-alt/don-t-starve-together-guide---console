import React, { useState, useMemo } from 'react';
import { 
  Sun, Sparkles, Skull, Trees, Droplets, Wheat, Mountain, Moon, Anchor, 
  AlertTriangle, Compass, ShieldAlert, Lightbulb, CheckCircle2, MapPin, 
  Thermometer, Calendar, Shield, Search, ChevronDown, ChevronUp, AlertCircle
} from 'lucide-react';
import { BiomeInfo } from '../types';
import { BIOMES_DATA } from '../data/biomesData';

interface BiomesViewerProps {
  searchQuery: string;
}

const BIOME_ICONS: Record<string, React.ReactNode> = {
  Sun: <Sun className="h-6 w-6 text-[#f59e0b]" />,
  Sparkles: <Sparkles className="h-6 w-6 text-[#a855f7]" />,
  Skull: <Skull className="h-6 w-6 text-[#ef4444]" />,
  Trees: <Trees className="h-6 w-6 text-[#22c55e]" />,
  Droplets: <Droplets className="h-6 w-6 text-[#06b6d4]" />,
  Wheat: <Wheat className="h-6 w-6 text-[#eab308]" />,
  Mountain: <Mountain className="h-6 w-6 text-[#94a3b8]" />,
  Moon: <Moon className="h-6 w-6 text-[#38bdf8]" />,
  Anchor: <Anchor className="h-6 w-6 text-[#3b82f6]" />
};

export const BiomesViewer: React.FC<BiomesViewerProps> = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Surface' | 'Caves' | 'Ruins' | 'Ocean'>('all');
  const [expandedBiomeId, setExpandedBiomeId] = useState<string | null>(null);

  const filteredBiomes = useMemo(() => {
    return BIOMES_DATA.filter(biome => {
      // Category filter
      if (selectedCategory !== 'all' && biome.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = biome.name.toLowerCase().includes(q);
        const matchSubtitle = biome.subtitle.toLowerCase().includes(q);
        const matchDesc = biome.description.toLowerCase().includes(q);
        const matchResource = biome.resources.some(r => r.name.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q));
        const matchRisk = biome.risks.some(r => r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q));
        const matchStructure = biome.structures.some(s => s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q));
        const matchMob = biome.nativeMobs.some(m => m.toLowerCase().includes(q));
        return matchName || matchSubtitle || matchDesc || matchResource || matchRisk || matchStructure || matchMob;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedBiomeId(prev => prev === id ? null : id);
  };

  const getDangerBadge = (level: number) => {
    switch (level) {
      case 1:
      case 2:
        return (
          <span className="flex items-center gap-1 rounded bg-[#132817] px-2 py-0.5 text-[11px] font-bold text-[#7ee787] border border-[#238636]/50">
            <span>Tingkat Bahaya Rendah</span>
          </span>
        );
      case 3:
        return (
          <span className="flex items-center gap-1 rounded bg-[#2b200e] px-2 py-0.5 text-[11px] font-bold text-[#f2b84b] border border-[#d4af37]/50">
            <span>Tingkat Bahaya Sedang</span>
          </span>
        );
      case 4:
        return (
          <span className="flex items-center gap-1 rounded bg-[#331713] px-2 py-0.5 text-[11px] font-bold text-[#f87171] border border-[#c45a4a]/50">
            <span>Tingkat Bahaya Tinggi</span>
          </span>
        );
      case 5:
      default:
        return (
          <span className="flex items-center gap-1 rounded bg-[#3d0e0e] px-2 py-0.5 text-[11px] font-bold text-[#fca5a5] border border-[#ef4444] animate-pulse">
            <AlertTriangle className="h-3 w-3 text-[#ef4444]" />
            <span>Bahaya Fatal (Endgame)</span>
          </span>
        );
    }
  };

  const getRiskSeverityBadge = (severity: 'Rendah' | 'Sedang' | 'Tinggi' | 'Fatal') => {
    switch (severity) {
      case 'Fatal':
        return <span className="rounded bg-[#421212] px-1.5 py-0.2 text-[10px] font-bold text-[#fca5a5] border border-[#ef4444]/60">Bahaya Fatal</span>;
      case 'Tinggi':
        return <span className="rounded bg-[#381a14] px-1.5 py-0.2 text-[10px] font-bold text-[#f87171] border border-[#c45a4a]/50">Risiko Tinggi</span>;
      case 'Sedang':
        return <span className="rounded bg-[#2e210e] px-1.5 py-0.2 text-[10px] font-medium text-[#f2b84b] border border-[#d4af37]/40">Risiko Sedang</span>;
      case 'Rendah':
      default:
        return <span className="rounded bg-[#17251a] px-1.5 py-0.2 text-[10px] font-medium text-[#7ee787] border border-[#238636]/40">Risiko Rendah</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Overview Banner */}
      <div className="rounded-xl border border-[#3e3220] bg-gradient-to-br from-[#211a11] via-[#1a140d] to-[#120f09] p-4 sm:p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Compass className="h-5 w-5 text-[#d4af37]" />
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#f2ead2]">
                Panduan Bioma, Ekologi &amp; Sumber Daya Wilayah Constant
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#a89d84]">
              Setiap bioma di Don't Starve Together memiliki ekosistem unik, bahaya iklim, dan struktur purba. Pelajari lokasi sumber daya kritis seperti Thulecite, Reeds, Emas, dan Kaktus untuk mempercepat ekspansi base.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#d4af37] bg-[#16120b] border border-[#3d311e] px-3.5 py-2 rounded-lg self-start sm:self-auto">
            <MapPin className="h-4 w-4" />
            <span>{BIOMES_DATA.length} Bioma Terdata</span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        {[
          { id: 'all', label: 'Semua Bioma' },
          { id: 'Surface', label: 'Permukaan (Surface)' },
          { id: 'Caves', label: 'Gua Bawah Tanah (The Caves)' },
          { id: 'Ruins', label: 'Reruntuhan Purba (The Ruins)' },
          { id: 'Ocean', label: 'Samudra & Kepulauan (Ocean)' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as any)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
              selectedCategory === cat.id
                ? 'border border-[#d4af37]/60 bg-[#2d2214] text-[#f5ebd3] font-semibold shadow-sm'
                : 'border border-[#2e2417] bg-[#18130c] text-[#a1957c] hover:bg-[#221a10] hover:text-[#f0e5ce]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Biomes Listing */}
      {filteredBiomes.length === 0 ? (
        <div className="rounded-xl border border-[#332a1d] bg-[#19140e] p-10 text-center text-[#9c917b]">
          <AlertCircle className="mx-auto h-8 w-8 text-[#5a4a33] mb-2" />
          <p className="text-base font-semibold text-[#f0e6ce]">
            Tidak ada bioma yang cocok dengan pencarian "{searchQuery}".
          </p>
          <p className="mt-1 text-xs text-[#786b55]">
            Coba gunakan kata kunci seperti Desert, Caves, Ruins, Reeds, Gold, atau Swamp.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {filteredBiomes.map(biome => {
            const isExpanded = expandedBiomeId === biome.id || expandedBiomeId === null; // default expanded

            return (
              <article
                key={biome.id}
                id={biome.id}
                className="rounded-xl border border-[#332819] bg-[#1b1610] shadow-md transition-all hover:border-[#4d3d27]"
              >
                {/* Header Summary */}
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#4d3d27] bg-[#241c12] shadow-inner">
                        {BIOME_ICONS[biome.iconName] || <Compass className="h-6 w-6 text-[#d4af37]" />}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded bg-[#261e13] px-2 py-0.5 font-mono text-[10px] text-[#baa884] border border-[#3b2f1d]">
                            {biome.category.toUpperCase()}
                          </span>
                          {getDangerBadge(biome.dangerRating)}
                        </div>
                        <h3 className="mt-1 font-serif text-lg sm:text-xl font-bold text-[#f5ebd3]">
                          {biome.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#baa98a]">
                          {biome.subtitle}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpand(biome.id)}
                      className="flex items-center gap-1.5 rounded-lg border border-[#3b2f1d] bg-[#20180f] px-3 py-1.5 text-xs text-[#dcd1b8] hover:bg-[#2b2115] transition-colors self-end sm:self-start"
                    >
                      <span>{isExpanded ? 'Tutup Detail' : 'Buka Detail Bioma'}</span>
                      {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#c7bc9f]">
                    {biome.description}
                  </p>

                  {/* Quick climate pills */}
                  <div className="mt-3.5 flex flex-wrap items-center gap-2 pt-2 border-t border-[#292014] text-xs">
                    {biome.temperatureRisk && (
                      <div className="flex items-center gap-1.5 rounded-md bg-[#16120b] border border-[#332616] px-2.5 py-1 text-[#e5a93c]">
                        <Thermometer className="h-3.5 w-3.5" />
                        <span className="text-[#a4977e]">Suhu:</span>
                        <strong className="text-[#f5ecd3] font-normal">{biome.temperatureRisk}</strong>
                      </div>
                    )}
                    {biome.bestSeason && (
                      <div className="flex items-center gap-1.5 rounded-md bg-[#16120b] border border-[#332616] px-2.5 py-1 text-[#38bdf8]">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="text-[#a4977e]">Waktu Terbaik:</span>
                        <strong className="text-[#f5ecd3] font-normal">{biome.bestSeason}</strong>
                      </div>
                    )}
                  </div>
                </div>

                {/* Expanded In-Depth Details */}
                {isExpanded && (
                  <div className="border-t border-[#2d2316] bg-[#16110b]/80 p-4 sm:p-5 space-y-4">
                    {/* 3 Columns: Resources, Risks, Unique Structures */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {/* Column 1: Resource Gathering */}
                      <div className="rounded-lg border border-[#302617] bg-[#1e170f] p-3.5 space-y-2.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#7ee787] border-b border-[#2e2316] pb-2">
                          <Wheat className="h-4 w-4" />
                          <span>Sumber Daya Penting (Resources)</span>
                        </div>
                        <div className="space-y-2">
                          {biome.resources.map((res, i) => (
                            <div key={i} className="text-xs rounded bg-[#16120b] p-2 border border-[#2b2114]">
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-semibold text-[#f5ebd3]">{res.name}</span>
                                <span className={`text-[10px] font-mono px-1 rounded ${
                                  res.rarity === 'Langka' 
                                    ? 'bg-[#3b1c1c] text-[#fca5a5]' 
                                    : res.rarity === 'Sedang'
                                    ? 'bg-[#2b2111] text-[#f2b84b]'
                                    : 'bg-[#152618] text-[#7ee787]'
                                }`}>
                                  {res.rarity}
                                </span>
                              </div>
                              <p className="mt-0.5 text-[11px] leading-relaxed text-[#a89c83]">
                                {res.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Survival Risks */}
                      <div className="rounded-lg border border-[#381c1c] bg-[#1e1313] p-3.5 space-y-2.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#f87171] border-b border-[#3b1d1d] pb-2">
                          <ShieldAlert className="h-4 w-4" />
                          <span>Risiko &amp; Bahaya Bertahan Hidup</span>
                        </div>
                        <div className="space-y-2">
                          {biome.risks.map((risk, i) => (
                            <div key={i} className="text-xs rounded bg-[#170e0e] p-2 border border-[#381c1c]">
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-semibold text-[#fecaca]">{risk.title}</span>
                                {getRiskSeverityBadge(risk.severity)}
                              </div>
                              <p className="mt-0.5 text-[11px] leading-relaxed text-[#caa7a7]">
                                {risk.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Column 3: Unique Structures & Spawns */}
                      <div className="rounded-lg border border-[#302617] bg-[#1e170f] p-3.5 space-y-2.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#d4af37] border-b border-[#2e2316] pb-2">
                          <MapPin className="h-4 w-4" />
                          <span>Struktur Unik &amp; Set-piece</span>
                        </div>
                        <div className="space-y-2">
                          {biome.structures.map((struct, i) => (
                            <div key={i} className="text-xs rounded bg-[#16120b] p-2 border border-[#2b2114]">
                              <span className="font-semibold text-[#f5ebd3] block">{struct.name}</span>
                              <p className="mt-0.5 text-[11px] leading-relaxed text-[#a89c83]">
                                {struct.desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Native Mobs Chips */}
                        <div className="pt-2 border-t border-[#292014]">
                          <span className="text-[11px] font-semibold text-[#8b7e67] block mb-1">
                            Monster &amp; Fauna Pribumi:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {biome.nativeMobs.map((mob, i) => (
                              <span
                                key={i}
                                className="rounded bg-[#15110a] px-1.5 py-0.5 text-[10px] font-mono text-[#dcd1b8] border border-[#2d2215]"
                              >
                                {mob}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Veteran Pro Tips Box */}
                    <div className="rounded-lg border border-[#3d311e] bg-[#19140c] p-3 text-xs text-[#dcd1b8] space-y-1.5">
                      <div className="flex items-center gap-1.5 font-bold text-[#facc15]">
                        <Lightbulb className="h-4 w-4 text-[#eab308]" />
                        <span>Tips Pro Eksplorasi {biome.name}:</span>
                      </div>
                      <ul className="space-y-1 pl-5 list-disc text-[11px] sm:text-xs text-[#b8ac91] leading-relaxed">
                        {biome.survivalTips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
