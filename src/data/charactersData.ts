import { DSTCharacter } from '../types';

export const CHARACTERS_DATA: DSTCharacter[] = [
  {
    id: 'wilson',
    name: 'Wilson Percival Higgsbury',
    title: 'The Gentleman Scientist',
    quote: '"I will conquer this world with the power of my MIND!"',
    avatarIcon: 'Sparkles',
    health: 150,
    hunger: 150,
    sanity: 200,
    difficulty: 'Sangat Mudah',
    role: 'All-Rounder',
    perks: [
      { title: 'Jenggot Megah (Magnificent Beard)', description: 'Menumbuhkan jenggot setiap beberapa hari. Menahan suhu dingin di musim dingin (Insulation) dan menghasilkan Beard Hair saat dicukur.' },
      { title: 'Pohon Skill Sains (Insight Skill Tree)', description: 'Dapat mempelajari Transmutasi Mineral (mengubah batu menjadi emas/permata) dan Torch Mastery.' },
      { title: 'Tanpa Kelemahan Nyata', description: 'Statistik seimbang sempurna, sangat ideal untuk pemain pemula mempelajari mekanisme dasar game.' }
    ],
    flaws: [
      { title: 'Kegerahan di Musim Panas', description: 'Jenggot lebat membuat Wilson lebih cepat kepanasan (Overheating) jika tidak dicukur saat Summer tiba.' }
    ],
    uniqueCrafts: ['Transmutation Recipes (Skill Tree)', 'Beard Hair Shaving'],
    startingItems: ['Razor (jika memilih skill)'],
    teamSynergy: 'Penyuplai Beard Hair untuk Meat Effigy (respawn) seluruh tim tanpa perlu memburu Beardlings gila.',
    proTips: [
      'Cukur jenggot tepat di hari pertama musim dingin jika butuh Sanity, atau biarkan penuh (Tier 3) untuk insulasi dingin maksimal.',
      'Gunakan skill transmutasi untuk mengubah Flint berlebih menjadi Gold Nuggets di markas.'
    ]
  },
  {
    id: 'wendy',
    name: 'Wendy Carter',
    title: 'The Bereaved',
    quote: '"Abigail? Come back! I\'m not done playing with you yet."',
    avatarIcon: 'Skull',
    health: 150,
    hunger: 150,
    sanity: 200,
    difficulty: 'Mudah',
    role: 'Combat / Tank',
    perks: [
      { title: 'Arwah Saudari Kembar (Abigail)', description: 'Dapat memanggil arwah saudari kembarnya (Abigail) dengan bunga Abigail\'s Flower. Abigail memiliki serangan Area of Effect (AoE) yang membantai kawanan laba-laba, lebah, dan kodok seketika!' },
      { title: 'Kekebalan Mental terhadap Gelap', description: 'Kehilangan Sanity dari kegelapan dan monster hanya 75% dari karakter biasa.' },
      { title: 'Ramuan Mistik (Ghostly Elixirs)', description: 'Dapat meracik ramuan untuk mempercepat regenerasi Abigail, memberinya tameng perisai, atau meningkatkan damage malam hari.' }
    ],
    flaws: [
      { title: 'Pukulan Fisik Lebih Lemah', description: 'Wendy hanya menghasilkan 0.75x damage pukulan fisik biasa saat bertarung tanpa bantuan Abigail.' }
    ],
    uniqueCrafts: ['Abigail\'s Flower', 'Mourning Glory Elixirs', 'Sisturn'],
    startingItems: ['Abigail\'s Flower'],
    teamSynergy: 'Ratu farming massal nomor 1: menghabisi sarang laba-laba, lebah agresif, dan hound wave awal hanya dalam hitungan detik.',
    proTips: [
      'Panggil Abigail ke mode Aggressive (klik kanan bunga) saat menghadapi banyak gerombolan musuh kecil.',
      'Buat Sisturn di base dan letakkan 4 bunga segar di dalamnya untuk memberikan aura pemulih Sanity konstan bagi seluruh anggota tim.'
    ]
  },
  {
    id: 'wolfgang',
    name: 'Wolfgang',
    title: 'The Strongman',
    quote: '"I am strong! No one is stronger than Wolfgang!"',
    avatarIcon: 'Sword',
    health: 200,
    hunger: 200,
    sanity: 200,
    difficulty: 'Mudah',
    role: 'Combat / Tank',
    perks: [
      { title: 'Sistem Kebugaran (Mightiness)', description: 'Memiliki meteran kekuatan (0–100). Saat Mightiness tinggi, wujudnya membesar (Mighty Form) dengan kecepatan jalan +25% dan damage pukulan hingga 2.0x lipat!' },
      { title: 'Peralatan Gym & Dumbbell', description: 'Bisa membuat dumbbell batu/emas/marmer untuk berolahraga menjaga tubuh tetap Mighty kapan saja.' },
      { title: 'Penghancur Batu & Penebang Kilat', description: 'Menebang pohon dan menambang batu 2x lebih cepat dalam wujud Mighty.' }
    ],
    flaws: [
      { title: 'Penakut dalam Kegelapan', description: 'Sanity terkuras 1.1x lebih cepat dari kegelapan dan monster menakutkan.' },
      { title: 'Perut Gentong', description: 'Tingkat kelaparan (Hunger drain) meningkat drastis saat berada dalam wujud Mighty.' }
    ],
    uniqueCrafts: ['Gym (Peralatan Angkat Beban)', 'Dumbbell (Stone, Golden, Marbell)'],
    startingItems: [],
    teamSynergy: 'Karakter pembunuh Boss nomor 1 di tim! Mampu melenyapkan Deerclops, Bearger, dan Dragonfly dalam waktu rekor.',
    proTips: [
      'Bawa Marbell Dumbbell ke medan perang untuk menaikkan Mightiness hingga 100 sebelum memukul Boss.',
      'Sajikan Wolfgang makanan tinggi Hunger seperti Meatballs atau Bacon and Eggs sebelum pertempuran dimulai.'
    ]
  },
  {
    id: 'wigfrid',
    name: 'Wigfrid',
    title: 'The Performance Artist',
    quote: '"A test of my valiance! To Valhalla!"',
    avatarIcon: 'Shield',
    health: 200,
    hunger: 120,
    sanity: 120,
    difficulty: 'Sangat Mudah',
    role: 'Combat / Tank',
    perks: [
      { title: 'Lifesteal & Sanity On Hit', description: 'Setiap pukulan yang mendarat ke musuh langsung memulihkan Health dan Sanity secara instan!' },
      { title: 'Pertahanan Alami & Bonus Damage', description: 'Menghasilkan +25% damage bawaan dan menerima pengurangan damage 25% dari semua musuh.' },
      { title: 'Helm & Tombak Tempur Murah', description: 'Dapat membuat Battle Helm (daya tahan tinggi, 80% absorbsi) dan Battle Spear (42 DMG) hanya dengan emas dan batu.' },
      { title: 'Lagu Perang Valhalla (Battle Songs)', description: 'Bisa menyanyikan lagu buff untuk memberikan efek lifesteal, perisai, atau anti-kepanikan ke seluruh tim di dekatnya.' }
    ],
    flaws: [
      { title: 'Karnivora Murni (Hanya Makan Daging)', description: 'Menolak keras memakan sayuran, buah-buahan, jamur, kaktus, atau biji-bijian. Hanya mengonsumsi daging!' }
    ],
    uniqueCrafts: ['Battle Helm', 'Battle Spear', 'Battle Call Songs'],
    startingItems: ['Battle Helm', 'Battle Spear', '4x Meat'],
    teamSynergy: 'Penyuplai Battle Helm murah terbaik untuk seluruh tim dan penyanyi buff area saat raid boss berlangsung.',
    proTips: [
      'Gunakan Crock Pot untuk memasak Meatballs (1 Monster Meat + 3 Morsel) agar selalu kenyang tanpa membuang stok daging besar.',
      'Jangan takut bertarung saat sekarat; pukul laba-laba atau babi untuk memulihkan Health dan Sanity secara cuma-cuma.'
    ]
  },
  {
    id: 'wx78',
    name: 'WX-78',
    title: 'The Soulless Automaton',
    quote: '"EMPATHY MODULE NOT FOUND."',
    avatarIcon: 'Zap',
    health: 125,
    hunger: 125,
    sanity: 150,
    difficulty: 'Sedang',
    role: 'All-Rounder',
    perks: [
      { title: 'Sistem Modul Sirkuit (Circuit Modules)', description: 'Bisa memasang sirkuit elektrik di tubuhnya untuk mendapatkan lari super cepat (+25%), penglihatan malam (Night Vision), insulasi suhu, atau sengatan listrik otomatis.' },
      { title: 'Bisa Makan Makanan Basi', description: 'Tidak menerima pinalti apa pun dari memakan makanan basi atau berjamur (stale/spoiled).' },
      { title: 'Overcharge Sambaran Petir', description: 'Sambaran petir mengisi ulang daya tubuhnya, membuatnya bersinar terang, dan memulihkan HP.' }
    ],
    flaws: [
      { title: 'Karat Air (Water Damage)', description: 'Tetesan air hujan atau kebasahan (Wetness) memicu korsleting yang mengurangi darahnya secara bertahap.' }
    ],
    uniqueCrafts: ['Bio Scanalyzer', 'Circuit Modules (Speed, Light, Thermal, Super-Conductive)'],
    startingItems: ['Bio Scanalyzer'],
    teamSynergy: 'Karakter scout tercepat di game yang bisa menyalakan senter penerang tubuh untuk memimpin penjelajahan gua gelap.',
    proTips: [
      'Selalu buat Football Helmet atau Payung (Eyebrella) sebelum musim semi (Spring) tiba untuk mencegah korsleting air hujan.',
      'Pasang 2 Speed Circuit untuk menjadi pelari maraton tak terkejar di The Constant.'
    ]
  },
  {
    id: 'wickerbottom',
    name: 'Wickerbottom',
    title: 'The Librarian',
    quote: '"Shh! No talking in the library!"',
    avatarIcon: 'BookOpen',
    health: 150,
    hunger: 150,
    sanity: 250,
    difficulty: 'Sedang',
    role: 'Magic / Support',
    perks: [
      { title: 'Buku Grimoire Ajaib', description: 'Dapat menulis dan membacakan buku sihir: Applied Silviculture (menumbuhkan seluruh pohon seketika), Sleepytime Stories (menidurkan monster), On Tentacles (memanggil duri tentakel), dan The End is Nigh (badai petir).' },
      { title: 'Ilmuwan Otodidak Bawaan', description: 'Bisa merakit semua resep Science Machine Tier 1 langsung dari tangan kosong tanpa perlu membangun mesin!' },
      { title: 'Sanity Maksimal Sangat Tinggi (250)', description: 'Mampu menahan pengurasan Sanity besar saat membacakan buku sihir.' }
    ],
    flaws: [
      { title: 'Insomnia Kronis (Tidak Bisa Tidur)', description: 'Sama sekali tidak bisa menggunakan Tenda (Tent) atau Bedroll untuk tidur memulihkan Sanity.' },
      { title: 'Perut Sensitif', description: 'Menerima pinalti kelaparan dan kesehatan yang jauh lebih parah jika memakan makanan yang mulai membusuk.' }
    ],
    uniqueCrafts: ['Applied Silviculture', 'Sleepytime Stories', 'Birds of the World', 'On Tentacles', 'Bookcase'],
    startingItems: ['2x Papyrus'],
    teamSynergy: 'Penyedia log kayu dan sayuran tanpa batas untuk tim melalui pembacaan buku Silviculture.',
    proTips: [
      'Gunakan buku "Birds of the World" dikombinasikan dengan "Sleepytime Stories" untuk memanggil puluhan burung dan menidurkannya seketika demi farming Feather & Morsel.',
      'Pulihkan Sanity dengan makan Cooked Green Caps, Jerky, atau Surf \'n\' Turf karena tidak bisa tidur di tenda.'
    ]
  },
  {
    id: 'maxwell',
    name: 'Maxwell (William Carter)',
    title: 'The Puppet Master',
    quote: '"Freedom suits me, don\'t you think?"',
    avatarIcon: 'Crown',
    health: 75,
    hunger: 150,
    sanity: 200,
    difficulty: 'Sedang',
    role: 'Gatherer / Builder',
    perks: [
      { title: 'Regenerasi Sanity Cepat (+20 Sanity/Menit)', description: 'Kewarasannya pulih secara otomatis terus-menerus tanpa perlu makan atau mengenakan pakaian khusus.' },
      { title: 'Kitab Bayangan (Codex Umbra)', description: 'Dapat memanggil bayangan pekerja (Shadow Worker) yang menebang pohon, menambang batu, dan menggali tanah secara otomatis dalam skala raksasa!' },
      { title: 'Perangkap Bayangan & Jebakan Kaki', description: 'Bisa memanggil Shadow Prison untuk mengurung bos besar agar tidak bisa bergerak.' }
    ],
    flaws: [
      { title: 'Darah Sangat Rapuh (75 Health)', description: 'Karakter paling tipis! Dua atau tiga pukulan dari monster kuat bisa langsung membunuhnya seketika jika tidak mengenakan armor.' }
    ],
    uniqueCrafts: ['Codex Umbra', 'Shadow Duelist', 'Shadow Sneak', 'Shadow Servant'],
    startingItems: ['Codex Umbra', '6x Nightmare Fuel', 'Purple Gem'],
    teamSynergy: 'Mesin penebang hutan dan penambang mineral tercepat di Don\'t Starve Together. Mengisi peti base tim dalam hitungan menit.',
    proTips: [
      'JANGAN PERNAH melangkah keluar dari markas tanpa mengenakan Football Helmet atau Log Suit!',
      'Gunakan kemampuan regenerasi Sanity-nya untuk memakai perlengkapan penguras Sanity seperti Dark Sword dan Night Armor tanpa rasa takut gila.'
    ]
  },
  {
    id: 'willow',
    name: 'Willow',
    title: 'The Firestarter',
    quote: '"Things are so much prettier when they burn."',
    avatarIcon: 'Flame',
    health: 150,
    hunger: 150,
    sanity: 120,
    difficulty: 'Mudah',
    role: 'All-Rounder',
    perks: [
      { title: 'Korek Api Abadi (Willow\'s Lighter)', description: 'Dapat digunakan tanpa batas untuk menerangi malam dan memasak makanan langsung di tangan.' },
      { title: 'Boneka Pelindung Raksasa (Bernie)', description: 'Saat Sanity rendah (gila), boneka beruang Bernie akan hidup dan membesar menjadi monster raksasa untuk menghajar Shadow Creatures dan menarik aggro Boss!' },
      { title: 'Pemulihan Sanity di Dekat Api', description: 'Sanity pulih saat berdiri di samping kobaran api unggun.' }
    ],
    flaws: [
      { title: 'Membeku Cepat di Musim Dingin', description: 'Mengalami pinalti Freezing lebih cepat saat suhu lingkungan anjlok di bawah nol.' }
    ],
    uniqueCrafts: ['Willow\'s Lighter', 'Bernie (Teddy Bear)'],
    startingItems: ['Willow\'s Lighter', 'Bernie'],
    teamSynergy: 'Bernie adalah tameng terbaik di server untuk menyerap aggro bos raid seperti Dragonfly atau Nightmare Creatures saat rekan tim gila.',
    proTips: [
      'Jatuhkan Bernie ke tanah saat melawan Nightmare Creatures agar rekan timmu aman dari serangan bayangan.',
      'Gunakan pemantik Willow untuk membakar pohon pinus terpencil demi panen Charcoal cepat tanpa perlu obor tambahan.'
    ]
  },
  {
    id: 'woodie',
    name: 'Woodie',
    title: 'The Lumberjack',
    quote: '"That\'s a fine looking tree, eh?"',
    avatarIcon: 'Trees',
    health: 150,
    hunger: 150,
    sanity: 200,
    difficulty: 'Sedang',
    role: 'Gatherer / Builder',
    perks: [
      { title: 'Kapak Bicara Abadi (Lucy the Axe)', description: 'Kapak sakti tanpa batas durabilitas yang menebang pohon 2x lebih cepat dan memberi peringatan bahaya.' },
      { title: 'Tiga Wujud Kutukan (Were-transformations)', description: 'Dapat mengonsumsi patung kutukan untuk berubah menjadi Werebeaver (penebang kilat), Weremoose (petarung badak kuat), atau Weregoose (angsa pelari cepat yang bisa meluncur di atas air).' },
      { title: 'Bonus Penanaman Pohon', description: 'Mendapat +Sanity saat menanam bibit pinus.' }
    ],
    flaws: [
      { title: 'Kutukan Bulan Purnama', description: 'Otomatis berubah menjadi wujud acak di malam Full Moon tanpa kendali.' }
    ],
    uniqueCrafts: ['Lucy the Axe', 'Beaver Idol', 'Moose Idol', 'Goose Idol'],
    startingItems: ['Lucy the Axe'],
    teamSynergy: 'Eksplorator pulau nomor 1 di awal game menggunakan wujud Weregoose yang bisa berlari melintasi air laut untuk menemukan Lunar Island!',
    proTips: [
      'Gunakan wujud Weregoose di hari ke-5 untuk memetakan seluruh garis pantai kepulauan dengan kecepatan kilat.',
      'Gunakan Weremoose saat membersihkan kawanan Hound Waves awal berkat pukulan tubrukan area-nya.'
    ]
  },
  {
    id: 'wanda',
    name: 'Wanda',
    title: 'The Timekeeper',
    quote: '"No time to lose! Every second counts!"',
    avatarIcon: 'CalendarClock',
    health: 80,
    hunger: 175,
    sanity: 200,
    difficulty: 'Sangat Sulit',
    role: 'Spesialis Ahli',
    perks: [
      { title: 'Sistem Umur Pengganti Health (Age Meter)', description: 'Tidak memiliki HP biasa! Nyawanya adalah usianya (20–80 tahun). Jika mencapai usia 80, Wanda mati karena usia tua.' },
      { title: 'Jam Waktu Pembalik Usia (Ageless Watch)', description: 'Menggunakan jam sakti untuk memundurkan usianya kembali ke usia muda (+Health).' },
      { title: 'Cambuk Waktu Terkuat (Alarming Clock)', description: 'Menghasilkan hingga 142 Damage per cambukan saat dalam wujud usia tua (Old Age)! Jangkauan serangannya lebih jauh dari pedang biasa.' },
      { title: 'Jam Teleportasi Dimensi (Rift Watch)', description: 'Dapat menciptakan portal teleportasi instan melintasi jarak pulau atau bahkan dari gua bawah tanah ke permukaan!' }
    ],
    flaws: [
      { title: 'Obat Penyembuh Biasa Tidak Berfungsi', description: 'Item healing biasa (Pierogi, Healing Salve, dll) TIDAK BISA menambah nyawa Wanda. Hanya bisa sembuh lewat jam buatannya.' },
      { title: 'Sangat Berisiko di Usia Tua', description: 'Di usia tua damagenya gila-gilaan, namun satu sentuhan monster bisa langsung membunuhnya.' }
    ],
    uniqueCrafts: ['Clockmaker\'s Tools', 'Ageless Watch', 'Alarming Clock', 'Backstep Watch', 'Rift Watch'],
    startingItems: ['Clockmaker\'s Tools', 'Ageless Watch'],
    teamSynergy: 'Penyedia sistem transportasi instan (Rift Watch) untuk seluruh anggota tim dari base ke bioma Ruins atau Dragonfly arena.',
    proTips: [
      'Pertahankan usiamu di usia tua (65–75 tahun) saat pertarungan bos jika kamu mahir kiting untuk memanen damage 142 per pukulan!',
      'Gunakan Backstep Watch untuk menghindari serangan mendadak (dash mundur kebelakang secara instan).'
    ]
  },
  {
    id: 'wortox',
    name: 'Wortox',
    title: 'The Soul Starved',
    quote: '"A soul for me, a soul for you!"',
    avatarIcon: 'Sparkles',
    health: 200,
    hunger: 175,
    sanity: 150,
    difficulty: 'Sedang',
    role: 'Magic / Support',
    perks: [
      { title: 'Pemanen Jiwa (Souls on Kill)', description: 'Setiap makhluk hidup yang mati di dekatnya melepaskan jiwa merah (Souls). Wortox dapat menyimpan hingga 20 jiwa.' },
      { title: 'Heal Massal Seluruh Tim (Soul Release)', description: 'Melepaskan jiwa memulihkan hingga +20 Health untuk Wortox dan SEMUA pemain di dekatnya!' },
      { title: 'Teleportasi Lompatan Jiwa (Soul Hop)', description: 'Dapat melompat teleportasi menembus jurang, tembok, atau air laut menggunakan 1 jiwa.' }
    ],
    flaws: [
      { title: 'Hanya Menerima 50% Khasiat Makanan', description: 'Semua makanan fisik (Crock Pot, daging, buah) hanya memberikan separuh nilai gizi Hunger, Health, dan Sanity.' },
      { title: 'Overload Jiwa', description: 'Menyimpan lebih dari 20 jiwa akan membuatnya tersedak, kehilangan setengah jiwanya, dan Sanity anjlok.' }
    ],
    uniqueCrafts: [],
    startingItems: ['6x Souls'],
    teamSynergy: 'Dokter / Healer terbaik di game! Menjaga seluruh tim tetap berdarah penuh saat pertempuran raid boss berlangsung sengit.',
    proTips: [
      'Gunakan Soul Hop untuk melompati air laut atau menembus gerbang labirin Ruins tanpa harus memutar jauh.',
      'Makan jiwa mentah untuk mengisi rasa lapar jika kehabisan makanan di perjalanan.'
    ]
  },
  {
    id: 'winona',
    name: 'Winona',
    title: 'The Handywoman',
    quote: '"Anything can be fixed with a little elbow grease."',
    avatarIcon: 'Hammer',
    health: 150,
    hunger: 150,
    sanity: 200,
    difficulty: 'Mudah',
    role: 'Gatherer / Builder',
    perks: [
      { title: 'Crafting Super Kilat', description: 'Merakit barang dan struktur dalam sekejap tanpa jeda animasi.' },
      { title: 'Menara Katapel Otomatis (Winona\'s Catapult)', description: 'Membangun mesin katapel pelontar batu otomatis ber-damage AoE besar untuk membantai serbuan bos dan serigala.' },
      { title: 'Lampu Sorot & Generator Baterai', description: 'Membuat Spotlight yang otomatis menerangi karakter pemain di markas tanpa perlu obor atau lentera.' },
      { title: 'Pita Perekat Jahit (Trusty Tape)', description: 'Dapat memperbaiki baju zirah, perahu bocor, dan pakaian tanpa perlu Sewing Kit mahal.' }
    ],
    flaws: [
      { title: 'Kelaparan Cepat saat Bekerja', description: 'Merakit barang dengan cepat menghabiskan kalori kelaparan lebih banyak saat perutnya kosong.' }
    ],
    uniqueCrafts: ['Trusty Tape', 'Winona\'s Catapult', 'Winona\'s Spotlight', 'Generator & G.E.M.erator'],
    startingItems: ['3x Trusty Tape'],
    teamSynergy: 'Arsitek pertahanan base nomor 1! Menyusun arena katapel otomatis untuk membunuh Bee Queen, Deerclops, dan Hound Waves secara AFK.',
    proTips: [
      'Buat 6–10 Catapults yang dihubungkan ke G.E.M.erator di area terisolasi untuk membuat arena pembantaian bos otomatis.',
      'Gunakan Trusty Tape untuk menambal perahu bocor secara instan saat berlayar di laut.'
    ]
  },
  {
    id: 'wormwood',
    name: 'Wormwood',
    title: 'The Lonesome',
    quote: '"Hello friend!"',
    avatarIcon: 'Wheat',
    health: 150,
    hunger: 150,
    sanity: 200,
    difficulty: 'Sedang',
    role: 'Gatherer / Builder',
    perks: [
      { title: 'Bercocok Tanam Tanpa Cangkul', description: 'Dapat menanam semua jenis biji langsung ke tanah kosong tanpa perlu Farm Plot atau Garden Rig.' },
      { title: 'Menghasilkan Kayu Sihir (Living Logs)', description: 'Dapat memotong bagian tubuhnya sendiri untuk memproduksi Living Logs tanpa harus mencari monster pohon Treeguard!' },
      { title: 'Mekar di Musim Semi (Blooming Form)', description: 'Di musim semi tubuhnya mekar bunga indah, memberikan kecepatan jalan +20% dan aura pemikat lebah jinak.' },
      { title: 'Perangkap Bramble Trap & Husk', description: 'Dapat membuat baju zirah duri dan jebakan tanaman berduri mematikan.' }
    ],
    flaws: [
      { title: 'Makanan Tidak Menambah Darah', description: 'Memakan makanan tidak memulihkan Health sama sekali! Hanya bisa sembuh lewat pupuk (Manure, Compost Wrap) atau salep obat.' },
      { title: 'Sangat Rentan Terbakar', description: 'Mudah tersulut kobaran api dan menerima damage terbakar 2x lebih sakit.' }
    ],
    uniqueCrafts: ['Living Log Crafting', 'Bramble Husk', 'Bramble Trap', 'Compost Wrap'],
    startingItems: [],
    teamSynergy: 'Pabrik Living Log tak terbatas untuk tim guna merakit Dark Sword, Shadow Manipulator, dan Mushroom Planter.',
    proTips: [
      'Gunakan Compost Wrap atau Glommer\'s Goop untuk memulihkan darah dengan cepat setelah memproduksi Living Logs.',
      'Tanam tanaman di dekat base untuk memulihkan Sanity (+10 Sanity setiap kali menanam bibit).'
    ]
  },
  {
    id: 'webber',
    name: 'Webber',
    title: 'The Indigestible',
    quote: '"We can do this, together!"',
    avatarIcon: 'Bug',
    health: 175,
    hunger: 175,
    sanity: 100,
    difficulty: 'Mudah',
    role: 'All-Rounder',
    perks: [
      { title: 'Sahabat Seluruh Laba-laba (Spider Friend)', description: 'Semua laba-laba dan Spider Queen jinak kepadanya. Memberi makan sepotong daging membuat seluruh kawanan laba-laba mengikutinya sebagai pasukan tentara.' },
      { title: 'Makan Daging Monster Tanpa Efek Samping', description: 'Kebal total terhadap racun Monster Meat mentah maupun matang tanpa kehilangan Sanity atau Health!' },
      { title: 'Menumbuhkan Jenggot Sutra (Silk Beard)', description: 'Mencukur jenggotnya menghasilkan Silk (benang sutra) melimpah untuk kerajinan pakaian dan jaring serangga.' }
    ],
    flaws: [
      { title: 'Musuh Babi & Bunnymen', description: 'Manusia Babi (Pig Men), Catcoon, dan Bunnymen membenci Webber dan akan langsung menyerangnya saat melihatnya.' }
    ],
    uniqueCrafts: ['Spider Eggs', 'Webby Whistle', 'Shoo Box', 'Healing Glop', 'Switcherdoodles (Modifikasi Laba-laba)'],
    startingItems: ['Spider Eggs', '2x Monster Meat'],
    teamSynergy: 'Penyuplai sutra (Silk), Spider Glands (bahan obat), dan Monster Meat terbesar untuk seluruh anggota server.',
    proTips: [
      'Jauhkan markas Webber minimal dua layar dari perkampungan Pig King agar babi tidak menyerangmu setiap pagi.',
      'Gunakan Webby Whistle untuk memerintahkan pasukan laba-laba menyerang kawanan Hound Waves atau Boss.'
    ]
  },
  {
    id: 'warly',
    name: 'Warly',
    title: 'The Culinarian',
    quote: '"Bon appétit!"',
    avatarIcon: 'UtensilsCrossed',
    health: 150,
    hunger: 250,
    sanity: 200,
    difficulty: 'Sulit',
    role: 'Magic / Support',
    perks: [
      { title: 'Panci Masak Portabel (Portable Crock Pot)', description: 'Bisa memasak hidangan gourmet eksklusif di mana saja di alam liar 25% lebih cepat.' },
      { title: 'Bumbu Masakan Super (Chef Spices)', description: 'Dapat menambahkan bumbu bawang putih (Garlic = -33% damage diterima), garam (Health regen), dan cabai (Chili = +20% damage serangan) ke hidangan makanan.' },
      { title: 'Resep Masakan Spesial Warly', description: 'Bisa memasak Moqueca (+60 HP), Volt Goat Chaud-Froid (menjadikan semua serangan berelemen listrik kilat!), dan Glow Berry Mousse.' }
    ],
    flaws: [
      { title: 'Lidah Pemilih (Palate Memory)', description: 'Jika memakan hidangan yang sama berturut-turut dalam beberapa hari, ia menerima pinalti gizi yang semakin berkurang.' },
      { title: 'Hanya Bisa Makan Masakan Crock Pot', description: 'Menolak keras memakan bahan mentah seperti berry, wortel, atau jamur bakar.' }
    ],
    uniqueCrafts: ['Portable Crock Pot', 'Portable Grinding Mill', 'Portable Seasoning Station', 'Chef Pouch'],
    startingItems: ['Portable Crock Pot', 'Chef Pouch', '2x Potato', '1x Garlic'],
    teamSynergy: 'Koki terbaik di server! Memberikan hidangan Volt Goat Chaud-Froid dan Chili Powder ke Wolfgang/Wigfrid untuk melipatgandakan damage hingga 400% saat melawan Raid Boss basah!',
    proTips: [
      'Bawa Chef Pouch ke mana-mana karena berfungsi seperti kulkas mini yang memperlambat pembusukan makanan di dalam tas.',
      'Ganti-ganti hidangan makananmu: hari ini Meatballs, besok Pierogi, lusa Bacon and Eggs agar tidak terkena pinalti Palate Memory.'
    ]
  },
  {
    id: 'wurt',
    name: 'Wurt',
    title: 'The Halfwit',
    quote: '"Glurph! Florp!"',
    avatarIcon: 'Fish',
    health: 150,
    hunger: 200,
    sanity: 150,
    difficulty: 'Sedang',
    role: 'Gatherer / Builder',
    perks: [
      { title: 'Sahabat Bangsa Merm (Merm Kinsfolk)', description: 'Ikan amphibi Merm bersahabat dengannya. Dapat membangun perkampungan Merm dan merekrut mereka sebagai bala tentara tangguh.' },
      { title: 'Mendirikan Tahta Raja Merm (King of the Merms)', description: 'Saat Raja Merm bertahta, semua Merm dan Wurt sendiri mendapat buff raksasa: Health naik jadi 250, Hunger 250, dan Sanity 200!' },
      { title: 'Pakar Rawa Berair', description: 'Berjalan lebih cepat di lumpur rawa dan tidak menjatuhkan barang saat tangannya basah kuyup.' }
    ],
    flaws: [
      { title: 'Vegetarian Ketat', description: 'Sama sekali tidak bisa memakan daging atau olahan ikan. Hanya memakan sayuran, buah, kelp, dan jamur.' },
      { title: 'Musuh Manusia Babi', description: 'Pig Men membenci Wurt dan akan menyerangnya jika didekati.' }
    ],
    uniqueCrafts: ['Merm Hut Kit', 'Royal Tapestry (Tahta Raja Merm)', 'Craftsmerm House', 'Clever Disguise'],
    startingItems: ['5x Kelp Fronds', '1x Mosquito Sack'],
    teamSynergy: 'Mampu membangun tentara Merm Guard terkuat di game untuk membantu tim meratakan hutan atau melawan boss musiman.',
    proTips: [
      'Beri makan Raja Merm sayuran segar setiap beberapa hari agar sang raja tidak mati kelaparan dan buff stat Wurt tetap aktif.',
      'Tanam tanaman kelp di pantai markas untuk sumber makanan vegetarian instan tak terbatas.'
    ]
  },
  {
    id: 'walter',
    name: 'Walter',
    title: 'The Fearless',
    quote: '"Pinetree Pioneers are always prepared!"',
    avatarIcon: 'Compass',
    health: 130,
    hunger: 110,
    sanity: 200,
    difficulty: 'Sedang',
    role: 'All-Rounder',
    perks: [
      { title: 'Anjing Tunggangan Setia (Woby)', description: 'Ditemani anjing pramuka Woby yang berfungsi sebagai peti berjalan (Chester gratis) dan bisa ditunggangi jika diberi makan daging (Monster Woby).' },
      { title: 'Ketapel Berburu (Trusty Slingshot)', description: 'Senjata jarak jauh fleksibel dengan berbagai amunisi peluru: batu, emas, peluru marmer (51 DMG), dan peluru beku/tidur.' },
      { title: 'Pemberani Tanpa Rasa Takut', description: 'Kebal total dari Sanity drain kegelapan, gerhana, dan aura monster menakutkan.' },
      { title: 'Cerita Api Unggun (Campfire Tales)', description: 'Bercerita di dekat perapian memulihkan Sanity seluruh pemain di sekitar markas.' }
    ],
    flaws: [
      { title: 'Fobia Rasa Sakit', description: 'Setiap kali menerima damage luka fisik, Sanity-nya anjlok drastis dan terus terkuras sampai darahnya kembali penuh 100%.' },
      { title: 'Alergi Sengatan Lebah', description: 'Menerima kerusakan ekstra parah dari lebah dan nyamuk.' }
    ],
    uniqueCrafts: ['Trusty Slingshot', 'Slingshot Ammo (Pebbles, Marble, Gold, Freeze, Poop)', 'Camper\'s Tent', 'Pinetree Pioneer Hat'],
    startingItems: ['Trusty Slingshot', '10x Pebbles', 'Pinetree Pioneer Hat', 'Woby (Dog)'],
    teamSynergy: 'Penyerang jarak jauh dan pendongeng pemulih Sanity tim saat malam tiba di sekitar api unggun.',
    proTips: [
      'Gunakan peluru Freeze Ammo atau Cursed Ammo dari ketapel untuk melumpuhkan musuh dari jarak jauh tanpa pernah tersentuh.',
      'Beri makan Woby potongan Monster Meat sebelum bepergian agar ia membesar dan bisa kamu naiki untuk lari kencang.'
    ]
  },
  {
    id: 'wes',
    name: 'Wes',
    title: 'The Silent Mime',
    quote: '"..." (Melakukan gerakan pantomim)',
    avatarIcon: 'Sparkles',
    health: 75,
    hunger: 75,
    sanity: 75,
    difficulty: 'Sangat Sulit',
    role: 'Spesialis Ahli',
    perks: [
      { title: 'Balon Pantomim Magis', description: 'Dapat meniup balon dekorasi, balon perangkap ledak, dan balon pelampung kecepatan.' },
      { title: 'Tantangan Hardcore Tertinggi', description: 'Dirancang khusus oleh Klei Entertainment untuk pemain veteran yang ingin menguji kemampuan survival murni tanpa bantuan perk overpower.' }
    ],
    flaws: [
      { title: 'Statistik Paling Lemah di Game', description: 'Darah, kelaparan, dan kewarasan hanya 75. Sangat mudah mati dalam satu atau dua pukulan.' },
      { title: 'Kelaparan Cepat & Pukulan Lemah', description: 'Tingkat kelaparan 1.25x lebih cepat dan damage serangannya hanya 0.75x dari karakter standar.' },
      { title: 'Bisu (Tidak Berbicara)', description: 'Tidak dapat memperingatkan pemain saat ada serangan Serigala atau Bos yang mendekat.' }
    ],
    uniqueCrafts: ['Pile o\' Balloons', 'Balloon Hat', 'Speedy Balloon', 'Party Balloon'],
    startingItems: ['Pile o\' Balloons'],
    teamSynergy: 'Simbol kejayaan dan flex bagi pemain master yang mampu bertahan ratusan hari di Don\'t Starve Together.',
    proTips: [
      'Selalu bawa Football Helmet dan Log Suit ke mana pun kamu pergi.',
      'Gunakan Speedy Balloon untuk mendapatkan bonus kecepatan jalan agar lebih mudah melakukan kiting musuh.'
    ]
  }
];
