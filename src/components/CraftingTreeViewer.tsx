import React, { useState, useMemo } from 'react';
import { 
  Cpu, Sparkles, Sword, Shield, Hammer, Lightbulb, 
  ArrowRight, Search, Zap, Layers, ChevronRight, Check, Eye
} from 'lucide-react';
import { ScienceStationId, CraftingItem, CraftingStation } from '../types';
import { CRAFTING_STATIONS, CRAFTING_ITEMS } from '../data/craftingTreeData';

interface CraftingTreeViewerProps {
  searchQuery: string;
}

export const CraftingTreeViewer: React.FC<CraftingTreeViewerProps> = ({ searchQuery }) => {
  const [selectedStationId, setSelectedStationId] = useState<ScienceStationId | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const selectedStation = useMemo(() => {
    if (selectedStationId === 'all') return null;
    return CRAFTING_STATIONS.find(s => s.id === selectedStationId) || null;
  }, [selectedStationId]);

  // Filter items based on station, category, and search query
  const filteredItems = useMemo(() => {
    return CRAFTING_ITEMS.filter(item => {
      // Station filter
      if (selectedStationId !== 'all' && item.stationId !== selectedStationId) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchStation = item.stationName.toLowerCase().includes(q);
        const matchCategory = item.category.toLowerCase().includes(q);
        const matchIngredients = item.ingredients.some(i => i.item.toLowerCase().includes(q));
        const matchPerks = item.perks?.toLowerCase().includes(q) || false;
        return matchName || matchDesc || matchStation || matchCategory || matchIngredients || matchPerks;
      }

      return true;
    });
  }, [selectedStationId, selectedCategory, searchQuery]);

  const getStationBadge = (stationId: ScienceStationId) => {
    switch (stationId) {
      case 'none':
        return <span className="rounded bg-[#1e293b] px-2 py-0.5 text-[10px] font-mono font-bold text-[#94a3b8] border border-[#334155]">Tanpa Mesin</span>;
      case 'science_1':
        return <span className="rounded bg-[#2a210d] px-2 py-0.5 text-[10px] font-mono font-bold text-[#facc15] border border-[#ca8a04]">Science Machine</span>;
      case 'science_2':
        return <span className="rounded bg-[#0c2438] px-2 py-0.5 text-[10px] font-mono font-bold text-[#38bdf8] border border-[#0284c7]">Alchemy Engine</span>;
      case 'magic_1':
        return <span className="rounded bg-[#28113d] px-2 py-0.5 text-[10px] font-mono font-bold text-[#c084fc] border border-[#9333ea]">Prestihatitator</span>;
      case 'magic_2':
        return <span className="rounded bg-[#380e1a] px-2 py-0.5 text-[10px] font-mono font-bold text-[#f43f5e] border border-[#e11d48]">Shadow Manipulator</span>;
      case 'ancient':
        return <span className="rounded bg-[#381608] px-2 py-0.5 text-[10px] font-mono font-bold text-[#fb923c] border border-[#ea580c]">Ruins Station</span>;
      case 'celestial':
        return <span className="rounded bg-[#082f2c] px-2 py-0.5 text-[10px] font-mono font-bold text-[#2dd4bf] border border-[#0d9488]">Celestial Altar</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-xl border border-[#3e3220] bg-gradient-to-br from-[#211a11] via-[#1a140d] to-[#120f09] p-4 sm:p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-[#d4af37]" />
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#f2ead2]">
                Pohon Riset Teknologi &amp; Prasyarat Mesin Sains (Crafting Tree)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#a89d84]">
              Visualisasi hierarki stasiun sains Don't Starve Together. Dari membuat kapak awal di tangan kosong, membangun Science Machine, meningkatkan ke Alchemy Engine, hingga membuka sihir terlarang Shadow Manipulator &amp; Thulecite Kuno.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#d4af37] bg-[#16120b] border border-[#3d311e] px-3.5 py-2 rounded-lg self-start sm:self-auto">
            <Cpu className="h-4 w-4" />
            <span>7 Tingkat Stasiun Teknologi</span>
          </div>
        </div>
      </div>

      {/* Visual Tech Hierarchy Tree Diagram */}
      <div className="rounded-xl border border-[#3b2e1b] bg-[#17130b] p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-[#2c2214] pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#f5ecd3]">
            <Zap className="h-4 w-4 text-[#facc15]" />
            <span>Diagram Alur Evolusi Mesin Riset (Klik Kotak Mesin untuk Filter Resep)</span>
          </div>
          {selectedStationId !== 'all' && (
            <button
              onClick={() => setSelectedStationId('all')}
              className="text-xs text-[#d4af37] hover:underline"
            >
              Lihat Semua Mesin
            </button>
          )}
        </div>

        {/* Tree Path Diagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Node 0: Tangan Kosong */}
          <div 
            onClick={() => setSelectedStationId(selectedStationId === 'none' ? 'all' : 'none')}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
              selectedStationId === 'none'
                ? 'border-[#94a3b8] bg-[#1e293b]/70 shadow-lg ring-1 ring-[#94a3b8]'
                : 'border-[#2e261a] bg-[#1b1610] hover:border-[#4d3f2a]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#94a3b8] font-bold">TIER 0 • DASAR</span>
              <span className="text-[10px] rounded bg-[#100d08] px-1.5 py-0.2 text-[#7f745e]">
                {CRAFTING_ITEMS.filter(i => i.stationId === 'none').length} Resep
              </span>
            </div>
            <h4 className="mt-1 font-serif text-sm font-bold text-[#f2ead2]">
              Tangan Kosong
            </h4>
            <p className="mt-0.5 text-[11px] text-[#9a8e77] leading-relaxed">
              Bahan: Langsung di alam liar
            </p>
            <div className="mt-2 text-[10px] text-[#38bdf8] flex items-center gap-1">
              <span>Ke Science Machine</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>

          {/* Node 1: Science Machine */}
          <div 
            onClick={() => setSelectedStationId(selectedStationId === 'science_1' ? 'all' : 'science_1')}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
              selectedStationId === 'science_1'
                ? 'border-[#facc15] bg-[#29220c]/70 shadow-lg ring-1 ring-[#facc15]'
                : 'border-[#2e261a] bg-[#1b1610] hover:border-[#4d3f2a]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#facc15] font-bold">TIER 1 • SAINS</span>
              <span className="text-[10px] rounded bg-[#100d08] px-1.5 py-0.2 text-[#7f745e]">
                {CRAFTING_ITEMS.filter(i => i.stationId === 'science_1').length} Resep
              </span>
            </div>
            <h4 className="mt-1 font-serif text-sm font-bold text-[#f2ead2]">
              Science Machine
            </h4>
            <p className="mt-0.5 text-[11px] text-[#9a8e77] leading-relaxed">
              Resep: 1 Gold + 4 Rocks + 4 Logs
            </p>
            <div className="mt-2 text-[10px] text-[#facc15] flex items-center gap-1">
              <span>Membuka Backpack &amp; Spear</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>

          {/* Node 2: Alchemy Engine */}
          <div 
            onClick={() => setSelectedStationId(selectedStationId === 'science_2' ? 'all' : 'science_2')}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
              selectedStationId === 'science_2'
                ? 'border-[#38bdf8] bg-[#0c2438]/70 shadow-lg ring-1 ring-[#38bdf8]'
                : 'border-[#2e261a] bg-[#1b1610] hover:border-[#4d3f2a]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#38bdf8] font-bold">TIER 2 • SAINS MODERN</span>
              <span className="text-[10px] rounded bg-[#100d08] px-1.5 py-0.2 text-[#7f745e]">
                {CRAFTING_ITEMS.filter(i => i.stationId === 'science_2').length} Resep
              </span>
            </div>
            <h4 className="mt-1 font-serif text-sm font-bold text-[#f2ead2]">
              Alchemy Engine
            </h4>
            <p className="mt-0.5 text-[11px] text-[#9a8e77] leading-relaxed">
              Resep: 4 Boards + 2 Cut Stone + 6 Gold
            </p>
            <div className="mt-2 text-[10px] text-[#38bdf8] flex items-center gap-1">
              <span>Membuka Ice Box &amp; Ham Bat</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>

          {/* Node 3: Shadow Manipulator & Magic Branch */}
          <div 
            onClick={() => setSelectedStationId(selectedStationId === 'magic_2' ? 'all' : 'magic_2')}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
              selectedStationId === 'magic_2'
                ? 'border-[#f43f5e] bg-[#380e1a]/70 shadow-lg ring-1 ring-[#f43f5e]'
                : 'border-[#2e261a] bg-[#1b1610] hover:border-[#4d3f2a]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#f43f5e] font-bold">TIER 2 • SIHIR HITAM</span>
              <span className="text-[10px] rounded bg-[#100d08] px-1.5 py-0.2 text-[#7f745e]">
                {CRAFTING_ITEMS.filter(i => i.stationId === 'magic_2').length} Resep
              </span>
            </div>
            <h4 className="mt-1 font-serif text-sm font-bold text-[#f2ead2]">
              Shadow Manipulator
            </h4>
            <p className="mt-0.5 text-[11px] text-[#9a8e77] leading-relaxed">
              Resep: 3 Living Logs + 1 Purple Gem + 7 Nightmare Fuel
            </p>
            <div className="mt-2 text-[10px] text-[#f43f5e] flex items-center gap-1">
              <span>Membuka Dark Sword &amp; Night Armor</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        </div>

        {/* Secondary Branches: Magic Tier 1, Ancient Ruins, Celestial Altar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          <div 
            onClick={() => setSelectedStationId(selectedStationId === 'magic_1' ? 'all' : 'magic_1')}
            className={`p-3 rounded-xl border cursor-pointer transition-all ${
              selectedStationId === 'magic_1'
                ? 'border-[#c084fc] bg-[#28113d]/70 shadow-lg ring-1 ring-[#c084fc]'
                : 'border-[#2e261a] bg-[#18140e] hover:border-[#4d3f2a]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#c084fc] font-bold">TIER 1 • MAGIC</span>
              <span className="text-[10px] text-[#867963]">
                {CRAFTING_ITEMS.filter(i => i.stationId === 'magic_1').length} Resep
              </span>
            </div>
            <h5 className="font-semibold text-xs text-[#f5ebd3]">Prestihatitator (Topi Sulap)</h5>
            <p className="text-[11px] text-[#9c8f77]">4 Rabbits + 4 Boards + 1 Top Hat</p>
          </div>

          <div 
            onClick={() => setSelectedStationId(selectedStationId === 'ancient' ? 'all' : 'ancient')}
            className={`p-3 rounded-xl border cursor-pointer transition-all ${
              selectedStationId === 'ancient'
                ? 'border-[#fb923c] bg-[#381608]/70 shadow-lg ring-1 ring-[#fb923c]'
                : 'border-[#2e261a] bg-[#18140e] hover:border-[#4d3f2a]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#fb923c] font-bold">ENDGAME • RUINS</span>
              <span className="text-[10px] text-[#867963]">
                {CRAFTING_ITEMS.filter(i => i.stationId === 'ancient').length} Resep
              </span>
            </div>
            <h5 className="font-semibold text-xs text-[#f5ebd3]">Ancient Pseudoscience Station</h5>
            <p className="text-[11px] text-[#9c8f77]">Stasiun Kuno Thulecite di kedalaman The Ruins</p>
          </div>

          <div 
            onClick={() => setSelectedStationId(selectedStationId === 'celestial' ? 'all' : 'celestial')}
            className={`p-3 rounded-xl border cursor-pointer transition-all ${
              selectedStationId === 'celestial'
                ? 'border-[#2dd4bf] bg-[#082f2c]/70 shadow-lg ring-1 ring-[#2dd4bf]'
                : 'border-[#2e261a] bg-[#18140e] hover:border-[#4d3f2a]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#2dd4bf] font-bold">LUNAR • BULAN</span>
              <span className="text-[10px] text-[#867963]">
                {CRAFTING_ITEMS.filter(i => i.stationId === 'celestial').length} Resep
              </span>
            </div>
            <h5 className="font-semibold text-xs text-[#f5ebd3]">Celestial Altar (Altar Bulan)</h5>
            <p className="text-[11px] text-[#9c8f77]">Dirakit dari 3 pecahan di Lunar Island</p>
          </div>
        </div>

        {/* Selected Station Banner Info */}
        {selectedStation && (
          <div className="mt-3 rounded-lg border border-[#3b301f] bg-[#141009] p-3 text-xs text-[#dcd1b8] flex items-start gap-3">
            <Lightbulb className="h-4 w-4 text-[#facc15] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <strong className="text-[#f5ebd3] font-bold">{selectedStation.name}</strong>
                <span className="text-[10px] font-mono text-[#baa884]">
                  [Bahan Pembuatan: {selectedStation.recipeToBuild}]
                </span>
              </div>
              <p className="text-[#a4977e] leading-relaxed">
                {selectedStation.description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Category Pills & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-[#82755e] font-semibold mr-1">Kategori Item:</span>
          {['all', 'Fight', 'Tools', 'Survival', 'Structures', 'Light', 'Magic', 'Dress', 'Refine'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#d4af37] text-[#141009] font-bold shadow-sm'
                  : 'border border-[#2e2417] bg-[#19140e] text-[#9e927a] hover:bg-[#241c13] hover:text-[#f0e6ce]'
              }`}
            >
              {cat === 'all' ? 'Semua Kategori' : cat}
            </button>
          ))}
        </div>

        <div className="text-xs text-[#8c7f66] font-mono">
          Menampilkan <strong className="text-[#f5ecd3]">{filteredItems.length}</strong> item
        </div>
      </div>

      {/* Crafting Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="rounded-xl border border-[#332819] bg-[#1b1610] p-10 text-center text-[#9c917b]">
          <p className="text-base font-semibold text-[#f0e6ce]">
            Tidak ada item crafting yang cocok dengan filter atau kata kunci "{searchQuery}".
          </p>
          <button
            onClick={() => { setSelectedStationId('all'); setSelectedCategory('all'); }}
            className="mt-3 rounded border border-[#d4af37]/40 bg-[#281f14] px-3 py-1.5 text-xs text-[#f5ecd3]"
          >
            Reset Semua Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="rounded-xl border border-[#2f2518] bg-[#1a150e] p-4 flex flex-col justify-between hover:border-[#4a3a25] hover:bg-[#1e1911] transition-all shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#8a7d65] uppercase">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#f5ebd3]">
                      {item.name}
                    </h4>
                  </div>
                  {getStationBadge(item.stationId)}
                </div>

                <p className="text-xs text-[#baa98c] leading-relaxed">
                  {item.description}
                </p>

                {/* Recipe Ingredients Pill Box */}
                <div className="rounded-lg border border-[#2b2114] bg-[#141009] p-2.5 space-y-1">
                  <span className="text-[10px] font-mono text-[#7a6d57] font-semibold block">
                    Bahan / Resep Pembuatan:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.ingredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-[#20180f] px-2 py-0.5 text-[11px] font-mono font-medium text-[#e5a93c] border border-[#332616]"
                      >
                        {ing.count}x {ing.item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Perks & Durability */}
              <div className="mt-3 pt-2.5 border-t border-[#261e13] flex flex-wrap items-center justify-between gap-2 text-[11px]">
                {item.perks ? (
                  <span className="text-[#7ee787] font-semibold">
                    ★ {item.perks}
                  </span>
                ) : (
                  <span className="text-[#7a6d58]">Standar</span>
                )}

                {item.durability && (
                  <span className="text-[#a4977f] font-mono text-[10px]">
                    ⏱️ {item.durability}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
