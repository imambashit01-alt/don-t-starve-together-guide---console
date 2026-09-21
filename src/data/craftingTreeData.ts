import { CraftingStation, CraftingItem } from '../types';

export const CRAFTING_STATIONS: CraftingStation[] = [
  {
    id: 'none',
    name: 'Tangan Kosong (Tanpa Mesin)',
    tier: 0,
    branch: 'Basic',
    recipeToBuild: 'Tersedia langsung sejak mendarat di dunia',
    description: 'Dapat dirakit kapan saja dan di mana saja di alam liar tanpa memerlukan mesin stasiun apa pun.',
    color: '#94a3b8',
    badgeColor: 'border-[#475569] bg-[#1e293b] text-[#cbd5e1]',
    unlockedItemCount: 8
  },
  {
    id: 'science_1',
    name: 'Science Machine (Sains Tier 1)',
    tier: 1,
    branch: 'Science',
    parentStationId: 'none',
    recipeToBuild: '1 Gold Nugget + 4 Rocks + 4 Logs',
    description: 'Pintu gerbang revolusi teknologi pertama. Membuka tas punggung, sekop, baju zirah kayu, tombak, dan peralatan dasar base.',
    color: '#facc15',
    badgeColor: 'border-[#ca8a04] bg-[#29220c] text-[#fde047]',
    unlockedItemCount: 10
  },
  {
    id: 'science_2',
    name: 'Alchemy Engine (Sains Tier 2)',
    tier: 2,
    branch: 'Science',
    parentStationId: 'science_1',
    recipeToBuild: '4 Boards + 2 Cut Stone + 6 Gold Nuggets (di Science Machine)',
    description: 'Mesin sains modern terlengkap. Membuka kulkas pendingin, lentera genggam, helm football, penangkal petir, dan senjata Ham Bat.',
    color: '#38bdf8',
    badgeColor: 'border-[#0284c7] bg-[#0c2438] text-[#7dd3fc]',
    unlockedItemCount: 12
  },
  {
    id: 'magic_1',
    name: 'Prestihatitator (Sihir Tier 1)',
    tier: 1,
    branch: 'Magic',
    parentStationId: 'science_2',
    recipeToBuild: '4 Live Rabbits + 4 Boards + 1 Top Hat (di Science Machine)',
    description: 'Topi sulap mekanik pembuka ilmu mistik dan sihir Constant. Mengubah hewan dan permata menjadi artifak magis.',
    color: '#c084fc',
    badgeColor: 'border-[#9333ea] bg-[#2e104d] text-[#e9d5ff]',
    unlockedItemCount: 6
  },
  {
    id: 'magic_2',
    name: 'Shadow Manipulator (Sihir Tier 2)',
    tier: 2,
    branch: 'Magic',
    parentStationId: 'magic_1',
    recipeToBuild: '3 Living Logs + 1 Purple Gem + 7 Nightmare Fuel (di Prestihatitator)',
    description: 'Stasiun ilmu hitam bayangan terkuat! Membuka Pedang Kegelapan (Dark Sword), Baju Bayangan (Night Armor), dan Amulet Kehidupan.',
    color: '#f43f5e',
    badgeColor: 'border-[#e11d48] bg-[#3b0b18] text-[#fda4af]',
    unlockedItemCount: 8
  },
  {
    id: 'ancient',
    name: 'Ancient Pseudoscience Station (The Ruins)',
    tier: 3,
    branch: 'Ancient',
    parentStationId: 'magic_2',
    recipeToBuild: 'Ditemukan di kedalaman The Ruins (perbaiki pakai 6 Thulecite)',
    description: 'Stasiun purba peninggalan peradaban kuno. Membuka perlengkapan perang terkuat: Mahkota Thulecite, Baju Thulecite, dan Menara Otomatis.',
    color: '#fb923c',
    badgeColor: 'border-[#ea580c] bg-[#381608] text-[#fed7aa]',
    unlockedItemCount: 8
  },
  {
    id: 'celestial',
    name: 'Celestial Altar (Teknologi Bulan)',
    tier: 3,
    branch: 'Celestial',
    parentStationId: 'science_2',
    recipeToBuild: 'Susun 3 Kepingan Celestial Altar di Pulau Bulan (Lunar Island)',
    description: 'Stasiun kristal cahaya bulan. Membuka bilah kaca Glass Cutter, portal antar dimensi, dan artifak pengubah wujud karakter.',
    color: '#2dd4bf',
    badgeColor: 'border-[#0d9488] bg-[#082f2c] text-[#99f6e4]',
    unlockedItemCount: 5
  }
];

