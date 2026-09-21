import React, { useState, useEffect, useMemo } from 'react';
import { 
  Compass, HeartPulse, Home, Snowflake, Users, AlertTriangle, 
  CalendarClock, ShieldAlert, Sparkles, Wheat, Skull, Flame, Crown, Anchor, 
  Zap, Backpack, Bug, Sword, Moon, UtensilsCrossed,
  ChevronDown, ChevronUp, Star, Lightbulb, AlertCircle, CheckCircle2, Shield,
  Copy, Check, Filter, CheckSquare, Trophy, Bookmark, ListFilter,
  ArrowRight, Eye, RefreshCw, X
} from 'lucide-react';
import { GuideSection, GuideLevel, GuideTopic } from '../types';
import { SURVIVAL_MILESTONES, SurvivalMilestone } from '../data/milestonesData';

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
  Anchor: <Anchor className="h-5 w-5" />,
  Zap: <Zap className="h-5 w-5" />,
  Backpack: <Backpack className="h-5 w-5" />,
  Bug: <Bug className="h-5 w-5" />,
  Sword: <Sword className="h-5 w-5" />,
  Moon: <Moon className="h-5 w-5" />,
  UtensilsCrossed: <UtensilsCrossed className="h-5 w-5" />
};

const TOPICS: { id: GuideTopic; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'Semua Topik', icon: <ListFilter className="h-3.5 w-3.5" /> },
  { id: 'eksplorasi', label: 'Eksplorasi & Base', icon: <Compass className="h-3.5 w-3.5" /> },
  { id: 'musim', label: 'Musim & Cuaca', icon: <CalendarClock className="h-3.5 w-3.5" /> },
  { id: 'combat', label: 'Combat & Kiting', icon: <Sword className="h-3.5 w-3.5" /> },
  { id: 'farming', label: 'Pertanian & Pangan', icon: <Wheat className="h-3.5 w-3.5" /> },
  { id: 'caves', label: 'Gua & Ruins', icon: <Sparkles className="h-3.5 w-3.5" /> },
  { id: 'karakter', label: 'Karakter & Skill Tree', icon: <Users className="h-3.5 w-3.5" /> },
  { id: 'endgame', label: 'Raid Boss & Endgame', icon: <Crown className="h-3.5 w-3.5" /> }
];

