import React from 'react';
import { Swords, Shield, Skull, AlertCircle, Award, Crosshair } from 'lucide-react';
import { KitingEnemy } from '../types';

interface KitingViewerProps {
  enemies: KitingEnemy[];
  searchQuery: string;
}

export const KitingViewer: React.FC<KitingViewerProps> = ({ enemies, searchQuery }) => {
  const filteredEnemies = enemies.filter(enemy => {
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        enemy.name.toLowerCase().includes(q) ||
        enemy.attackPattern.toLowerCase().includes(q) ||
        enemy.hitsBeforeDodge.toLowerCase().includes(q) ||
        enemy.tips.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="rounded-xl border border-[#3d3322] bg-[#1d1811] p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[#4d3f28] bg-[#292015] text-[#c45a4a]">
            <Swords className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#f2ead2]">
              Cheat Sheet Kiting Pertarungan &amp; Bos
            </h2>
            <p className="text-xs sm:text-sm text-[#a69b82] leading-relaxed">
              Kiting adalah ritme memukul musuh sejumlah hit aman sebelum serangan balik mereka mendarat. Memahami irama ayunan musuh menghemat banyak sekali daya tahan armor dan darahmu.
            </p>
          </div>
        </div>
      </div>

      {/* Enemy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEnemies.map(enemy => (
          <div
            key={enemy.id}
            className="rounded-xl border border-[#302719] bg-[#1b1610] p-4 sm:p-5 flex flex-col justify-between hover:border-[#4a3b25] transition-all"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="rounded bg-[#2a2014] px-2 py-0.5 text-[10px] font-mono text-[#d4af37] border border-[#3d311d]">
                    {enemy.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#f2ead2] mt-1">
                    {enemy.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#f87171] font-mono bg-[#281313] px-2 py-1 rounded border border-[#481c1c]">
                  <Skull className="h-3.5 w-3.5" />
                  <span>Bahaya {enemy.dangerLevel}/5</span>
                </div>
              </div>

              {/* Safe Hits Highlight */}
              <div className="mt-3 rounded-lg border border-[#d4af37]/40 bg-[#241c0e] p-3 text-xs">
                <div className="flex items-center gap-2 text-[#fde047] font-bold text-sm">
                  <Crosshair className="h-4 w-4 text-[#eab308]" />
                  <span>Irama Hit Aman: {enemy.hitsBeforeDodge}</span>
                </div>
                <p className="mt-1 text-[#d8cdb2] leading-relaxed">{enemy.attackPattern}</p>
              </div>

              {/* Equipment Suggestions */}
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="rounded bg-[#14100b] p-2 border border-[#2b2216]">
                  <span className="text-[#8c8069] block font-semibold mb-0.5">Senjata:</span>
                  <span className="text-[#e2d7c0]">{enemy.weaponRecommended}</span>
                </div>
                <div className="rounded bg-[#14100b] p-2 border border-[#2b2216]">
                  <span className="text-[#8c8069] block font-semibold mb-0.5">Armor:</span>
                  <span className="text-[#e2d7c0]">{enemy.armorRecommended}</span>
                </div>
              </div>

              {/* Drops */}
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-[#8c8069] font-medium">Drop Loot:</span>
                {enemy.loot.map((loot, i) => (
                  <span key={i} className="rounded bg-[#201a12] px-2 py-0.5 text-[11px] font-mono text-[#d4af37] border border-[#342a1b]">
                    {loot}
                  </span>
                ))}
              </div>
            </div>

            {/* Tactical Tip */}
            <div className="mt-3.5 border-t border-[#2b2216] pt-2 text-xs text-[#b8ac92]">
              <strong className="text-[#e5a93c]">Taktik Master: </strong>
              <span>{enemy.tips}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