export const CRAFTING_ITEMS: CraftingItem[] = [
  // TANGAN KOSONG (NONE)
  {
    id: 'axe',
    name: 'Axe (Kapak)',
    category: 'Tools',
    stationId: 'none',
    stationName: 'Tanpa Mesin',
    ingredients: [{ item: 'Twig', count: 1 }, { item: 'Flint', count: 1 }],
    description: 'Alat perkakas dasar untuk menebang semua jenis pohon pinus, birchnut, dan bakau.',
    durability: '100 kali tebang'
  },
  {
    id: 'pickaxe',
    name: 'Pickaxe (Beliung)',
    category: 'Tools',
    stationId: 'none',
    stationName: 'Tanpa Mesin',
    ingredients: [{ item: 'Twig', count: 2 }, { item: 'Flint', count: 2 }],
    description: 'Menambang batu boulder mineral, stalagmit, dan patung marmer.',
    durability: '33 kali tambang'
  },
  {
    id: 'torch',
    name: 'Torch (Obor)',
    category: 'Light',
    stationId: 'none',
    stationName: 'Tanpa Mesin',
    ingredients: [{ item: 'Twig', count: 2 }, { item: 'Cut Grass', count: 2 }],
    description: 'Sumber cahaya bergerak di malam hari untuk mencegah serangan kegelapan Charlie. Bisa membakar objek.',
    durability: '75 detik menyala'
  },
  {
    id: 'campfire',
    name: 'Campfire (Api Unggun Kayu)',
    category: 'Light',
    stationId: 'none',
    stationName: 'Tanpa Mesin',
    ingredients: [{ item: 'Cut Grass', count: 3 }, { item: 'Log', count: 2 }],
    description: 'Perapian darurat sementara yang meninggalkan abu saat padam.',
    durability: 'Hingga kehabisan kayu'
  },
  {
    id: 'trap',
    name: 'Trap (Perangkap Jerami)',
    category: 'Survival',
    stationId: 'none',
    stationName: 'Tanpa Mesin',
    ingredients: [{ item: 'Twig', count: 2 }, { item: 'Cut Grass', count: 6 }],
    description: 'Pasang tepat di atas lubang Rabbit Hole atau di jalur laba-laba untuk menangkap mereka hidup-hidup tanpa bertarung.',
    durability: '8 kali tangkapan'
  },
  {
    id: 'rope',
    name: 'Rope (Tali Serat)',
    category: 'Refine',
    stationId: 'none',
    stationName: 'Tanpa Mesin',
    ingredients: [{ item: 'Cut Grass', count: 3 }],
    description: 'Bahan mentah tali penting untuk membuat armor, tas, perahu, dan tenda.',
    durability: 'Material olahan'
  },
  {
    id: 'straw_hat',
    name: 'Straw Hat (Topi Jerami)',
    category: 'Dress',
    stationId: 'none',
    stationName: 'Tanpa Mesin',
    ingredients: [{ item: 'Cut Grass', count: 12 }],
    description: 'Memberikan proteksi basah (Wetness) 20% dan sedikit perlindungan panas matahari.',
    durability: '5 hari'
  },

  // SCIENCE MACHINE (SCIENCE TIER 1)
  {
    id: 'backpack',
    name: 'Backpack (Tas Punggung)',
    category: 'Survival',
    stationId: 'science_1',
    stationName: 'Science Machine',
    ingredients: [{ item: 'Cut Grass', count: 4 }, { item: 'Twig', count: 4 }],
    description: 'Item paling wajib di hari-hari awal! Memberikan +8 slot inventori ekstra di punggung karakter.',
    perks: '+8 Slot Inventori'
  },
  {
    id: 'shovel',
    name: 'Shovel (Sekop)',
    category: 'Tools',
    stationId: 'science_1',
    stationName: 'Science Machine',
    ingredients: [{ item: 'Twig', count: 2 }, { item: 'Flint', count: 2 }],
    description: 'Menggali akar semak berry, ranting, dan rumput untuk direlokasi ke markas, serta menggali kuburan.',
    durability: '25 kali gali'
  },
  {
    id: 'spear',
    name: 'Spear (Tombak Tempur)',
    category: 'Fight',
    stationId: 'science_1',
    stationName: 'Science Machine',
    ingredients: [{ item: 'Twig', count: 2 }, { item: 'Rope', count: 1 }, { item: 'Flint', count: 1 }],
    description: 'Senjata pemula standar dengan 34 Damage per serangan.',
    perks: '34 Damage',
    durability: '150 pukulan'
  },
  {
    id: 'log_suit',
    name: 'Log Suit (Baju Zirah Kayu)',
    category: 'Fight',
    stationId: 'science_1',
    stationName: 'Science Machine',
    ingredients: [{ item: 'Log', count: 8 }, { item: 'Rope', count: 2 }],
    description: 'Baju zirah badan yang menyerap 80% kerusakan serangan fisik musuh.',
    perks: 'Absorbs 80% Damage',
    durability: '315 Health HP'
  },
  {
    id: 'crock_pot',
    name: 'Crock Pot (Panci Masak)',
    category: 'Structures',
    stationId: 'science_1',
    stationName: 'Science Machine',
    ingredients: [{ item: 'Cut Stone', count: 3 }, { item: 'Charcoal', count: 6 }, { item: 'Twig', count: 6 }],
    description: 'Pusat dapur survival! Memasak 4 bahan mentah menjadi makanan hidangan spesial (Meatballs, Pierogi, dll).',
    perks: 'Penyelamat Kelaparan & Sanity'
  },
  {
    id: 'drying_rack',
    name: 'Drying Rack (Rak Jemur)',
    category: 'Structures',
    stationId: 'science_1',
    stationName: 'Science Machine',
    ingredients: [{ item: 'Twig', count: 3 }, { item: 'Charcoal', count: 2 }, { item: 'Rope', count: 3 }],
    description: 'Mengeringkan potongan Meat menjadi Jerky yang tahan 20 hari tanpa busuk.',
    perks: 'Produksi Jerky Awet'
  },
  {
    id: 'razor',
    name: 'Razor (Pisau Cukur)',
    category: 'Tools',
    stationId: 'science_1',
    stationName: 'Science Machine',
    ingredients: [{ item: 'Twig', count: 2 }, { item: 'Flint', count: 2 }],
    description: 'Mencukur jenggot Wilson (+Sanity) dan mencukur bulu Beefalo saat mereka tertidur lelap.',
    durability: 'Tidak terbatas'
  },
  {
    id: 'alchemy_engine_proto',
    name: 'Alchemy Engine Prototype',
    category: 'Structures',
    stationId: 'science_1',
    stationName: 'Science Machine',
    ingredients: [{ item: 'Boards', count: 4 }, { item: 'Cut Stone', count: 2 }, { item: 'Gold Nugget', count: 6 }],
    description: 'Dibuat di Science Machine untuk membuka gerbang teknologi Tier 2!',
    perks: 'Unlock Sains Tier 2'
  },

  // ALCHEMY ENGINE (SCIENCE TIER 2)
  {
    id: 'football_helmet',
    name: 'Football Helmet (Helm Pelindung)',
    category: 'Fight',
    stationId: 'science_2',
    stationName: 'Alchemy Engine',
    ingredients: [{ item: 'Pig Skin', count: 1 }, { item: 'Rope', count: 1 }],
    description: 'Helm pertahanan terbaik di slot kepala! Menyerap 80% damage tanpa menghabiskan slot tas punggung (Backpack).',
    perks: 'Absorbs 80% Damage',
    durability: '315 Health HP'
  },
  {
    id: 'ham_bat',
    name: 'Ham Bat (Gada Paha Babi)',
    category: 'Fight',
    stationId: 'science_2',
    stationName: 'Alchemy Engine',
    ingredients: [{ item: 'Pig Skin', count: 1 }, { item: 'Twig', count: 2 }, { item: 'Meat', count: 2 }],
    description: 'Senjata tanpa batas pukulan (Infinite Durability)! Damage 59 saat segar dan melemah seiring membusuk (10 hari).',
    perks: '59 Damage, Pukulan Tak Terbatas',
    durability: '10 hari pembusukan'
  },
  {
    id: 'ice_box',
    name: 'Ice Box (Kulkas Pengawet)',
    category: 'Structures',
    stationId: 'science_2',
    stationName: 'Alchemy Engine',
    ingredients: [{ item: 'Boards', count: 1 }, { item: 'Cut Stone', count: 1 }, { item: 'Gears', count: 1 }],
    description: 'Memperlambat pembusukan semua makanan dan bahan masakan di dalamnya sebesar 50%. Mendinginkan Thermal Stone.',
    perks: 'Perpanjang Usia Pangan 2x Lipat'
  },
  {
    id: 'lantern',
    name: 'Lantern (Lentera Genggam)',
    category: 'Light',
    stationId: 'science_2',
    stationName: 'Alchemy Engine',
    ingredients: [{ item: 'Twig', count: 3 }, { item: 'Rope', count: 2 }, { item: 'Light Bulb', count: 2 }],
    description: 'Lampu portabel paling praktis! Bisa digenggam di tangan atau diletakkan di tanah untuk menerangi base saat malam.',
    perks: 'Bisa diisi ulang pakai Light Bulb',
    durability: '8 menit (Isi ulang tak terbatas)'
  },
  {
    id: 'lightning_rod',
    name: 'Lightning Rod (Penangkal Petir)',
    category: 'Structures',
    stationId: 'science_2',
    stationName: 'Alchemy Engine',
    ingredients: [{ item: 'Cut Stone', count: 1 }, { item: 'Gold Nugget', count: 4 }],
    description: 'Menarik seluruh sambaran petir di radius luas agar markas dan semak rumput tidak terbakar hangus saat hujan badai.',
    perks: 'Proteksi Kebakaran Petir 100%'
  },
  {
    id: 'birdcage',
    name: 'Birdcage (Kandang Burung)',
    category: 'Structures',
    stationId: 'science_2',
    stationName: 'Alchemy Engine',
    ingredients: [{ item: 'Papyrus', count: 2 }, { item: 'Gold Nugget', count: 6 }, { item: 'Seeds', count: 2 }],
    description: 'Beri makan daging atau Monster Meat matang untuk mendapatkan Telur Segar (Eggs). Beri tanaman untuk bibit unggul.',
    perks: 'Pabrik Telur Segar Abadi'
  },
  {
    id: 'thermal_stone',
    name: 'Thermal Stone (Batu Suhu)',
    category: 'Survival',
    stationId: 'science_2',
    stationName: 'Alchemy Engine',
    ingredients: [{ item: 'Pickaxe', count: 1 }, { item: 'Rocks', count: 10 }, { item: 'Flint', count: 3 }],
    description: 'Menyerap panas dari perapian untuk menghangatkan tubuh di musim dingin, atau menyerap dingin untuk musim panas.',
    perks: 'Anti-Freezing & Anti-Overheating'
  },
  {
    id: 'miner_hat',
    name: 'Miner Hat (Helm Tambang Bercahaya)',
    category: 'Light',
    stationId: 'science_2',
    stationName: 'Alchemy Engine',
    ingredients: [{ item: 'Straw Hat', count: 1 }, { item: 'Gold Nugget', count: 1 }, { item: 'Fireflies', count: 1 }],
    description: 'Lampu di atas kepala yang membebaskan kedua tangan untuk menambang atau memegang senjata di kegelapan.',
    durability: '8 menit'
  },
  {
    id: 'tent',
    name: 'Tent (Tenda Tidur)',
    category: 'Structures',
    stationId: 'science_2',
    stationName: 'Alchemy Engine',
    ingredients: [{ item: 'Silk', count: 6 }, { item: 'Twig', count: 4 }, { item: 'Rope', count: 3 }],
    description: 'Tidur di malam hari untuk memulihkan +50 Sanity dan +60 Health (mengorbankan rasa lapar).',
    durability: '6 kali tidur'
  },

  // PRESTIHATITATOR (MAGIC TIER 1)
  {
    id: 'meat_effigy',
    name: 'Meat Effigy (Patung Kebangkitan Daging)',
    category: 'Magic',
    stationId: 'magic_1',
    stationName: 'Prestihatitator',
    ingredients: [{ item: 'Boards', count: 4 }, { item: 'Cooked Meat', count: 4 }, { item: 'Beard Hair', count: 4 }],
    description: 'Asuransi nyawa! Jika karakter mati di mana pun, kamu akan langsung bangkit hidup kembali di patung ini.',
    perks: 'Respawn Instan Saat Mati'
  },
  {
    id: 'pan_flute',
    name: 'Pan Flute (Seruling Penidur)',
    category: 'Magic',
    stationId: 'magic_1',
    stationName: 'Prestihatitator',
    ingredients: [{ item: 'Cut Reeds', count: 5 }, { item: 'Mandrake', count: 1 }, { item: 'Rope', count: 1 }],
    description: 'Senjata paling sakti melawan Boss! Meniupnya membuat semua monster dan bos di layar langsung tertidur pulas.',
    perks: 'Tidurkan Semua Bos Layar',
    durability: '10 kali tiup'
  },
  {
    id: 'ice_staff',
    name: 'Ice Staff (Tongkat Es Pembeku)',
    category: 'Magic',
    stationId: 'magic_1',
    stationName: 'Prestihatitator',
    ingredients: [{ item: 'Spear', count: 1 }, { item: 'Blue Gem', count: 1 }],
    description: 'Menembakkan kristal es jarak jauh untuk membekukan monster agresif atau memadamkan kebakaran dari jauh.',
    durability: '20 tembakan'
  },

  // SHADOW MANIPULATOR (MAGIC TIER 2)
  {
    id: 'dark_sword',
    name: 'Dark Sword (Pedang Bayangan Kegelapan)',
    category: 'Fight',
    stationId: 'magic_2',
    stationName: 'Shadow Manipulator',
    ingredients: [{ item: 'Living Log', count: 1 }, { item: 'Nightmare Fuel', count: 5 }],
    description: 'Senjata melee dengan damage tertinggi di permukaan (68 Damage)! Mengurangi -20 Sanity/menit saat dipegang.',
    perks: '68 Damage Masif',
    durability: '100 pukulan'
  },
  {
    id: 'night_armor',
    name: 'Night Armor (Baju Zirah Bayangan)',
    category: 'Fight',
    stationId: 'magic_2',
    stationName: 'Shadow Manipulator',
    ingredients: [{ item: 'Nightmare Fuel', count: 5 }, { item: 'Papyrus', count: 3 }],
    description: 'Menyerap 95% damage fisik! Baju pertahanan terbaik melawan serangan pamungkas raid boss.',
    perks: 'Absorbs 95% Damage',
    durability: '700 Health HP'
  },
  {
    id: 'life_giving_amulet',
    name: 'Life Giving Amulet (Kalung Kebangkitan)',
    category: 'Magic',
    stationId: 'magic_2',
    stationName: 'Shadow Manipulator',
    ingredients: [{ item: 'Gold Nugget', count: 3 }, { item: 'Nightmare Fuel', count: 2 }, { item: 'Red Gem', count: 1 }],
    description: 'Saat dipakai mengubah kelaparan menjadi regenerasi Health. Jika kamu mati saat memakainya, kamu langsung hidup kembali!',
    perks: 'Regenerasi Darah & Auto-Respawn'
  },
  {
    id: 'fire_staff',
    name: 'Fire Staff (Tongkat Api Membara)',
    category: 'Magic',
    stationId: 'magic_2',
    stationName: 'Shadow Manipulator',
    ingredients: [{ item: 'Spear', count: 1 }, { item: 'Nightmare Fuel', count: 2 }, { item: 'Red Gem', count: 1 }],
    description: 'Membakar target dari jarak aman dan memicu efek panik pada monster musuh.',
    durability: '20 tembakan'
  },

  // ANCIENT PSEUDOSCIENCE (RUINS)
  {
    id: 'thulecite_crown',
    name: 'Thulecite Crown (Mahkota Pelindung Kuno)',
    category: 'Fight',
    stationId: 'ancient',
    stationName: 'Ancient Pseudoscience Station',
    ingredients: [{ item: 'Thulecite', count: 4 }, { item: 'Nightmare Fuel', count: 4 }],
    description: 'Menyerap 90% damage dengan chance 33% menciptakan gelembung perisai kebal total 100% dan anti-knockback!',
    perks: 'Perisai Kebal 100% Forcefield',
    durability: '840 Health HP'
  },
  {
    id: 'thulecite_suit',
    name: 'Thulecite Suit (Zirah Kuno Thulecite)',
    category: 'Fight',
    stationId: 'ancient',
    stationName: 'Ancient Pseudoscience Station',
    ingredients: [{ item: 'Thulecite', count: 6 }, { item: 'Nightmare Fuel', count: 4 }],
    description: 'Baju zirah kuno penyerap 90% damage dengan ketahanan masif 1260 HP dan memberikan aura pemulih Sanity.',
    perks: 'Absorbs 90% Damage, +Sanity Aura',
    durability: '1260 Health HP'
  },
  {
    id: 'the_lazy_explorer',
    name: 'The Lazy Explorer (Tongkat Teleportasi)',
    category: 'Tools',
    stationId: 'ancient',
    stationName: 'Ancient Pseudoscience Station',
    ingredients: [{ item: 'Walking Cane', count: 1 }, { item: 'Nightmare Fuel', count: 2 }, { item: 'Orange Gem', count: 2 }],
    description: 'Memberikan +25% kecepatan lari permanen dan kemampuan klik kanan untuk teleportasi seketika menembus jurang!',
    perks: '+25% Run Speed & Blink Teleport',
    durability: '20 kali teleport'
  },
  {
    id: 'houndius_shootius',
    name: 'Houndius Shootius (Turret Penembak Otomatis)',
    category: 'Structures',
    stationId: 'ancient',
    stationName: 'Ancient Pseudoscience Station',
    ingredients: [{ item: 'Guardian\'s Horn', count: 1 }, { item: 'Deerclops Eyeball', count: 1 }, { item: 'Thulecite', count: 5 }],
    description: 'Menara pertahanan otomatis yang menembakkan laser mematikan 65 damage ke semua musuh jahat yang mendekat.',
    perks: 'Laser Otomatis 65 DMG'
  },

  // CELESTIAL ALTAR (LUNAR ISLAND)
  {
    id: 'glass_cutter',
    name: 'Glass Cutter (Pedang Kaca Bulan)',
    category: 'Fight',
    stationId: 'celestial',
    stationName: 'Celestial Altar',
    ingredients: [{ item: 'Boards', count: 1 }, { item: 'Moon Glass', count: 6 }],
    description: 'Pedang setajam Dark Sword (68 Damage) namun SAMA SEKALI TIDAK MENGURANGI SANITY! Senjata favorit melawan bos bayangan.',
    perks: '68 Damage Tanpa Pinalti Sanity',
    durability: '150 pukulan'
  },
  {
    id: 'bath_bomb',
    name: 'Bath Bomb (Granat Pemandian Air Panas)',
    category: 'Survival',
    stationId: 'celestial',
    stationName: 'Celestial Altar',
    ingredients: [{ item: 'Nitre', count: 1 }, { item: 'Moon Shroom', count: 1 }],
    description: 'Dilempar ke mata air panas Lunar Island untuk mengkristalkan air menjadi tumpukan Moon Glass melimpah.',
    perks: 'Farming Moon Glass Raksasa'
  }
];
