import { KitingEnemy } from '../types';

export const KITING_DATA: KitingEnemy[] = [
  {
    id: 'deerclops',
    name: 'Deerclops (Boss Winter)',
    category: 'Seasonal',
    dangerLevel: 4,
    hitsBeforeDodge: '2 - 3 Hit lalu Mundur',
    attackPattern: 'Ayunkan es beku area (AoE). Pukul 2 kali (atau 3 kali jika memegang Walking Cane), lalu langsung melangkah mundur ke luar jangkauan sapuannya.',
    weaponRecommended: 'Ham Bat segar / Dark Sword',
    armorRecommended: 'Football Helmet + Log Suit (atau Marble Suit saat tanking)',
    loot: ['Deerclops Eyeball (100%)', 'Meat x8'],
    tips: 'Aura Sanity Deerclops sangat pekat (-400/menit). Nyalakan Campfire di dekatnya agar tidak membeku saat bertarung, dan siapkan Cooked Green Caps atau Jerky untuk kewarasan.'
  },
  {
    id: 'bearger',
    name: 'Bearger (Boss Autumn)',
    category: 'Seasonal',
    dangerLevel: 4,
    hitsBeforeDodge: '2 - 3 Hit lalu Mundur (Waspada Ground Pound)',
    attackPattern: 'Pukul 3 kali lalu mundur. Setiap 3 ayunan cakar, Bearger akan melompat menghantam tanah (Ground Pound) yang menjatuhkan senjata dari tanganmu!',
    weaponRecommended: 'Ham Bat / Dark Sword + Walking Cane di tangan kedua',
    armorRecommended: 'Football Helmet rangkap 2 cadangan',
    loot: ['Thick Fur (100%)', 'Meat x8'],
    tips: 'Jangan simpan madu di tasmu karena Bearger akan mengejarmu tanpa henti. Arahkan Bearger ke hutan lebat untuk menebang ratusan pohon dalam sekejap.'
  },
  {
    id: 'moose-goose',
    name: 'Moose / Goose (Boss Spring)',
    category: 'Seasonal',
    dangerLevel: 3,
    hitsBeforeDodge: '3 - 4 Hit lalu Mundur',
    attackPattern: 'Pukul 3-4 kali lalu mundur. Setiap serangan ke-3, dia akan berteriak keras ("Honk!") yang melucuti senjata di tanganmu. Segera ambil kembali senjatamu dengan tombol spasi.',
    weaponRecommended: 'Ham Bat / Tentacle Spike',
    armorRecommended: 'Football Helmet + Eyebrella (agar tidak basah kuyup tersambar petir)',
    loot: ['Down Feather x3-5', 'Meat x6'],
    tips: 'Jangan langsung bunuh induknya jika kamu belum siap melawan anak-anaknya (Moslings). Jika induknya mati, Moslings akan berubah menjadi tornado petir yang sangat agresif!'
  },
  {
    id: 'hound',
    name: 'Hound (Serigala Pemburu)',
    category: 'Mob',
    dangerLevel: 2,
    hitsBeforeDodge: '1 - 2 Hit (bisa di-stunlock)',
    attackPattern: 'Tunggu serigala mendekat dan mengonggong/mengayunkan gigitan pertama. Hindari serangan pertama itu, lalu serang bertubi-tubi hingga tewas karena serigala mudah terkena stunlock.',
    weaponRecommended: 'Spear / Ham Bat',
    armorRecommended: 'Log Suit atau Football Helmet',
    loot: ['Monster Meat (100%)', 'Hound\'s Tooth (12.5%)'],
    tips: 'Red Hound akan meledak menjadi kobaran api saat mati! Jangan pernah membunuh Red Hound di dekat perkemahan base berlantai kayu.'
  },
  {
    id: 'treeguard',
    name: 'Treeguard (Pohon Hidup)',
    category: 'Mob',
    dangerLevel: 3,
    hitsBeforeDodge: '3 - 4 Hit lalu Mundur',
    attackPattern: 'Jangkauan tangannya cukup panjang tapi ayunannya lambat. Masuk, pukul 4 kali, lalu mundur sejauh 3 langkah.',
    weaponRecommended: 'Axe / Ham Bat / Spear',
    armorRecommended: 'Football Helmet',
    loot: ['Living Log x6 (100%)', 'Monster Meat x1'],
    tips: 'Jika kamu tidak ingin bertarung, tanamlah buah cemara (Pinecone) di dekatnya sampai Treeguard mendengar suara menenangkan dan kembali menjadi pohon biasa.'
  },
  {
    id: 'shadow-creature',
    name: 'Shadow Creature (Crawling Horror & Terrorbeak)',
    category: 'Mob',
    dangerLevel: 2,
    hitsBeforeDodge: '1 Hit lalu menghilang/teleport',
    attackPattern: 'Tunggu monster bayangan mengayunkan gigitan, mundur 1 langkah agar serangannya meleset, lalu segera maju dan pukul 1 KALI. Monster akan teleportasi ke dekatmu lagi. Ulangi prosesnya.',
    weaponRecommended: 'Ham Bat / Spear',
    armorRecommended: 'Football Helmet',
    loot: ['Nightmare Fuel (100%)', '+15 / +33 Sanity saat mati'],
    tips: 'Terrorbeak (berparuh panjang) berlari lebih cepat; jangan lari lurus, berputarlah dalam lingkaran kecil untuk memancing ayunan pertamanya.'
  },
  {
    id: 'pigman-werepig',
    name: 'Pigman & Werepig (Manusia Babi)',
    category: 'Mob',
    dangerLevel: 2,
    hitsBeforeDodge: 'Pigman biasa: 4 Hit; Werepig: 2 Hit',
    attackPattern: 'Werepig muncul saat bulan purnama (Full Moon) atau jika babi memakan 4 Monster Meat. Werepig selalu berhenti sejenak untuk memakan sayuran/buah di tanah, memberimu jendela serang gratis.',
    weaponRecommended: 'Ham Bat',
    armorRecommended: 'Football Helmet',
    loot: ['Pig Skin x1 (100%)', 'Meat x2 (100%)'],
    tips: 'Beri 4 Monster Meat ke babi ternakmu untuk menjadikannya Werepig; membunuhnya memberikan jaminan 100% Pig Skin dan 2 potong Meat besar!'
  },
  {
    id: 'ancient-guardian',
    name: 'Ancient Guardian (Minotaur Gua)',
    category: 'Boss',
    dangerLevel: 5,
    hitsBeforeDodge: 'Hindari Tabrakan Tanduk, lalu Pukul 4-5 Kali',
    attackPattern: 'Berlari menabrak dalam garis lurus. Berdirilah di samping pilar labirin atau pojok ruangan agar dia menabrak dinding dan terkena pusing (daze).',
    weaponRecommended: 'Ham Bat segar / Dark Sword',
    armorRecommended: 'Thulecite Crown / Marble Suit',
    loot: ['Guardian\'s Horn (100%)', 'Large Ornate Chest (harta karun kuno)'],
    tips: 'Guardian\'s Horn adalah bahan utama membuat Houndius Shootius (menara pertahanan tembak laser otomatis).'
  }
];