export const GuideViewer: React.FC<GuideViewerProps> = ({
  guides,
  guideLevel,
  searchQuery,
  favorites,
  toggleFavorite,
}) => {
  // Topic filter
  const [selectedTopic, setSelectedTopic] = useState<GuideTopic>('all');
  
  // View mode: 'detailed' vs 'compact'
  const [viewMode, setViewMode] = useState<'detailed' | 'compact'>('detailed');

  // Milestone tracker open state
  const [showMilestones, setShowMilestones] = useState<boolean>(false);

  // Selected phase filter in milestone tracker
  const [milestonePhase, setMilestonePhase] = useState<string>('all');

  // Completed milestones persisted in localStorage
  const [completedMilestones, setCompletedMilestones] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dst_guide_milestones');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Completed in-guide subchecklist items
  const [completedTasks, setCompletedTasks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dst_guide_subtasks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Copy feedback state (guide id -> boolean)
  const [copiedMap, setCopiedMap] = useState<Record<string, boolean>>({});

  // Expanded cards map (default all open)
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  // Quick jump select value
  const [jumpTarget, setJumpTarget] = useState<string>('');

  // Persist completed milestones
  useEffect(() => {
    try {
      localStorage.setItem('dst_guide_milestones', JSON.stringify(completedMilestones));
    } catch (e) {
      console.error('Failed to save milestones', e);
    }
  }, [completedMilestones]);

  // Persist completed in-guide tasks
  useEffect(() => {
    try {
      localStorage.setItem('dst_guide_subtasks', JSON.stringify(completedTasks));
    } catch (e) {
      console.error('Failed to save subtasks', e);
    }
  }, [completedTasks]);

  const toggleMilestone = (id: string) => {
    setCompletedMilestones(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const toggleSubtask = (taskId: string) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) ? prev.filter(t => t !== taskId) : [...prev, taskId]
    );
  };

  const resetAllMilestones = () => {
    if (window.confirm('Reset semua progress checklist milestone survival Anda?')) {
      setCompletedMilestones([]);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedMap(prev => ({
      ...prev,
      [id]: prev[id] === undefined ? false : !prev[id]
    }));
  };

  const expandAll = () => {
    const newMap: Record<string, boolean> = {};
    guides.forEach(g => { newMap[g.id] = true; });
    setExpandedMap(newMap);
  };

  const collapseAll = () => {
    const newMap: Record<string, boolean> = {};
    guides.forEach(g => { newMap[g.id] = false; });
    setExpandedMap(newMap);
  };

  const handleCopyGuide = (guide: GuideSection) => {
    const text = `[Don't Starve Together Guide] ${guide.title}\n` +
      `Tingkat: ${guide.level.toUpperCase()} | Waktu: ${guide.estimatedDays || '-'}\n\n` +
      `Ringkasan:\n${guide.quickSummary || guide.overview}\n\n` +
      (guide.recommendedItems?.length ? `Item Disarankan: ${guide.recommendedItems.join(', ')}\n\n` : '') +
      `Poin Kunci:\n` +
      guide.keyPoints.map(kp => `- ${kp.heading}: ${kp.description}`).join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setCopiedMap(prev => ({ ...prev, [guide.id]: true }));
      setTimeout(() => {
        setCopiedMap(prev => ({ ...prev, [guide.id]: false }));
      }, 2000);
    }).catch(() => {
      // Fallback
    });
  };

  const handleJumpToGuide = (guideId: string) => {
    setJumpTarget(guideId);
    if (!guideId) return;
    const el = document.getElementById(guideId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Ensure it is expanded
      setExpandedMap(prev => ({ ...prev, [guideId]: true }));
    }
  };

  // Filter guides
  const filteredGuides = useMemo(() => {
    return guides.filter(guide => {
      // Level filter from header props
      if (guideLevel !== 'all' && guide.level !== guideLevel) {
        return false;
      }
      // Topic filter
      if (selectedTopic !== 'all' && guide.topic !== selectedTopic) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = guide.title.toLowerCase().includes(q);
        const matchSub = guide.subtitle.toLowerCase().includes(q);
        const matchOverview = guide.overview.toLowerCase().includes(q);
        const matchQuick = guide.quickSummary?.toLowerCase().includes(q) || false;
        const matchPoints = guide.keyPoints.some(kp => 
          kp.heading.toLowerCase().includes(q) || 
          kp.description.toLowerCase().includes(q) ||
          kp.warning?.toLowerCase().includes(q) ||
          kp.proTip?.toLowerCase().includes(q) ||
          kp.items?.some(i => i.toLowerCase().includes(q))
        );
        const matchChecklist = guide.checklist?.some(c => c.label.toLowerCase().includes(q)) || false;
        const matchItems = guide.recommendedItems?.some(i => i.toLowerCase().includes(q)) || false;
        return matchTitle || matchSub || matchOverview || matchQuick || matchPoints || matchChecklist || matchItems;
      }
      return true;
    });
  }, [guides, guideLevel, selectedTopic, searchQuery]);

  // Milestone statistics
  const milestoneProgress = useMemo(() => {
    const total = SURVIVAL_MILESTONES.length;
    const completed = completedMilestones.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    let rankTitle = 'Survivor Pemula (Novice)';
    let rankColor = 'text-[#7ee787]';
    if (percentage >= 75) {
      rankTitle = 'Penguasa The Constant (Master)';
      rankColor = 'text-[#facc15]';
    } else if (percentage >= 50) {
      rankTitle = 'Pejuang Veteran (Veteran)';
      rankColor = 'text-[#f87171]';
    } else if (percentage >= 25) {
      rankTitle = 'Penjelajah Constant (Explorer)';
      rankColor = 'text-[#f2b84b]';
    }

    return { total, completed, percentage, rankTitle, rankColor };
  }, [completedMilestones]);

  const filteredMilestones = useMemo(() => {
    if (milestonePhase === 'all') return SURVIVAL_MILESTONES;
    return SURVIVAL_MILESTONES.filter(m => m.phase.toLowerCase().includes(milestonePhase.toLowerCase()));
  }, [milestonePhase]);

  const getLevelBadge = (level: GuideSection['level']) => {
    switch (level) {
      case 'pemula':
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-[#238636]/40 bg-[#142817] px-2.5 py-0.5 text-xs font-medium text-[#7ee787]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#238636]"></span>
            Pemula (Day 1-35)
          </span>
        );
      case 'menengah':
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-[#d4af37]/40 bg-[#291f0c] px-2.5 py-0.5 text-xs font-medium text-[#f2b84b]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5a93c]"></span>
            Menengah (Day 36-100)
          </span>
        );
      case 'ahli':
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-[#c45a4a]/40 bg-[#2b1212] px-2.5 py-0.5 text-xs font-medium text-[#f87171]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c45a4a]"></span>
            Ahli / Endgame (Day 100+)
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Interactive Survival Milestone Tracker Banner */}
      <section className="rounded-xl border border-[#3d3220] bg-gradient-to-br from-[#211a11] via-[#261e13] to-[#18130c] p-4 sm:p-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-[#facc15]" />
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#f5ebd3]">
                Tracker Kelangsungan Hidup &amp; Misi Survival
              </h2>
              <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#16120b] border border-[#3b301e] ${milestoneProgress.rankColor}`}>
                {milestoneProgress.rankTitle}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#a89d84]">
              Tandai tonggak pencapaian survival Anda di server untuk memantau kesiapan base, bos musiman, dan ekspansi ke The Caves.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* Progress pill */}
            <div className="flex items-center gap-2 rounded-lg border border-[#423522] bg-[#16120b] px-3.5 py-2">
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-[#d4af37]">
                  {milestoneProgress.completed} / {milestoneProgress.total} Selesai
                </div>
                <div className="text-[11px] text-[#827660]">
                  Progress: {milestoneProgress.percentage}%
                </div>
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-[#3d3221] bg-[#1d170f] flex items-center justify-center font-mono text-xs font-bold text-[#f5ecd3]">
                {milestoneProgress.percentage}%
              </div>
            </div>

            <button
              onClick={() => setShowMilestones(!showMilestones)}
              className="flex items-center gap-1.5 rounded-lg border border-[#d4af37]/40 bg-[#2c2214] px-3 py-2 text-xs font-medium text-[#f5ebd3] hover:bg-[#382b19] transition-all"
            >
              <span>{showMilestones ? 'Tutup Misi' : 'Buka Checklist Misi'}</span>
              {showMilestones ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mini progress bar */}
        <div className="mt-3.5 h-2 w-full overflow-hidden rounded-full bg-[#18130b] border border-[#382c1b]">
          <div 
            className="h-full bg-gradient-to-r from-[#238636] via-[#e5a93c] to-[#facc15] transition-all duration-500"
            style={{ width: `${milestoneProgress.percentage}%` }}
          />
        </div>

        {/* Collapsible Milestone Checklist Panel */}
        {showMilestones && (
          <div className="mt-5 border-t border-[#382d1c] pt-4 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="font-semibold text-[#8a7e67] mr-1">Fase Misi:</span>
                {[
                  { id: 'all', label: 'Semua' },
                  { id: 'awal', label: 'Hari 1-15' },
                  { id: 'winter', label: 'Winter' },
                  { id: 'spring', label: 'Spring/Summer' },
                  { id: 'caves', label: 'Caves' },
                  { id: 'endgame', label: 'Endgame' }
                ].map(phase => (
                  <button
                    key={phase.id}
                    onClick={() => setMilestonePhase(phase.id)}
                    className={`rounded px-2.5 py-1 transition-colors ${
                      milestonePhase === phase.id
                        ? 'bg-[#3b2e1b] text-[#f5ecd3] font-semibold border border-[#524128]'
                        : 'bg-[#18130c] text-[#9c9078] hover:text-[#e8dec4]'
                    }`}
                  >
                    {phase.label}
                  </button>
                ))}
              </div>

              {completedMilestones.length > 0 && (
                <button
                  onClick={resetAllMilestones}
                  className="flex items-center gap-1 text-[11px] text-[#f87171] hover:text-[#fca5a5] border border-[#481c1c] bg-[#221212] px-2.5 py-1 rounded"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>Reset Checklist</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-96 overflow-y-auto pr-1">
              {filteredMilestones.map(milestone => {
                const isChecked = completedMilestones.includes(milestone.id);
                return (
                  <div
                    key={milestone.id}
                    onClick={() => toggleMilestone(milestone.id)}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      isChecked
                        ? 'border-[#238636]/50 bg-[#142316]/70 text-[#cdeecf]'
                        : 'border-[#332817] bg-[#1a150e] hover:border-[#4d3d25] text-[#dcd1b8]'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}} // Handled by parent div
                      className="mt-0.5 h-4 w-4 rounded border-[#4d3d25] text-[#238636] focus:ring-0 cursor-pointer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-xs font-semibold ${isChecked ? 'line-through text-[#86a689]' : 'text-[#f5ecd3]'}`}>
                          {milestone.title}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#241c12] border border-[#3b2f1e] text-[#d4af37] flex-shrink-0">
                          {milestone.tag}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-[#948770]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Control Bar: Topics Filter & Utility Controls */}
      <section className="space-y-3">
        {/* Topic Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {TOPICS.map(topic => {
            const count = topic.id === 'all' 
              ? guides.length 
              : guides.filter(g => g.topic === topic.id).length;

            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedTopic === topic.id
                    ? 'border border-[#d4af37]/60 bg-[#2d2315] text-[#f5ebd3] shadow-sm'
                    : 'border border-[#2e2417] bg-[#17130d] text-[#a4977e] hover:bg-[#201911] hover:text-[#f0e6ce]'
                }`}
              >
                <span className="text-[#d4af37]">{topic.icon}</span>
                <span>{topic.label}</span>
                <span className="text-[10px] rounded-full bg-[#120f09] px-1.5 py-0.2 text-[#80745e] font-mono">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary Bar: Quick Jump, View Mode & Expand Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg border border-[#2e2417] bg-[#16120b] p-2.5 text-xs">
          <div className="flex items-center gap-2 flex-1 max-w-sm">
            <span className="text-[#7e7159] whitespace-nowrap">Lompat ke:</span>
            <select
              value={jumpTarget}
              onChange={(e) => handleJumpToGuide(e.target.value)}
              className="w-full rounded border border-[#3d311e] bg-[#1e1810] px-2.5 py-1 text-xs text-[#ece4d0] outline-none focus:border-[#d4af37]"
            >
              <option value="">Pilih judul panduan ({filteredGuides.length} tersedia)...</option>
              {filteredGuides.map(g => (
                <option key={g.id} value={g.id}>
                  [{g.level.toUpperCase()}] {g.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center rounded border border-[#332817] bg-[#19140d] p-0.5">
              <button
                onClick={() => setViewMode('detailed')}
                className={`rounded px-2 py-1 font-medium transition-colors ${
                  viewMode === 'detailed'
                    ? 'bg-[#2e2417] text-[#f5ebd3]'
                    : 'text-[#847862] hover:text-[#dcd1b8]'
                }`}
              >
                Detail
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`rounded px-2 py-1 font-medium transition-colors ${
                  viewMode === 'compact'
                    ? 'bg-[#2e2417] text-[#f5ebd3]'
                    : 'text-[#847862] hover:text-[#dcd1b8]'
                }`}
              >
                Ringkas
              </button>
            </div>

            {/* Expand / Collapse All */}
            <div className="flex items-center gap-1">
              <button
                onClick={expandAll}
                className="rounded border border-[#332817] bg-[#1e1810] px-2.5 py-1 text-[#a89d84] hover:text-[#f5ecd3] hover:bg-[#282015] transition-colors"
                title="Buka semua kartu panduan"
              >
                Buka Semua
              </button>
              <button
                onClick={collapseAll}
                className="rounded border border-[#332817] bg-[#1e1810] px-2.5 py-1 text-[#a89d84] hover:text-[#f5ecd3] hover:bg-[#282015] transition-colors"
                title="Tutup semua kartu panduan"
              >
                Tutup Semua
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* No result empty state */}
      {filteredGuides.length === 0 && (
        <div className="rounded-xl border border-[#332b1e] bg-[#1a1610] p-12 text-center text-[#9c917b]">
          <AlertCircle className="mx-auto h-10 w-10 text-[#594b34] mb-2" />
          <p className="text-base font-semibold text-[#f0e6ce]">
            Tidak ada panduan yang cocok dengan filter atau kata kunci "{searchQuery}".
          </p>
          <p className="mt-1 text-sm text-[#736855]">
            Coba ganti pilihan topik, ubah tingkat ke "Semua", atau reset pencarian.
          </p>
          <button
            onClick={() => { setSelectedTopic('all'); }}
            className="mt-4 rounded-lg border border-[#d4af37]/40 bg-[#281f13] px-3.5 py-1.5 text-xs text-[#f5ecd3] hover:bg-[#332717]"
          >
            Tampilkan Semua Panduan ({guides.length})
          </button>
        </div>
      )}

      {/* Guide Cards Listing */}
      <div className="space-y-5">
        {filteredGuides.map((guide) => {
          const isExpanded = expandedMap[guide.id] !== false; // default open
          const isFav = favorites.includes(guide.id);
          const isCopied = copiedMap[guide.id] || false;

          // Count completed checklist items for this guide
          const totalChecks = guide.checklist?.length || 0;
          const completedCount = guide.checklist?.filter(c => completedTasks.includes(c.id)).length || 0;

          return (
            <article
              id={guide.id}
              key={guide.id}
              className="scroll-mt-6 rounded-xl border border-[#332a1b] bg-[#1c1811] shadow-md transition-all hover:border-[#4d3f2a]"
            >
              {/* Card Header Area */}
              <div className="p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3.5">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-[#4d3d25] bg-[#272016] text-[#d4af37] shadow-inner">
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
                        {guide.readTime && (
                          <span className="rounded-md bg-[#1f1a11] px-2 py-0.5 font-mono text-[11px] text-[#8e816a] border border-[#2d2417]">
                            📖 {guide.readTime}
                          </span>
                        )}
                        {totalChecks > 0 && (
                          <span className="rounded-md bg-[#172318] px-2 py-0.5 font-mono text-[11px] text-[#7ee787] border border-[#238636]/40">
                            ✓ {completedCount}/{totalChecks} Tugas
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

                  {/* Actions: Favorite, Copy, Expand */}
                  <div className="flex items-center gap-1.5 self-end sm:self-start">
                    <button
                      onClick={() => handleCopyGuide(guide)}
                      title="Salin ringkasan panduan ini ke clipboard"
                      className="rounded-lg border border-[#382e1d] bg-[#1e1911] p-2 text-[#8a7e66] hover:text-[#f2ead2] hover:bg-[#282015] transition-colors"
                    >
                      {isCopied ? (
                        <Check className="h-4 w-4 text-[#7ee787]" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>

                    <button
                      onClick={() => toggleFavorite(guide.id)}
                      title={isFav ? "Hapus dari daftar favorit" : "Simpan ke daftar favorit"}
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
                      className="flex items-center gap-1.5 rounded-lg border border-[#382e1d] bg-[#1e1911] px-3 py-2 text-xs font-medium text-[#b5a990] hover:bg-[#272116] hover:text-[#f2ead2] transition-colors"
                    >
                      <span>{isExpanded ? 'Tutup' : 'Buka Detail'}</span>
                      {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Quick Overview Text */}
                <p className="mt-3 text-sm leading-relaxed text-[#c7bc9f]">
                  {guide.overview}
                </p>

                {/* Quick Summary Pill (if available) */}
                {guide.quickSummary && (
                  <div className="mt-3 rounded-md border border-[#3b301f] bg-[#17130c] p-2.5 text-xs text-[#dfd4be] flex items-start gap-2">
                    <Lightbulb className="h-4 w-4 text-[#e5a93c] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#f5ebd3] font-semibold">Intisari Cepat: </strong>
                      <span>{guide.quickSummary}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Collapsible Content Area */}
              {isExpanded && (
                <div className="border-t border-[#2d2518] bg-[#17130d]/70 p-4 sm:p-5 space-y-4">
                  {/* In-Guide Checklist (Tasks players can check off!) */}
                  {guide.checklist && guide.checklist.length > 0 && (
                    <div className="rounded-lg border border-[#382d1c] bg-[#1d1710] p-3.5 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#d4af37]">
                        <span className="flex items-center gap-1.5">
                          <CheckSquare className="h-4 w-4" />
                          Checklist Aksi Panduan Ini
                        </span>
                        <span className="text-[11px] font-mono text-[#8a7d65]">
                          {completedCount}/{totalChecks} selesai
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {guide.checklist.map(task => {
                          const isDone = completedTasks.includes(task.id);
                          return (
                            <label
                              key={task.id}
                              className={`flex items-start gap-2.5 p-2 rounded border text-xs cursor-pointer transition-colors ${
                                isDone
                                  ? 'border-[#238636]/40 bg-[#132316]/50 text-[#86a689] line-through'
                                  : 'border-[#2f2416] bg-[#16120b] text-[#dcd1b8] hover:border-[#423320]'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isDone}
                                onChange={() => toggleSubtask(task.id)}
                                className="mt-0.5 h-3.5 w-3.5 rounded border-[#423420] text-[#238636] focus:ring-0 cursor-pointer"
                              />
                              <span className="leading-snug">{task.label}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Detailed Key Points (or compact view) */}
                  {viewMode === 'detailed' ? (
                    <div className="space-y-3.5">
                      {guide.keyPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg border border-[#2d2518] bg-[#201a12] p-4 shadow-sm"
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
                                  <span className="leading-relaxed">{item}</span>
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
                                <strong className="font-semibold text-[#fef08a]">Pro Tip Veteran: </strong>
                                <span>{point.proTip}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Compact Summary Mode */
                    <div className="space-y-2 text-xs text-[#c9bea5]">
                      {guide.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2 py-1 border-b border-[#261e13] last:border-0">
                          <ArrowRight className="h-3.5 w-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-[#e5a93c]">{point.heading}: </strong>
                            <span>{point.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Recommended Items Pill Row */}
                  {guide.recommendedItems && guide.recommendedItems.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#292015]">
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
