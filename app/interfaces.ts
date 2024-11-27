export interface Attributes {
    [key: string]: string;  // Allowing any string key to return a string
    Health: string;
    Mana: string;
    Speed: string;
    Range: string;
    AttackSec: string; // Changed from "Attack/Sec" to "AttackSec" for easier handling
    Damage: string;
    Physical: string;
    Magical: string;
    HP5: string;
    MP5: string;
  }

export type AverageStats = {
    [className: string]: {  // This allows indexing by class name like 'Average Assassin'
      [statName: string]: string; // This allows indexing by stat name like 'Health'
    }
  };
  