import React from 'react';
import { Star, Trash2, BookOpen, Terminal } from 'lucide-react';
import { GuideSection, CommandCategory } from '../types';

interface FavoritesViewerProps {
  favorites: string[];
  guides: GuideSection[];
  categories: CommandCategory[];
  toggleFavorite: (id: string) => void;
  clearAllFavorites: () => void;
}

export const FavoritesViewer: React.FC<FavoritesViewerProps> = ({
  favorites,
  guides,
  categories,
  toggleFavorite,
  clearAllFavorites,
}) => {
  const favoritedGuides = guides.filter(g => favorites.includes(g.id));
  const allCommands = categories.flatMap(c => c.commands);
  const favoritedCommands = allCommands.filter(c => favorites.includes(c.id));

  if (favorites.length === 0) {
    return (
      <div className="rounded-xl border border-[#332b1e] bg-[#1a1610] p-12 text-center text-[#9c917b]">
        <Star className="mx-auto h-12 w-12 text-[#574932] mb-3 stroke-1" />
        <h3 className="text-lg font-serif font-bold text-[#e5dbbf]">Belum Ada Favorit Disimpan</h3>
        <p className="mt-1 text-sm text-[#786c57] max-w-md mx-auto">
          Klik ikon bintang (⭐) pada panduan survival atau perintah konsol apa pun untuk menyimpannya di sini agar cepat diakses saat bermain.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[#2e261a] pb-3">
        <h2 className="font-serif text-xl font-bold text-[#f2ead2] flex items-center gap-2">
          <Star className="h-5 w-5 text-[#facc15] fill-current" />
          Koleksi Favorit Kamu ({favorites.length})
        </h2>
        <button
          onClick={clearAllFavorites}
          className="flex items-center gap-1.5 text-xs text-[#f87171] hover:text-[#fca5a5] border border-[#481c1c] bg-[#221212] px-2.5 py-1 rounded"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Hapus Semua
        </button>
      </div>

      {/* Favorited Guides */}
      {favoritedGuides.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Panduan Tersimpan ({favoritedGuides.length})
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {favoritedGuides.map(guide => (
              <div
                key={guide.id}
                className="rounded-lg border border-[#362b1a] bg-[#1b1610] p-4 flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#d4af37] uppercase">{guide.level}</span>
                  <h4 className="font-serif text-base font-bold text-[#f2ead2]">{guide.title}</h4>
                  <p className="text-xs text-[#a69b82] mt-0.5">{guide.subtitle}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(guide.id)}
                  className="text-xs text-[#8c8069] hover:text-[#f87171] p-2"
                  title="Hapus dari favorit"
                >
                  <Star className="h-4 w-4 text-[#facc15] fill-current" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Favorited Commands */}
      {favoritedCommands.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#60a5fa] flex items-center gap-2">
            <Terminal className="h-4 w-4" />
            Perintah Konsol Tersimpan ({favoritedCommands.length})
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {favoritedCommands.map(cmd => (
              <div
                key={cmd.id}
                className="rounded-lg border border-[#362b1a] bg-[#1b1610] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <h4 className="font-sans text-sm font-bold text-[#f2ead2]">{cmd.title}</h4>
                  <p className="text-xs text-[#a69b82] mt-0.5">{cmd.description}</p>
                  <code className="mt-2 inline-block rounded bg-[#100e0a] px-2 py-1 font-mono text-xs text-[#f0e3ae] border border-[#2b2216]">
                    {cmd.code}
                  </code>
                </div>
                <button
                  onClick={() => toggleFavorite(cmd.id)}
                  className="self-end sm:self-auto text-xs text-[#8c8069] hover:text-[#f87171] p-2"
                  title="Hapus dari favorit"
                >
                  <Star className="h-4 w-4 text-[#facc15] fill-current" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
