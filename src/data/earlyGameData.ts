import { EarlyGameGoal } from '../types';

export const EARLY_GAME_GOALS: EarlyGameGoal[] = [
  // Day 1-3: Golden Start & Resource Gathering
  {
    id: 'eg-1',
    phase: 'Day 1-3',
    title: 'Kumpulkan Starter Kit (Rumput, Ranting, & Flint)',
    description: 'Jangan berhenti memetik di hari pertama. Kumpulkan minimal 40 Cut Grass, 40 Twigs, dan sebanyak mungkin Flint yang tercecer di tanah.',
    priority: 'Kritis',
    category: 'Eksplorasi',
    actionTip: 'Jalan terus menyusuri jalan setapak (Cobblestone/Dirt Turf) untuk mendapatkan speed boost +25% saat menjelajah.',
    targetItems: ['40x Cut Grass', '40x Twigs', '15x Flint']
  },
  {
    id: 'eg-2',
    phase: 'Day 1-3',
    title: 'Rakit Kapak (Axe) & Beliung (Pickaxe)',
    description: 'Buat alat perkakas pertama untuk menebang pohon kayu besar dan memecahkan batu boulder pertama yang kamu temui.',
    priority: 'Kritis',
    category: 'Crafting',
    actionTip: 'Tebang pohon ukuran medium atau besar untuk efisiensi kayu dan bibit pinus (Pinecone).',
    targetItems: ['1x Axe', '1x Pickaxe', '20x Log', '15x Rocks']
  },
  {
    id: 'eg-3',
    phase: 'Day 1-3',
    title: 'Manajemen Malam: Torch & Jangan Buat Campfire Permanen',
    description: 'Di hari 1–5, buat Torch (Obor) saat malam tiba dan tetaplah berjalan mengitari peta. Jangan buang waktu duduk di dekat api unggun.',
    priority: 'Kritis',
    category: 'Survival',
    actionTip: 'Bawa 2 Torch cadangan di inventori agar tidak mati diserang monster kegelapan (Charlie).',
    targetItems: ['2x Torch', 'Makanan mentah (Berries/Carrots)']
  },
  {
    id: 'eg-4',
    phase: 'Day 1-3',
    title: 'Eksplorasi Tepi Peta (Edge-Mapping)',
    description: 'Susuri garis pantai/tepi peta dunia untuk mengungkap seluruh bentuk pulau dan menemukan letak setiap bioma krusial.',
    priority: 'Tinggi',
    category: 'Eksplorasi',
    actionTip: 'Tandai letak bioma Padang Savanna (Beefalo), Hutan Birchnut (Pig King), Rawa Reeds, dan Padang Pasir (Desert).',
    targetItems: ['Peta terbuka minimal 30%']
  },

  // Day 4-8: Science Machine, Backpack, & Finding Base Location
  {
    id: 'eg-5',
    phase: 'Day 4-8',
    title: 'Rakit Science Machine Pertama (Tier 1 Science)',
    description: 'Saat menemukan bongkahan batu boulder berurat emas (Gold Vein), tambang dan rakit Science Machine sementara.',
    priority: 'Kritis',
    category: 'Crafting',
    actionTip: 'Science Machine ini bersifat sementara (prototipe). Kamu bisa memukulnya dengan Hammer nanti setelah membuat Alchemy Engine.',
    targetItems: ['1x Science Machine (1 Gold, 4 Rocks, 4 Logs)']
  },
  {
    id: 'eg-6',
    phase: 'Day 4-8',
    title: 'Buat Backpack (Tas Punggung) untuk +8 Slot Inventori',
    description: 'Inventori karakter sangat terbatas (15 slot). Backpack memberikan tambahan 8 slot di punggung untuk menampung bekal survival.',
    priority: 'Kritis',
    category: 'Crafting',
    actionTip: 'Resep: 4 Cut Grass + 4 Twigs di Science Machine. Selalu gunakan backpack selama fase penjelajahan awal!',
    targetItems: ['1x Backpack', '1x Shovel (Sekop)']
  },
  {
    id: 'eg-7',
    phase: 'Day 4-8',
    title: 'Gali 20 Ranting & 20 Rumput Menggunakan Sekop (Shovel)',
    description: 'Prototipe Shovel di Science Machine, lalu gali pangkal Berry Bush, Sapling (Ranting), dan Grass Tuft untuk ditanam ulang di base.',
    priority: 'Tinggi',
    category: 'Pangan',
    actionTip: 'Simpan tanaman dalam bentuk galian di tas; mereka tidak akan membusuk sampai kamu menanamnya kembali di base.',
    targetItems: ['20x Dug Sapling', '20x Dug Grass Tuft', '10x Dug Berry Bush']
  },
  {
    id: 'eg-8',
    phase: 'Day 4-8',
    title: 'Temukan & Putuskan Lokasi Base Permanen',
    description: 'Pilih lokasi markas ideal: dekat akses Wormhole, sentral antar bioma, dekat Beefalo (untuk kiting serigala) atau Pig King, serta jauh dari spawn sarang lebah agresif.',
    priority: 'Kritis',
    category: 'Base',
    actionTip: 'Hindari base tepat di tengah kawanan Beefalo (karena musim birahi/mating season mereka akan membunuhmu). Base di tepi bioma padang rumput!',
    targetItems: ['Lokasi Base Terpilih', '1x Fire Pit (Batu Api Unggun)']
  },

  // Day 9-15: Alchemy Engine, Crock Pot, & Base Infrastructure
  {
    id: 'eg-9',
    phase: 'Day 9-15',
    title: 'Rakit Alchemy Engine (Tier 2 Science)',
    description: 'Pusat teknologi utama markasmu! Membuka hampir semua resep penting survival, senjata, armor, dan penyimpanan modern.',
    priority: 'Kritis',
    category: 'Crafting',
    actionTip: 'Resep: 4 Boards (Kayu Olahan), 2 Cut Stone, 6 Gold Nugget. Bangun tepat di samping Fire Pit base.',
    targetItems: ['1x Alchemy Engine', 'Bongkar Science Machine lama pakai Hammer']
  },
  {
    id: 'eg-10',
    phase: 'Day 9-15',
    title: 'Bangun Crock Pot (Panci Masak) Pertama',
    description: 'Kunci mutlak agar tidak kelaparan! Crock Pot mengubah 1 Monster Meat + 3 Berries menjadi Meatballs yang memulihkan 62.5 Kelaparan.',
    priority: 'Kritis',
    category: 'Pangan',
    actionTip: 'Resep: 3 Cut Stone, 6 Charcoal (bakar pohon pinus pakai obor), 6 Twigs. Bangun minimal 1–2 buah.',
    targetItems: ['1-2x Crock Pot', '12x Charcoal']
  },
  {
    id: 'eg-11',
    phase: 'Day 9-15',
    title: 'Pasang Penangkal Petir (Lightning Rod)',
    description: 'Hujan deras di pertengahan Autumn sering diiringi petir yang bisa menyambar dan membakar hangus seluruh base kayumu dalam hitungan detik!',
    priority: 'Tinggi',
    category: 'Base',
    actionTip: 'Resep: 1 Cut Stone + 4 Gold Nuggets. Jangkauan proteksinya sangat luas (cukup 1 buah di tengah base).',
    targetItems: ['1x Lightning Rod']
  },
  {
    id: 'eg-12',
    phase: 'Day 9-15',
    title: 'Bangun 2–4 Drying Rack (Rak Pengering Daging)',
    description: 'Jemur potongan Meat besar menjadi Jerky (+20 Health, +25 Hunger, +15 Sanity, tahan basi 20 hari!).',
    priority: 'Tinggi',
    category: 'Pangan',
    actionTip: 'Resep: 3 Twigs, 2 Charcoal, 3 Rope. Sangat krusial untuk menjaga Sanity dan Health saat musim dingin.',
    targetItems: ['2-4x Drying Rack', '6x Rope']
  },

  // Day 16-20: Pre-Winter Defense & Clockwork Gears
  {
    id: 'eg-13',
    phase: 'Day 16-20',
    title: 'Kalahkan Monster Clockwork untuk Mengambil Gears (Roda Gigi)',
    description: 'Cari patung catur / Clockwork Knight & Bishop. Bunuh mereka untuk mendapatkan Gears sebagai bahan Ice Box (Kulkas).',
    priority: 'Tinggi',
    category: 'Crafting',
    actionTip: 'Gunakan Log Suit + Football Helmet saat duel melawan Clockwork Knight. Hati-hati dengan laser Clockwork Bishop.',
    targetItems: ['Minimal 1–2x Gears', '1x Ice Box (Kulkas)']
  },
  {
    id: 'eg-14',
    phase: 'Day 16-20',
    title: 'Siapkan Armor & Senjata untuk Gelombang Serigala (Hound Attack)',
    description: 'Serangan serigala pertama datang sekitar Hari 7–9 dan membesar di Hari 16–20. Jangan bertarung tanpa pelindung kepala!',
    priority: 'Kritis',
    category: 'Pertahanan',
    actionTip: 'Football Helmet (1 Pig Skin + 1 Rope) menyerap 80% damage. Gunakan Ham Bat atau Spear dan lari ke dekat Beefalo jika terdesak.',
    targetItems: ['2x Football Helmet', '1x Spear / Ham Bat', '1x Log Suit']
  },
  {
    id: 'eg-15',
    phase: 'Day 16-20',
    title: 'Buat Thermal Stone & Winter Hat Sebelum Hari 21 (Musim Dingin)',
    description: 'Musim dingin (Winter) dimulai tepat pada Hari 21. Suhu tubuh akan anjlok drastis (Freezing) hingga sekarat jika tidak bersiap.',
    priority: 'Kritis',
    category: 'Survival',
    actionTip: 'Panaskan Thermal Stone di dekat api unggun sampai berwarna jingga membara sebelum bepergian keluar base.',
    targetItems: ['1x Thermal Stone', '1x Winter Hat / Beefalo Hat', '1x Razor (untuk cukur Beefalo)']
  },
  {
    id: 'eg-16',
    phase: 'Day 16-20',
    title: 'Bangun Kandang Burung (Birdcage) & Tangkap Burung Liar',
    description: 'Kandang burung mengubah daging busuk atau Monster Meat matang menjadi Telur Segar (Eggs) untuk resep Pierogi pemulih 40 Health!',
    priority: 'Tinggi',
    category: 'Pangan',
    actionTip: 'Resep: 2 Papyrus (dari Reeds di rawa) + 6 Gold + 2 Seeds. Pasang Bird Trap dengan umpan benih.',
    targetItems: ['1x Birdcage', '1x Burung Hidup (Crow/Robin)']
  }
];
