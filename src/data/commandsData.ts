import { CommandCategory } from '../types';

export const COMMANDS_DATA: CommandCategory[] = [
  {
    id: 'simple',
    title: '1. Perintah Sederhana (Simple Commands)',
    icon: 'Wand2',
    description: 'Perintah instan paling populer untuk memunculkan item, mengatur status karakter, dan mode kebal.',
    commands: [
      {
        id: 'c_spawn',
        title: 'Memunculkan Prefab di Posisi Kursor',
        code: 'c_spawn("prefab", amount)',
        description: 'Versi lebih baik dari DebugSpawn("prefab"). Memunculkan sejumlah amount dari "prefab" yang dipilih di posisi kursor mouse.',
        category: 'Perintah Sederhana',
        parameters: [
          { name: 'prefab', desc: 'Nama internal objek/item (contoh: "beefalo", "goldnugget", "log")' },
          { name: 'amount', desc: 'Jumlah yang ingin dimunculkan (angka opsional, default 1)' }
        ],
        note: 'Jika hanya memunculkan 1 objek, hilangkan amount: c_spawn("beefalo")'
      },
      {
        id: 'c_give',
        title: 'Memberi Item Langsung ke Inventori',
        code: 'c_give("prefab", amount)',
        description: 'Memunculkan sejumlah amount prefab yang dipilih langsung ke dalam tas atau kantong karaktermu.',
        category: 'Perintah Sederhana',
        parameters: [
          { name: 'prefab', desc: 'Nama item yang dapat dimasukkan ke inventori (misal: "meat", "flint", "footballhat")' },
          { name: 'amount', desc: 'Jumlah item yang diberikan (default 1)' }
        ]
      },
      {
        id: 'c_godmode',
        title: 'Mode Dewa (God Mode)',
        code: 'c_godmode()',
        description: 'Kewarasan (Sanity), rasa lapar (Hunger), dan kesehatan (Health) tidak akan berkurang saat diserang musuh. Jika karakter sedang mati, perintah ini akan menghidupkanmu kembali.',
        category: 'Perintah Sederhana',
        note: 'Jalankan perintah ini sekali lagi untuk menonaktifkannya.'
      },
      {
        id: 'c_supergodmode',
        title: 'Mode Dewa Super (Super God Mode)',
        code: 'c_supergodmode()',
        description: 'Sama seperti God Mode, namun langsung mengisi penuh 100% semua status Health, Hunger, dan Sanity seketika, bahkan saat dimatikan.',
        category: 'Perintah Sederhana',
        note: 'Jalankan perintah ini sekali lagi untuk mematikannya.'
      },
      {
        id: 'c_goadventuring',
        title: 'Mulai Berpetualang (Starter Gear)',
        code: 'c_goadventuring()',
        description: 'Memberikan satu set paket perlengkapan petualangan lengkap langsung ke inventori pemain.',
        category: 'Perintah Sederhana'
      },
      {
        id: 'c_sethealth',
        title: 'Mengatur Persentase Kesehatan (Health)',
        code: 'c_sethealth(percent)',
        description: 'Mengatur kesehatanmu ke persentase tertentu. Gunakan format desimal.',
        category: 'Perintah Sederhana',
        parameters: [{ name: 'percent', desc: 'Nilai desimal: 0.5 = 50%, 1.0 = 100%, 0.1 = 10%' }]
      },
      {
        id: 'c_setsanity',
        title: 'Mengatur Persentase Kewarasan (Sanity)',
        code: 'c_setsanity(percent)',
        description: 'Mengatur tingkat kewarasan ke persentase tertentu.',
        category: 'Perintah Sederhana',
        parameters: [{ name: 'percent', desc: 'Nilai desimal: 0.9 = 90%, 0 = gila total' }]
      },
      {
        id: 'c_sethunger',
        title: 'Mengatur Persentase Rasa Lapar (Hunger)',
        code: 'c_sethunger(percent)',
        description: 'Mengatur rasa lapar ke persentase tertentu.',
        category: 'Perintah Sederhana',
        parameters: [{ name: 'percent', desc: 'Nilai desimal: 1.0 = kenyang penuh' }]
      },
      {
        id: 'c_setmoisture',
        title: 'Mengatur Tingkat Kebasahan (Moisture)',
        code: 'c_setmoisture(percent)',
        description: 'Mengatur tingkat basah tubuh karakter (0.0 = kering total, 1.0 = basah kuyup).',
        category: 'Perintah Sederhana'
      },
      {
        id: 'c_settemperature',
        title: 'Mengatur Suhu Tubuh Karakter',
        code: 'c_settemperature(degrees)',
        description: 'Mengatur suhu tubuhmu ke derajat tertentu (misal: 35 untuk suhu normal yang nyaman).',
        category: 'Perintah Sederhana'
      },
      {
        id: 'c_maintainall',
        title: 'Menjaga Semua Statistik Selalu Penuh',
        code: 'c_maintainall(ThePlayer)',
        description: 'Terus mengisi ulang semua statistik (Health, Hunger, Sanity, Suhu) secara otomatis dan konstan.',
        category: 'Perintah Sederhana',
        note: 'Untuk membatalkan pengisian otomatis: c_cancelmaintaintasks(ThePlayer)'
      },
      {
        id: 'c_makeinvisible',
        title: 'Menghilang dari Pandangan Musuh (Invisible)',
        code: 'c_makeinvisible()',
        description: 'Mencegah monster atau mob lain menargetkan atau menyerang karaktermu dalam pertarungan.',
        category: 'Perintah Sederhana'
      },
      {
        id: 'c_speedmult',
        title: 'Mengatur Pengali Kecepatan Lari',
        code: 'c_speedmult(multiplier)',
        description: 'Kecepatan lari standar adalah 1. Nilai 2 membuatmu 2x lebih cepat. Nilai 12 ke atas memungkinkan berjalan menembus dinding dan di atas air.',
        category: 'Perintah Sederhana',
        parameters: [{ name: 'multiplier', desc: 'Angka kelipatan kecepatan (contoh: 2, 3, 12)' }]
      }
    ]
  },
  {
    id: 'player',
    title: '2. Perintah untuk Pemain (Player Modifiers)',
    icon: 'User',
    description: 'Modifikasi statistik dasar karakter, batas maksimum atribut, dan kemampuan crafting.',
    commands: [
      {
        id: 'c_freecrafting',
        title: 'Mode Kreatif (Free Crafting)',
        code: 'c_freecrafting()\nGetPlayer().components.builder:GiveAllRecipes()',
        description: 'Membuka seluruh resep crafting di dalam game dan membuatnya bebas tanpa membutuhkan bahan apa pun.',
        category: 'Perintah Pemain',
        note: 'Jalankan c_freecrafting() sekali lagi untuk menonaktifkannya.'
      },
      {
        id: 'enable_prediction',
        title: 'Prediksi Aksi / Gerakan (Action Prediction)',
        code: 'ThePlayer:EnableMovementPrediction(enable)',
        description: 'Aktif secara default. Mengaturnya ke false akan menghilangkan rubberbanding saat lag dan menggantinya dengan pergerakan terputus (choppy), yang sering lebih akurat saat kiting.',
        category: 'Perintah Pemain'
      },
      {
        id: 'set_max_health',
        title: 'Mengubah Batas Kesehatan Maksimum',
        code: 'ThePlayer.components.health:SetMaxHealth(value)',
        description: 'Mengubah kapasitas maksimal darah karaktermu (misal: 500 atau 1000).',
        category: 'Perintah Pemain'
      },
      {
        id: 'set_max_sanity',
        title: 'Mengubah Batas Kewarasan Maksimum',
        code: 'ThePlayer.components.sanity:SetMax(value)',
        description: 'Mengubah kapasitas maksimal poin kewarasan karaktermu.',
        category: 'Perintah Pemain'
      },
      {
        id: 'set_max_hunger',
        title: 'Mengubah Batas Rasa Lapar Maksimum',
        code: 'ThePlayer.components.hunger:SetMax(value)',
        description: 'Mengubah kapasitas tampung perut karaktermu.',
        category: 'Perintah Pemain'
      },
      {
        id: 'pause_hunger',
        title: 'Menjeda Rasa Lapar (Kenyang Selamanya)',
        code: 'ThePlayer.components.hunger:Pause(true)',
        description: 'Menghentikan pengurangan rasa lapar. Karaktermu tidak akan pernah lapar lagi sampai diaktifkan kembali.',
        category: 'Perintah Pemain'
      },
      {
        id: 'damage_multiplier',
        title: 'Mengubah Pengali Kerusakan Serangan (Damage)',
        code: 'ThePlayer.components.combat.damagemultiplier = (value)',
        description: 'Mengalikan daya rusak serangan karaktermu. Contoh: nilai 10 membuat seranganmu 10 kali lipat lebih dahsyat.',
        category: 'Perintah Pemain'
      },
      {
        id: 'werebeaver',
        title: 'Transformasi Woodie (Werebeaver)',
        code: 'c_setbeaverness(percentage)',
        description: 'Mengubah Woodie menjadi Werebeaver (atur ke 1 untuk berubah jadi beaver, atur 0 untuk kembali normal).',
        category: 'Perintah Pemain'
      }
    ]
  },
  {
    id: 'multiplayer',
    title: '3. Perintah Pemain Lain / Server Multiplayer',
    icon: 'Users',
    description: 'Manajemen pemain di server: teleportasi, revive, memanggil pemain berdasarkan ID atau nama.',
    commands: [
      {
        id: 'list_all_players',
        title: 'Menampilkan Daftar Semua Pemain di Server',
        code: 'c_listallplayers()\n-- atau jika bermasalah:\nfor i, v in ipairs(AllPlayers) do TheNet:SystemMessage(tostring(i) .. ": " .. v.name, false) end',
        description: 'Menampilkan nomor urut dan nama semua pemain yang sedang login di server.',
        category: 'Pemain Lain'
      },
      {
        id: 'c_move_player',
        title: 'Memindahkan Pemain Tertentu ke Kursor',
        code: 'c_move(AllPlayers[number])',
        description: 'Memindahkan pemain dengan nomor index tertentu langsung ke posisi kursor mouse.',
        category: 'Pemain Lain'
      },
      {
        id: 'c_goto_player',
        title: 'Teleport Menuju Posisi Pemain Lain',
        code: 'c_goto(AllPlayers[number])',
        description: 'Membuat karaktermu langsung berpindah ke lokasi pemain yang dipilih.',
        category: 'Pemain Lain'
      },
      {
        id: 'revive_player',
        title: 'Menghidupkan Kembali Pemain dari Hantu (Revive)',
        code: 'AllPlayers[number]:PushEvent("respawnfromghost")',
        description: 'Menghidupkan pemain lain yang saat ini sedang menjadi hantu tanpa perlu Telltale Heart atau Touch Stone.',
        category: 'Pemain Lain'
      },
      {
        id: 'kill_player',
        title: 'Membunuh Karakter Pemain',
        code: 'AllPlayers[number]:PushEvent("death")',
        description: 'Memicu status kematian langsung pada pemain yang dipilih.',
        category: 'Pemain Lain',
        isDestructive: true
      },
      {
        id: 'drop_everything',
        title: 'Menjatuhkan Seluruh Isi Inventori Pemain',
        code: 'AllPlayers[number].components.inventory:DropEverything()',
        description: 'Memaksa pemain menjatuhkan semua barang di tas dan kantongnya ke tanah.',
        category: 'Pemain Lain'
      },
      {
        id: 'user_to_player',
        title: 'Menargetkan Pemain Berdasarkan Nama Steam / Username',
        code: 'UserToPlayer("NamaPemain"):PushEvent("death")',
        description: 'Cara modern menargetkan pemain menggunakan nama asli mereka tanpa perlu mencari nomor urut di AllPlayers.',
        category: 'Pemain Lain'
      }
    ]
  },
  {
    id: 'world',
    title: '4. Perintah Dunia, Cuaca & Waktu (World Control)',
    icon: 'Globe',
    description: 'Manipulasi waktu, musim, cuaca badai petir, siklus bayangan gua, dan pembuka peta.',
    commands: [
      {
        id: 'reveal_map',
        title: 'Membuka Seluruh Peta (Reveal Map)',
        code: 'for x=-1600,1600,35 do\n  for y=-1600,1600,35 do\n    ThePlayer.player_classified.MapExplorer:RevealArea(x,0,y)\n  end\nend',
        description: 'Membuka kabut hitam di seluruh peta dunia untuk karaktermu seketika.',
        category: 'Perintah Dunia',
        note: 'Ini adalah perintah lokal client.'
      },
      {
        id: 'c_skip_days',
        title: 'Melewati Waktu / Melewati Hari (Skip Days)',
        code: 'c_skip(num)\n-- atau:\nTheWorld.net.components.clock:OnUpdate(16*30*num)',
        description: 'Melompat sejumlah num hari ke masa depan. Peringatan: jangan masukkan angka terlalu besar sekaligus agar game tidak freeze.',
        category: 'Perintah Dunia'
      },
      {
        id: 'set_phase',
        title: 'Mengatur Fase Waktu Hari',
        code: 'TheWorld:PushEvent("ms_setphase", "day")   -- "day", "dusk", atau "night"\nTheWorld:PushEvent("ms_nextphase")',
        description: 'Memaksa dunia berpindah ke siang hari, sore hari, atau malam hari seketika.',
        category: 'Perintah Dunia'
      },
      {
        id: 'set_season',
        title: 'Mengatur Musim Dunia',
        code: 'TheWorld:PushEvent("ms_setseason", "winter")  -- "autumn", "winter", "spring", "summer"',
        description: 'Mengubah musim aktif di dunia secara instan tanpa harus menunggu siklus alami.',
        category: 'Perintah Dunia'
      },
      {
        id: 'rain_lightning',
        title: 'Mengendalikan Hujan & Sambaran Petir',
        code: 'TheWorld:PushEvent("ms_forceprecipitation")        -- Mulai hujan lebat\nTheWorld:PushEvent("ms_forceprecipitation", false) -- Hentikan hujan\nTheWorld:PushEvent("ms_sendlightningstrike", ConsoleWorldPosition()) -- Petir di kursor',
        description: 'Memulai hujan, menghentikan hujan, atau menyambarkan petir tepat di posisi kursor mouse.',
        category: 'Perintah Dunia'
      },
      {
        id: 'nightmare_cycle',
        title: 'Mengatur Siklus Nightmare Gua',
        code: 'TheWorld:PushEvent("ms_setnightmarephase", "wild") -- "calm", "warn", "wild", "dawn"',
        description: 'Mengatur fase energi bayangan di biome Ruins (sangat berguna untuk farming Nightmare Fuel).',
        category: 'Perintah Dunia'
      },
      {
        id: 'remove_under_mouse',
        title: 'Menghapus Objek di Bawah Kursor Mouse',
        code: 'ConsoleWorldEntityUnderMouse():Remove()\n-- atau di dedicated server:\nc_select():Remove()',
        description: 'Menghilangkan entitas atau objek yang sedang ditunjuk oleh kursor mouse secara permanen.',
        category: 'Perintah Dunia',
        isDestructive: true
      },
      {
        id: 'c_gonext',
        title: 'Teleport ke Prefab Terdekat',
        code: 'c_gonext("prefab")',
        description: 'Memindahkan karakter langsung ke lokasi objek/prefab pertama yang ditemukan di dunia (misal: c_gonext("deerclops") atau c_gonext("klaus_sack")).',
        category: 'Perintah Dunia'
      }
    ]
  },
  {
    id: 'network',
    title: '5. Perintah Jaringan & Admin Server',
    icon: 'Server',
    description: 'Perintah untuk administrator server: rollback save, ban/kick, save darurat, dan restart.',
    commands: [
      {
        id: 'c_rollback',
        title: 'Rollback Save Dunia ke Hari Sebelumnya',
        code: 'c_rollback(count)',
        description: 'Mengembalikan kondisi dunia ke save sebelumnya (misal saat base terbakar atau pemain mati semua). c_rollback(1) mundur 1 save, c_rollback(3) mundur 3 save.',
        category: 'Server Admin'
      },
      {
        id: 'kick_ban',
        title: 'Mengeluarkan (Kick) atau Memblokir (Ban) Pemain',
        code: 'TheNet:Kick(userid)\nTheNet:Ban(userid)\nTheNet:BanForTime("KU_aabbccdd", 120) -- Blokir selama 120 detik',
        description: 'Mengeluarkan pemain tidak tertib dari server berdasarkan User ID mereka.',
        category: 'Server Admin',
        isDestructive: true
      },
      {
        id: 'save_shutdown',
        title: 'Simpan & Muat Ulang Server',
        code: 'c_save()                 -- Paksa simpan dunia sekarang\nc_reset()                -- Muat ulang tanpa simpan\nc_shutdown(true)         -- Matikan server sambil menyimpan\nc_regenerateworld()      -- Hasilkan ulang dunia baru',
        description: 'Perintah pengelolaan siklus proses server.',
        category: 'Server Admin'
      },
      {
        id: 'c_announce',
        title: 'Mengirim Pengumuman Server ke Layar',
        code: 'c_announce("Pesan pengumuman admin di sini")',
        description: 'Menampilkan pesan teks server di tengah layar semua pemain.',
        category: 'Server Admin'
      }
    ]
  },
  {
    id: 'skills',
    title: '6. Perintah Skill Tree & Boss Kills',
    icon: 'Cpu',
    description: 'Membuka poin Insight maksimal untuk pohon keahlian karakter dan status kill bos.',
    commands: [
      {
        id: 'add_skill_xp',
        title: 'Membuka Insight Point Karakter Maksimal',
        code: 'TheSkillTree:AddSkillXP(10000, "wilson")',
        description: 'Memberikan XP maksimal untuk membuka seluruh cabang Skill Tree karakter. Ganti "wilson" dengan karakter lain (misal: "waxwell" untuk Maxwell, "wathgrithr" untuk Wigfrid, "woodie").',
        category: 'Skill Tree'
      },
      {
        id: 'unlock_fuelweaver',
        title: 'Buka Status Pembunuhan Ancient Fuelweaver',
        code: 'TheGenericKV:SetKV("fuelweaver_killed", "1")',
        description: 'Mencatat bahwa karakter telah mengalahkan Ancient Fuelweaver (membuka cabang skill bayangan).',
        category: 'Skill Tree'
      },
      {
        id: 'unlock_celestial',
        title: 'Buka Status Pembunuhan Celestial Champion',
        code: 'TheGenericKV:SetKV("celestialchampion_killed", "1")',
        description: 'Mencatat bahwa karakter telah mengalahkan Celestial Champion (membuka cabang skill bulan).',
        category: 'Skill Tree'
      }
    ]
  },
  {
    id: 'misc',
    title: '7. Perintah Tambahan & Eksperimental',
    icon: 'Layers',
    description: 'Membuat wormhole kustom, membuka Scrapbook, mengubah skala model karakter, dan efek visual.',
    commands: [
      {
        id: 'scrapbook_unlock',
        title: 'Buka Semua Isi Ensiklopedia Scrapbook',
        code: 'TheScrapbookPartitions:DebugUnlockEverything()',
        description: 'Membuka 100% entri ensiklopedia Scrapbook di dalam game tanpa perlu meneliti item satu per satu.',
        category: 'Lain-lain'
      },
      {
        id: 'spawn_wormholes',
        title: 'Membuat Lubang Cacing Berpasangan (Custom Wormhole)',
        code: '-- Arahkan kursor ke titik A:\nworm1 = c_spawn("wormhole")\n-- Arahkan kursor ke titik B:\nworm2 = c_spawn("wormhole")\n-- Hubungkan keduanya:\nworm1.components.teleporter.targetTeleporter = worm2\nworm2.components.teleporter.targetTeleporter = worm1',
        description: 'Membangun jalur teleportasi pintas instan antara dua titik di peta.',
        category: 'Lain-lain'
      },
      {
        id: 'scale_character',
        title: 'Mengubah Ukuran Skala Pemain / Objek',
        code: 'ThePlayer.Transform:SetScale(2, 2, 2) -- Karakter jadi raksasa 2x lipat',
        description: 'Mengubah skala model karakter atau entity di bawah kursor (X, Y, Z).',
        category: 'Lain-lain'
      }
    ]
  }
];
