export type GuideLevel = 'all' | 'pemula' | 'menengah' | 'ahli';

export type GuideTopic = 
  | 'all'
  | 'eksplorasi'
  | 'musim'
  | 'combat'
  | 'farming'
  | 'caves'
  | 'karakter'
  | 'magic'
  | 'endgame';

export type MainTab = 
  | 'guide' 
  | 'crockpot' 
  | 'kiting' 
  | 'biomes' 
  | 'crafting' 
  | 'characters' 
  | 'commands' 
  | 'favorites';

export interface GuideChecklistItem {
  id: string;
  label: string;
}

export interface GuideSection {
  id: string;
  level: 'pemula' | 'menengah' | 'ahli';
  topic?: GuideTopic;
  title: string;
  subtitle: string;
  estimatedDays?: string;
  readTime?: string;
  iconName: string;
  overview: string;
  keyPoints: {
    heading: string;
    description: string;
    tags?: string[];
    warning?: string;
    proTip?: string;
    items?: string[];
  }[];
  recommendedItems?: string[];
  checklist?: GuideChecklistItem[];
  quickSummary?: string;
}

export interface CommandItem {
  id: string;
  title: string;
  code: string;
  description: string;
  category: string;
  warning?: string;
  note?: string;
  parameters?: { name: string; desc: string }[];
  isDestructive?: boolean;
}

export interface CommandCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  commands: CommandItem[];
}

export interface CrockPotRecipe {
  id: string;
  name: string;
  foodType: 'Meat' | 'Veggie' | 'Goodie';
  health: number;
  hunger: number;
  sanity: number;
  perishDays: number;
  cookTime: number; // seconds
  ingredients: string;
  requirements: string;
  restrictions?: string;
  bestFor: 'Health' | 'Hunger' | 'Sanity' | 'Utility';
  tips: string;
}

export interface KitingEnemy {
  id: string;
  name: string;
  category: 'Boss' | 'Mob' | 'Seasonal';
  hitsBeforeDodge: string;
  attackPattern: string;
  weaponRecommended: string;
  armorRecommended: string;
  loot: string[];
  tips: string;
  dangerLevel: 1 | 2 | 3 | 4 | 5;
}

// Early Game Goals Checklist
export interface EarlyGameGoal {
  id: string;
  phase: 'Day 1-3' | 'Day 4-8' | 'Day 9-15' | 'Day 16-20';
  title: string;
  description: string;
  priority: 'Kritis' | 'Tinggi' | 'Penting';
  category: 'Eksplorasi' | 'Base' | 'Crafting' | 'Pangan' | 'Pertahanan' | 'Survival';
  actionTip: string;
  targetItems: string[];
}

// Biomes Data Model
export interface BiomeInfo {
  id: string;
  name: string;
  subtitle: string;
  category: 'Surface' | 'Caves' | 'Ruins' | 'Ocean';
  iconName: string;
  dangerRating: 1 | 2 | 3 | 4 | 5;
  description: string;
  resources: { name: string; desc: string; rarity: 'Melimpah' | 'Sedang' | 'Langka' }[];
  risks: { title: string; desc: string; severity: 'Rendah' | 'Sedang' | 'Tinggi' | 'Fatal' }[];
  structures: { name: string; desc: string }[];
  survivalTips: string[];
  nativeMobs: string[];
  temperatureRisk?: string;
  bestSeason?: string;
}

// Visual Crafting Tree Model
export type ScienceStationId = 
  | 'none'
  | 'science_1'
  | 'science_2'
  | 'magic_1'
  | 'magic_2'
  | 'ancient'
  | 'celestial';

export interface CraftingItem {
  id: string;
  name: string;
  category: 'Tools' | 'Light' | 'Survival' | 'Fight' | 'Structures' | 'Refine' | 'Magic' | 'Dress';
  stationId: ScienceStationId;
  stationName: string;
  ingredients: { item: string; count: number }[];
  description: string;
  perks?: string;
  durability?: string;
}

export interface CraftingStation {
  id: ScienceStationId;
  name: string;
  tier: number;
  branch: 'Basic' | 'Science' | 'Magic' | 'Ancient' | 'Celestial';
  recipeToBuild: string;
  parentStationId?: ScienceStationId;
  description: string;
  color: string;
  badgeColor: string;
  unlockedItemCount: number;
}

// Playable DST Character Model
export interface DSTCharacter {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatarIcon: string;
  health: number;
  hunger: number;
  sanity: number;
  difficulty: 'Sangat Mudah' | 'Mudah' | 'Sedang' | 'Sulit' | 'Sangat Sulit';
  role: 'All-Rounder' | 'Combat / Tank' | 'Gatherer / Builder' | 'Magic / Support' | 'Spesialis Ahli';
  perks: { title: string; description: string }[];
  flaws: { title: string; description: string }[];
  uniqueCrafts: string[];
  startingItems: string[];
  teamSynergy: string;
  proTips: string[];
}
