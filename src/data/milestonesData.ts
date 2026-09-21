export interface SurvivalMilestone {
  id: string;
  phase: 'Awal (Hari 1-15)' | 'Winter (Hari 16-35)' | 'Spring/Summer (Hari 36-70)' | 'Caves & Midgame (Hari 71-100)' | 'Endgame & Bosses (Hari 100+)';
  title: string;
  description: string;
  tag: string;
}

export const SURVIVAL_MILESTONES: SurvivalMilestone[] = [
  // Phase 1: Awal
  {
    id: 'm-science-machine',
    phase: 'Awal (Hari 1-15)',
    title: 'Bangun Science Machine & Buat Backpack',
    description: 'Kumpulkan 1 Gold Nugget, 4 Logs, 4 Rocks. Prototype tas 8-slot dan peralatan dasar sebelum hari ke-3.',
    tag: 'Eksplorasi'
  },
  {
    id: 'm-find-chester',
    phase: 'Awal (Hari 1-15)',
    title: 'Temukan Eye Bone (Chester)',
    description: 'Cari tulang Eye Bone di sepanjang jalan setapak untuk memanggil peti berjalan berkaki 9-slot Chester.',
    tag: 'Logistik'
  },
  {
    id: 'm-alchemy-base',
    phase: 'Awal (Hari 1-15)',
    title: 'Tentukan Lokasi Base & Bangun Alchemy Engine + Fire Pit',
    description: 'Pilih lokasi persimpangan strategis dekat Beefalo/Wormhole. Buat Fire Pit permanen dan Alchemy Engine.',
    tag: 'Base'
  },
  {
    id: 'm-crockpot-icebox',
    phase: 'Awal (Hari 1-15)',
    title: 'Rakit Minimal 2 Crock Pot & 1 Ice Box',
    description: 'Kalahkan Clockwork Knight/Bishop di Marble Biome untuk mengambil Gears, lalu buat kulkas Ice Box.',
    tag: 'Pangan'
  },
  {
    id: 'm-relocate-plants',
    phase: 'Awal (Hari 1-15)',
    title: 'Relokasi Kebun Berry & Ranting + Pasang Lightning Rod',
    description: 'Gali 20 Berry Bushes, 20 Saplings, 20 Grass Tufts, pupuk dengan kotoran dan amankan dengan penangkal petir.',
    tag: 'Farming'
  },

  // Phase 2: Winter
  {
    id: 'm-thermal-stone',
    phase: 'Winter (Hari 16-35)',
    title: 'Craft Thermal Stone & Armor Hangat Sebelum Hari 20',
    description: 'Batu penghangat dipanaskan di api unggun oranye terang agar tidak membeku saat menjelajah.',
    tag: 'Musim'
  },
  {
    id: 'm-mactusk-hunt',
    phase: 'Winter (Hari 16-35)',
    title: 'Buru Walrus MacTusk untuk Tam o\' Shanter & Walking Cane',
    description: 'Dapatkan Walrus Tusk (+25% speed cane) dan topi Tam o\' Shanter (pemulih +6.7 Sanity/menit terbaik).',
    tag: 'Gear'
  },
  {
    id: 'm-slay-deerclops',
    phase: 'Winter (Hari 16-35)',
    title: 'Kalahkan Deerclops & Amankan Deerclops Eyeball (Hari 30-31)',
    description: 'Pancing menjauh dari base ke hutan atau bunuh dengan kiting 2-3 hit + Ham Bat. Ambil matanya!',
    tag: 'Boss'
  },
  {
    id: 'm-craft-eyebrella',
    phase: 'Winter (Hari 16-35)',
    title: 'Craft Eyebrella 100% Anti-Air & Anti-Petir',
    description: 'Gunakan Eyeball Deerclops + 15 Sewed Cloths + 4 Twigs. Perlengkapan kunci untuk menghadapi Spring!',
    tag: 'Gear'
  },

  // Phase 3: Spring / Summer
  {
    id: 'm-slay-moosegoose',
    phase: 'Spring/Summer (Hari 36-70)',
    title: 'Kalahkan Moose/Goose & Moslings',
    description: 'Habisi induk angsa raksasa di musim semi dan amankan bulu Down Feathers untuk membuat Weather Pain.',
    tag: 'Boss'
  },
  {
    id: 'm-flingomatic-setup',
    phase: 'Spring/Summer (Hari 36-70)',
    title: 'Bangun Ice Flingomatic di Base Sebelum Hari 56 (Summer)',
    description: 'Mesin pemadam otomatis menggunakan Gears dan Ice untuk mencegah seluruh markas terbakar hangus.',
    tag: 'Pertahanan'
  },
  {
    id: 'm-antlion-tribute',
    phase: 'Spring/Summer (Hari 36-70)',
    title: 'Beri Upeti ke Antlion di Oasis Desert',
    description: 'Cegah gempa bumi dan kawah jebol di base dengan rutin memberi Thermal Stone dingin atau trinket ke Antlion.',
    tag: 'Musim'
  },

  // Phase 4: Caves & Midgame
  {
    id: 'm-enter-caves',
    phase: 'Caves & Midgame (Hari 71-100)',
    title: 'Buka Sinkhole & Bikin Lantern + Miner Hat',
    description: 'Turun ke The Caves, petik Light Bulbs bercahaya, dan buat lentera portabel untuk kebebasan bergerak.',
    tag: 'Caves'
  },
  {
    id: 'm-tame-beefalo',
    phase: 'Caves & Midgame (Hari 71-100)',
    title: 'Jinakkan Beefalo Dewasa (Tipe Rider / Ornery)',
    description: 'Rutin beri makan rumput, pasang Saddle, dan capai status domestikasi penuh untuk mobilitas tempur maksimal.',
    tag: 'Mount'
  },
  {
    id: 'm-tooth-trap-arena',
    phase: 'Caves & Midgame (Hari 71-100)',
    title: 'Bangun Arena Pertahanan 40+ Tooth Traps',
    description: 'Otomasi pembunuhan gelombang Hound attack hari 70+ tanpa perlu menguras armor atau senjata tangan.',
    tag: 'Combat'
  },
  {
    id: 'm-conquer-ruins',
    phase: 'Caves & Midgame (Hari 71-100)',
    title: 'Taklukkan Ruins & Craft Thulecite Crown + Magiluminescence',
    description: 'Cari Ancient Pseudoscience Station, kumpulkan Thulecite, dan buat kalung kecepatan serta helm forcefield.',
    tag: 'Ruins'
  },

  // Phase 5: Endgame & Bosses
  {
    id: 'm-slay-dragonfly',
    phase: 'Endgame & Bosses (Hari 100+)',
    title: 'Bangun Arena Dinding Batu & Kalahkan Dragonfly (27.500 HP)',
    description: 'Gunakan Pan Flute saat enrage, kalahkan bos larva ini dan rakit Scaled Furnace penghangat abadi.',
    tag: 'Raid Boss'
  },
  {
    id: 'm-slay-beequeen',
    phase: 'Endgame & Bosses (Hari 100+)',
    title: 'Kalahkan Bee Queen & Dapatkan Bundling Wrap Blueprint',
    description: 'Gunakan Beekeeper Hat, amankan permen madu dan resep pengemas makanan awet selamanya tanpa basi.',
    tag: 'Raid Boss'
  },
  {
    id: 'm-slay-klaus',
    phase: 'Endgame & Bosses (Hari 100+)',
    title: 'Kalahkan Bos Klaus Musim Dingin & Rebut Krampus Sack',
    description: 'Buka karung Klaus Sack di Winter, kiting fase gigitan, dan dapatkan tas 14-slot terbaik di game.',
    tag: 'Raid Boss'
  },
  {
    id: 'm-celestial-island',
    phase: 'Endgame & Bosses (Hari 100+)',
    title: 'Berlayar ke Lunar Island & Rakit Tiga Altar Kosmik',
    description: 'Kuasai sistem Enlightenment, tambang Glass shards, dan letakkan 3 bagian Celestial Altar di celah batu.',
    tag: 'Endgame'
  },
  {
    id: 'm-ancient-fuelweaver',
    phase: 'Endgame & Bosses (Hari 100+)',
    title: 'Kalahkan Ancient Fuelweaver di The Atrium',
    description: 'Gunakan Weather Pain untuk menghancurkan perisai gelapnya dan Nightmare Amulet untuk membersihkan Woven Shadows.',
    tag: 'Master Boss'
  },
  {
    id: 'm-celestial-champion',
    phase: 'Endgame & Bosses (Hari 100+)',
    title: 'Kalahkan Celestial Champion (Tiga Fase Pertempuran Kosmik)',
    description: 'Panggil entitas penguasa bulan melalui badai Celestial, taklukkan 3 wujudnya untuk membuka era Rifts.',
    tag: 'Master Boss'
  }
];
