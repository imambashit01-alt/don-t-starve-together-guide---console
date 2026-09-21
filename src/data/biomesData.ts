import { BiomeInfo } from '../types';

export const BIOMES_DATA: BiomeInfo[] = [
  {
    id: 'desert',
    name: 'Gurun Pasir (The Desert)',
    subtitle: 'Oasis Desert & Dragonfly Desert',
    category: 'Surface',
    iconName: 'Sun',
    dangerRating: 4,
    description: 'Bioma tandus berkontur pasir oranye atau merah. Terbagi dua varian: Dragonfly Desert (sarang Hound Mounds & raid boss Dragonfly) dan Oasis Desert (danau Oasis, pohon Succulent, & tempat pemanggilan Antlion saat Summer).',
    resources: [
      { name: 'Cactus Flesh', desc: 'Bahan makanan super! Saat dimasak memulihkan +15 Sanity, +12.5 Hunger, +3 Health. Petik pakai Log Suit/Football Helmet.', rarity: 'Melimpah' },
      { name: 'Tumbleweed', desc: 'Semak berguling yang ditiup angin. Bisa diurai menjadi Ranting, Rumput, Benih, bahkan Gears dan Trinket langka.', rarity: 'Melimpah' },
      { name: 'Volt Goat Horn & Milk', desc: 'Tanduk kambing listrik untuk Weather Pain / Morning Star. Jika tersambar petir, kambing menjadi Charged & menghasilkan Electric Milk.', rarity: 'Sedang' },
      { name: 'Hound\'s Teeth', desc: 'Gigi serigala dari Hound Mounds untuk membuat Sewing Kit dan perangkap Tooth Trap ratusan buah.', rarity: 'Melimpah' }
    ],
    risks: [
      { title: 'Badai Pasir Ekstrim (Sandstorm)', desc: 'Saat Summer di Oasis Desert, pandangan menjadi sangat buram dan kecepatan jalan berkurang drastis tanpa Desert Goggles.', severity: 'Tinggi' },
      { title: 'Overheating Mematikan', desc: 'Suhu melonjak paling cepat di bioma ini saat siang musim panas. Wajib bawa Endothermic Torch / Chilled Amulet.', severity: 'Fatal' },
      { title: 'Dragonfly Aggro', desc: 'Area kolam lava (Magma Pools) di Dragonfly Desert dihuni Dragonfly. Jangan mendekat tanpa persiapan tim.', severity: 'Fatal' },
      { title: 'Hound Mounds Terus Menerus', desc: 'Sarang tulang anjing men-spawn Red Hound (meledak membakar api saat mati) dan normal hounds jika kamu mendekat.', severity: 'Tinggi' }
    ],
    structures: [
      { name: 'Oasis Lake', desc: 'Danau kering yang hanya terisi air saat musim panas (Summer). Tempat memancing kacamata Desert Goggles blueprint dan Crumpled Packages.' },
      { name: 'Antlion Spawner', desc: 'Raid boss musiman yang meminta upeti batu / trinket di musim panas agar tidak memunculkan gempa runtuh di base.' },
      { name: 'Hound Mounds', desc: 'Sarang tulang tempat bertelur anjing pemburu buas.' },
      { name: 'Magma Pools', desc: 'Kolam lahar tempat Dragonfly berpatroli dan menetaskan Lavae.' }
    ],
    survivalTips: [
      'Selalu kenakan armor pelindung (Log Suit) sebelum memetik kaktus agar tidak terkena duri 6 damage per petikan.',
      'Jadikan Desert tempat berburu Tumbleweed di musim gugur untuk mengumpulkan Gears gratis tanpa perlu melawan monster clockwork.',
      'Saat musim panas tiba, pertimbangkan mendirikan kemah base musim panas di tepi danau Oasis karena tidak ada kebakaran liar (wildfires) di area badai pasir.'
    ],
    nativeMobs: ['Hound', 'Red Hound', 'Volt Goat', 'Dragonfly', 'Antlion', 'Buzzard'],
    temperatureRisk: 'Sangat Panas di Siang Hari (Ekstrim saat Summer)',
    bestSeason: 'Autumn & Winter (Hindari Summer tanpa Desert Goggles)'
  },
  {
    id: 'caves',
    name: 'Gua Bawah Tanah (The Caves)',
    subtitle: 'Dunia Bawah Tanah Penuh Lentera & Jamur',
    category: 'Caves',
    iconName: 'Sparkles',
    dangerRating: 4,
    description: 'Dimensi bawah tanah yang diakses lewat batu Sinkhole yang ditambang. Tanpa cahaya matahari langsung, dipenuhi tanaman jamur raksasa, stalagmit batu, dan koloni Bunnymen.',
    resources: [
      { name: 'Light Bulbs', desc: 'Bahan bakar utama Lantern (Lentera) dan Miner Hat. Tumbuh melimpah di tanaman Light Flower dekat danau lumpur.', rarity: 'Melimpah' },
      { name: 'Batilisk Wing & Guano', desc: 'Sayap kelelawar untuk ramuan Bat Bat dan pupuk Guano kualitas tinggi untuk pertanian.', rarity: 'Melimpah' },
      { name: 'Foliage & Ferns', desc: 'Daun pakis untuk bahan masakan Crock Pot atau pengisi kelaparan darurat.', rarity: 'Melimpah' },
      { name: 'Slurtle Slime', desc: 'Lendir peledak dari Slurtle untuk bahan bakar Lantern atau granat ledak instan.', rarity: 'Sedang' },
      { name: 'Tentacle Spike & Spots', desc: 'Didapat dari Big Tentacle pilar gua yang bisa dipukul untuk melompat ke bilik gua lain.', rarity: 'Sedang' }
    ],
    risks: [
      { title: 'Kegelapan Abadi (Charlie)', desc: 'Tidak ada siang hari alami di hampir seluruh gua. Kehabisan bahan bakar lentera berarti kematian instan.', severity: 'Fatal' },
      { title: 'Sanity Drain Terus Menerus', desc: 'Suasana bawah tanah menguras Sanity konstan (-5 Sanity per menit di siang hari dan lebih cepat di malam hari).', severity: 'Tinggi' },
      { title: 'Runtuhan Batu Gempa (Earthquake)', desc: 'Layar bergetar dan batu/flint/permata berjatuhan dari langit-langit gua. Kenakan helm untuk menahan hantaman!', severity: 'Sedang' },
      { title: 'Depths Worm Ambush', desc: 'Pengganti Hound Waves di gua. Cacing tanah purba dengan 900 HP yang menyamar sebagai buah berry bercahaya (Glow Berry).', severity: 'Tinggi' },
      { title: 'Bunnymen Menyerang Pemakan Daging', desc: 'Kelinci Bunnyman netral akan langsung menyerang serempak jika ada DAGING (Meat/Jerky/Ham Bat) di tas pemain!', severity: 'Fatal' }
    ],
    structures: [
      { name: 'Bunnyman Village', desc: 'Rumah wortel kelinci. Bisa disuap dengan wortel untuk menjadi pengawal tempur atau ditebang untuk dipindahkan ke base atas.' },
      { name: 'Slurtle Mound', desc: 'Sarang kura-kura siput pemakan mineral batu.' },
      { name: 'Spilagmite', desc: 'Stalagmit laba-laba gua yang menelurkan Cave Spider & Spitter.' },
      { name: 'Big Tentacle Hole', desc: 'Lubang tentakel raksasa yang berfungsi seperti Wormhole di bawah tanah.' }
    ],
    survivalTips: [
      'JANGAN PERNAH membawa daging jenis apa pun di dalam inventori terbuka saat mendekati desa Bunnyman. Simpan di dalam Chester atau Backpack!',
      'Gunakan Miner Hat atau Lantern genggam agar tangan tetap bebas memegang senjata atau beliung tambang.',
      'Musim panas (Summer) di permukaan sangat panas, namun The Caves jauh lebih sejuk dan tidak mengalami kebakaran liar (Wildfires).'
    ],
    nativeMobs: ['Bunnyman', 'Batilisk', 'Depths Worm', 'Cave Spider', 'Slurtle', 'Rock Lobster'],
    temperatureRisk: 'Sejuk di Musim Panas, Bebas Overheating',
    bestSeason: 'Summer (Tempat mengungsi terbaik dari teror panas permukaan)'
  },
  {
    id: 'ruins',
    name: 'Reruntuhan Kuno (The Ruins)',
    subtitle: 'Peradaban Thulecite & Pusat Energi Nightmare',
    category: 'Ruins',
    iconName: 'Skull',
    dangerRating: 5,
    description: 'Zona terdalam gua bawah tanah yang dibangun oleh peradaban purba kuno. Lantai batu berukir, patung bayangan, stasiun sains purba, dan menjadi tempat terbaik untuk mencari item endgame Thulecite.',
    resources: [
      { name: 'Thulecite & Fragments', desc: 'Mineral terkuat di Don\'t Starve! Untuk membuat Thulecite Crown, Thulecite Suit, dan senjata Magiluminescence.', rarity: 'Langka' },
      { name: 'Nightmare Fuel', desc: 'Bahan bakar sihir hitam melimpah ruah saat siklus Nightmare Phase memuncak.', rarity: 'Melimpah' },
      { name: 'Colored Gems (Yellow, Orange, Green)', desc: 'Permata magis langka untuk membuat tongkat pemanggil bintang (Star Caller\'s Staff) dan Construction Amulet.', rarity: 'Langka' },
      { name: 'Gears', desc: 'Roda gigi berlimpah dari reruntuhan Damaged Clockworks.', rarity: 'Sedang' }
    ],
    risks: [
      { title: 'Nightmare Cycle (Siklus Mimpi Buruk)', desc: 'Saat lampu Ruins menyala merah membara, puluhan Shadow Creatures bertelur sekaligus dan menyerang pemain tanpa henti.', severity: 'Fatal' },
      { title: 'Damaged Clockworks Agresif', desc: 'Ksatria besi, uskup penembak listrik, dan benteng peremuk yang menyerang dalam kelompok terkoordinasi.', severity: 'Fatal' },
      { title: 'Slurper Parasit Kelaparan', desc: 'Monster bulat berambut yang melompat ke kepala pemain, mencopot helm, dan menyedot rasa lapar hingga nol!', severity: 'Tinggi' },
      { title: 'Labirin Minotaur (Ancient Guardian)', desc: 'Lorong labirin penuh jebakan sarang laba-laba gantung dan Ancient Guardian berkekuatan tubrukan masif.', severity: 'Fatal' }
    ],
    structures: [
      { name: 'Ancient Pseudoscience Station', desc: 'Stasiun sains purba tempat merakit Mahkota Thulecite, Zirah Thulecite, dan Tongkat Magiluminescence.' },
      { name: 'Ancient Statues', desc: 'Patung pualam dan thulecite bermata permata yang bisa ditambang untuk permata Yellow/Orange/Green dan Thulecite.' },
      { name: 'Labyrinth & Ancient Guardian Arena', desc: 'Labirin sarang laba-laba gantung menuju arena pertarungan Ancient Guardian si pemilik Guardian Horn.' },
      { name: 'Nightmare Lights & Fissures', desc: 'Lentera dan retakan lantai yang membara merah saat Nightmare Cycle memuncak.' }
    ],
    survivalTips: [
      'Pelajari indikator Nightmare Cycle: Calm (Tenang) -> Warning (Suara bergetar) -> Nightmare (Lampu merah, lari atau bertarung) -> Dawn (Menghilang).',
      'Bawa banyak makanan penyembuh Sanity instan seperti Cooked Green Caps, Taffy, atau Dried Jerky.',
      'Bawa Gunpowder atau gunakan Ham Bat + Football Helmet berlapis saat membunuh Damaged Rooks.'
    ],
    nativeMobs: ['Damaged Knight', 'Damaged Bishop', 'Damaged Rook', 'Slurper', 'Shadow Creatures', 'Ancient Guardian'],
    temperatureRisk: 'Lembab & Gelap Gulita',
    bestSeason: 'Autumn atau Spring (Persiapan penuh senjata & armor)'
  },
  {
    id: 'forest',
    name: 'Hutan Daun & Pinus (Forest / Deciduous)',
    subtitle: 'Rumah Pig King, Pohon Kayu, & Glommer',
    category: 'Surface',
    iconName: 'Trees',
    dangerRating: 2,
    description: 'Hutan lebat terbagi dua: Evergreen Forest (pohon pinus, babi hutan biasa, dan monster pohon Treeguard) dan Deciduous Forest (pohon daun berwarna-warni, Catcoons, patung Glommer, dan desa Pig King).',
    resources: [
      { name: 'Gold Nuggets (Emas Murni)', desc: 'Tukar Trinket, Daging, atau Telur ke Pig King untuk mendapatkan hujan emas tanpa batas!', rarity: 'Melimpah' },
      { name: 'Pig Skin', desc: 'Bahan pembuatan Football Helmet terbaik. Didapat dari rumah babi yang dihancurkan atau membunuh Werepig saat bulan purnama.', rarity: 'Sedang' },
      { name: 'Birchnuts & Mushrooms', desc: 'Biji kacang pohon birchnut untuk Trail Mix (resep murah Crock Pot pemulih +30 Health!) dan jamur merah/biru/hijau.', rarity: 'Melimpah' },
      { name: 'Living Logs', desc: 'Kayu sihir berwajah manusia dari membunuh monster pohon Treeguard.', rarity: 'Sedang' }
    ],
    risks: [
      { title: 'Treeguard Spawn', desc: 'Menebang pohon terlalu banyak berturut-turut akan memicu pohon di sekitarmu bangkit menjadi raksasa Treeguard!', severity: 'Tinggi' },
      { title: 'Poison Birchnut Monster', desc: 'Di musim gugur, menebang birchnut bisa memunculkan pohon bermata marah yang memanggil bibit berakar ganas.', severity: 'Sedang' },
      { title: 'Kebakaran Hutan Liar', desc: 'Pohon pinus sangat rapat. Satu sambaran petir atau percikan obor dapat melalap habis seluruh isi hutan.', severity: 'Tinggi' }
    ],
    structures: [
      { name: 'Pig King', desc: 'Raja babi abadi yang tidur di atas karpet kayu. Memberikan Gold Nuggets untuk makanan daging dan trinket dari kuburan.' },
      { name: 'Glommer\'s Statue', desc: 'Patung serangga terbang. Pada malam Full Moon, bunga Glommer Flower mekar dan Glommer akan mengikutimu.' },
      { name: 'Pig Village', desc: 'Kumpulan rumah babi ramah. Babi akan membantumu menebang pohon jika diberi makan sayur atau daging.' },
      { name: 'Catcoon Hollows', desc: 'Tunggul pohon tempat tinggal kucing berekor berbulu.' }
    ],
    survivalTips: [
      'Tanam kembali bibit pohon (Pinecones / Acorns) tepat di depan Treeguard untuk menenangkannya tanpa harus bertarung!',
      'Berikan 4 Monster Meat ke babi di siang hari untuk mengubahnya menjadi Werepig, lalu bunuh dia untuk mendapatkan 2 Meat + 1 Pig Skin berharga 100%!',
      'Ambil Glommer Flower pada malam Full Moon untuk mendapatkan Glommer yang menghasilkan bahan bakar briket Sanity.'
    ],
    nativeMobs: ['Pig Man', 'Werepig', 'Catcoon', 'Treeguard', 'Spider', 'Glommer'],
    temperatureRisk: 'Teduh dan Rindang',
    bestSeason: 'Autumn & Spring'
  },
  {
    id: 'swamp',
    name: 'Rawa-rawa Beracun (The Swamp / Marsh)',
    subtitle: 'Zona Perang Abadi Tentacle vs Merm',
    category: 'Surface',
    iconName: 'Droplets',
    dangerRating: 4,
    description: 'Bioma ungu berair dan suram. Dihuni monster tentakel bawah tanah yang mematikan, koloni Merm perenang, sarang laba-laba rawa, dan alang-alang Reeds.',
    resources: [
      { name: 'Cut Reeds (Alang-Alang)', desc: 'Bahan baku utama Papyrus (Kertas) untuk membuat Birdcage, buku grimoire Wickerbottom, dan peta Cartographer.', rarity: 'Sedang' },
      { name: 'Tentacle Spike', desc: 'Senjata duri tentakel dengan serangan tinggi (51 Damage) yang tercecer gratis dari pertempuran Merm vs Tentacle.', rarity: 'Melimpah' },
      { name: 'Tentacle Spots', desc: 'Kulit lentur tentakel untuk membuat Feather Hat dan armor jas hujan pemula.', rarity: 'Sedang' },
      { name: 'Mosquito Sacks', desc: 'Kantong nyamuk rawa untuk bahan dasar salep obat pengurang rasa sakit (Healing Salve).', rarity: 'Sedang' }
    ],
    risks: [
      { title: 'Tentacle Sergapan Bawah Tanah', desc: 'Tentacle tersembunyi di lumpur tanpa indikator jelas kecuali gelembung kecil. Serangannya 34 DMG x2 berturut-turut!', severity: 'Fatal' },
      { title: 'Merm Aggro Massal', desc: 'Makhluk ikan amphibi Merm membenci pemain biasa (kecuali jika kamu memainkan karakter Wurt).', severity: 'Tinggi' },
      { title: 'Sanity Drop Signifikan', desc: 'Berada di dekat tentacle dan rawa menguras Sanity sangat cepat.', severity: 'Sedang' },
      { title: 'Pond Mosquitoes di Malam Hari', desc: 'Kolam rawa menelurkan gerombolan nyamuk agresif yang bisa meledak saat tubuhnya menggelembung darah.', severity: 'Sedang' }
    ],
    structures: [
      { name: 'Merm Huts & King Court', desc: 'Gubuk kayu reot ikan Merm dan tahta Raja Merm jika diperbaiki oleh Wurt.' },
      { name: 'Marsh Ponds', desc: 'Kolam air keruh tempat nyamuk merah bertelur di senja hari.' },
      { name: 'Tentacle Turf Piles', desc: 'Hamparan rumput lumpur rawa yang mengindikasikan banyaknya duri tentakel aktif.' }
    ],
    survivalTips: [
      'Gunakan rawa sebagai arena pembunuhan Bos/Serigala! Pancing Deerclops atau Hound Waves masuk ke rawa, dan biarkan Tentacle membunuh mereka untukmu.',
      'Jangan pernah berlari lurus tanpa armor di rawa. Selalu gunakan Football Helmet dan dengarkan suara gelembung lumpur.',
      'Petik Cut Reeds secepat mungkin di awal permainan minimal 8 biji untuk membuat 2 Papyrus untuk Birdcage.'
    ],
    nativeMobs: ['Tentacle', 'Merm', 'Merm Guard', 'Mosquito', 'Spider'],
    temperatureRisk: 'Lembab & Rawan Basah (Wetness tinggi)',
    bestSeason: 'Autumn (Hindari Spring karena genangan air makin luas)'
  },
  {
    id: 'savanna',
    name: 'Padang Rumput & Sabana (Grassland & Savanna)',
    subtitle: 'Habitat Kawanan Beefalo & Kelinci',
    category: 'Surface',
    iconName: 'Wheat',
    dangerRating: 2,
    description: 'Hamparan savana berumput kuning keemasan. Rumah bagi kawanan banteng raksasa Beefalo, ratusan lubang kelinci bawah tanah, dan padang rumput tak berujung.',
    resources: [
      { name: 'Cut Grass', desc: 'Bahan bakar, jerami, dan serat tali paling melimpah di seluruh benua.', rarity: 'Melimpah' },
      { name: 'Beefalo Wool (Bulu Banteng)', desc: 'Bahan insulasi musim dingin terbaik untuk membuat Winter Hat, Puffy Vest, dan Beefalo Hat.', rarity: 'Melimpah' },
      { name: 'Manure (Pupuk Kandang)', desc: 'Kotoran sapi untuk menyuburkan tanah pertanian, kebun berry, dan bahan bakar api unggun tahan lama.', rarity: 'Melimpah' },
      { name: 'Morsel (Daging Kelinci Kecil)', desc: 'Didapat dari memasang perangkap jerami di atas lubang Rabbit Hole.', rarity: 'Melimpah' }
    ],
    risks: [
      { title: 'Beefalo Mating Season (Musim Birahi)', desc: 'Di musim kawin, pantat Beefalo menyala merah dan mereka akan MENYERANG SEMUA PEMAIN yang mendekat tanpa Beefalo Hat!', severity: 'Fatal' },
      { title: 'Kebakaran Sabana Menjalar Kilat', desc: 'Rumput sabana kering sangat mudah terbakar di musim panas (Summer) dan merembet ke seluruh peta dalam sekejap.', severity: 'Tinggi' },
      { title: 'Ketiadaan Sumber Kayu & Makanan Segar', desc: 'Savanna murni tidak memiliki pohon kayu atau batu boulder. Kamu harus bepergian ke bioma lain untuk menambang.', severity: 'Sedang' }
    ],
    structures: [
      { name: 'Beefalo Herds', desc: 'Kawanan banteng jinak yang hidup berkelompok dan saling melindungi.' },
      { name: 'Rabbit Holes', desc: 'Lubang galian kelinci tanah. Menghasilkan Morsel putih (atau Beardling hitam jika Sanity pemain < 40%).' },
      { name: 'Grass Gekko Paddock', desc: 'Kadal rumput penakut yang menjatuhkan Cut Grass saat dikejar.' }
    ],
    survivalTips: [
      'Cukur bulu Beefalo HANYA di malam hari saat mereka tidur pulas menggunakan Razor (Pisau Cukur). Jangan mencukur di siang hari!',
      'Gunakan kawanan Beefalo sebagai tameng hidup dari serangan Serigala (Hound Waves). Berlarilah memutari Beefalo sampai anjing menggigit salah satu dari mereka.',
      'Kenakan Beefalo Hat saat melintasi savana jika Beefalo sedang dalam masa kawin (pantat merah).'
    ],
    nativeMobs: ['Beefalo', 'Baby Beefalo', 'Rabbit', 'Grass Gekko', 'Crow'],
    temperatureRisk: 'Sangat Kering di Musim Panas',
    bestSeason: 'Autumn & Winter'
  },
  {
    id: 'rocky',
    name: 'Dataran Batu & Kuburan (Rocky Biome & Graveyard)',
    subtitle: 'Tambang Emas, Batu Flint, & Sarang Burung Unta',
    category: 'Surface',
    iconName: 'Mountain',
    dangerRating: 3,
    description: 'Bioma kelabu berbatu padas keras tanpa vegetasi pohon. Sumber utama batu boulder, flint, nitre, emas murni, koloni laba-laba batu, serta sarang Tallbird teritorial.',
    resources: [
      { name: 'Rocks & Flint', desc: 'Material dasar tak tergantikan untuk alat perkakas, perapian batu, dan dinding markas.', rarity: 'Melimpah' },
      { name: 'Nitre (Sendawa Mesiu)', desc: 'Bahan mineral untuk membuat bubuk mesiu (Gunpowder) dan api dingin (Endothermic Fire) di musim panas.', rarity: 'Sedang' },
      { name: 'Gold Nuggets', desc: 'Diperoleh langsung dari memecahkan Boulder dengan garis urat emas kekuningan.', rarity: 'Sedang' },
      { name: 'Tallbird Egg', desc: 'Telur raksasa bernilai 4.0 Egg value di Crock Pot atau bisa ditetaskan menjadi anak burung peliharaan.', rarity: 'Langka' }
    ],
    risks: [
      { title: 'Tallbird Aggro Jarak Jauh', desc: 'Burung bermata satu raksasa bertungkai panjang yang mempertahankan sarangnya dengan pukulan 50 DMG.', severity: 'Tinggi' },
      { title: 'Hantu Kuburan (Ghosts)', desc: 'Menggali kuburan dengan Shovel berisiko memunculkan hantu terbang dan menguras -10 Sanity per galian!', severity: 'Sedang' },
      { title: 'Ketiadaan Bahan Pangan & Api', desc: 'Tidak ada kayu atau semak berry. Jangan masuk bioma ini tanpa bekal obor atau ranting.', severity: 'Sedang' }
    ],
    structures: [
      { name: 'Tallbird Nests', desc: 'Sarang tumpukan batu tempat telur biru diletakkan.' },
      { name: 'Graves (Makam Kuno)', desc: 'Gundukan kuburan dengan batu nisan yang bisa digali untuk mencari Gears, Amulets, dan Trinkets.' },
      { name: 'Marble Statues & Harps', desc: 'Patung pualam antik yang bisa ditambang menjadi Marble untuk baju zirah Marble Suit terkuat.' }
    ],
    survivalTips: [
      'Curi telur Tallbird saat malam hari ketika induknya tertidur pulas!',
      'Gali kuburan HANYA saat Sanity-mu masih tinggi, dan bawalah makanan pemulih kewarasan.',
      'Bioma ini sangat cocok untuk menambang tumpukan batu di hari 4–7 sebelum membangun Alchemy Engine permanen.'
    ],
    nativeMobs: ['Tallbird', 'Spider', 'Ghost', 'Buzzard'],
    temperatureRisk: 'Terik tanpa naungan',
    bestSeason: 'Autumn & Winter'
  },
  {
    id: 'lunar',
    name: 'Pulau Bulan (Lunar Island)',
    subtitle: 'Mekanik Enlightenment & Teknologi Kaca Bulan',
    category: 'Surface',
    iconName: 'Moon',
    dangerRating: 4,
    description: 'Pulau tersembunyi di tengah lautan yang terputus dari daratan utama. Mengubah mekanik Sanity menjadi Enlightenment (kebalikan kewarasan: semakin tinggi, semakin berbahaya bagi pemain karena serangan roh Gestalt).',
    resources: [
      { name: 'Moon Glass (Kaca Bulan)', desc: 'Material tajam sebening kristal untuk membuat Glass Cutter (senjata 68 DMG setara Dark Sword tanpa Sanity penalty).', rarity: 'Sedang' },
      { name: 'Stone Fruit', desc: 'Buah batu yang tidak pernah membusuk sebelum dipecahkan dengan Pickaxe. Sumber pangan abadi terbaik!', rarity: 'Melimpah' },
      { name: 'Driftwood & Kelp', desc: 'Kayu apung untuk pembuatan dermaga dan rumput laut segar yang bisa ditanam di dekat pantai markas.', rarity: 'Melimpah' },
      { name: 'Moon Moth', desc: 'Kupu-kupu bulan untuk membuat Moon Moth Wings pemulih health instan.', rarity: 'Sedang' }
    ],
    risks: [
      { title: 'Roh Gestalt Menyerang saat Penuh Pikiran', desc: 'Saat Enlightenment meter penuh, makhluk cahaya Gestalt akan menyerang pemain dan membuatmu pingsan tertidur!', severity: 'Tinggi' },
      { title: 'Tidak Ada Api Unggun Biasa', desc: 'Api biasa tidak bekerja dengan baik di aura bulan; butuh Celestial Fire.', severity: 'Sedang' },
      { title: 'Perjalanan Berlayar Berbahaya', desc: 'Harus menyeberangi lautan ganas dengan perahu kayu yang rentan bertabrakan dengan Sea Stacks.', severity: 'Tinggi' }
    ],
    structures: [
      { name: 'Celestial Altar Pieces', desc: 'Tiga fragmen altar kuno yang jika disatukan membuka pohon riset teknologi Celestial Tier.' },
      { name: 'Celestial Fissures', desc: 'Retakan tanah bulan yang memancarkan cahaya biru dan menyemburkan energi lunar.' },
      { name: 'Hermit Crab (Pearl\'s Island)', desc: 'Pulau tetangga nenek kepiting tua yang memberikan Pearl\'s Pearl jika menyelesaikan quest bantuannya.' }
    ],
    survivalTips: [
      'Gali semak Stone Fruit Bushes dan Bull Kelp Stalks sebanyak-banyaknya untuk dibawa pulang dan ditanam di base daratan utama.',
      'Gunakan Glass Cutter untuk membantai bos raid karena memiliki damage 68 tanpa menguras Sanity!',
      'Gunakan Bath Bomb ke air panas di Lunar Island untuk menghasilkan Moon Glass melimpah.'
    ],
    nativeMobs: ['Gestalt', 'Moon Moth', 'Anenemy', 'Fruit Fly', 'Snoot'],
    temperatureRisk: 'Sejuk dan Ajaib',
    bestSeason: 'Autumn atau Spring (Saat lautan tenang)'
  },
  {
    id: 'ocean',
    name: 'Samudra Raya (The Ocean & Waterlogged)',
    subtitle: 'Pelayaran Bahari, Badai Laut, & Pulau Bakau',
    category: 'Ocean',
    iconName: 'Anchor',
    dangerRating: 4,
    description: 'Lautan luas tak terbatas yang mengelilingi kepulauan Constant. Pemain membangun perahu rakit (Boat Kit), memasang kemudi (Steering Wheel), tiang layar (Mast), dan jangkar untuk menjelajah.',
    resources: [
      { name: 'Ocean Fishes', desc: 'Puluhan spesies ikan laut bergizi tinggi yang bisa dipancing menggunakan Fishing Rod modern.', rarity: 'Melimpah' },
      { name: 'Salt Formations', desc: 'Karang garam untuk membuat Salt Lick (menjaga Beefalo peliharaan agar tidak liar) dan bumbu garam.', rarity: 'Sedang' },
      { name: 'Barnacles', desc: 'Tiram teritip dari batu karang laut untuk resep Crock Pot mewah seperti Barnacle Nigiri & Pita.', rarity: 'Sedang' },
      { name: 'Malbatross Quill', desc: 'Bulu burung raksasa laut Malbatross untuk membuat dayung Feather Oar dan layar super cepat.', rarity: 'Langka' }
    ],
    risks: [
      { title: 'Perahu Bocor & Karam (Drowning)', desc: 'Menabrak batu karang laut membuat lambung kapal bocor. Jika kapal pecah tanpa jaket pelampung, pemain langsung mati tenggelam!', severity: 'Fatal' },
      { title: 'Serangan Malbatross & Sea Hounds', desc: 'Hiu laut Cookie Cutters yang menggerogoti kayu kapal dan serbuan burung laut Malbatross raksasa.', severity: 'Fatal' },
      { title: 'Sea Sprout Anomaly & Gelombang', desc: 'Ombak pasang besar saat badai yang bisa membuat karakter basah kuyup 100% dalam sekejap.', severity: 'Tinggi' }
    ],
    structures: [
      { name: 'Great Tree Trunk (Waterlogged Biome)', desc: 'Pohon bakau purba raksasa di tengah laut yang melindungi pemain dari sengatan sinar terik musim panas dan hujan lebat.' },
      { name: 'Sea Stacks', desc: 'Batu karang runcing yang harus dihindari saat mengemudikan kapal dengan kecepatan tinggi.' },
      { name: 'Sunken Chests', desc: 'Peti harta karun karam yang bisa diangkat ke permukaan menggunakan Derek Kapal (Pinchin\' Winch).' }
    ],
    survivalTips: [
      'SELALU bawa minimal 3 Boat Patch dan 1 Trusty Oar di dalam kantong inventori perahu untuk menambal kebocoran darurat!',
      'Pasang Lightning Rod di atas perahu kayu jika berlayar di musim semi agar kapal tidak disambar petir di tengah laut.',
      'Bangun dermaga (Docking) jika ingin memperluas tanah markas langsung ke atas air laut.'
    ],
    nativeMobs: ['Cookie Cutter', 'Malbatross', 'Sea Strider', 'Grass Gator', 'Rockjaw'],
    temperatureRisk: 'Sangat Basah (Wetness konstan saat ombak menerpa)',
    bestSeason: 'Autumn (Lautan paling tenang)'
  }
];
