import React, { useState } from 'react';
import { UtensilsCrossed, Heart, Flame, Brain, Clock, ShieldAlert, Sparkles, Filter } from 'lucide-react';
import { CrockPotRecipe } from '../types';

interface CrockpotViewerProps {
  recipes: CrockPotRecipe[];
  searchQuery: string;
}

export const CrockpotViewer: React.FC<CrockpotViewerProps> = ({ recipes, searchQuery }) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [filterBenefit, setFilterBenefit] = useState<string>('all');

  const filteredRecipes = recipes.filter(recipe => {
    if (filterType !== 'all' && recipe.foodType !== filterType) {
      return false;
    }
    if (filterBenefit !== 'all' && recipe.bestFor !== filterBenefit) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        recipe.name.toLowerCase().includes(q) ||
        recipe.ingredients.toLowerCase().includes(q) ||
        recipe.tips.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="rounded-xl border border-[#3d3322] bg-[#1d1811] p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[#4d3f28] bg-[#292015] text-[#e5a93c]">
            <UtensilsCrossed className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#f2ead2]">
              Buku Resep Crock Pot Esensial
            </h2>
            <p className="text-xs sm:text-sm text-[#a69b82] leading-relaxed">
              Crock Pot adalah kunci ketahanan hidup di Don't Starve Together. Memasak bahan makanan mentah menjadi resep masakan akan melipatgandakan khasiat pemulihan status Health, Hunger, dan Sanity serta memperpanjang masa simpan makanan.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[#2e261a] pt-3 text-xs">
          <span className="font-semibold text-[#8c8069]">Fokus Khasiat:</span>
          {['all', 'Health', 'Hunger', 'Sanity'].map(b => (
            <button
              key={b}
              onClick={() => setFilterBenefit(b)}
              className={`rounded px-2.5 py-1 font-medium transition-colors ${
                filterBenefit === b
                  ? 'bg-[#d4af37] text-[#120f0a] font-semibold'
                  : 'bg-[#221c13] text-[#a69b82] hover:text-[#ece4d0] border border-[#382d1c]'
              }`}
            >
              {b === 'all' ? 'Semua' : `Fokus ${b}`}
            </button>
          ))}

          <span className="ml-2 font-semibold text-[#8c8069]">Tipe:</span>
          {['all', 'Meat', 'Veggie', 'Goodie'].map(t => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`rounded px-2.5 py-1 font-medium transition-colors ${
                filterType === t
                  ? 'bg-[#d4af37] text-[#120f0a] font-semibold'
                  : 'bg-[#221c13] text-[#a69b82] hover:text-[#ece4d0] border border-[#382d1c]'
              }`}
            >
              {t === 'all' ? 'Semua' : t}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRecipes.map(recipe => (
          <div
            key={recipe.id}
            className="flex flex-col justify-between rounded-xl border border-[#302719] bg-[#1b1610] p-4 sm:p-5 hover:border-[#4a3b25] transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-serif text-lg font-bold text-[#f2ead2]">
                  {recipe.name}
                </h3>
                <span className="rounded bg-[#282015] px-2 py-0.5 text-xs font-mono text-[#d4af37] border border-[#3d321f]">
                  {recipe.foodType}
                </span>
              </div>

              {/* Stats Bar */}
              <div className="mt-3 grid grid-cols-4 gap-2 text-center text-xs">
                <div className="rounded-lg border border-[#c45a4a]/30 bg-[#261515] p-1.5">
                  <div className="flex items-center justify-center gap-1 text-[#f87171]">
                    <Heart className="h-3 w-3" />
                    <span className="font-bold">{recipe.health > 0 ? `+${recipe.health}` : recipe.health}</span>
                  </div>
                  <span className="text-[10px] text-[#baa1a1]">Health</span>
                </div>

                <div className="rounded-lg border border-[#e5a93c]/30 bg-[#291e10] p-1.5">
                  <div className="flex items-center justify-center gap-1 text-[#fbbf24]">
                    <Flame className="h-3 w-3" />
                    <span className="font-bold">+{recipe.hunger}</span>
                  </div>
                  <span className="text-[10px] text-[#baa88e]">Hunger</span>
                </div>

                <div className="rounded-lg border border-[#60a5fa]/30 bg-[#141f2d] p-1.5">
                  <div className="flex items-center justify-center gap-1 text-[#93c5fd]">
                    <Brain className="h-3 w-3" />
                    <span className="font-bold">+{recipe.sanity}</span>
                  </div>
                  <span className="text-[10px] text-[#9eb6cc]">Sanity</span>
                </div>

                <div className="rounded-lg border border-[#3a3020] bg-[#16120c] p-1.5">
                  <div className="flex items-center justify-center gap-1 text-[#a89d84]">
                    <Clock className="h-3 w-3" />
                    <span className="font-bold">{recipe.perishDays}d</span>
                  </div>
                  <span className="text-[10px] text-[#827865]">Basi</span>
                </div>
              </div>

              {/* Ingredients and Requirements */}
              <div className="mt-3.5 space-y-2 text-xs">
                <div className="rounded-md bg-[#13100b] p-2.5 border border-[#261f14]">
                  <span className="font-semibold text-[#d4af37] block mb-0.5">Komposisi Bahan:</span>
                  <p className="text-[#dcd1b8]">{recipe.ingredients}</p>
                </div>

                {recipe.restrictions && (
                  <p className="text-[11px] text-[#f87171]">
                    <span className="font-semibold">Pantangan: </span>{recipe.restrictions}
                  </p>
                )}
              </div>
            </div>

            {/* Pro Tip */}
            <div className="mt-3 border-t border-[#292116] pt-2.5 text-xs text-[#baa98a] leading-relaxed">
              <strong className="text-[#e5a93c]">Tips: </strong>{recipe.tips}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
