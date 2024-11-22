interface Attributes {
    "Title:": string;
    "Pantheon:": string;
    "Type:": string;
    "Class:": string;
    "imageURL": string;
    // Add other attributes as needed
}

interface Ability {
    name: string;
    description: string;
    imageURL: string;
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