import React, { useState, useEffect, useMemo } from 'react';
import { 
  CheckSquare, Check, RotateCcw, AlertTriangle, Sparkles, 
  ShieldCheck, Compass, Hammer, UtensilsCrossed, Shield, Lightbulb
} from 'lucide-react';
import { EarlyGameGoal } from '../types';
import { EARLY_GAME_GOALS } from '../data/earlyGameData';

interface EarlyGameChecklistProps {
  onClose?: () => void;
}

export const EarlyGameChecklist: React.FC<EarlyGameChecklistProps> = ({ onClose }) => {
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Completed goal IDs persisted in localStorage
  const [completedGoals, setCompletedGoals] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dst_early_game_goals');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('dst_early_game_goals', JSON.stringify(completedGoals));
    } catch (e) {
      console.error('Failed to save early game goals', e);
    }
  }, [completedGoals]);

  const toggleGoal = (id: string) => {
    setCompletedGoals(prev => 
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    );
  };

  const resetAllGoals = () => {
    if (window.confirm('Reset semua centang Early Game Goals kamu?')) {
      setCompletedGoals([]);
    }
  };

  const progress = useMemo(() => {
    const total = EARLY_GAME_GOALS.length;
    const completed = completedGoals.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    let statusText = 'Hari-Hari Pertama (Baru Mendarat)';
    let badgeColor = 'text-[#7ee787] bg-[#142817] border-[#238636]';
    if (percentage === 100) {
      statusText = 'Siap 100% Menghadapi Musim Dingin!';
      badgeColor = 'text-[#facc15] bg-[#2d2711] border-[#facc15]';
    } else if (percentage >= 70) {
      statusText = 'Markas Kokoh & Pangan Terjamin';
      badgeColor = 'text-[#38bdf8] bg-[#0c2438] border-[#0284c7]';
    } else if (percentage >= 40) {
      statusText = 'Teknologi Base Mulai Terbangun';
      badgeColor = 'text-[#f2b84b] bg-[#281d0e] border-[#d4af37]';
    }

    return { total, completed, percentage, statusText, badgeColor };
  }, [completedGoals]);

  const filteredGoals = useMemo(() => {
    return EARLY_GAME_GOALS.filter(goal => {
      if (selectedPhase !== 'all' && goal.phase !== selectedPhase) return false;
      if (selectedCategory !== 'all' && goal.category !== selectedCategory) return false;
      return true;
    });
  }, [selectedPhase, selectedCategory]);

  const getPriorityBadge = (priority: EarlyGameGoal['priority']) => {
    switch (priority) {
      case 'Kritis':
        return (
          <span className="rounded bg-[#381616] px-1.5 py-0.5 text-[10px] font-bold text-[#f87171] border border-[#c45a4a]/40">
            Wajib
          </span>
        );
      case 'Tinggi':
        return (
          <span className="rounded bg-[#2e210e] px-1.5 py-0.5 text-[10px] font-bold text-[#f2b84b] border border-[#d4af37]/40">
            Penting
          </span>
        );
      case 'Penting':
        return (
          <span className="rounded bg-[#17251a] px-1.5 py-0.5 text-[10px] font-medium text-[#7ee787] border border-[#238636]/40">
            Target
          </span>
        );
    }
  };

  return (
    <div className="rounded-xl border border-[#4a3b25] bg-gradient-to-br from-[#211a11] via-[#1c160e] to-[#141009] p-4 sm:p-6 shadow-xl space-y-5">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#362a19] pb-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2e2213] text-[#facc15] border border-[#524026]">
              <CheckSquare className="h-4 w-4" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f5ebd3]">
              Checklist Survival Awal Pemula (Early Game Goals)
            </h3>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${progress.badgeColor}`}>
              {progress.statusText}
            </span>
          </div>
          <p className="text-xs text-[#a49880]">
            Panduan to-do list langkah demi langkah hari 1–20 untuk pemula: menemukan lokasi base, membuat backpack, merakit crock pot, dan bertahan hidup sebelum musim dingin tiba.
          </p>
        </div>

        {/* Counter and controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="rounded-lg border border-[#3d301d] bg-[#16120b] px-3 py-1.5 text-right font-mono text-xs">
            <span className="text-[#facc15] font-bold">{progress.completed}</span>
            <span className="text-[#786c57]"> / {progress.total} Misi</span>
            <div className="text-[10px] text-[#a1957e]">{progress.percentage}% Selesai</div>
          </div>

          {completedGoals.length > 0 && (
            <button
              onClick={resetAllGoals}
              title="Reset checklist"
              className="flex items-center gap-1 rounded-lg border border-[#4a1c1c] bg-[#221010] p-2 text-xs text-[#f87171] hover:bg-[#301616] transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          )}

          {onClose && (
            <button
              onClick={onClose}
              className="rounded-lg border border-[#3b2e1b] bg-[#1c170f] px-2.5 py-1.5 text-xs text-[#a89d85] hover:text-[#f5ecd3]"
            >
              Tutup
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#16120b] border border-[#332615]">
          <div 
            className="h-full bg-gradient-to-r from-[#238636] via-[#e5a93c] to-[#facc15] transition-all duration-500 rounded-full"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
      </div>

      {/* Phase and Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[#847760] font-semibold mr-1">Fase Waktu:</span>
          {[
            { id: 'all', label: 'Semua Hari (1–20)' },
            { id: 'Day 1-3', label: 'Day 1–3 (Starter Kit)' },
            { id: 'Day 4-8', label: 'Day 4–8 (Base & Backpack)' },
            { id: 'Day 9-15', label: 'Day 9–15 (Crock Pot)' },
            { id: 'Day 16-20', label: 'Day 16–20 (Pre-Winter)' }
          ].map(phase => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`rounded px-2.5 py-1 transition-colors ${
                selectedPhase === phase.id
                  ? 'bg-[#3b2d19] text-[#f5ebd3] font-semibold border border-[#594426]'
                  : 'bg-[#18130c] text-[#9c9078] hover:text-[#e8dec4]'
              }`}
            >
              {phase.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-1">
          <span className="text-[#847760] font-semibold mr-1">Tipe:</span>
          {['all', 'Eksplorasi', 'Crafting', 'Base', 'Pangan', 'Survival'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded px-2 py-0.5 text-[11px] transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#d4af37] text-[#141009] font-bold'
                  : 'text-[#877b64] hover:text-[#dcd1b8]'
              }`}
            >
              {cat === 'all' ? 'Semua' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[32rem] overflow-y-auto pr-1">
        {filteredGoals.map(goal => {
          const isDone = completedGoals.includes(goal.id);

          return (
            <div
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className={`group flex items-start gap-3.5 p-3.5 rounded-xl border cursor-pointer transition-all ${
                isDone
                  ? 'border-[#238636]/50 bg-[#122315]/60 text-[#cbeecd]'
                  : 'border-[#332817] bg-[#1a150e] hover:border-[#4d3c24] hover:bg-[#201911] text-[#ded3bb]'
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={isDone}
                  onChange={() => {}} // handled by parent onClick
                  className="h-4 w-4 rounded border-[#4d3d25] text-[#238636] focus:ring-0 cursor-pointer"
                />
              </div>

              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#251d13] border border-[#3b2d1a] text-[#d4af37]">
                      {goal.phase}
                    </span>
                    {getPriorityBadge(goal.priority)}
                  </div>
                  <span className="text-[10px] text-[#7d7159] font-medium">
                    {goal.category}
                  </span>
                </div>

                <h4 className={`text-sm font-semibold leading-tight ${isDone ? 'line-through text-[#80a283]' : 'text-[#f5ecd3]'}`}>
                  {goal.title}
                </h4>

                <p className="text-xs leading-relaxed text-[#9e9178]">
                  {goal.description}
                </p>

                {/* Target Items / Recipes Chips */}
                {goal.targetItems && goal.targetItems.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {goal.targetItems.map((item, idx) => (
                      <span
                        key={idx}
                        className={`rounded px-1.5 py-0.5 text-[10px] font-mono border ${
                          isDone 
                            ? 'bg-[#162718] border-[#224b27] text-[#93c797]' 
                            : 'bg-[#15110a] border-[#2e2315] text-[#caa862]'
                        }`}
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* Pro tip / action tip */}
                <div className="flex items-start gap-1.5 pt-1 text-[11px] text-[#b8ab91]">
                  <Lightbulb className="h-3 w-3 text-[#e5a93c] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#d4af37]">Tips: </strong>{goal.actionTip}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
