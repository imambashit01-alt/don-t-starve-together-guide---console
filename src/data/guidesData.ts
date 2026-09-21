import { GuideSection } from '../types';

export const GUIDES_DATA: GuideSection[] = [
  // ==================== PANDUAN PEMULA (HARI 1 - 35) ====================
  {
    id: 'pemula-hari-pertama',
    level: 'pemula',
    title: 'Hari 1 - 5: Eksplorasi Awal & Mengamankan Sumber Daya',
    subtitle: 'Langkah krusial bertahan hidup di hari-hari pertama The Constant',
    estimatedDays: 'Hari 1 - 5',
    iconName: 'Compass',
    overview: 'Begitu bangun di dunia Don\'t Starve Together, prioritasmu bukan membangun rumah megah, melainkan menjelajah peta secepat mungkin sambil mengumpulkan bahan dasar esensial.',
    keyPoints: [
      {
        heading: '1. Rumus Golden Start (Item Wajib)',
        description: 'Kumpulkan langsung ranting (twigs), rumput (cut grass), dan batu api (flint). Jangan berhenti di satu tempat sampai kamu memiliki minimal:',
        items: [
          '40 Cut Grass & 40 Twigs (bahan bakar dan peralatan)',
          '15-20 Flint (untuk membuat pickaxe dan axe)',
          'Minimal 2 Torch (obor) sebelum senja tiba',
          'Berries / Carrots mentah untuk mengisi perut darurat'
        ],
        proTip: 'Gunakan jalan setapak (dirt road/cobblestone) untuk bonus kecepatan lari 25-30% saat memetakan garis pantai (edge of the map).'
      },
      {
        heading: '2. Siklus Siang, Sore & Malam (Waspada Charlie)',
        description: 'Malam di DST bukan hanya gelap, tapi mematikan. Kegelapan total memanggil monster bayangan tak terlihat (Charlie / The Grue) yang akan menghabisimu dalam 2 kali serangan jika kamu tidak punya sumber cahaya.',
        warning: 'JANGAN PERNAH berada dalam kegelapan total tanpa Obor (Torch) atau Api Unggun (Campfire). Pastikan Torch sudah dibuat SEBELUM malam tiba!',
        items: [
          'Day (Siang - Kuning): Waktu utama menjelajah, menambang boulder, menebang pohon.',
          'Dusk (Sore - Oranye): Sanity mulai turun perlahan. Siapkan kayu atau obor di tangan.',
          'Night (Malam - Biru Tua): Jangan diam di dekat campfire jika ingin efisien; bawa obor sambil terus berlari memetakan dunia!'
        ]
      },
      {
        heading: '3. Science Machine & Peralatan Emas Pertama',
        description: 'Begitu menemukan Gold Nugget dari menambang batu berurat emas di Biome Graveyard atau Rocky Biome, segera buat Science Machine.',
        items: [
          'Craft Science Machine (1 Gold Nugget, 4 Logs, 4 Rocks).',
          'Prototype Backpack (ransel 8 slot) agar kapasitas kantongmu lega.',
          'Prototype Shovel (sekop) untuk menggali bibit tanaman, dan Spear + Log Suit untuk perlindungan.',
          'Setelah prototype selesai, hancurkan Science Machine dengan Hammer (palu) untuk mengambil kembali 50% bahannya jika kamu belum mau menetap.'
        ]
      }
    ],
    recommendedItems: ['Torch', 'Axe', 'Pickaxe', 'Backpack', 'Log Suit', 'Spear']
  },
  {
    id: 'pemula-3-atribut',
    level: 'pemula',
    title: 'Memahami 3 Atribut Utama: Health, Hunger, & Sanity',
    subtitle: 'Cara kerja, tanda bahaya, dan cara memulihkan ketiga pilar kehidupan',
    estimatedDays: 'Sepanjang Permainan',
    iconName: 'HeartPulse',
    overview: 'Kematian di DST sering terjadi bukan karena monster kuat, melainkan karena kegagalan menyeimbangkan ketiga status dasar ini.',
    keyPoints: [
      {
        heading: '1. Health (Kesehatan - Jantung Merah)',
        description: 'Jika mencapai 0, karaktermu mati menjadi Ghost (hantu). Berkurang saat diserang musuh, terkena cuaca ekstrem (kedinginan/kepanasan), atau kelaparan.',
        items: [
          'Makanan Penyembuh Cepat: Pierogi (+40 HP), Trail Mix (+30 HP), Cooked Butterfly Wings (+8 HP).',
          'Alat Medis: Spider Gland (+8 HP), Healing Salve (+20 HP), Honey Poultice (+30 HP).',
          'Catatan: Tidur di Tent atau Bed Roll memulihkan darah besar tapi mengorbankan Hunger.'
        ]
      },
      {
        heading: '2. Hunger (Rasa Lapar - Lambung Oranye)',
        description: 'Hunger berkurang secara konstan seiring waktu (rata-rata 75 hunger per hari untuk karakter standar). Jika Hunger mencapai 0, kamu tidak langsung mati, melainkan Health akan terkuras perlahan (1 HP/detik).',
        items: [
          'Jangan makan saat hunger masih 80%! Tunggu hingga turun ke sekitar 30-40% agar makanan tidak terbuang sia-sia.',
          'Masak makanan di atas api: Makanan matang memberikan nilai gizi lebih tinggi dibanding mentah (misal Cooked Morsel, Cooked Meat).'
        ]
      },
      {
        heading: '3. Sanity (Kewarasan - Otak Biru)',
        description: 'Sanity menurun di malam hari, saat dekat monster berbahaya, basah kuyup, atau memakan Monster Meat. Bila Sanity < 15%, Shadow Creatures (Crawling Horror & Terrorbeak) akan menjadi nyata dan menyerangmu!',
        items: [
          'Solusi Awal: Petik bunga (+5 Sanity per tangkai), buat Garland (hiasan kepala bunga).',
          'Solusi Menengah: Masak jamur hijau di senja hari (Cooked Green Mushroom memulihkan +15 Sanity, kurangi 1 HP).',
          'Makanan Mewah: Taffy (+15 Sanity), Cooked Cactus Flesh (+15 Sanity), Melonsicle (+20 Sanity).'
        ],
        proTip: 'Melawan Shadow Creature sebenarnya adalah cara terbaik mengumpulkan Nightmare Fuel yang sangat berharga untuk teknologi sihir!'
      }
    ]
  },
  {
    id: 'pemula-lokasi-base',
    level: 'pemula',
    title: 'Hari 6 - 12: Menentukan Lokasi Base & Fasilitas Inti',
    subtitle: 'Membangun perkemahan utama yang strategis dan aman dari bencana',
    estimatedDays: 'Hari 6 - 12',
    iconName: 'Home',
    overview: 'Base (pangkalan) adalah pusat logistikmu. Pemilihan lokasi yang salah bisa membuatmu sengsara di musim dingin atau kebakaran di musim panas.',
    keyPoints: [
      {
        heading: '1. Kriteria Lokasi Base Terbaik',
        description: 'Carilah titik temu persimpangan beberapa biome yang memiliki akses mudah ke sumber daya penting:',
        items: [
          'Dekat Biome Padang Rumput (Savanna / Beefalo): Untuk kotoran pupuk (manure), wol hangat, dan perlindungan dari serangan serigala.',
          'Akses Wormhole: Terhubung ke bagian ujung peta lain untuk jalur transportasi instan.',
          'Dekat Glommer Statue di Deciduous Forest: Memberikan Sanity aura konstan dan Glommer Goop (bahan bakar terbaik).',
          'Dekat Oasis Desert: Salah satu lokasi terbaik untuk menghindari kebakaran spontan di musim panas.'
        ],
        warning: 'JANGAN mendirikan base TEPAT di samping sarang Beefalo atau Pig Village. Saat musim kawin (mating season), pantat Beefalo memerah dan akan menyerang siapapun yang lewat!'
      },
      {
        heading: '2. Struktur Inti Base Pemula',
        description: 'Urutan prioritas bangunan di base barumu:',
        items: [
          'Fire Pit: Tempat api permanen yang tidak terbakar habis seperti campfire.',
          'Alchemy Engine: Mesin sains tingkat 2 (butuh 4 Boards, 2 Cut Stone, 6 Gold Nuggets).',
          'Crock Pot (Minimal 2-4 buah): Memasak bahan mentah menjadi makanan berkhasiat tinggi.',
          'Ice Box (Kulkas): Memperlambat pembusukan makanan hingga 50% (butuh 1 Gear, 1 Cut Stone, 2 Gold).',
          'Chest (Peti Kayu): Mengatur inventori agar barang tidak berserakan di tanah.'
        ]
      },
      {
        heading: '3. Relokasi Sumber Daya Alam',
        description: 'Gunakan sekop untuk memindahkan Berry Bushes, Grass Tuft, dan Saplings ke dekat base. Berry Bushes dan Grass Tuft harus diberi pupuk (Manure / Guano / Rot) agar tumbuh kembali!',
        proTip: 'Beri jarak aman dan pasang Lightning Rod (penangkal petir) di tengah kebunmu agar tidak ludes terbakar saat hujan badai!'
      }
    ],
    recommendedItems: ['Fire Pit', 'Alchemy Engine', 'Crock Pot', 'Ice Box', 'Lightning Rod']
  },
  {
    id: 'pemula-musim-dingin',
    level: 'pemula',
    title: 'Hari 21 - 35: Bertahan di Musim Dingin Pertama (Winter)',
    subtitle: 'Menghadapi suhu beku, kelaparan, dan teror monster raksasa Deerclops',
    estimatedDays: 'Hari 21 - 35',
    iconName: 'Snowflake',
    overview: 'Musim dingin dimulai sekitar Hari 21. Tanaman berhenti tumbuh, suhu tubuh turun drastis hingga membeku (Freezing), dan monster raksasa Deerclops akan tiba di akhir musim.',
    keyPoints: [
      {
        heading: '1. Persiapan Insulasi & Menjaga Kehangatan',
        description: 'Saat karakter kedinginan, layar akan membeku dengan retakan es di tepinya dan darah berkurang cepat.',
        items: [
          'Thermal Stone (Batu Penghangat): Panaskan di dekat api unggun sampai menyala oranye, lalu simpan di tas/kantong.',
          'Winter Hat atau Breezy Vest (dari bulu Koalefant): Memberikan insulasi agar tidak cepat kedinginan.',
          'Obor Darurat: Bawa obor; jika membeku di tengah jalan tanpa perapian, bakar satu pohon terisolasi untuk menghangatkan diri sejenak.'
        ]
      },
      {
        heading: '2. Pasokan Makanan Musim Dingin',
        description: 'Karena semak berry dan kebun membeku, andalkan sumber makanan alternatif:',
        items: [
          'Berburu Koalefant: Ikuti jejak kaki (dirt pile) di tanah sampai menemukan gajah purba ini. Dagingnya banyak dan belalainya menyembuhkan 75 Hunger + 40 Health.',
          'Memancing di Kolam sebelum membeku, atau memasang jebakan burung (Bird Trap) dan jebakan kelinci (Trap).',
          'Drying Rack: Keringkan daging besar menjadi Jerky (tahan 20 hari, +30 HP, +25 Hunger, +15 Sanity).'
        ]
      },
      {
        heading: '3. Kedatangan Deerclops (Hari 30-31)',
        description: 'Terdengar suara geraman berat 3 kali sebelum raksasa ini muncul. Deerclops memiliki misi menghancurkan semua struktur bangunan base-mu!',
        warning: 'BEGITU MENDENGAR SUARA DEERCLOPS: Segera lari MENJAUH dari base ke tempat terbuka atau hutan lebat. Jangan biarkan dia spawn di dekat peti dan mesin base-mu!',
        items: [
          'Taktik Pemula: Pancing Deerclops ke hutan lebat (Evergreen Forest) agar pohon-pohon tumbang dan memicu kemarahan Treeguard yang akan membunuh Deerclops untukmu.',
          'Loot Berharga: Eyeball milik Deerclops adalah bahan utama Eyebrella — topi terpenting untuk musim semi & musim panas!'
        ]
      }
    ],
    recommendedItems: ['Thermal Stone', 'Winter Hat', 'Football Helmet', 'Log Suit', 'Ham Bat']
  },
  {
    id: 'pemula-karakter-rekomendasi',
    level: 'pemula',
    title: 'Rekomendasi Karakter Terbaik untuk Pemula',
    subtitle: 'Pilihan survivor terbaik dengan mekanik bersahabat tanpa penalti rumit',
    estimatedDays: 'Sebelum Masuk Server',
    iconName: 'Users',
    overview: 'Tiap karakter di Don\'t Starve Together memiliki kelebihan dan kekurangan unik. Beberapa karakter sangat mudah dipelajari, sementara yang lain membutuhkan keahlian mikromanajemen tinggi.',
    keyPoints: [
      {
        heading: 'Wilson — Sang Ilmuwan (Pilihan Paling Seimbang)',
        description: 'Karakter standar tanpa kelemahan fatal. Menumbuhkan janggut tebal yang memberikan insulasi suhu dingin gratis di musim dingin, dan bulunya bisa dicukur untuk membuat Meat Effigy (alat hidup kembali). Sangat direkomendasikan untuk belajar fundamental permainan.'
      },
      {
        heading: 'Wendy — Bersama Saudara Kembar Abigail (Pembersih Kerumunan)',
        description: 'Wendy memiliki saudara hantu bernama Abigail yang bisa dipanggil dengan bunganya. Abigail bisa menyerang area (AoE) membantai laba-laba, lebah, dan kodok dalam hitungan detik. Wendy juga lebih tahan terhadap penurunan Sanity di kegelapan.'
      },
      {
        heading: 'Wigfrid — Valkyrie Perkasa (Jagoan Tempur & Armor Gratis)',
        description: 'Memulai game dengan Battle Helm (helm 80% absorption yang sangat kuat) dan Battle Spear. Memulihkan Health dan Sanity setiap kali memukul musuh! Satu-satunya syarat: Wigfrid HANYA makan daging (karnivora murni).'
      },
      {
        heading: 'WX-78 — Robot Pemakan Roda Gigi',
        description: 'Bisa memakan Gears (roda gigi) untuk menambah status Health, Hunger, dan Sanity permanen hingga angka fantastis. Tidak masalah memakan makanan basi. Namun hindari terkena air hujan karena sirkuitnya rentan karat.'
      }
    ]
  },
  {
    id: 'pemula-kesalahan-fatal',
    level: 'pemula',
    title: '10 Kesalahan Fatal Pemula yang Sering Menyebabkan Kematian',
    subtitle: 'Hindari perangkap jebakan ini agar petualanganmu bertahan ratusan hari',
    estimatedDays: 'Pedoman Keselamatan',
    iconName: 'AlertTriangle',
    overview: 'Banyak pemula mengulang game dari awal karena mengabaikan hal-hal sepele yang berakibat fatal.',
    keyPoints: [
      {
        heading: 'Daftar Larangan Keras untuk Pemula',
        description: 'Perhatikan daftar peringatan berikut baik-baik:',
        items: [
          'Makan Daging Monster Mentah: Monster Meat mentah mengurangi 20 Health dan 15 Sanity! Masak di Crock Pot dengan campuran 1 Monster Meat + 3 Berry/Morsel menjadi Meatballs aman.',
          'Bertarung Tanpa Memakai Armor: Jangan pernah bertarung tanpa Football Helmet atau Log Suit! Armor menyerap 80% damage pukulan musuh.',
          'Lupa Bawa Obor / Bahan Bakar: Selalu kantongi minimal 1 tumpuk ranting dan rumput di inventori saat bertualang jauh.',
          'Memetik Semua Bunga Hingga Gundul: Bunga penting untuk kupu-kupu dan lebah madu. Sisakan sebagian di sekitar perkemahan.',
          'Panik Saat Anjing Pemburu (Hound Attack) Datang: Begitu karakter berkata "Did you hear that?", kenakan armor dan lari ke kawanan Beefalo atau koloni babi (Pigmen) agar mereka bertarung untukmu.',
          'Membuat Api Unggun Terlalu Dekat Pepohonan: Api di DST bisa merambat dan membakar seluruh hutan beserta base milikmu.',
          'Membunuh Babi Manis di Siang Hari Saat Sendirian: Babi bisa disuap dengan 1 potong daging agar menjadi pengawal setiamu!',
          'Mengabaikan Tingkat Kebasahan (Wetness): Saat hujan lebat, barangmu basah, tanganmu licin membuat senjata terlepas, dan Sanity anjlok cepat.',
          'Menyerang Sarang Lebah Merah (Killer Bee): Sengatannya cepat dan membuat stun.',
          'Menyerang Tallbird Tanpa Kiting: Burung bermata satu ini serangannya sakit dan cepat jika kamu hanya diam memukul terus-menerus.'
        ]
      }
    ]
  },

  // ==================== PANDUAN MENENGAH (HARI 36 - 100+) ====================
  {
    id: 'menengah-manajemen-musim',
    level: 'menengah',
    title: 'Manajemen 4 Musim: Spring, Summer, Autumn & Winter',
    subtitle: 'Strategi menghadapi tantangan cuaca ekstrem dan bencana alam berkala',
    estimatedDays: 'Hari 36 - 72',
    iconName: 'CalendarClock',
    overview: 'Setelah selamat dari musim dingin pertama, pemain tingkat menengah harus mempersiapkan diri menghadapi musim semi yang basah dan musim panas yang membakar.',
    keyPoints: [
      {
        heading: '1. Musim Semi (Spring - Hari 36 - 55)',
        description: 'Musim semi ditandai dengan hujan lebat terus menerus, bunga mekar cepat, dan badai petir.',
        items: [
          'Eyebrella Wajib: Dibuat dari mata Deerclops, topi ini memberikan 100% perlindungan air dan tahan petir.',
          'Fenomena Hujan Kodok (Frog Rain): Katak berjatuhan dari langit dan sangat agresif. Jangan lawan langsung! Pasang puluhan Traps kelinci di tanah, atau arahkan katak ke Moose/Goose atau koloni lebah.',
          'Moose/Goose: Boss musim semi. Bunuh induknya lalu berhati-hati pada anak-anaknya (Moslings) yang bisa berputar seperti angin tornado saat induknya mati.'
        ]
      },
      {
        heading: '2. Musim Panas (Summer - Hari 56 - 70)',
        description: 'Musim paling berbahaya bagi kelangsungan base. Pohon dan bangunan bisa terbakar spontan karena terik panas (Overheating), dan badai pasir di gurun memanggil Antlion.',
        items: [
          'Ice Flingomatic: Mesin sprinkler pemadam api otomatis. Beri bahan bakar es/kayu dan nyalakan hanya di musim panas untuk mencakup area base.',
          'Endothermic Fire Pit (Api Dingin): Buat perapian dingin dengan Nitre dan Cut Stone.',
          'Tribute ke Antlion: Datangi gurun Oasis, beri persembahan batu permata (Trinket / Thermal Stone dingin) ke Antlion agar dia tidak menimbulkan gempa bumi di base-mu.',
          'Alternatif Cerdas: Pindah ke Gua (Caves) selama musim panas! Di bawah tanah tidak ada bencana kebakaran spontan dan suhunya jauh lebih sejuk.'
        ]
      },
      {
        heading: '3. Musim Gugur Kedua (Autumn): Siklus Keemasan',
        description: 'Musim terbaik untuk mengumpulkan sumber daya, menambang, memanen kebun raksasa, dan menimbun cadangan daging sebelum Winter berikutnya.',
        items: [
          'Bearger Datang di Autumn: Beruang raksasa yang suka memakan semua madu dan makanan di peti. Gunakan Bearger sebagai "mesin penebang kayu gratis" dengan memancingnya berlari melintasi ratusan pohon hutan!'
        ]
      }
    ],
    recommendedItems: ['Eyebrella', 'Ice Flingomatic', 'Endothermic Fire Pit', 'Tooth Trap', 'Sewing Kit']
  },
  {
    id: 'menengah-pertempuran-kiting',
    level: 'menengah',
    title: 'Pertarungan Lanjutan, Armor Stacking & Pola Kiting',
    subtitle: 'Seni memukul tanpa terkena balasan dan persiapan persenjataan mid-game',
    estimatedDays: 'Hari 30 - 80',
    iconName: 'ShieldAlert',
    overview: 'Kiting adalah teknik dasar bertarung di mana kamu memukul musuh sejumlah hit aman, lalu mundur tepat saat musuh mengayunkan serangan, lalu masuk lagi.',
    keyPoints: [
      {
        heading: '1. Pemilihan Senjata & Armor Mid-Game',
        description: 'Tinggalkan tombak kayu biasa, beralihlah ke persenjataan yang lebih mematikan:',
        items: [
          'Ham Bat (Daging Kaki Babi): Senjata tanpa durabilitas serangan (hanya basi seiring waktu). Memberikan 59 damage saat segar, jauh lebih murah dan kuat daripada spear.',
          'Football Helmet & Log Suit: Kombinasi terbaik untuk pemain pemula hingga menengah.',
          'Tentacle Spike: Drop dari tentacle di rawa (Swamp), memberikan 51 damage dengan durabilitas 100 hit.',
          'Walking Cane: Tongkat jalan dari Walrus Tusk (MacTusk drop di musim dingin). Memberikan +25% movement speed permanen di tangan, kunci utama sukses kiting!'
        ]
      },
      {
        heading: '2. Benteng Pertahanan Serigala (Tooth Trap Arena)',
        description: 'Serangan serigala (Hound Waves) di hari ke-50 ke atas mencapai belasan ekor sekaligus, termasuk Red Hound yang meledak api dan Blue Hound pembeku.',
        items: [
          'Buat area perangkap seluas 1 layar di luar base.',
          'Pasang 30-50 Tooth Traps (jebakan gigi anjing).',
          'Saat serigala melolong, cukup berlari memutar di atas perangkap tanpa perlu memukul musuh sama sekali!'
        ]
      }
    ]
  },
  {
    id: 'menengah-eksplorasi-gua',
    level: 'menengah',
    title: 'Menembus Kedalaman Gua (The Caves) Tingkat Menengah',
    subtitle: 'Menjelajahi dunia bawah tanah, menambang Light Bulb, dan aliansi Bunnymen',
    estimatedDays: 'Hari 45 - 80',
    iconName: 'Sparkles',
    overview: 'Gua (Caves) sering ditakuti pemain baru karena kegelapan abadi dan gempa bumi runtuhan batu. Padahal, gua menyimpan teknologi paling penting di DST!',
    keyPoints: [
      {
        heading: '1. Logistik Masuk Gua Pertama Kali',
        description: 'Hancurkan Plugged Sinkhole dengan pickaxe untuk membuka jalan ke bawah tanah.',
        items: [
          'Lantern (Lentera): Dibuat dari 2 Light Bulbs, 3 Twigs, 2 Ropes. Lentera bisa diletakkan di tanah untuk memberi cahaya area tanpa membuang slot tangan.',
          'Miner Hat: Topi helm tambang bercahaya. Membebaskan kedua tanganmu untuk memegang senjata atau beliung.',
          'Beli Kacamata Mogoggles (jika memungkinkan) atau bawa persediaan rumput dan kayu bakar cadangan.'
        ]
      },
      {
        heading: '2. Ekosistem Bunnymen & Sarang Laba-laba',
        description: 'Bunnymen adalah makhluk kelinci raksasa yang ramah dan kuat, TAPI membenci daging.',
        warning: 'JANGAN PERNAH membawa daging mentah, daging matang, telur, atau ikan di inventori saat dekat Bunnymen! Mereka vegetarian fanatik dan akan langsung mengeroyokmu (rasis terhadap pemakan daging). Masukkan daging ke dalam Chester atau tas khusus!',
        items: [
          'Suap Bunnymen dengan wortel (Carrot) untuk menjadikannya tentara pengawal.',
          'Relokasi Bunny Hutch ke permukaan di dekat base untuk panen daging wortel dan wol otomatis.'
        ]
      },
      {
        heading: '3. Gempa Gua (Earthquake)',
        description: 'Saat tanah bergetar dan debu berjatuhan, bebatuan dan permata jatuh dari langit-langit. Tetaplah bergerak untuk menghindari kejatuhan batu besar di atas kepalamu.'
      }
    ],
    recommendedItems: ['Lantern', 'Miner Hat', 'Ham Bat', 'Football Helmet', 'Carrot', 'Tam o\' Shanter']
  },
  {
    id: 'menengah-pertanian-beefalo',
    level: 'menengah',
    title: 'Pertanian Modern (Farming) & Menjinakkan Beefalo',
    subtitle: 'Panen sayuran raksasa tanpa batas dan miliki tunggangan perang perkasa',
    estimatedDays: 'Hari 40+',
    iconName: 'Wheat',
    overview: 'Pertanian modern di DST bukan sekadar tanam siram, melainkan kombinasi nutrisi tanah, musik, dan seleksi bibit.',
    keyPoints: [
      {
        heading: '1. Rahasia Sayur Raksasa (Giant Crops)',
        description: 'Sayuran raksasa menghasilkan 2-3 buah sayur + 2-3 bibit ekstra serta tidak pernah busuk selama belum dicabut!',
        items: [
          'Garden Rigamajig: Bajak tanah menjadi petak 3x3.',
          'Garden Hoe & Watering Can: Cangkul tanah dan siram dengan air kolam.',
          'Kompos & Nutrisi: Seimbangkan 3 nutrisi (Formula, Compost, Manure). Kombinasi tanam seperti Dragonfruit + Tomaroot memberikan sinergi pupuk otomatis.',
          'Berbicara / Bernyanyi ke Tanaman: Berbicaralah pada tanaman setiap fase pertumbuhan untuk mendapatkan tanaman bahagia (Joyful).'
        ]
      },
      {
        heading: '2. Domestikasi Beefalo (Tunggangan Terhebat)',
        description: 'Beefalo jinak adalah salah satu aset terbaik: menyerap 100% damage yang mengarah ke pemain, berlari sangat kencang, dan memiliki pukulan keras.',
        items: [
          'Beri makan rumput atau ranting setiap hari untuk menaikkan Obedience (>40%).',
          'Pasang Saddle (pelana) dan tunggangi secara rutin.',
          'Pasang Salt Lick di base agar status penjinakan tidak berkurang saat kamu tinggal pergi bertualang.',
          'Tipe Beefalo: Rider (+kecepatan lari gila-gilaan) atau Ornery (+50 damage serangan).'
        ]
      }
    ]
  },

  // ==================== PANDUAN AHLI (HARI 100+ & ENDGAME) ====================
  {
    id: 'ahli-reruntuhan-kuno',
    level: 'ahli',
    title: 'Penaklukan Ruins (Ruins Rushing) & Ancient Technology',
    subtitle: 'Membuka peradaban purba, Thulecite gear, dan tongkat sihir legendaris',
    estimatedDays: 'Kapan saja setelah Day 20-30',
    iconName: 'Skull',
    overview: 'Ruins adalah biome terdalam di bawah tanah. Tempat ini sangat mematikan tetapi memberikan akses ke perlengkapan terbaik di seluruh permainan.',
    keyPoints: [
      {
        heading: '1. Memahami Siklus Nightmare Gua (Nightmare Cycle)',
        description: 'Di Ruins, energi Nightmare berfluktuasi melalui 4 fase berbeda:',
        items: [
          'Calm Phase: Lampu bayangan padam, kondisi tenang.',
          'Warning Phase: Lampu mulai berpendar merah, retakan tanah mulai mendesis.',
          'Nightmare / Wild Phase: Kegilaan total! Puluhan Shadow Creatures muncul dari tanah dan dinding secara massal. Jangan bertarung di tempat sempit!',
          'Dawn Phase: Energi mereda, monster bayangan mati sendiri dan menjatuhkan Nightmare Fuel.'
        ]
      },
      {
        heading: '2. Ancient Pseudoscience Station Crafting',
        description: 'Cari altar batu purba yang masih utuh (atau perbaiki dengan Thulecite). Dekati altar untuk membuat item-item dewa:',
        items: [
          'Magiluminescence: Amulet kalung yang memberikan cahaya permanen dan +20% movement speed.',
          'Thulecite Crown: Mahkota dengan 90% armor absorption dan 33% peluang memunculkan perisai kebal (forcefield).',
          'Thulecite Suit: Armor badan 90% yang sangat awet.',
          'Star Caller\'s Staff: Tongkat pemanggil bintang kerdil yang memancarkan panas dan cahaya selama berhari-hari.',
          'Deconstruction Staff (Tongkat Hijau): Mengurai item buatan menjadi bahan dasarnya kembali 100% (alat duplikasi permata tak terbatas!).',
          'Construction Amulet: Memotong biaya bahan crafting hingga separuh!'
        ]
      },
      {
        heading: '3. Bos Ancient Guardian',
        description: 'Banteng purba bercula raksasa yang menjaga labirin (Labyrinth). Taktik mudah: Gunakan Rook pillar terdekat atau kiting di sekitar pilar labirin agar tandukannya terhalang.'
      }
    ],
    recommendedItems: ['Magiluminescence', 'Thulecite Crown', 'Star Caller\'s Staff', 'Weather Pain', 'Pan Flute']
  },
  {
    id: 'ahli-raid-bosses',
    level: 'ahli',
    title: 'Panduan Membantai Raid Bosses: Dragonfly, Bee Queen & Klaus',
    subtitle: 'Strategi taktis, arena pertempuran, dan penaklukan monster penguasa dunia',
    estimatedDays: 'Endgame',
    iconName: 'Flame',
    overview: 'Raid Boss memiliki puluhan ribu HP dan kemampuan meratakan tim pemain jika dihadapi tanpa taktik matang.',
    keyPoints: [
      {
        heading: '1. Dragonfly (27.500 HP - Gurun Magma)',
        description: 'Tantangan pertama para pemain ahli.',
        items: [
          'Bangun Dinding Batu (Stone Wall Arena): Tutup kolam larva agar anak-anak larva (Lavae) tidak bisa mendekati arena pertarungan.',
          'Pan Flute (Seruling Pan): Tiup seruling tidur saat Dragonfly memasuki Enrage Mode (terbakar membara) untuk membatalkannya seketika.',
          'Gunakan Marble Suit / Scaled Armor dan Ham Bat segar.',
          'Hadiah: Scaled Furnace (penghangat base abadi tanpa kayu), Dragon Scales, dan permata.'
        ]
      },
      {
        heading: '2. Bee Queen (22.500 HP - Sarang Raksasa)',
        description: 'Ratu lebah yang memanggil puluhan pengawal prajurit Grumble Bees.',
        items: [
          'Beekeeper Hat: Memberikan resistensi 80% terhadap sengatan lebah.',
          'Area Pagar / Bunga: Pagar arena kecil agar lebah kecil menumpuk di satu tempat.',
          'Puddle Muddle / Area AoE: Gunakan Wendy (Abigail) atau Weather Pain untuk menyapu bersih Grumble Bees.',
          'Hadiah Utama: Bundling Wrap Blueprint (kemasan tanpa batas pembusukan makanan selamanya!).'
        ]
      },
      {
        heading: '3. Klaus (10.000 HP + 2 Phase Kebangkitan)',
        description: 'Bos musim dingin yang dipanggil dengan Deer Antler pada Klaus\' Sack.',
        items: [
          'Jangan bunuh kedua Rusa (Magma & Ice Deer)! Jika kedua rusa mati, Klaus akan mengamuk dan damage-nya berlipat ganda. Cukup kiting Klaus menjauh dari rusanya.',
          'Klaus memiliki 2 nyawa: saat bangkit dari kematian, dadanya terbuka dan serangannya menjadi gigitan mematikan.',
          'Hadiah: 10% peluang mendapatkan Krampus Sack (ransel 14 slot terbaik tanpa penalti gerak).'
        ]
      }
    ]
  },
  {
    id: 'ahli-ancient-fuelweaver-celestial',
    level: 'ahli',
    title: 'Puncak Endgame: Ancient Fuelweaver vs Celestial Champion',
    subtitle: 'Pertarungan kosmik antara Kekuatan Bayangan Gelap dan Cahaya Bulan',
    estimatedDays: 'Master Challenge',
    iconName: 'Crown',
    overview: 'Dua bos puncak penutup cerita Don\'t Starve Together yang membutuhkan persiapan logistik tingkat dewa.',
    keyPoints: [
      {
        heading: '1. Ancient Fuelweaver (16.000 HP - The Atrium)',
        description: 'Bos penguasa kegelapan terdalam. Membutuhkan Shadow Atrium, 8 Fossil Fragments, dan kunci kuno.',
        items: [
          'Weather Pain: Wajib dibawa untuk menghancurkan perisai tak tembus (Unseen Shield) miliknya.',
          'Nightmare Amulet: Gunakan untuk dengan cepat turun ke kegilaan agar bisa memukul monster tangan bayangan (Woven Shadows) yang mencoba memulihkan darah bos.',
          'Lazy Explorer: Tongkat teleportasi cepat untuk lolos dari kurungan sangkar tulang (Bone Cage).'
        ]
      },
      {
        heading: '2. Pulau Bulan (Lunar Island) & Sistem Enlightenment',
        description: 'Pulau tersembunyi di mana atmosfernya murni energi bulan.',
        items: [
          'Sanity berubah menjadi Enlightenment (meteran kuning bercahaya).',
          'Semakin tinggi Enlightenment, hantu bulan (Gestalts) akan bermunculan membantu atau mengganggumu.',
          'Gali Lunar Glass, Moon Stone, dan cari 3 pecahan Celestial Altar untuk membuka teknologi kosmik.'
        ]
      },
      {
        heading: '3. Celestial Champion (Tiga Fase Pertempuran Kosmik)',
        description: 'Raid Boss puncak yang diturunkan dari langit malam setelah Celestial Altar dirakit.',
        items: [
          'Phase 1: Roll attack & Rolling Stone (hindari putarannya).',
          'Phase 2: Menembakkan sinar laser kosmik dan perisai cahaya reflektif.',
          'Phase 3: Berubah menjadi entitas murni energi bulan dengan serangan meteor orbit.'
        ]
      }
    ]
  },
  {
    id: 'ahli-sailing-ocean',
    level: 'ahli',
    title: 'Pelayaran Laut Luas & Membangun Kapal Perang (Sailing)',
    subtitle: 'Menaklukkan ombak samudra, pulau Pearl, dan monster penguasa laut',
    estimatedDays: 'Eksplorasi Lautan',
    iconName: 'Anchor',
    overview: 'Lautan luas DST menyimpan harta karun, bangkai kapal karam, dan pulau-pulau rahasia yang tidak terhubung dengan daratan utama.',
    keyPoints: [
      {
        heading: '1. Konstruksi Kapal Ideal',
        description: 'Gunakan Think Tank di darat untuk membuka resep maritim:',
        items: [
          'Boat Kit: Letakkan di tepi perairan dalam untuk meluncurkan dek kapal kayu.',
          'Mast (Tiang Layar) & Steering Wheel (Kemudi): Memberikan kendali penuh atas laju kapal.',
          'Anchor (Jangkar): Hentikan kapal seketika saat mendekati karang agar tidak bocor tertabrak.',
          'Boat Patch & Trusty Tape: Bawa selalu untuk menambal kebocoran kapal darurat di tengah badai.'
        ]
      },
      {
        heading: '2. Crab King & Pearl\'s Island Quest',
        description: 'Kunjungi pulau terpencil milik Pearl si kepiting tua. Selesaikan permintaan bantuannya (membersihkan sampah laut, memberi bunga payung) untuk mendapatkan Pearl\'s Pearl yang dipasang ke tahta Crab King.'
      },
      {
        heading: '3. Malbatross (Burung Laut Raksasa)',
        description: 'Muncul di kawanan ikan laut dalam. Pertarungan di atas kapal menuntut keahlian mendayung dan menghindari ombak besar (waves) yang bisa menenggelamkan perahumu.'
      }
    ]
  }
];
