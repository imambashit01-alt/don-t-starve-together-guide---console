export type GuideLevel = 'all' | 'pemula' | 'menengah' | 'ahli';

export type MainTab = 'guide' | 'crockpot' | 'kiting' | 'commands' | 'favorites';

export interface GuideSection {
  id: string;
  level: 'pemula' | 'menengah' | 'ahli';
  title: string;
  subtitle: string;
  estimatedDays?: string;
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
