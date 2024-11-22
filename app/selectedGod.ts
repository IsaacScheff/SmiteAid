import { ImageSourcePropType } from 'react-native';

interface Attributes {
    "Title:": string;
    "Pantheon:": string;
    "Type:": string;
    "Class:": string;
    "imageURL": ImageSourcePropType;
    "Health:": string;
    "Mana:": string;
    "Speed:": string;
    "Range:": string;
    "Attack/Sec:": string;
    "Damage:": string;
    "Physical:": string;
    "Magical:": string;
    "HP5:": string;
    "MP5:": string;
    "Difficulty:": string;
    "Release date:": string;
    // Add other attributes as needed
}

interface Ability {
    name: string;
    description: string;
    notes: string[];
    imageURL: ImageSourcePropType;
}

export interface God {
    Name: string;
    Attributes: Attributes;
    Abilities: Ability[];
}

let selectedGod: God | null = null;

export const getSelectedGod = (): God | null => selectedGod;

export const setSelectedGod = (god: God): void => {
    selectedGod = god;
};