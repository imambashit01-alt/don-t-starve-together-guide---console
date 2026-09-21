import React, { useState, useMemo } from 'react';
import { 
  Heart, Utensils, Brain, Users, Sparkles, Shield, Sword, 
  AlertTriangle, Lightbulb, Zap, CheckCircle2, ChevronRight, 
  HelpCircle, Compass, Trees, Hammer, BookOpen, Crown, Flame, 
  Fish, Bug, Eye
} from 'lucide-react';
import { DSTCharacter } from '../types';
import { CHARACTERS_DATA } from '../data/charactersData';

interface CharactersViewerProps {
  searchQuery: string;
}

export const CharactersViewer: React.FC<CharactersViewerProps> = ({ searchQuery }) => {
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [activeCharacterId, setActiveCharacterId] = useState<string>(CHARACTERS_DATA[0].id);

  const filteredCharacters = useMemo(() => {
    return CHARACTERS_DATA.filter(char => {
      // Role filter
      if (selectedRole !== 'all' && char.role !== selectedRole) return false;

      // Difficulty filter
      if (selectedDifficulty !== 'all' && char.difficulty !== selectedDifficulty) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = char.name.toLowerCase().includes(q);
        const matchTitle = char.title.toLowerCase().includes(q);
        const matchPerk = char.perks.some(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
        const matchFlaw = char.flaws.some(f => f.title.toLowerCase().includes(q) || f.description.toLowerCase().includes(q));
        const matchCraft = char.uniqueCrafts.some(c => c.toLowerCase().includes(q));
        return matchName || matchTitle || matchPerk || matchFlaw || matchCraft;
      }

      return true;
    });
  }, [selectedRole, selectedDifficulty, searchQuery]);

  const activeCharacter = useMemo(() => {
    return CHARACTERS_DATA.find(c => c.id === activeCharacterId) || filteredCharacters[0] || CHARACTERS_DATA[0];
  }, [activeCharacterId, filteredCharacters]);

  const getDifficultyBadge = (diff: DSTCharacter['difficulty']) => {
    switch (diff) {
      case 'Sangat Mudah':
        return <span className="rounded bg-[#122816] px-2 py-0.5 text-[10px] font-bold text-[#7ee787] border border-[#238636]/50">Sangat Mudah</span>;
      case 'Mudah':
        return <span className="rounded bg-[#152e20] px-2 py-0.5 text-[10px] font-bold text-[#86efac] border border-[#16a34a]/50">Mudah</span>;
      case 'Sedang':
        return <span className="rounded bg-[#2a200e] px-2 py-0.5 text-[10px] font-bold text-[#f2b84b] border border-[#d4af37]/50">Sedang</span>;
      case 'Sulit':
        return <span className="rounded bg-[#381a14] px-2 py-0.5 text-[10px] font-bold text-[#f87171] border border-[#c45a4a]/50">Sulit</span>;
      case 'Sangat Sulit':
      default:
        return <span className="rounded bg-[#3a0d0d] px-2 py-0.5 text-[10px] font-bold text-[#fca5a5] border border-[#ef4444]/60">Sangat Sulit (Hardcore)</span>;
    }
  };

  const getRoleBadge = (role: DSTCharacter['role']) => {
    switch (role) {
      case 'Combat / Tank':
        return <span className="rounded bg-[#351515] px-2 py-0.5 text-[10px] font-semibold text-[#fca5a5] border border-[#dc2626]/40">Tempur / Tank</span>;
      case 'Gatherer / Builder':
        return <span className="rounded bg-[#1c2c1a] px-2 py-0.5 text-[10px] font-semibold text-[#86efac] border border-[#22c55e]/40">Gatherer / Base</span>;
      case 'Magic / Support':
        return <span className="rounded bg-[#261536] px-2 py-0.5 text-[10px] font-semibold text-[#d8b4fe] border border-[#a855f7]/40">Sihir / Support</span>;
      case 'All-Rounder':
        return <span className="rounded bg-[#132734] px-2 py-0.5 text-[10px] font-semibold text-[#7dd3fc] border border-[#0284c7]/40">Serbabisa</span>;
      case 'Spesialis Ahli':
        return <span className="rounded bg-[#32230e] px-2 py-0.5 text-[10px] font-semibold text-[#fde047] border border-[#eab308]/40">Spesialis Ahli</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="rounded-xl border border-[#3e3220] bg-gradient-to-br from-[#211a11] via-[#1a140d] to-[#120f09] p-4 sm:p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#d4af37]" />
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#f2ead2]">
                Daftar Karakter Don't Starve Together: Statistik, Kemampuan &amp; Sinergi Tim
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#a89d84]">
              Ketahui kelebihan (Perks), kelemahan fatal (Flaws), perbandingan Health/Hunger/Sanity, resep peralatan eksklusif, serta rekomendasi gaya main untuk setiap penyintas di The Constant.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#d4af37] bg-[#16120b] border border-[#3d311e] px-3.5 py-2 rounded-lg self-start sm:self-auto">
            <Sparkles className="h-4 w-4" />
            <span>{CHARACTERS_DATA.length} Karakter Tersedia</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs: Role & Difficulty */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-[#847760] font-semibold mr-1">Peran:</span>
          {['all', 'Combat / Tank', 'All-Rounder', 'Gatherer / Builder', 'Magic / Support', 'Spesialis Ahli'].map(r => (
            <button
              key={r}
              onClick={() => setSelectedRole(r)}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                selectedRole === r
                  ? 'bg-[#d4af37] text-[#141009] font-bold shadow-sm'
                  : 'border border-[#2e2417] bg-[#19140e] text-[#9e927a] hover:bg-[#241c13] hover:text-[#f0e6ce]'
              }`}
            >
              {r === 'all' ? 'Semua Peran' : r}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-[#847760] font-semibold mr-1">Tingkat Kesulitan:</span>
          {['all', 'Sangat Mudah', 'Mudah', 'Sedang', 'Sulit', 'Sangat Sulit'].map(d => (
            <button
              key={d}
              onClick={() => setSelectedDifficulty(d)}
              className={`rounded-lg px-2 py-0.5 text-[11px] font-medium transition-all ${
                selectedDifficulty === d
                  ? 'border border-[#d4af37] bg-[#2d2214] text-[#f5ecd3] font-bold'
                  : 'text-[#877a64] hover:text-[#e2d7c0]'
              }`}
            >
              {d === 'all' ? 'Semua' : d}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Panel Layout: Left Character Picker Grid, Right Detailed Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Character Cards List (5 Cols) */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[46rem] overflow-y-auto pr-1">
          {filteredCharacters.length === 0 ? (
            <div className="rounded-xl border border-[#332819] bg-[#1a150e] p-8 text-center text-[#9c917b]">
              <p className="text-sm font-semibold text-[#f0e6ce]">
                Tidak ada karakter yang cocok dengan kriteria "{searchQuery}".
              </p>
            </div>
          ) : (
            filteredCharacters.map(char => {
              const isSelected = char.id === activeCharacter.id;

              return (
                <div
                  key={char.id}
                  onClick={() => setActiveCharacterId(char.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-[#d4af37] bg-[#2a2013] shadow-md ring-1 ring-[#d4af37]/50'
                      : 'border-[#2d2417] bg-[#19140e] hover:border-[#473924] hover:bg-[#201912]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#4a3922] bg-[#221a10] font-serif font-bold text-lg text-[#d4af37]">
                      {char.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-serif text-sm font-bold text-[#f5ebd3]">
                          {char.name.split(' ')[0]}
                        </h4>
                        {getDifficultyBadge(char.difficulty)}
                      </div>
                      <p className="text-[11px] text-[#9e9076]">
                        {char.title}
                      </p>

                      {/* Mini Stat Pills */}
                      <div className="mt-1.5 flex items-center gap-2 text-[10px] font-mono">
                        <span className="text-[#f87171] flex items-center gap-0.5">
                          <Heart className="h-3 w-3 fill-[#f87171]/20" /> {char.health}
                        </span>
                        <span className="text-[#fb923c] flex items-center gap-0.5">
                          <Utensils className="h-3 w-3" /> {char.hunger}
                        </span>
                        <span className="text-[#c084fc] flex items-center gap-0.5">
                          <Brain className="h-3 w-3" /> {char.sanity}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`h-4 w-4 ${isSelected ? 'text-[#d4af37]' : 'text-[#5a4c35]'}`} />
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Active Character In-Depth Inspection (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-[#3b2f1d] bg-[#1a150e] p-5 sm:p-6 shadow-xl space-y-5 sticky top-4">
            {/* Header info */}
            <div className="border-b border-[#2d2315] pb-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-2xl font-bold text-[#f5ebd3]">
                      {activeCharacter.name}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-[#d4af37]">
                    {activeCharacter.title}
                  </p>
                  <blockquote className="mt-1.5 italic text-xs text-[#baa98a]">
                    {activeCharacter.quote}
                  </blockquote>
                </div>

                <div className="flex flex-wrap items-center gap-2 self-start">
                  {getRoleBadge(activeCharacter.role)}
                  {getDifficultyBadge(activeCharacter.difficulty)}
                </div>
              </div>

              {/* Stat Meters */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {/* Health Meter */}
                <div className="rounded-lg border border-[#381a17] bg-[#160f0e] p-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#f87171]">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3.5 w-3.5 fill-[#f87171]/20" /> Health
                    </span>
                    <span className="font-mono">{activeCharacter.health}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#2a1310] overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#dc2626] to-[#f87171] rounded-full"
                      style={{ width: `${Math.min(100, (activeCharacter.health / 250) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Hunger Meter */}
                <div className="rounded-lg border border-[#36220e] bg-[#16110a] p-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#fb923c]">
                    <span className="flex items-center gap-1">
                      <Utensils className="h-3.5 w-3.5" /> Hunger
                    </span>
                    <span className="font-mono">{activeCharacter.hunger}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#291708] overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#ea580c] to-[#fb923c] rounded-full"
                      style={{ width: `${Math.min(100, (activeCharacter.hunger / 250) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Sanity Meter */}
                <div className="rounded-lg border border-[#2b1638] bg-[#120a17] p-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#c084fc]">
                    <span className="flex items-center gap-1">
                      <Brain className="h-3.5 w-3.5" /> Sanity
                    </span>
                    <span className="font-mono">{activeCharacter.sanity}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#1c0e25] overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#9333ea] to-[#c084fc] rounded-full"
                      style={{ width: `${Math.min(100, (activeCharacter.sanity / 250) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Special Abilities & Perks */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#7ee787] flex items-center gap-1.5">
                <Sparkles className="h-4 w-4" />
                <span>Kemampuan Spesial &amp; Kelebihan (Perks)</span>
              </h4>
              <div className="space-y-2">
                {activeCharacter.perks.map((perk, i) => (
                  <div key={i} className="rounded-lg border border-[#263823] bg-[#122013] p-3 text-xs">
                    <strong className="text-[#cbf2cd] block mb-0.5">{perk.title}</strong>
                    <p className="text-[#a4cca6] leading-relaxed text-[11px] sm:text-xs">
                      {perk.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Flaws / Kelemahan Fatal */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#f87171] flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4" />
                <span>Kelemahan &amp; Pinalti (Flaws)</span>
              </h4>
              <div className="space-y-2">
                {activeCharacter.flaws.map((flaw, i) => (
                  <div key={i} className="rounded-lg border border-[#3b1c1c] bg-[#1e1111] p-3 text-xs">
                    <strong className="text-[#fecaca] block mb-0.5">{flaw.title}</strong>
                    <p className="text-[#d8abab] leading-relaxed text-[11px] sm:text-xs">
                      {flaw.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Crafting Eksklusif & Starting Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-[#2f2416] bg-[#141009] p-3 space-y-1.5">
                <span className="font-semibold text-[#baa98a] block">
                  Resep Kerajinan Eksklusif:
                </span>
                {activeCharacter.uniqueCrafts.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {activeCharacter.uniqueCrafts.map((craft, i) => (
                      <span key={i} className="rounded bg-[#20180f] px-2 py-0.5 font-mono text-[10px] text-[#e5a93c] border border-[#332616]">
                        {craft}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-[11px] text-[#71644e]">Tidak ada resep eksklusif</span>
                )}
              </div>

              <div className="rounded-lg border border-[#2f2416] bg-[#141009] p-3 space-y-1.5">
                <span className="font-semibold text-[#baa98a] block">
                  Barang Bawaan Awal (Spawn Items):
                </span>
                {activeCharacter.startingItems.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {activeCharacter.startingItems.map((item, i) => (
                      <span key={i} className="rounded bg-[#20180f] px-2 py-0.5 font-mono text-[10px] text-[#7dd3fc] border border-[#332616]">
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-[11px] text-[#71644e]">Lahir dengan tangan kosong</span>
                )}
              </div>
            </div>

            {/* Team Synergy & Pro Tips */}
            <div className="rounded-lg border border-[#3b301d] bg-[#17130b] p-3.5 space-y-2 text-xs">
              <div>
                <strong className="text-[#f5ecd3] font-semibold block mb-0.5">
                  🤝 Peran Sinergi Tim (Multiplayer):
                </strong>
                <p className="text-[#baa889] text-[11px] sm:text-xs leading-relaxed">
                  {activeCharacter.teamSynergy}
                </p>
              </div>

              <div className="pt-2 border-t border-[#292014] space-y-1">
                <strong className="text-[#facc15] font-semibold flex items-center gap-1">
                  <Lightbulb className="h-3.5 w-3.5 text-[#facc15]" />
                  <span>Tips Master {activeCharacter.name.split(' ')[0]}:</span>
                </strong>
                <ul className="list-disc pl-5 space-y-1 text-[#b8ab91] text-[11px] sm:text-xs">
                  {activeCharacter.proTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
