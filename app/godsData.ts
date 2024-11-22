export interface Ability {
    name: string;
    description: string;
    notes: string[];
    imageURL: string;
}

export interface Attributes {
    "Title:": string;
    "Pantheon:": string;
    "Type:": string;
    "Class:": string;
    "Pros:": string;
    "Difficulty:": string;
    "Release date:": string;
    "Favor:": string;
    "Gems:": string;
    "Voicelines:": string;
    "Voice actor:": string;
    "Health:": string;
    "Mana:": string;
    "Speed:": string;
    "Range:": string;
    "Attack/Sec:": string;
    "Damage:": string;
    "Progression:": string;
    "Physical:": string;
    "Magical:": string;
    "HP5:": string;
    "MP5:": string;
    "imageURL": string;
}

export interface God {
    Name: string;
    Attributes: Attributes;
    Abilities: Ability[];
}

import godsJson from '../assets/god_data.json';

// Cast the imported JSON to ensure TypeScript treats it as the correct type
export const gods: God[] = godsJson as God[];
