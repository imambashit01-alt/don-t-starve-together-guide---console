import { GuideSection } from '../types';

export const GUIDES_DATA: GuideSection[] = [
  // =========================================================================
  // PANDUAN PEMULA (HARI 1 - 35)
  // =========================================================================
  {
    id: 'pemula-hari-pertama',
    level: 'pemula',
    topic: 'eksplorasi',
    title: 'Hari 1 - 5: Eksplorasi Awal & Rumus Golden Start',
    subtitle: 'Langkah krusial memetakan The Constant dan mengamankan inventori esensial',
    estimatedDays: 'Hari 1 - 5',
    readTime: '4 menit baca',
    iconName: 'Compass',
    overview: 'Begitu tersadar di dunia The Constant, prioritas terbesarmu bukanlah langsung mendirikan rumah megah, melainkan memetakan garis pantai (edge of map) secepat mungkin sembari menimbun bahan baku krusial.',
    quickSummary: 'Jangan diam di satu tempat. Berlari di sepanjang jalan setapak atau garis pantai, kumpulkan 40 rumput/ranting, 20 batu api, buat ransel dan obor sebelum malam.',
    checklist: [
      { id: 'c1', label: 'Kumpulkan 40 Cut Grass & 40 Twigs' },
      { id: 'c2', label: 'Kumpulkan minimal 15-20 Flint' },
      { id: 'c3', label: 'Buat Obor (Torch) sebelum senja hari 1 berakhir' },
      { id: 'c4', label: 'Tambang batu berurat emas & kumpulkan minimal 1 Gold Nugget' },
      { id: 'c5', label: 'Bangun Science Machine sementara untuk prototype Backpack & Shovel' }
    ],
    keyPoints: [
      {
        heading: '1. Rumus Golden Start (Item Wajib)',
        description: 'Kumpulkan langsung ranting (twigs), rumput (cut grass), dan batu api (flint) tanpa henti. Jangan berhenti di satu tempat sampai kamu memiliki kuota aman inventori.',
        items: [
          '40 Cut Grass & 40 Twigs: Bahan bakar dasar, obor darurat, perangkap, dan perkakas.',
          '15-20 Flint: Bahan beliung (Pickaxe) dan kapak (Axe) awal sebelum memiliki alat emas.',
          'Minimal 2 Torch di inventori sebelum senja tiba agar tidak panik saat matahari terbenam.',
          'Berry & Wortel mentah: Ambil secukupnya untuk mengisi rasa lapar darurat saat berjalan.'
        ],
        proTip: 'Manfaatkan jalan tanah atau bebatuan (Cobblestone / Dirt Road) untuk bonus kecepatan lari 25-30% saat menjelajah peta.'
      },
      {
        heading: '2. Siklus Siang, Sore & Malam (Waspada Charlie)',
        description: 'Malam di DST bukan hanya gelap, melainkan mematikan. Kegelapan total memanggil monster tak berwujud (Charlie / The Grue) yang akan menghabisimu dalam 2 tebasan jika tidak ada sumber cahaya.',
        warning: 'JANGAN PERNAH berada dalam kegelapan total tanpa Obor (Torch) atau Api Unggun! Pastikan Torch sudah dibuat SEBELUM malam tiba.',
        items: [
          'Day (Siang - Kuning): Waktu emas berlari cepat, menambang boulder batu, dan memetakan biome.',
          'Dusk (Sore - Oranye): Sanity mulai merosot perlahan. Siapkan kayu atau obor di tangan kanan.',
          'Night (Malam - Biru Tua): Jangan diam melamun di dekat campfire jika ingin efisien; bawa obor menyala sambil terus berlari memetakan kontur pulau!'
        ]
      },
      {
        heading: '3. Science Machine Sementara & Prototype Cepat',
        description: 'Begitu menemukan Gold Nugget dari menambang boulder emas di Graveyard atau Rocky Biome, segera dirikan Science Machine portabel.',
        items: [
          'Craft Science Machine (1 Gold Nugget, 4 Logs, 4 Rocks).',
          'Prototype Backpack (ransel 8 slot) agar kapasitas kantongmu langsung bertambah lega.',
          'Prototype Shovel (sekop) untuk menggali bibit tanaman, serta Spear + Log Suit untuk proteksi.',
          'Setelah prototype selesai, hancurkan Science Machine dengan Palu (Hammer) untuk mengambil kembali 50% bahannya jika belum ingin menetap permanen.'
        ]
      }
    ],
    recommendedItems: ['Torch', 'Axe', 'Pickaxe', 'Backpack', 'Log Suit', 'Spear']
  },
  {
    id: 'pemula-3-atribut',
    level: 'pemula',
    topic: 'eksplorasi',
    title: 'Memahami 3 Atribut Utama: Health, Hunger, & Sanity',
    subtitle: 'Cara kerja, tanda bahaya, dan formula pemulihan ketiga pilar kehidupan',
    estimatedDays: 'Sepanjang Permainan',
    readTime: '5 menit baca',
    iconName: 'HeartPulse',
    overview: 'Kematian di Don\'t Starve Together sering kali bukan karena monster raksasa, melainkan karena kegagalan pemain mengontrol sinergi ketiga pilar status dasar ini.',
    quickSummary: 'Jaga Health dengan Pierogi (+40 HP), hemat Hunger dengan makan saat di bawah 40%, dan pulihkan Sanity dengan jamur hijau matang (+15) atau tidur.',
    checklist: [
      { id: 'c6', label: 'Pahami batas aman: jangan biarkan Hunger mencapai 0' },
      { id: 'c7', label: 'Ketahui jamur hijau matang (Cooked Green Cap) untuk +15 Sanity instan' },
      { id: 'c8', label: 'Simpan Spider Glands / Healing Salve untuk pemulihan darah darurat' }
    ],
    keyPoints: [
      {
        heading: '1. Health (Kesehatan - Jantung Merah)',
        description: 'Jika mencapai 0, karaktermu mati menjadi arwah penasaran (Ghost). Berkurang saat diserang monster, terkena cuaca ekstrem (Freezing / Overheating), atau kelaparan.',
        items: [
          'Makanan Penyembuh Terbaik: Pierogi (+40 HP), Trail Mix (+30 HP), Cooked Butterfly Wings (+8 HP).',
          'Alat Medis: Spider Gland (+8 HP), Healing Salve (+20 HP), Honey Poultice (+30 HP).',
          'Tidur di Tent atau Fur Roll: Memulihkan Health dan Sanity dalam jumlah besar, tetapi mengorbankan banyak poin Hunger.'
        ]
      },
      {
        heading: '2. Hunger (Rasa Lapar - Lambung Oranye)',
        description: 'Hunger berkurang secara teratur seiring waktu (rata-rata 75 hunger per hari untuk karakter standar). Jika mencapai 0, darah akan terkuras perlahan (1 HP per detik).',
        items: [
          'Jangan makan saat hunger masih 80%! Tunggu hingga turun ke 30-40% agar efisiensi kalori makanan tidak mubazir.',
          'Selalu masak makanan di atas api: Makanan matang memberikan nilai gizi lebih tinggi dibanding mentah (contoh: Cooked Meatballs, Cooked Morsel).'
        ]
      },
      {
        heading: '3. Sanity (Kewarasan - Otak Biru)',
        description: 'Sanity menurun di malam hari, saat dekat monster menyeramkan, pakaian basah kuyup, atau memakan Monster Meat. Bila Sanity jatuh di bawah 15%, monster bayangan (Crawling Horror & Terrorbeak) akan berubah nyata dan memburumu!',
        items: [
          'Solusi Awal: Petik bunga segar (+5 Sanity per tangkai), buat Garland untuk penahan Sanity.',
          'Solusi Menengah: Masak jamur hijau di senja hari (Cooked Green Cap memulihkan +15 Sanity, kurangi 1 HP).',
          'Cactus Flesh Matang: Petik kaktus di gurun memakai armor, lalu masak (+15 Sanity, +12.5 Hunger).'
        ],
        proTip: 'Melawan Shadow Creature sebenarnya adalah cara utama mengumpulkan Nightmare Fuel yang sangat berharga untuk teknologi sihir tingkat lanjut!'
      }
    ],
    recommendedItems: ['Cooked Green Caps', 'Pierogi', 'Garland', 'Healing Salve', 'Cooked Cactus Flesh']
  },
  {
    id: 'pemula-cahaya-malam',
    level: 'pemula',
    topic: 'eksplorasi',
    title: 'Manajemen Cahaya, Api Unggun & Bertahan dari Teror Kegelapan',
    subtitle: 'Strategi sumber cahaya portabel, pencegahan kebakaran hutan, dan navigasi malam',
    estimatedDays: 'Hari 1 - 20',
    readTime: '3 menit baca',
    iconName: 'Flame',
    overview: 'Cahaya adalah garis pembatas antara hidup dan mati di The Constant. Memahami perbedaan antara api portabel, api unggun sementara, dan perapian permanen akan menghemat sumber daya secara drastis.',
    quickSummary: 'Gunakan Torch untuk mobilitas malam, buat Fire Pit batu di base, dan jangan pernah buat Campfire darurat di dekat tumpukan rumput atau pohon kering.',
    checklist: [
      { id: 'c9', label: 'Bawa minimal 2 obor cadangan setiap kali meninggalkan markas' },
      { id: 'c10', label: 'Gunakan bahan bakar efisien (Log, Charcoal, Manure) daripada Twigs/Grass' },
      { id: 'c11', label: 'Bikin Fire Pit permanen segera setelah base utama ditentukan' }
    ],
    keyPoints: [
      {
        heading: '1. Perbedaan Campfire (Sementara) vs Fire Pit (Permanen)',
        description: 'Campfire dibuat dari rumput dan kayu, menyisakan abu saat padam, serta berisiko menyulut benda di sekelilingnya. Fire Pit dibuat dari bebatuan kokoh, menahan bara api di dalamnya, dan bisa dinyalakan berulang kali hanya dengan menambahkan bahan bakar.',
        warning: 'Jangan menyalakan Campfire kayu darurat di tengah hutan rimbun! Percikan api bisa memicu kebakaran hutan massal yang melahap markasmu.'
      },
      {
        heading: '2. Efisiensi Bahan Bakar Api (Fuel Value)',
        description: 'Bahan bakar memiliki tingkatan durasi nyala yang berbeda:',
        items: [
          'Sangat Buruk: Twigs, Cut Grass, Berry Bushes (hanya menyala sebentar).',
          'Bagus: Logs (batang kayu), Charcoal (arang hasil bakaran pohon), Pinecones.',
          'Luar Biasa: Boards (papan olahan), Beefalo Wool, dan Glommer\'s Goop (bahan bakar terbaik di game).'
        ]
      },
      {
        heading: '3. Navigasi Obor Darurat (Torch Survival)',
        description: 'Jika terperangkap di malam hari tanpa kayu bakar dan api padam, pegang Torch di tangan. Jika obor hampir habis (di bawah 10%), segera bakar satu pohon terisolasi dengan mengarahkan obor ke pohon tersebut untuk menciptakan api unggun darurat raksasa!',
        proTip: 'Bakar pohon yang berdiri sendirian agar api tidak merembet ke mana-mana.'
      }
    ],
    recommendedItems: ['Torch', 'Campfire', 'Fire Pit', 'Charcoal', 'Pinecone']
  },
  {
    id: 'pemula-lokasi-base',
    level: 'pemula',
    topic: 'eksplorasi',
    title: 'Hari 6 - 12: Menentukan Lokasi Base Strategis & Fasilitas Inti',
    subtitle: 'Membangun perkemahan utama yang strategis, efisien, dan terlindung dari bencana',
    estimatedDays: 'Hari 6 - 12',
    readTime: '5 menit baca',
    iconName: 'Home',
    overview: 'Base (pangkalan markas) adalah pusat logistik dan tempat berlindungmu. Pemilihan lokasi yang salah bisa membuat perjalanan bolak-balik menyiksa, atau berujung hancur lebur di musim dingin dan terbakar di musim panas.',
    quickSummary: 'Pilih lokasi persimpangan biome dengan akses Wormhole, padang rumput Beefalo, atau Oasis Desert. Bangun Fire Pit, Alchemy Engine, Crock Pot, dan Ice Box.',
    checklist: [
      { id: 'c12', label: 'Temukan persimpangan 3+ biome berbeda (Grassland, Forest, Savanna)' },
      { id: 'c13', label: 'Cek keberadaan Wormhole yang mengarah ke bagian peta lain' },
      { id: 'c14', label: 'Bangun Alchemy Engine dan Fire Pit berdampingan' },
      { id: 'c15', label: 'Rakit minimal 2 Crock Pot dan 1 Ice Box' },
      { id: 'c16', label: 'Pasang Lightning Rod untuk penangkal petir' }
    ],
    keyPoints: [
      {
        heading: '1. Kriteria Lokasi Base Idaman',
        description: 'Carilah titik persimpangan beberapa biome yang memiliki konektivitas tinggi ke sumber daya alam penting:',
        items: [
          'Dekat Biome Padang Rumput (Savanna / Beefalo): Mempermudah pengambilan pupuk (manure), wol hangat, dan perlindungan dari serigala.',
          'Akses Wormhole Terdekat: Berfungsi sebagai jalan tol instan ke ujung peta yang berlawanan.',
          'Dekat Patung Glommer di Deciduous Forest: Memberikan Sanity aura konstan dan Glommer Goop.',
          'Dekat Oasis Desert: Wilayah paling aman dari bahaya kebakaran spontan (spontaneous combustion) di musim panas.'
        ],
        warning: 'JANGAN mendirikan base TEPAT di samping sarang Beefalo! Saat musim kawin (mating season), pantat Beefalo memerah dan mereka akan membunuhmu tanpa ampun.'
      },
      {
        heading: '2. Fasilitas Inti yang Wajib Ada di Base Awal',
        description: 'Urutan prioritas struktur bangunan di markas barumu:',
        items: [
          'Fire Pit: Tempat api permanen yang tidak terbakar habis.',
          'Alchemy Engine: Mesin sains tingkat 2 (butuh 4 Boards, 2 Cut Stone, 6 Gold Nuggets).',
          'Crock Pot (2-4 buah): Mengolah bahan mentah menjadi hidangan bergizi tinggi.',
          'Ice Box (Kulkas): Menahan laju pembusukan makanan hingga 50% (butuh 1 Gear, 1 Cut Stone, 2 Gold).',
          'Chest (Peti Kayu): Mengorganisasi barang agar inventori tidak berserakan di tanah.'
        ]
      },
      {
        heading: '3. Relokasi Tanaman Kebun & Penangkal Petir',
        description: 'Gunakan sekop (Shovel) untuk menggali Berry Bushes, Grass Tufts, dan Saplings lalu tanam berjejer di dekat markas. Semak berry dan rumput wajib diberi pupuk (Manure / Guano / Rot) agar berbuah kembali!',
        proTip: 'Pasang Lightning Rod (penangkal petir) di pusat kebun agar tanaman tidak hangus terbakar saat badai petir musim semi.'
      }
    ],
    recommendedItems: ['Fire Pit', 'Alchemy Engine', 'Crock Pot', 'Ice Box', 'Lightning Rod', 'Chest']
  },
  {
    id: 'pemula-manajemen-inventori',
    level: 'pemula',
    topic: 'eksplorasi',
    title: 'Manajemen Tas & Inventori: Aturan 15 Slot & Chest Sorting',
    subtitle: 'Cara membawa barang efisien tanpa membuang item berharga di jalan',
    estimatedDays: 'Hari 1 - 30',
    readTime: '4 menit baca',
    iconName: 'Backpack',
    overview: 'Ruang inventori di Don\'t Starve Together sangat terbatas (15 slot saku dasar). Pemain yang cerdas tahu persis apa yang harus selalu dibawa di kantong dan apa yang harus ditinggal di peti markas.',
    quickSummary: 'Bawa 4 pilar esensial (Cut Grass, Twigs, Flint, Logs), simpan item situasional di Chest berkategori warna, dan manfaatkan Chester sebagai brankas berjalan.',
    checklist: [
      { id: 'c17', label: 'Tentukan 4 slot permanen untuk bahan survival dasar' },
      { id: 'c18', label: 'Cari Eye Bone di tepi jalan untuk mendapatkan Chester (9 slot ekstra)' },
      { id: 'c19', label: 'Kelompokkan peti di base: Bahan Alam, Makanan, Peralatan, dan Medis' }
    ],
    keyPoints: [
      {
        heading: '1. Aturan 4 Pilar Inventori Pokok',
        description: 'Saat menjelajah, 4 slot pertama di kantong sakumu harus selalu dialokasikan untuk:',
        items: [
          'Stack Cut Grass (maksimal 40 biji)',
          'Stack Twigs (maksimal 40 biji)',
          'Stack Logs (kayu bakar & crafting darurat)',
          'Stack Flint / Batu Api (perbaikan alat)'
        ]
      },
      {
        heading: '2. Memanfaatkan Chester (Si Peti Berjalan)',
        description: 'Eye Bone biasanya spawn di dekat jalan setapak bebatuan. Ambil Eye Bone, maka makhluk bertaring lucu bernama Chester akan mengikutimu ke mana pun.',
        items: [
          'Chester memiliki 9 slot inventori tambahan yang berjalan bersamamu.',
          'Gunakan Chester untuk menyimpan barang berat atau barang tahan lama: bebatuan, permata, kayu bakar cadangan, atau daging saat kamu berteman dengan Bunnymen.'
        ],
        proTip: 'Pada saat bulan purnama (Full Moon), masukkan 9 Blue Gems ke dalam Chester untuk mengubahnya menjadi Snow Chester (berfungsi sebagai kulkas berjalan)!'
      },
      {
        heading: '3. Sistem Tata Letak Peti Markas (Chest Organization)',
        description: 'Kelompokkan peti berdasarkan fungsinya agar tidak membuang waktu mencari barang saat darurat:',
        items: [
          'Peti Bahan Mentah: Kayu, batu, batu bara, rumput, ranting, dan nitre.',
          'Peti Peralatan & Armor: Helm cadangan, tombak, kapak cadangan, dan jarum jahit.',
          'Peti Medis & Sanity: Salve, spider glands, honey, dan bunga cadangan.',
          'Peti Sihir & Permata: Red gems, blue gems, nightmare fuel, dan thulecite.'
        ]
      }
    ],
    recommendedItems: ['Backpack', 'Eye Bone (Chester)', 'Chest', 'Signs']
  },
  {
    id: 'pemula-hound-waves',
    level: 'pemula',
    topic: 'combat',
    title: 'Menghadapi Serangan Serigala (Hound Waves) Hari 7 - 100+',
    subtitle: 'Mengenal tanda bahaya kedatangan anjing pemburu dan taktik pertahanan efektif',
    estimatedDays: 'Hari 7 - 100+',
    readTime: '4 menit baca',
    iconName: 'ShieldAlert',
    overview: 'Hound Wave adalah serbuan gerombolan serigala pemburu yang menyerang pemain secara berkala. Jumlah dan jenis serigala akan bertambah ganas seiring bertambahnya usia hari permainan.',
    quickSummary: 'Saat mendengar lolongan anjing ("Did you hear that?"), pasang armor dan lari ke kawanan Beefalo, koloni Babi, atau area Tooth Trap. Jangan lawan di tengah markas!',
    checklist: [
      { id: 'c20', label: 'Kenali suara lolongan peringatan serigala (3 kali dengusan)' },
      { id: 'c21', label: 'Pastikan Football Helmet atau Log Suit terpasang di tubuh sebelum anjing spawn' },
      { id: 'c22', label: 'Bawa serigala menjauh dari bangunan kayu base untuk menghindari kebakaran' }
    ],
    keyPoints: [
      {
        heading: '1. Tanda Bahaya & Fase Kedatangan',
        description: 'Sebelum anjing pemburu muncul, karaktermu akan bergumam ("Did you hear that?" / "The hounds are coming!"). Disusul suara lolongan anjing serak yang frekuensinya makin rapat sebanyak 3 kali berturut-turut.',
        warning: 'JANGAN PERNAH bertarung di dekat base utama jika ada Red Hound (serigala merah), karena saat mati mereka meledak dan membakar apa saja di sekelilingnya!'
      },
      {
        heading: '2. Taktik Bertahan Berdasarkan Tahapan Game',
        description: 'Strategi melawan serigala seiring bertambahnya hari:',
        items: [
          'Awal Game (Hari 7 - 20): Bawa anjing ke kawanan Beefalo (putar-putar di tengah mereka hingga anjing menggigit sapi) atau ke Pig Village.',
          'Pertengahan Game (Hari 21 - 50): Bertarung solo menggunakan Football Helmet + Ham Bat. Kiting 2 hit lalu dodge mundur.',
          'Game Lanjutan (Hari 50+): Bangun lapangan perangkap Tooth Traps (30-50 buah) di luar markas. Cukup lari memutar di atas perangkap!'
        ]
      },
      {
        heading: '3. Jenis-Jenis Hound di Dunia Constant',
        description: 'Kenali karakteristik musuhmu:',
        items: [
          'Normal Hound (Hitam): Cepat tetapi darahnya rendah (150 HP). Drop Monster Meat dan Hound Tooth.',
          'Red Hound (Musim Panas/Gugur): Saat mati meledak menjadi kobaran api. Drop Red Gem ekstra.',
          'Blue Hound (Musim Dingin/Semi): Menembakkan gelombang dingin yang membekukan pemain saat mati. Drop Blue Gem.'
        ]
      }
    ],
    recommendedItems: ['Football Helmet', 'Ham Bat', 'Log Suit', 'Tooth Trap']
  },
  {
    id: 'pemula-musim-dingin',
    level: 'pemula',
    topic: 'musim',
    title: 'Hari 21 - 35: Bertahan di Musim Dingin Pertama & Teror Deerclops',
    subtitle: 'Menghadapi suhu beku, kelaparan, dan bos penghancur base musim dingin',
    estimatedDays: 'Hari 21 - 35',
    readTime: '6 menit baca',
    iconName: 'Snowflake',
    overview: 'Musim dingin dimulai sekitar Hari 21. Tanaman kebun berhenti berbuah, kolam air membeku, suhu tubuh merosot hingga membeku (Freezing), dan bos Deerclops akan tiba di malam hari 30.',
    quickSummary: 'Panaskan Thermal Stone di perapian, buru Koalefant untuk daging besar dan belalainya, lalu giring Deerclops ke hutan pohon Evergreen saat terdengar geramannya.',
    checklist: [
      { id: 'c23', label: 'Buat Thermal Stone dan panaskan hingga berwarna jingga menyala' },
      { id: 'c24', label: 'Bikin Winter Hat, Breezy Vest, atau Dapper Vest untuk insulasi dingin' },
      { id: 'c25', label: 'Keringkan daging menjadi Jerky menggunakan Drying Rack' },
      { id: 'c26', label: 'Lari MENJAUH dari base saat mendengar geraman Deerclops pada hari 30' },
      { id: 'c27', label: 'Kalahkan Deerclops dan ambil Deerclops Eyeball' }
    ],
    keyPoints: [
      {
        heading: '1. Persiapan Insulasi & Mencegah Freezing',
        description: 'Saat suhu karakter anjlok di bawah nol, layar monitor akan dipenuhi retakan es beku dan Health terkuras cepat (1.25 HP per detik).',
        items: [
          'Thermal Stone: Simpan di dekat Fire Pit hingga membara oranye, lalu masukkan ke ransel untuk memancarkan kehangatan selama perjalanan.',
          'Pakaian Insulasi: Winter Hat (dari wol Beefalo), Breezy Vest (dari belalai Koalefant), atau Top Hat.',
          'Obor Darurat: Jika membeku di perjalanan jauh, bakar satu pohon pinus dengan obor untuk menghangatkan badan instan.'
        ]
      },
      {
        heading: '2. Berburu Koalefant & Cadangan Daging',
        description: 'Karena semak berry membeku dan tidak tumbuh lagi di musim dingin, andalkan pasokan daging hewan besar:',
        items: [
          'Periksa gundukan tanah mencurigakan (Dirt Pile) untuk menemukan jejak kaki binatang purba Koalefant.',
          'Ikuti terus jejak hingga menemukan Koalefant. Dekati, pukul sekali agar dia berbalik menyerang, lalu kiting 5-6 hit sebelum menghindar.',
          'Drop Koalefant: 8 Daging Besar (Meat) dan 1 Trunk yang memulihkan 75 Hunger + 40 Health!'
        ]
      },
      {
        heading: '3. Kedatangan Deerclops (Malam Hari 30 - 31)',
        description: 'Deerclops memiliki misi khusus: memburu struktur bangunan di dekat pemain dan menginjak-injaknya hingga hancur berkeping-keping.',
        warning: 'BEGITU MENDENGAR SUARA GERAMAN BERAT: Segera berlari keluar sejauh 2-3 layar dari markas utama! Jangan sampai Deerclops spawn di samping peti dan mesin berhargamu!',
        items: [
          'Taktik Hutan (Penebang Gratis): Pancing Deerclops melintasi hutan lebat Evergreen. Kakinya yang besar akan menumbangkan puluhan pohon dan membangunkan monster pohon Treeguard yang akan membunuh Deerclops untukmu.',
          'Hadiah Terpenting: Deerclops Eyeball adalah bahan pembuatan Eyebrella — topi sakti penyelamat di musim semi dan panas.'
        ]
      }
    ],
    recommendedItems: ['Thermal Stone', 'Winter Hat', 'Football Helmet', 'Ham Bat', 'Pierogi']
  },
  {
    id: 'pemula-karakter-rekomendasi',
    level: 'pemula',
    topic: 'karakter',
    title: 'Panduan Karakter Pemula Terbaik (Wilson, Wendy, Wigfrid, WX-78)',
    subtitle: 'Pilihan survivor terbaik dengan mekanik ramah tanpa penalti berat',
    estimatedDays: 'Sebelum Memilih Karakter',
    readTime: '5 menit baca',
    iconName: 'Users',
    overview: 'Setiap karakter di Don\'t Starve Together memiliki keunggulan dan kelemahan yang sangat kontras. Memilih karakter yang tepat memangkas kurva belajar dan mempermudah bertahan hidup ratusan hari.',
    quickSummary: 'Wilson seimbang untuk belajar dasar, Wendy dengan Abigail sangat tangguh membersihkan laba-laba, Wigfrid kuat bertarung, dan WX-78 tangguh dengan gear upgrade.',
    checklist: [
      { id: 'c28', label: 'Pahami kekuatan utama karakter pilihanmu sebelum masuk server' },
      { id: 'c29', label: 'Ketahui kelemahan fatal karakter (misal Wigfrid hanya makan daging)' }
    ],
    keyPoints: [
      {
        heading: 'Wilson — Sang Ilmuwan Seimbang (Paling Direkomendasikan)',
        description: 'Karakter standar tanpa penalti apa pun. Memiliki janggut lebat yang tumbuh seiring waktu:',
        items: [
          'Janggut memberikan insulasi hangat alami di musim dingin tanpa perlu topi tebal.',
          'Bulu janggut bisa dicukur untuk membuat Meat Effigy (alat hidup kembali saat mati).',
          'Sistem Skill Tree Wilson terbaru memberikannya kemampuan Alchemy dan Torch buff yang sangat fleksibel.'
        ]
      },
      {
        heading: 'Wendy — Bersama Arwah Abigail (Ratu Pembersih Kerumunan)',
        description: 'Wendy memanggil saudari kembarnya Abigail melalui bunga sakti. Abigail memiliki serangan AoE (area of effect) yang menyapu kawanan laba-laba, lebah, dan kodok dalam hitungan detik.',
        proTip: 'Wendy kehilangan Sanity 25% lebih lambat di malam hari dan kegelapan dibanding karakter lain!'
      },
      {
        heading: 'Wigfrid — Valkyrie Perkasa (Tank Tempur & Regenerasi Otomatis)',
        description: 'Memulai petualangan dengan Battle Helm (helm 80% absorption yang luar biasa hemat) dan Battle Spear.',
        items: [
          'Memulihkan Health dan Sanity secara otomatis setiap kali melayangkan pukulan pada musuh.',
          'Kelemahan: Karnivora murni. Wigfrid menolak memakan sayuran, buah berry, atau jamur (hanya makan olahan daging).'
        ]
      },
      {
        heading: 'WX-78 — Robot Pemakan Roda Gigi',
        description: 'Dapat memakan Gears (roda gigi) untuk meningkatkan status maksimal hingga 400 Health, 200 Hunger, dan 300 Sanity! Kebal terhadap makanan basi, namun terluka saat tubuhnya terkena air hujan.'
      }
    ],
    recommendedItems: ['Battle Helm', 'Abigail\'s Flower', 'Razor', 'Gears']
  },
  {
    id: 'pemula-kesalahan-fatal',
    level: 'pemula',
    topic: 'eksplorasi',
    title: '10 Kesalahan Fatal Pemula yang Sering Mengakhiri Permainan',
    subtitle: 'Hindari jebakan umum yang sering membuat pemain baru mati sia-sia',
    estimatedDays: 'Pedoman Keselamatan',
    readTime: '4 menit baca',
    iconName: 'AlertTriangle',
    overview: 'Sebagian besar kematian di The Constant bukan karena nasib buruk, melainkan kebiasaan kecil yang merugikan. Mengoreksi 10 kesalahan ini akan melipatgandakan peluang kelangsungan hidupmu.',
    quickSummary: 'Jangan makan Monster Meat mentah, jangan bertarung tanpa helm/armor, jangan petik semua bunga hingga gundul, dan jangan diam di tempat saat anjing datang.',
    checklist: [
      { id: 'c30', label: 'Selalu kenakan armor sebelum memukul monster apa pun' },
      { id: 'c31', label: 'Olah Monster Meat di Crock Pot menjadi Meatballs atau berikan ke burung' },
      { id: 'c32', label: 'Bawa payung atau pakaian tahan air sebelum badai hujan tiba' }
    ],
    keyPoints: [
      {
        heading: 'Daftar 10 Larangan Mutlak Pemula',
        description: 'Hafalkan dan hindari daftar kesalahan fatal berikut:',
        items: [
          '1. Memakan Daging Monster Mentah: Mengurangi 20 Health dan 15 Sanity seketika! Selalu masak dengan 3 filler di Crock Pot menjadi Meatballs.',
          '2. Bertarung Tanpa Memakai Armor: Log Suit atau Football Helmet menyerap 80% kerusakan. Tanpa armor, 2-3 pukulan monster bisa menewaskanmu.',
          '3. Lupa Bawa Obor / Bahan Bakar: Selalu simpan minimal 1 tumpukan rumput dan ranting saat bertualang jauh.',
          '4. Memetik Bunga Berlebihan Hingga Gundul: Bunga menghasilkan lebah dan kupu-kupu yang kaya sayap penyembuh Health (+8 HP).',
          '5. Panik Saat Hound Attack Tiba: Jangan lari tanpa arah! Pakai armor dan dekati kawanan Beefalo atau koloni Babi.',
          '6. Membuat Api Unggun Terlalu Dekat Hutan: Api merambat cepat dan dapat melahap seluruh markas dan kebunmu.',
          '7. Membunuh Babi Manis: Babi bisa disuap dengan 1 potong daging agar menjadi penebang kayu dan pengawal setia!',
          '8. Mengabaikan Kebasahan (Wetness): Saat kehujanan, Sanity turun drastis dan senjata bisa tergelincir dari tangan.',
          '9. Menyerang Sarang Lebah Merah (Killer Bee): Serangan cepat beruntun membuat karakter mengalami stun lock.',
          '10. Menyerang Tallbird Tanpa Kiting: Pukulannya sangat keras. Terapkan pola 1-2 hit lalu mundur.'
        ]
      }
    ],
    recommendedItems: ['Football Helmet', 'Log Suit', 'Meatballs', 'Umbrella']
  },

  // =========================================================================
  // PANDUAN MENENGAH (HARI 36 - 100+)
  // =========================================================================
  {
    id: 'menengah-manajemen-musim',
    level: 'menengah',
    topic: 'musim',
    title: 'Manajemen 4 Musim: Spring, Summer, Autumn & Winter',
    subtitle: 'Strategi menghadapi cuaca ekstrem, hujan kodok, dan kebakaran spontan',
    estimatedDays: 'Hari 36 - 72',
    readTime: '6 menit baca',
    iconName: 'CalendarClock',
    overview: 'Setelah melewati musim dingin pertama, pemain tingkat menengah diuji oleh musim semi yang basah kuyup dan musim panas yang membakar seluruh isi daratan.',
    quickSummary: 'Pakai Eyebrella untuk 100% anti-air di Spring. Bangun Ice Flingomatic di Summer atau pindah ke gua bawah tanah untuk menghindari kebakaran spontan.',
    checklist: [
      { id: 'c33', label: 'Rakit Eyebrella sebelum Hari 36 (Spring)' },
      { id: 'c34', label: 'Siapkan puluhan perangkap untuk fenomena Hujan Kodok (Frog Rain)' },
      { id: 'c35', label: 'Bangun Ice Flingomatic dan Endothermic Fire Pit sebelum Hari 56 (Summer)' },
      { id: 'c36', label: 'Beri upeti secara rutin ke Antlion di Oasis Desert' }
    ],
    keyPoints: [
      {
        heading: '1. Musim Semi (Spring - Hari 36 - 55)',
        description: 'Musim semi ditandai hujan tanpa henti, tanah becek, petir menyambar, dan sarang lebah yang sangat agresif.',
        items: [
          'Eyebrella Wajib: Dibuat dari mata Deerclops, topi ini memberikan 100% perlindungan air (0% Wetness) dan kebal sambaran petir.',
          'Fenomena Hujan Kodok (Frog Rain): Katak berjatuhan dari langit secara massal. Jangan dilawan langsung! Pasang puluhan Trap kelinci di tanah, atau giring mereka ke arah Moose/Goose.',
          'Moose/Goose: Bos musim semi yang bersarang di dekat kolam. Habisi induknya, lalu berhati-hati pada anak-anaknya (Moslings) yang bisa berputar seperti tornado listrik saat induknya tewas.'
        ]
      },
      {
        heading: '2. Musim Panas (Summer - Hari 56 - 70)',
        description: 'Musim paling mematikan bagi struktur markas. Tanaman dan bangunan dapat terbakar secara spontan karena terik panas menyengat.',
        items: [
          'Ice Flingomatic: Mesin penyemprot es pemadam api otomatis. Beri bahan bakar dan nyalakan hanya di musim panas untuk mencakup area base.',
          'Endothermic Fire Pit (Api Dingin): Perapian biru yang menyerap panas tubuh agar karakter tidak mengalami Overheating.',
          'Upeti Antlion di Gurun Oasis: Datangi Antlion dan serahkan persembahan batu permata atau Thermal Stone beku agar ia tidak membuat lubang runtuh di markasmu.',
          'Strategi Gua (Caves Migration): Musim panas di permukaan sangat menyiksa. Pilihan paling cerdas adalah tinggal di gua bawah tanah selama Summer karena tidak ada bencana kebakaran spontan!'
        ]
      },
      {
        heading: '3. Musim Gugur Kedua (Autumn): Masa Keemasan & Bearger',
        description: 'Musim terbaik untuk memanen sumber daya besar-besaran sebelum kembali ke siklus dingin.',
        items: [
          'Bearger Datang di Autumn: Beruang raksasa yang rakus madu. Jangan bunuh langsung! Manfaatkan Bearger sebagai mesin penebang pohon otomatis dengan menggiringnya melintasi ratusan pohon hutan pinus lebat.'
        ]
      }
    ],
    recommendedItems: ['Eyebrella', 'Ice Flingomatic', 'Endothermic Fire Pit', 'Tooth Trap', 'Sewing Kit']
  },
  {
    id: 'menengah-pertempuran-kiting',
    level: 'menengah',
    topic: 'combat',
    title: 'Pertarungan Lanjutan, Senjata Mid-Game & Armor Stacking',
    subtitle: 'Seni kiting presisi, durabilitas senjata, dan kalkulasi damage mitigasi',
    estimatedDays: 'Hari 30 - 80',
    readTime: '5 menit baca',
    iconName: 'Sword',
    overview: 'Kiting adalah teknik dasar pertarungan di mana kamu melancarkan sejumlah pukulan aman pada musuh, lalu mundur tepat saat musuh mengayunkan serangan, lalu masuk kembali.',
    quickSummary: 'Tinggalkan tombak kayu, beralihlah ke Ham Bat segar (59 damage) dan Walking Cane (+25% speed). Tumpuk Football Helmet dengan Log Suit untuk keamanan ganda.',
    checklist: [
      { id: 'c37', label: 'Craft Ham Bat dari 1 Pig Skin, 2 Twigs, dan 2 Meat' },
      { id: 'c38', label: 'Kalahkan Walrus MacTusk di musim dingin untuk mendapatkan Walking Cane' },
      { id: 'c39', label: 'Kuasai pola kiting musuh umum (Hound: 2 hit, Pig: 4 hit, Tallbird: 1-2 hit)' }
    ],
    keyPoints: [
      {
        heading: '1. Pemilihan Senjata Mid-Game Terbaik',
        description: 'Tinggalkan Spear biasa, gunakan persenjataan berdaya hancur tinggi:',
        items: [
          'Ham Bat (Daging Kaki Babi): Memberikan 59 damage saat segar tanpa batas durabilitas pukulan (hanya berkurang kekuatannya seiring kebusukan makanan).',
          'Tentacle Spike: Senjata jatuhan dari monster tentacle di rawa (51 damage, 100 hit durabilitas).',
          'Walking Cane: Tongkat lari berbahan Walrus Tusk yang memberi bonus kecepatan lari +25% permanen. Alat wajib agar kiting terasa sangat mulus.'
        ]
      },
      {
        heading: '2. Memahami Mekanik Armor Stacking di DST',
        description: 'Di Don\'t Starve Together, memakai Football Helmet (80%) bersamaan dengan Log Suit (80%) tidak membuatmu kebal 96% seperti di Don\'t Starve solo. Absorpsi damage tetap 80%, namun durabilitas kedua armor akan terkuras bersamaan, membuatmu bertahan 2 kali lebih lama sebelum armor pecah!'
      },
      {
        heading: '3. Benteng Perangkap Serigala (Tooth Trap Grid)',
        description: 'Saat hari bertambah tua, gelombang serigala mencapai belasan ekor sekaligus:',
        items: [
          'Susun 30 - 50 Tooth Traps di area terbuka di luar markas.',
          'Saat serigala melolong, cukup berlari berputar di atas barisan perangkap tanpa perlu mengayunkan senjata sama sekali.'
        ]
      }
    ],
    recommendedItems: ['Ham Bat', 'Walking Cane', 'Football Helmet', 'Log Suit', 'Tooth Trap']
  },
  {
    id: 'menengah-eksplorasi-gua',
    level: 'menengah',
    topic: 'caves',
    title: 'Menembus Gua (The Caves): Lentera, Runtuhan Batu & Bunnymen',
    subtitle: 'Menjelajahi dunia bawah tanah, menambang Light Bulb, dan aliansi kelinci raksasa',
    estimatedDays: 'Hari 45 - 80',
    readTime: '6 menit baca',
    iconName: 'Sparkles',
    overview: 'Banyak pemain pemula takut turun ke gua bawah tanah karena kegelapan abadi dan gempa batu runtuh. Padahal gua menyimpan Light Bulbs untuk lentera portabel dan Bunnymen yang sangat berguna.',
    quickSummary: 'Buka Sinkhole, petik Light Bulbs untuk membuat Lantern dan Miner Hat. Jangan bawa daging saat mendekati Bunnymen, dan selalu bergerak saat gempa gua terjadi.',
    checklist: [
      { id: 'c40', label: 'Buka Plugged Sinkhole menggunakan beliung (Pickaxe)' },
      { id: 'c41', label: 'Petik puluhan Light Bulbs untuk membuat Lantern dan Miner Hat' },
      { id: 'c42', label: 'Pastikan inventori bersih dari segala jenis daging saat mendekati Bunnymen' },
      { id: 'c43', label: 'Kumpulkan Slurtle Slime dan batuan permata dari reruntuhan gempa' }
    ],
    keyPoints: [
      {
        heading: '1. Logistik Masuk Gua Pertama Kali',
        description: 'Hancurkan Plugged Sinkhole di permukaan untuk membuka jalan tangga ke kedalaman gua:',
        items: [
          'Lantern (Lentera): Dibuat dari 2 Light Bulbs, 3 Twigs, 2 Ropes. Lentera bisa diletakkan di tanah untuk memberi cahaya area tanpa memakan slot tangan!',
          'Miner Hat: Topi helm tambang bercahaya yang membebaskan kedua tangan untuk memegang senjata atau beliung.',
          'Bahan Bakar Lentera: Petik kembali Light Bulbs liar di bawah tanah untuk mengisi ulang daya baterai lentera.'
        ]
      },
      {
        heading: '2. Ekosistem Bunnymen (Kelinci Raksasa)',
        description: 'Bunnymen adalah makhluk kelinci raksasa yang cinta damai dan kuat, TETAPI sangat membenci daging.',
        warning: 'JANGAN PERNAH membawa daging mentah, daging masak, telur, atau ikan di inventori saat dekat Bunnymen! Mereka vegetarian radikal dan akan langsung mengeroyokmu hingga tewas. Simpan daging di dalam Chester!',
        items: [
          'Beri makan Bunnymen dengan wortel (Carrot) untuk menjadikannya prajurit pelindung setiamu.',
          'Bongkar rumah Bunnyman dengan palu dan bangun Bunny Hutch di permukaan dekat base untuk memanen daging dan wol secara otomatis.'
        ]
      },
      {
        heading: '3. Gempa Gua (Earthquake Hazard)',
        description: 'Saat layar bergetar dan debu berjatuhan, bebatuan dan permata jatuh dari langit-langit. Tetaplah bergerak konstan untuk menghindari bayangan batu yang jatuh menimpa kepalamu.'
      }
    ],
    recommendedItems: ['Lantern', 'Miner Hat', 'Carrot', 'Ham Bat', 'Football Helmet']
  },
  {
    id: 'menengah-pertanian-beefalo',
    level: 'menengah',
    topic: 'farming',
    title: 'Pertanian Modern (Sayur Raksasa) & Domestikasi Beefalo',
    subtitle: 'Panen sayuran raksasa tanpa batas dan miliki tunggangan perang berkekuatan tinggi',
    estimatedDays: 'Hari 40+',
    readTime: '6 menit baca',
    iconName: 'Wheat',
    overview: 'Sistem pertanian modern di Don\'t Starve Together memungkinkanmu memanen Giant Crops yang tidak pernah membusuk selama belum dipanen, sementara Beefalo jinak merupakan tunggangan tempur terhebat.',
    quickSummary: 'Bajak tanah 3x3, seimbangkan formula kompos/manure, dan ajak tanaman bicara. Untuk Beefalo, beri makan rumput tiap hari dan pasang Saddle untuk mobilitas dewa.',
    checklist: [
      { id: 'c44', label: 'Rakit Garden Rigamajig dan bajak petak tanah 3x3' },
      { id: 'c45', label: 'Seimbangkan nutrisi tanah dengan pupuk Kompos, Manure, dan Formula' },
      { id: 'c46', label: 'Beri makan Beefalo secara teratur hingga tingkat Obedience di atas 40%' },
      { id: 'c47', label: 'Pasang Saddle dan tunggangi Beefalo hingga mencapai status jinak penuh' }
    ],
    keyPoints: [
      {
        heading: '1. Rahasia Menumbuhkan Sayur Raksasa (Giant Crops)',
        description: 'Sayuran raksasa menghasilkan 2-3 buah sayur segar, 2-3 bibit ekstra, dan tidak pernah membusuk di tanah:',
        items: [
          'Garden Rigamajig: Bajak tanah pertanian menjadi kotak petak 3x3 yang rapi.',
          'Garden Hoe & Watering Can: Cangkul lubang tanam dan siram dengan air kolam secara berkala.',
          'Kombinasi Tanaman Pendamping: Tanam kombinasi yang saling mengisi nutrisi (misal: Tomaroot + Potato) agar unsur hara tanah tidak habis.',
          'Berbicara ke Tanaman: Ajak tanaman bicara setiap fase pertumbuhannya (bisa menggunakan One-man Band atau flute) agar tanaman merasa bahagia.'
        ]
      },
      {
        heading: '2. Domestikasi Beefalo (Tunggangan Terkuat)',
        description: 'Beefalo jinak adalah salah satu aset terbaik di permainan: menyerap 100% kerusakan serangan musuh yang mengarah ke pemain, berlari sangat cepat, dan memiliki damage pukulan tinggi.',
        items: [
          'Beri makan 10-15 rumput atau ranting setiap hari untuk menjaga Obedience (>40%).',
          'Pasang Saddle (pelana) dan tunggangi secara rutin mengelilingi peta.',
          'Pasang Salt Lick di markas agar status domestikasi tidak merosot saat kamu tinggal bertualang.',
          'Pilih Tipe Beefalo: Rider (+kecepatan lari kilat) atau Ornery (+50 damage serangan dasar).'
        ]
      }
    ],
    recommendedItems: ['Garden Rigamajig', 'Watering Can', 'Saddle', 'Salt Lick', 'Beefalo Bell']
  },
  {
    id: 'menengah-ekosistem-rawa',
    level: 'menengah',
    topic: 'eksplorasi',
    title: 'Menjelajah Biome Rawa (Swamp): Perang Tentacle vs Merm & Pan Flute',
    subtitle: 'Mengumpulkan Reeds, memanen senjata gratis di zona perang, dan membuat instrumen tidur',
    estimatedDays: 'Hari 20 - 50',
    readTime: '4 menit baca',
    iconName: 'Bug',
    overview: 'Biome Rawa (The Marsh / Swamp) adalah salah satu wilayah paling berbahaya di The Constant karena tentacle tersembunyi di bawah lumpur. Namun rawa adalah sumber Reeds untuk membuat Pan Flute penidur bos.',
    quickSummary: 'Berlari terus tanpa berhenti di atas gelembung lumpur, panen Reeds di pinggiran, dan kumpulkan Tentacle Spikes gratis dari hasil perang antara Merm dan Tentacle.',
    checklist: [
      { id: 'c48', label: 'Amati gelembung lumpur yang mendidih untuk mendeteksi tentacle tersembunyi' },
      { id: 'c49', label: 'Kumpulkan minimal 10-15 Cut Reeds untuk bahan Pan Flute dan Blow Darts' },
      { id: 'c50', label: 'Craft Pan Flute di dekat Science Machine / Alchemy Engine' }
    ],
    keyPoints: [
      {
        heading: '1. Bahaya Tentacle Bawah Tanah',
        description: 'Tentacle tidak terlihat sampai kamu menginjak areanya. Tandanya adalah gelembung lumpur hitam yang mendidih di tanah.',
        warning: 'JANGAN PERNAH berhenti melamun di biome rawa! Jika tentacle menyembul keluar, ia memukul dua kali berturut-turut (34 damage per cambukan).'
      },
      {
        heading: '2. Panen Jarahan Gratis dari Perang Merm vs Tentacle',
        description: 'Manusia ikan (Merm) dan Tentacle memiliki permusuhan alami. Pancing Merm ke arah tentacle, lalu saksikan mereka saling membantai. Kamu cukup memungut:',
        items: [
          'Tentacle Spike (senjata 51 damage)',
          'Tentacle Spots (bahan jas hujan Rain Coat)',
          'Fish & Frog Legs segar dalam jumlah melimpah'
        ]
      },
      {
        heading: '3. Pembuatan Pan Flute (Seruling Penidur Raksasa)',
        description: 'Dibuat dari 5 Cut Reeds, 1 Mandrake, dan 1 Rope. Memainkan seruling ini akan menidurkan seluruh monster dan bos di satu layar monitor seketika. Alat wajib untuk membatalkan Enrage Dragonfly!'
      }
    ],
    recommendedItems: ['Walking Cane', 'Football Helmet', 'Cut Reeds', 'Pan Flute']
  },
  {
    id: 'menengah-otomasi-peternakan',
    level: 'menengah',
    topic: 'farming',
    title: 'Peternakan & Pengawetan: Birdcage Meta, Daging Kering, & Bundling Wrap',
    subtitle: 'Solusi makanan tanpa batas dan mencegah pembusukan bahan pangan',
    estimatedDays: 'Hari 30 - 60',
    readTime: '5 menit baca',
    iconName: 'UtensilsCrossed',
    overview: 'Menguasai siklus makanan di DST berarti kamu tidak akan pernah kelaparan lagi. Kuncinya terletak pada sangkar burung (Birdcage), deretan rak pengering daging (Drying Racks), dan kulkas Ice Box.',
    quickSummary: 'Bangun Birdcage untuk mengubah daging monster basi menjadi telur segar, keringkan daging di Drying Rack menjadi Jerky tahan 20 hari, dan gunakan Bundling Wrap.',
    checklist: [
      { id: 'c51', label: 'Tangkap burung menggunakan Bird Trap dan kurung di dalam Birdcage' },
      { id: 'c52', label: 'Beri makan daging monster matang ke burung untuk mendapatkan telur segar' },
      { id: 'c53', label: 'Bangun minimal 6-10 Drying Racks untuk produksi Jerky' }
    ],
    keyPoints: [
      {
        heading: '1. Birdcage Meta (Mesin Daur Ulang Pangan Ajaib)',
        description: 'Birdcage adalah struktur paling sakti untuk mengolah makanan basi di markas:',
        items: [
          'Beri makan burung dengan daging matang (termasuk Cooked Monster Meat) -> Burung akan bertelur menghasilkan Egg segar!',
          'Beri makan sayuran mentah (misal Dragonfruit) -> Burung menjatuhkan bibit tanaman spesifik untuk budidaya bibit unggul.',
          'Telur bisa dimasak di Crock Pot bersama daging untuk membuat hidangan dewa penyembuh: Pierogi (+40 HP) dan Bacon and Eggs (+75 Hunger).'
        ]
      },
      {
        heading: '2. Drying Rack & Keajaiban Jerky',
        description: 'Gantung daging besar mentah di rak pengering kayu selama 2 hari:',
        items: [
          'Menghasilkan Jerky yang bertahan hingga 20 hari di inventori.',
          'Khasiat 1 potong Jerky: +30 Health, +25 Hunger, dan +15 Sanity sekaligus!'
        ]
      },
      {
        heading: '3. Bundling Wrap (Pengawetan Abadi)',
        description: 'Hadiah mengalahkan bos Bee Queen. Membungkus 4 tumpukan item atau makanan di dalam bungkus lilin lebah, di mana durabilitas dan kesegaran makanan TIDAK AKAN PERNAH berkurang sama sekali selama belum dibuka!'
      }
    ],
    recommendedItems: ['Birdcage', 'Bird Trap', 'Drying Rack', 'Ice Box', 'Bundling Wrap']
  },
  {
    id: 'menengah-karakter-lanjutan',
    level: 'menengah',
    topic: 'karakter',
    title: 'Panduan Karakter Spesialis Co-op (Maxwell, Wickerbottom, Wanda, Woodie)',
    subtitle: 'Memaksimalkan sinergi tim dan kemampuan unik survivor tingkat lanjut',
    estimatedDays: 'Hari 40+',
    readTime: '6 menit baca',
    iconName: 'Crown',
    overview: 'Ketika bermain bersama teman dalam server multiplayer, pemilihan karakter spesialis dapat melipatgandakan kecepatan ekspansi markas hingga sepuluh kali lipat.',
    quickSummary: 'Maxwell master panen otomatis, Wickerbottom instan panen kebun dan buku petir, Wanda ahli time travel dan jam tempur, Woodie raja penebang pohon.',
    checklist: [
      { id: 'c54', label: 'Pelajari mekanik Shadow Puppets Maxwell untuk menambang dan menebang' },
      { id: 'c55', label: 'Gunakan buku Applied Silviculture Wickerbottom untuk menumbuhkan pohon instan' },
      { id: 'c56', label: 'Kelola jam usia Wanda agar tetap berada di ambang usia tua dengan damage maksimal' }
    ],
    keyPoints: [
      {
        heading: 'Maxwell — Raja Otomasi Bayangan (The Puppeteer)',
        description: 'Menggunakan Codex Umbra untuk memanggil klon bayangan pekerja dan petarung:',
        items: [
          'Shadow Miner & Logger: Menambang seluruh quarry dan menebang ratusan pohon dalam hitungan menit secara otomatis.',
          'Shadow Sneak & Trap: Mengunci gerombolan monster di tempat.',
          'Sanity Regen Alami: Memulihkan +20 Sanity per menit secara konstan.'
        ]
      },
      {
        heading: 'Wickerbottom — Pustakawan Sihir',
        description: 'Dapat menulis buku-buku sihir berkekuatan dahsyat:',
        items: [
          'Applied Horticulture: Menumbuhkan tanaman kebun dan semak berry secara instan seketika.',
          'Birds of the World & Sleepytime Stories: Memanggil puluhan burung lalu menidurkannya untuk panen bulu dan daging.',
          'The End is Nigh: Menembakkan sambaran petir beruntun ke tanah.'
        ]
      },
      {
        heading: 'Wanda — Sang Pengendali Waktu',
        description: 'Wanda tidak memiliki HP biasa; status hidupnya diukur dari usia jam (Aging Watch). Pada usia tua (65-79 tahun), senjata Alarming Clock miliknya melancarkan hingga 142 damage per pukulan dari jarak aman!'
      },
      {
        heading: 'Woodie — Manusia Rusa, Berang-berang & Angsa',
        description: 'Dapat bertransformasi menjadi Werebeaver (penebang tercepat), Weremoose (mesin tempur bertanduk tahan banting), atau Weregoose (berlari di atas air laut dan memetakan peta kilat).'
      }
    ],
    recommendedItems: ['Codex Umbra', 'Applied Horticulture', 'Alarming Clock', 'Lucy the Axe']
  },
  {
    id: 'menengah-sistem-listrik-winona',
    level: 'menengah',
    topic: 'combat',
    title: 'Sistem Kelistrikan, Generator, & Mesin Katapel Winona',
    subtitle: 'Otomasi pertahanan otomatis markas menggunakan teknologi baterai dan katapel',
    estimatedDays: 'Hari 50 - 90',
    readTime: '5 menit baca',
    iconName: 'Zap',
    overview: 'Winona adalah insinyur jenius yang membawa revolusi industri ke The Constant. Bangunan katapel dan generator miliknya mampu membantai serigala dan bos tanpa kontak fisik langsung.',
    quickSummary: 'Bangun Generator bertenaga Nitre/Gems, pasang barisan Winona\'s Catapult di sekitar arena serigala atau sarang laba-laba untuk pertahanan otomatis 100%.',
    checklist: [
      { id: 'c57', label: 'Craft Winona\'s Trusty Tape untuk memperbaiki pakaian dan kapal' },
      { id: 'c58', label: 'Bangun Winona\'s Generator dan isi dengan Nitre atau batuan permata' },
      { id: 'c59', label: 'Rakit minimal 4-8 Winona\'s Catapults mengelilingi titik spawn monster' }
    ],
    keyPoints: [
      {
        heading: '1. Winona\'s Catapult (Meriam Pelontar Batu Otomatis)',
        description: 'Struktur pertahanan otomatis yang menembakkan bongkahan batu besar ke arah musuh terdekat dengan damage area (AoE) sebesar 42.5 damage per lontaran batu.',
        items: [
          'Jarak tembak sangat jauh (mencakup lebih dari 1 layar monitor).',
          'Sangat efektif ditempatkan di luar markas untuk menyapu bersih gelombang Hound Attack secara otomatis.'
        ]
      },
      {
        heading: '2. Manajemen Baterai Generator',
        description: 'Katapel membutuhkan suplai daya dari generator terdekat:',
        items: [
          'Winona\'s Generator: Menggunakan Nitre dan Kayu sebagai bahan bakar dasar.',
          'G.E.M.erator: Generator canggih bertenaga batu permata (Gems) yang menyala selama berminggu-minggu tanpa perlu sering diisi ulang.'
        ]
      },
      {
        heading: '3. Berburu Volt Goat & Morning Star',
        description: 'Buru kambing gurun Volt Goat untuk mendapatkan Volt Goat Horn. Tanduk ini adalah bahan pembuatan senjata pemukul listrik Morning Star (yang damage-nya melonjak hingga 72.25 jika musuh basah kuyup).'
      }
    ],
    recommendedItems: ['Winona\'s Catapult', 'Winona\'s Generator', 'Nitre', 'Morning Star', 'Volt Goat Horn']
  },

  // =========================================================================
  // PANDUAN AHLI (HARI 100+ & ENDGAME)
  // =========================================================================
  {
    id: 'ahli-reruntuhan-kuno',
    level: 'ahli',
    topic: 'caves',
    title: 'Penaklukan Ruins (Ruins Rushing) & Ancient Technology',
    subtitle: 'Membuka peradaban purba, Thulecite gear, dan tongkat sihir legendaris',
    estimatedDays: 'Hari 30 - 70+',
    readTime: '7 menit baca',
    iconName: 'Skull',
    overview: 'Ruins adalah biome terdalam di bawah tanah. Tempat ini sangat mematikan karena siklus kegilaan Nightmare, namun menyimpan stasiun purba yang memproduksi perlengkapan tempur terkuat di game.',
    quickSummary: 'Pantau siklus Nightmare, temukan Ancient Pseudoscience Station, craft Thulecite Crown, Magiluminescence, dan Star Caller\'s Staff.',
    checklist: [
      { id: 'c60', label: 'Bawa persediaan makanan penyembuh Sanity melimpah (Jerky / Pierogi)' },
      { id: 'c61', label: 'Ketahui 4 fase Siklus Nightmare (Calm, Warning, Wild, Dawn)' },
      { id: 'c62', label: 'Temukan stasiun purba Ancient Pseudoscience Station yang utuh' },
      { id: 'c63', label: 'Craft Magiluminescence amulet dan Thulecite Crown' },
      { id: 'c64', label: 'Kalahkan Ancient Guardian di ujung labirin' }
    ],
    keyPoints: [
      {
        heading: '1. Memahami Siklus Nightmare Gua (Nightmare Cycle)',
        description: 'Di Ruins, energi Nightmare berfluktuasi melalui 4 fase berbeda yang memengaruhi seluruh biome:',
        items: [
          'Calm Phase: Lampu bayangan padam, kondisi tenang dan aman untuk menambang.',
          'Warning Phase: Retakan tanah berpendar kemerahan dan mendesis kencang.',
          'Nightmare / Wild Phase: Kegilaan total! Puluhan Shadow Creatures muncul dari tanah dan dinding secara massal. Jangan bertarung di tempat sempit, tetaplah bergerak!',
          'Dawn Phase: Energi mereda, monster bayangan mati sendiri dan menjatuhkan Nightmare Fuel melimpah.'
        ]
      },
      {
        heading: '2. Crafting di Ancient Pseudoscience Station',
        description: 'Dekati altar purba batu hitam (atau perbaiki menggunakan pecahan Thulecite) untuk membuat perlengkapan dewa:',
        items: [
          'Magiluminescence: Kalung jimat yang memberikan penerangan konstan, +20% kecepatan lari, dan regen Sanity.',
          'Thulecite Crown: Mahkota kepala dengan 90% absorpsi armor dan 33% peluang memunculkan perisai kebal energi pelindung (forcefield).',
          'Thulecite Suit: Armor tubuh 90% dengan durabilitas luar biasa tinggi.',
          'Star Caller\'s Staff: Tongkat pemanggil bintang kerdil yang memancarkan panas dan cahaya selama berminggu-minggu.',
          'Deconstruction Staff (Tongkat Hijau): Mengurai item buatan menjadi bahan dasarnya kembali 100% (alat duplikasi permata tak terbatas!).',
          'Construction Amulet: Memangkas biaya bahan crafting apa pun hingga separuh!'
        ]
      },
      {
        heading: '3. Bos Ancient Guardian (Banteng Purba Labirin)',
        description: 'Banteng raksasa bercula tajam penjaga labirin. Hindari tandukan lurusnya dengan bersembunyi di balik pilar batu atau gunakan kiting 2-3 hit. Menjatuhkan Guardian\'s Horn untuk membuat tongkat cuaca Weather Pain.'
      }
    ],
    recommendedItems: ['Magiluminescence', 'Thulecite Crown', 'Star Caller\'s Staff', 'Weather Pain', 'Pan Flute']
  },
  {
    id: 'ahli-raid-bosses',
    level: 'ahli',
    topic: 'combat',
    title: 'Membantai 3 Raid Boss Utama: Dragonfly, Bee Queen & Klaus',
    subtitle: 'Strategi taktis pembangunan arena, persiapan logistik, dan kiting tingkat tinggi',
    estimatedDays: 'Hari 60 - 100+',
    readTime: '7 menit baca',
    iconName: 'Flame',
    overview: 'Raid Boss di DST memiliki puluhan ribu poin Health dan serangan kombo mematikan. Menghadapi mereka membutuhkan arena khusus dan instrumen pengendali crowd.',
    quickSummary: 'Bungkus kolam larva Dragonfly dengan dinding batu dan tiup Pan Flute saat ia mengamuk. Gunakan Beekeeper Hat melawan Bee Queen, dan jangan bunuh rusa es/api Klaus.',
    checklist: [
      { id: 'c65', label: 'Bangun dinding Stone Wall di sekeliling kolam larva Dragonfly' },
      { id: 'c66', label: 'Bawa Pan Flute untuk menidurkan Dragonfly saat fase Enrage' },
      { id: 'c67', label: 'Siapkan Beekeeper Hat dan senjata area untuk melawan Bee Queen' },
      { id: 'c68', label: 'Panggil Klaus menggunakan Deer Antler pada Klaus\' Sack di musim dingin' }
    ],
    keyPoints: [
      {
        heading: '1. Dragonfly (27.500 HP - Gurun Magma)',
        description: 'Bos naga lalat penguasa kolam magma gurun:',
        items: [
          'Bangun Dinding Batu (Stone Wall Arena): Tutup jalur keluar kolam larva agar anak-anak larva (Lavae) tidak bisa mencapai arena duelmu.',
          'Pan Flute: Begitu Dragonfly membara dan memasuki Enrage Mode, segera tiup Pan Flute untuk menidurkannya dan meredakan amukannya.',
          'Gunakan Marble Suit / Scaled Armor dan Ham Bat segar.',
          'Hadiah: Scaled Furnace (penghangat base abadi tanpa butuh kayu bakar), Dragon Scales, dan permata berharga.'
        ]
      },
      {
        heading: '2. Bee Queen (22.500 HP - Sarang Madu Raksasa)',
        description: 'Ratu lebah yang memanggil gerombolan prajurit lebah pembius (Grumble Bees):',
        items: [
          'Beekeeper Hat: Wajib dipakai untuk mereduksi sengatan lebah hingga 80%.',
          'Senjata Pembersih Area: Gunakan Weather Pain atau karakter Wendy (Abigail) untuk melenyapkan kawanan Grumble Bees dalam sekejap.',
          'Hadiah Terpenting: Bundling Wrap Blueprint — cetak biru pembungkus makanan agar tidak pernah basi selamanya.'
        ]
      },
      {
        heading: '3. Klaus (10.000 HP + Fase Kebangkitan Dada Terbuka)',
        description: 'Bos bertanduk yang dipanggil di musim dingin menggunakan Deer Antler pada karung Klaus\' Sack:',
        items: [
          'JANGAN BUNUH KEDUA RUSA (Magma & Ice Deer)! Jika kedua rusa mati, Klaus akan mengamuk liar dan serangannya melipatgandakan damage gila-gilaan. Cukup giring Klaus menjauh dari rusanya.',
          'Klaus memiliki 2 nyawa: saat bangkit dari kematian fase 1, dadanya terbuka dan melancarkan gigitan melompat yang mematikan.',
          'Hadiah: Peluang 10% mendapatkan Krampus Sack (tas 14 slot terbaik tanpa penalti gerak).'
        ]
      }
    ],
    recommendedItems: ['Pan Flute', 'Beekeeper Hat', 'Marble Suit', 'Weather Pain', 'Pierogi']
  },
  {
    id: 'ahli-ancient-fuelweaver-celestial',
    level: 'ahli',
    topic: 'endgame',
    title: 'Puncak Pertarungan: Ancient Fuelweaver vs Celestial Champion',
    subtitle: 'Pertarungan kosmik antara energi Bayangan Gelap (Shadow) dan Cahaya Bulan (Lunar)',
    estimatedDays: 'Master Endgame',
    readTime: '8 menit baca',
    iconName: 'Crown',
    overview: 'Dua bos puncak penutup alur narasi Don\'t Starve Together. Menaklukkan kedua entitas ini membutuhkan koordinasi gear tingkat dewa dan penguasaan mekanik permainan secara utuh.',
    quickSummary: 'Gunakan Weather Pain untuk membobol perisai Fuelweaver di Atrium. Untuk Celestial Champion di darat, taklukkan 3 fase wujud perubahannya.',
    checklist: [
      { id: 'c69', label: 'Bawa Shadow Atrium dan 8 Fossil Fragments ke The Atrium bawah tanah' },
      { id: 'c70', label: 'Gunakan Weather Pain untuk menghancurkan Unseen Shield milik Fuelweaver' },
      { id: 'c71', label: 'Rakit ketiga pecahan Celestial Altar di Pulau Bulan' },
      { id: 'c72', label: 'Kalahkan 3 fase Celestial Champion untuk memicu era Rifts' }
    ],
    keyPoints: [
      {
        heading: '1. Ancient Fuelweaver (16.000 HP - The Atrium Bawah Tanah)',
        description: 'Raksasa kerangka purba yang memanipulasi sangkar tulang dan monster bayangan:',
        items: [
          'Weather Pain: Wajib dibawa untuk merobek perisai kebal (Unseen Shield) miliknya.',
          'Nightmare Amulet: Kenakan jimat ini untuk sengaja menjatuhkan Sanity seketika agar kamu bisa memukul monster tangan bayangan (Woven Shadows) sebelum mereka menyembuhkan darah bos.',
          'Lazy Explorer: Tongkat teleportasi cepat untuk meloloskan diri dari kurungan sangkar tulang (Bone Cage).'
        ]
      },
      {
        heading: '2. Pulau Bulan (Lunar Island) & Sistem Enlightenment',
        description: 'Pulau kosmik terasing di lautan yang membalikkan hukum alam The Constant:',
        items: [
          'Sanity berubah menjadi Enlightenment (meteran kuning bercahaya). Menjadi waras justru berbahaya, sementara kehilangan kewarasan membuatmu tenang.',
          'Tambang Lunar Glass Shards, Moon Shrooms, dan kumpulkan 3 bagian Celestial Altar.',
          'Rakit Altar di celah retakan batu untuk membuka teknologi Celestial tingkat tinggi.'
        ]
      },
      {
        heading: '3. Celestial Champion (Tiga Fase Pertempuran Kosmik)',
        description: 'Entitas murni utusan bulan yang turun saat badai Celestial dipicu:',
        items: [
          'Fase 1 (Rolling Boulder): Hindari putaran tubuhnya yang menggelinding cepat.',
          'Fase 2 (Laser & Perisai Cahaya): Hindari tembakan sinar laser orbit dan pantulan perisai radiasi.',
          'Fase 3 (Entitas Cahaya Murni): Bergerak cepat menghindari hujan meteor kosmik sambil menyerang inti tubuhnya.'
        ]
      }
    ],
    recommendedItems: ['Weather Pain', 'Nightmare Amulet', 'Lazy Explorer', 'Thulecite Armor', 'Pierogi']
  },
  {
    id: 'ahli-sailing-ocean',
    level: 'ahli',
    topic: 'eksplorasi',
    title: 'Pelayaran Samudra (Sailing), Pearl\'s Island, Crab King & Malbatross',
    subtitle: 'Menaklukkan ombak samudra luas, menambang garam laut, dan pertarungan di atas dek kapal',
    estimatedDays: 'Eksplorasi Laut',
    readTime: '6 menit baca',
    iconName: 'Anchor',
    overview: 'Lautan luas DST menyimpan kepulauan terpencil, karang garam (Salt Formations), pulau kepiting Pearl si pertapa, dan monster penguasa perairan dalam.',
    quickSummary: 'Rakit Boat Kit dengan Mast, Steering Wheel, dan Anchor. Selalu bawa Boat Patch untuk tambal bocor, kunjungi Pearl untuk quest mutiara, dan hadapi Crab King.',
    checklist: [
      { id: 'c73', label: 'Buka resep pelayaran di Think Tank darat dan buat Boat Kit' },
      { id: 'c74', label: 'Pasang Steering Wheel, Mast (tiang layar), dan Anchor (jangkar)' },
      { id: 'c75', label: 'Bawa selalu 10 Boat Patches dan Trusty Tape untuk menambal kebocoran' },
      { id: 'c76', label: 'Selesaikan permintaan bantuan Pearl di hermit island untuk mendapatkan Pearl\'s Pearl' }
    ],
    keyPoints: [
      {
        heading: '1. Konstruksi Kapal Laut yang Tangguh',
        description: 'Dekati air laut dalam dan rakit armada kapal menggunakan komponen berikut:',
        items: [
          'Boat Kit: Meluncurkan dek kayu bundar ke atas air laut.',
          'Mast (Tiang Layar) & Steering Wheel (Kemudi): Memberi daya dorong angin dan kendali manuver belok.',
          'Anchor (Jangkar): Hentikan kapal seketika agar dek tidak menabrak karang tajam.',
          'Boat Patch: Selalu siapkan di saku untuk menambal lubang kebocoran air darurat!'
        ]
      },
      {
        heading: '2. Misi Pearl si Pertapa Kepiting (Hermit Island Quest)',
        description: 'Kunjungi pulau terpencil Pearl si kepiting tua. Bantu dia membersihkan sampah laut, memberi bunga payung, dan memperbaiki rumahnya hingga level persahabatan maksimal. Pearl akan menghadiahkan Pearl\'s Pearl yang wajib dipasang pada takhta Crab King.'
      },
      {
        heading: '3. Malbatross & Crab King',
        description: 'Pertarungan di atas air memiliki resiko tenggelam seketika jika kapal hancur:',
        items: [
          'Malbatross: Burung laut raksasa pembuat ombak pasang. Hindari gelombangnya dan serang saat ia mendarat di air.',
          'Crab King: Menggunakan cakar capit dan perisai pembekuan. Pasang mutiara Pearl untuk memicu wujud pertarungan sejatinya.'
        ]
      }
    ],
    recommendedItems: ['Boat Patch', 'Steering Wheel', 'Mast', 'Anchor', 'Trusty Tape']
  },
  {
    id: 'ahli-skill-tree-update',
    level: 'ahli',
    topic: 'karakter',
    title: 'Sistem Skill Tree & Insight Points Terbaru (Lunar vs Shadow Affinity)',
    subtitle: 'Panduan alokasi poin keahlian survivor dan pembukaan cabang kekuatan mistis',
    estimatedDays: 'Update DST Terkini',
    readTime: '6 menit baca',
    iconName: 'Zap',
    overview: 'Klei Entertainment menghadirkan sistem Skill Tree yang mengubah drastis gaya bermain survivor. Karakter kini memiliki pohon keahlian permanen berbasis Insight Points yang didapat dari lamanya bertahan hidup.',
    quickSummary: 'Kumpulkan Insight Points dengan bertahan hidup hingga 160 hari. Pilih alokasi cabang spesialisasi dan tentukan afiliasi akhir: Lunar Alignment atau Shadow Alignment!',
    checklist: [
      { id: 'c77', label: 'Kumpulkan Insight Points melalui akumulasi hari bertahan hidup' },
      { id: 'c78', label: 'Buka cabang keahlian utilitarian (Torch buff, Crafting efficiency)' },
      { id: 'c79', label: 'Tentukan pilihan akhir: Afiliasi Cahaya Bulan (Lunar) atau Bayangan (Shadow)' }
    ],
    keyPoints: [
      {
        heading: '1. Cara Kerja Insight Points',
        description: 'Setiap karakter mendapatkan hingga 15 Insight Points seiring berjalannya waktu permainan (1 poin setiap beberapa hari bertahan hidup). Poin ini tersimpan secara permanen pada profil akunmu di semua server!',
        proTip: 'Kamu bisa mereset alokasi Skill Tree kapan saja di portal spawn tanpa penalti.'
      },
      {
        heading: '2. Sorotan Skill Tree Karakter Populer',
        description: 'Pohon keahlian mengubah kemampuan inti karakter:',
        items: [
          'Wilson: Mendapatkan kemampuan Transmutasi Mineral (mengubah batu biasa menjadi permata atau emas), serta Torch yang menyala lebih terang dan melempar bola api.',
          'Woodie: Mengurangi penalti bentuk kutukan dan dapat mengendalikan wujud transformasi sesuka hati.',
          'Wigfrid: Membuka lagu-lagu tempur baru yang menyembuhkan darah kawan satu tim dan memperkuat pertahanan.',
          'Wormwood: Menumbuhkan duri beracun dan memulihkan diri dengan fotosintesis.'
        ]
      },
      {
        heading: '3. Pilihan Cabang Terakhir: Lunar vs Shadow Alignment',
        description: 'Di ujung Skill Tree, setiap survivor harus memilih salah satu kubu kosmik:',
        items: [
          'Lunar Alignment: Memberikan bonus damage masif terhadap monster bayangan dan perlindungan dari kegelapan.',
          'Shadow Alignment: Memberikan bonus damage terhadap monster bulan dan efisiensi sihir Nightmare.'
        ]
      }
    ],
    recommendedItems: ['Insight Points', 'Transmutation Catalyst', 'Battle Songs']
  },
  {
    id: 'ahli-rifts-void',
    level: 'ahli',
    topic: 'endgame',
    title: 'Era Keretakan Dimensi: Lunar Rift vs Shadow Rift & Void Equipment',
    subtitle: 'Musuh baru, invasi Deadly Brightshade, Dreadstone Armor, dan set perlengkapan Void',
    estimatedDays: 'Post-Champion Content',
    readTime: '7 menit baca',
    iconName: 'Moon',
    overview: 'Setelah mengalahkan Celestial Champion atau Ancient Fuelweaver, segel dunia The Constant retak. Keretakan dimensi (Rifts) terbuka di permukaan dan di gua bawah tanah, memicu invasi monster purba berkekuatan dahsyat.',
    quickSummary: 'Kalahkan bos besar untuk membuka Rifts. Hadapi tanaman parasit Brightshade, buru Scrappy Werepig, dan rakit perlengkapan Void serta Dreadstone Armor berkemampuan regenerasi mandiri.',
    checklist: [
      { id: 'c80', label: 'Buka Lunar Rift di permukaan dengan menaklukkan Celestial Champion' },
      { id: 'c81', label: 'Buka Shadow Rift di gua bawah tanah dengan menaklukkan Ancient Fuelweaver' },
      { id: 'c82', label: 'Basmi Deadly Brightshades yang menyerang kebun markas' },
      { id: 'c83', label: 'Craft Dreadstone Armor yang mampu memperbaiki durabilitasnya sendiri' }
    ],
    keyPoints: [
      {
        heading: '1. Fenomena Keretakan Dimensi (The Rifts)',
        description: 'Keretakan menghasilkan atmosfir berenergi pekat di mana monster biasa bermutasi menjadi versi Void:',
        items: [
          'Lunar Rift (Permukaan): Memunculkan Brightshade parasitis yang menginfeksi tanaman kebun dan pepohonan, serta laba-laba kristal bercahaya.',
          'Shadow Rift (Bawah Tanah): Memunculkan monster bayangan pekat yang kebal terhadap senjata fisik biasa.'
        ]
      },
      {
        heading: '2. Dreadstone Armor (Armor Terhebat dengan Self-Repair)',
        description: 'Dibuat dari batuan Dreadstone yang didapat dari mengalahkan Scrappy Werepig di Junk Heap:',
        items: [
          'Dreadstone Helm & Armor menyerap 90% kerusakan fisik.',
          'Keunggulan Unik: Memperbaiki durabilitasnya sendiri secara otomatis selama kamu berada di kondisi Sanity rendah!'
        ]
      },
      {
        heading: '3. Perlengkapan Void (Void Robe & Void Cowl)',
        description: 'Set pakaian endgame berbasis energi kosmik yang memberikan kekebalan terhadap efek status negatif, meningkatkan damage serangan planar (Planar Damage), dan memungkinkanmu menembus batasan stat normal.'
      }
    ],
    recommendedItems: ['Dreadstone Helm', 'Dreadstone Armor', 'Void Robe', 'Brightshade Sword']
  },
  {
    id: 'ahli-megabase-architecture',
    level: 'ahli',
    topic: 'eksplorasi',
    title: 'Arsitektur Megabase: Tata Letak Geometris, Turf, & Pertahanan Otomatis',
    subtitle: 'Membangun kerajaan abadi yang simetris, bebas kebakaran, dan berestetika tinggi',
    estimatedDays: 'Hari 100 - 1000+',
    readTime: '7 menit baca',
    iconName: 'Home',
    overview: 'Bagi pemain veteran, Don\'t Starve Together bertransformasi dari sekadar bertahan hidup menjadi seni arsitektur megabase. Mengatur tata letak berulang secara geometris menjamin efisiensi alur kerja dan keamanan jangka panjang.',
    quickSummary: 'Terapkan Geometrical Placement grid, ganti lantai dengan Cobblestone untuk lari cepat, pasang Ice Flingomatic saling bertumpuk tanpa celah, dan buat farm otomatis.',
    checklist: [
      { id: 'c84', label: 'Gunakan lantai Cobblestone untuk jalur jalan utama di seluruh megabase' },
      { id: 'c85', label: 'Ukur jangkauan Ice Flingomatic agar menutupi 100% bangunan kayu' },
      { id: 'c86', label: 'Bangun peternakan Lureplant untuk tempat pembuangan sampah otomatis' },
      { id: 'c87', label: 'Pasang Scaled Furnace di tengah perkemahan sebagai pemanas tanpa bahan bakar' }
    ],
    keyPoints: [
      {
        heading: '1. Prinsip Grid Geometris & Penataan Lantai (Turf)',
        description: 'Gunakan pola kisi-kisi ubin (Turf Grid):',
        items: [
          'Cobblestones: Pasang di koridor jalan utama antar fasilitas markas untuk bonus kecepatan lari +25%.',
          'Carved Stone / Carpeted Turf: Mempercantik area perapian, ruang tamu, dan dapur markas.',
          'Pencegahan Lureplant: Ubin buatan manusia (seperti Wooden Flooring atau Cobblestone) mencegah tanaman liar pemakan daging (Eyeplants) tumbuh sembarangan di dalam base.'
        ]
      },
      {
        heading: '2. Cakupan Pemadam Es Lingkaran Flingomatic',
        description: 'Di musim panas, satu titik api yang luput dari pemadam dapat menghancurkan puluhan jam kerja keras. Buat formasi perapian dan peti di dalam lingkaran jangkauan biru es Ice Flingomatic secara presisi.'
      },
      {
        heading: '3. Otomasi Peternakan & Pengolah Sampah',
        description: 'Rancang peternakan berskala industri:',
        items: [
          'Pig & Bunnymen Village Grid: Dipisahkan dinding batu dengan umpan daging busuk di tengah untuk memanen daging dan wol otomatis.',
          'Scaled Furnace Centerpiece: Dua Scaled Furnace berdampingan memancarkan panas konstan tanpa perlu kayu bakar selamanya di musim dingin.'
        ]
      }
    ],
    recommendedItems: ['Scaled Furnace', 'Cobblestones', 'Ice Flingomatic', 'Pitchfork', 'Decorative Turfs']
  }
];
