import React, { useState } from 'react';
import { Copy, Check, Terminal, AlertTriangle, Info, HelpCircle, Star, ShieldAlert } from 'lucide-react';
import { CommandCategory } from '../types';

interface ConsoleViewerProps {
  categories: CommandCategory[];
  searchQuery: string;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export const ConsoleViewer: React.FC<ConsoleViewerProps> = ({
  categories,
  searchQuery,
  favorites,
  toggleFavorite,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showHowTo, setShowHowTo] = useState<boolean>(false);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    });
  };

  // Flatten and filter commands
  const allCommands = categories.flatMap(cat => cat.commands.map(cmd => ({ ...cmd, categoryName: cat.title })));

  const filteredCommands = allCommands.filter(cmd => {
    // Category filter
    if (selectedCategory !== 'all') {
      const matchCat = categories.find(c => c.id === selectedCategory);
      if (matchCat && !matchCat.commands.some(c => c.id === cmd.id)) {
        return false;
      }
    }

    // Search filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = cmd.title.toLowerCase().includes(q);
      const matchCode = cmd.code.toLowerCase().includes(q);
      const matchDesc = cmd.description.toLowerCase().includes(q);
      return matchTitle || matchCode || matchDesc;
    }

    return true;
  });

  return (
    <div className="space-y-6">
      {/* How to activate console banner / toggle */}
      <div className="rounded-xl border border-[#3d3322] bg-[#1d1811] p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-[#4d3f28] bg-[#292015] text-[#d4af37]">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-base sm:text-lg font-bold text-[#f2ead2]">
                Cara Mengaktifkan &amp; Menggunakan Konsol di Game
              </h2>
              <p className="text-xs text-[#a69b82]">
                Tekan tombol <kbd className="rounded bg-[#2b2216] px-1.5 py-0.5 font-mono text-[#d4af37] border border-[#423522]">~</kbd> (Backtick) saat bermain untuk membuka kotak konsol.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowHowTo(!showHowTo)}
            className="rounded-lg border border-[#3e3220] bg-[#261f14] px-3 py-1.5 text-xs font-medium text-[#d4af37] hover:bg-[#30271a] self-start sm:self-auto"
          >
            {showHowTo ? 'Sembunyikan Panduan INI' : 'Lihat Lokasi File Settings.ini'}
          </button>
        </div>

        {showHowTo && (
          <div className="mt-4 border-t border-[#2e261a] pt-3 text-xs sm:text-sm text-[#c4b99d] space-y-3">
            <p>
              Konsol perintah aktif secara default. Jika tidak bisa dibuka, buka file <code className="font-mono text-[#f2ead2] bg-[#120f0a] px-1.5 py-0.5 rounded">client.ini</code>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono">
              <div className="rounded bg-[#120f0b] p-2.5 border border-[#2d2417]">
                <span className="text-[#d4af37] font-sans font-semibold block mb-0.5">Windows &amp; Mac:</span>
                &lt;Documents&gt;\Klei\DoNotStarveTogether\client.ini
              </div>
              <div className="rounded bg-[#120f0b] p-2.5 border border-[#2d2417]">
                <span className="text-[#d4af37] font-sans font-semibold block mb-0.5">Linux:</span>
                ~/.klei/DoNotStarve/client.ini
              </div>
            </div>
            <p>
              Pastikan di bawah baris <code className="font-mono text-[#d4af37]">[MISC]</code> tertulis: <code className="font-mono text-[#7ee787] bg-[#120f0a] px-1 py-0.5 rounded">console_enabled = true</code>.
            </p>
            <div className="rounded-lg border border-[#d4af37]/30 bg-[#241d0e] p-3 text-xs text-[#f0e2b6] flex items-start gap-2">
              <Info className="h-4 w-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <strong>Penting (Mode Remote vs Local):</strong> Jika kamu bermain di server multiplayer atau dedicated server sebagai admin, tekan tombol <kbd className="font-mono bg-[#16120b] px-1 rounded border border-[#443825]">Ctrl</kbd> saat konsol terbuka untuk berganti antara perintah Remote (ke server) dan Local (ke client kamu).
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-[#d4af37] text-[#16120b] font-semibold'
              : 'border border-[#382d1c] bg-[#1a1610] text-[#a89d84] hover:bg-[#261f14] hover:text-[#ece4d0]'
          }`}
        >
          Semua ({allCommands.length})
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              selectedCategory === cat.id
                ? 'bg-[#d4af37] text-[#16120b] font-semibold'
                : 'border border-[#382d1c] bg-[#1a1610] text-[#a89d84] hover:bg-[#261f14] hover:text-[#ece4d0]'
            }`}
          >
            {cat.title.split('(')[0].trim()} ({cat.commands.length})
          </button>
        ))}
      </div>

      {/* Commands List */}
      {filteredCommands.length === 0 ? (
        <div className="rounded-xl border border-[#332b1e] bg-[#1a1610] p-10 text-center text-[#9c917b]">
          <p className="text-base font-medium">Tidak ada perintah yang sesuai dengan kata kunci "{searchQuery}".</p>
          <p className="mt-1 text-sm text-[#736855]">Coba cari nama fungsi seperti c_spawn, godmode, rollback, dll.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredCommands.map(cmd => {
            const isFav = favorites.includes(cmd.id);
            const isCopied = copiedId === cmd.id;

            return (
              <div
                key={cmd.id}
                className="group rounded-xl border border-[#302719] bg-[#1b1610] p-4 sm:p-5 transition-all hover:border-[#4a3b25] hover:bg-[#1f1a12]"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-sans font-semibold text-base text-[#f2ead2]">
                        {cmd.title}
                      </h3>
                      {cmd.isDestructive && (
                        <span className="rounded bg-[#3b1717] px-1.5 py-0.5 font-mono text-[10px] text-[#f87171] border border-[#c45a4a]/40">
                          Hati-hati
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-[#b8ac91] leading-relaxed">
                      {cmd.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-start">
                    <button
                      onClick={() => toggleFavorite(cmd.id)}
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
                      onClick={() => handleCopy(cmd.code, cmd.id)}
                      className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition-all ${
                        isCopied
                          ? 'border-[#238636] bg-[#17331b] text-[#7ee787]'
                          : 'border-[#453722] bg-[#261e13] text-[#d4af37] hover:bg-[#332819] hover:border-[#c9a227]'
                      }`}
                    >
                      {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{isCopied ? 'Tersalin!' : 'Salin Kode'}</span>
                    </button>
                  </div>
                </div>

                {/* Code Box */}
                <div className="relative mt-3 rounded-lg border border-[#2d2417] bg-[#0f0d09] p-3">
                  <pre className="overflow-x-auto font-mono text-xs sm:text-sm text-[#f0e3ae] leading-relaxed">
                    <code>{cmd.code}</code>
                  </pre>
                </div>

                {/* Parameters or Notes */}
                {(cmd.parameters || cmd.note || cmd.warning) && (
                  <div className="mt-2.5 space-y-1 text-xs">
                    {cmd.parameters && (
                      <div className="flex flex-wrap gap-2 text-[#998b72]">
                        <span className="font-semibold text-[#c7b99d]">Argumen:</span>
                        {cmd.parameters.map((p, i) => (
                          <span key={i} className="font-mono bg-[#16120c] px-1.5 py-0.5 rounded border border-[#2b2215]">
                            <strong className="text-[#d4af37]">{p.name}</strong>: {p.desc}
                          </span>
                        ))}
                      </div>
                    )}
                    {cmd.note && (
                      <p className="text-[#a1957c]">
                        <span className="font-semibold text-[#d4af37]">Catatan:</span> {cmd.note}
                      </p>
                    )}
                    {cmd.warning && (
                      <p className="text-[#f87171]">
                        <span className="font-semibold">Peringatan:</span> {cmd.warning}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
