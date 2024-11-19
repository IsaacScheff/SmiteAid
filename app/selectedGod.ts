import { GodClass } from "./godsData";

interface Ability {
    name: string;
    description: string;
    buffs: string[],
    imageUrl: any; 
}
export interface God {
    name: string;
    class: GodClass
    blurb: string;
    imageUrl: any;
    description?: string;
    abilities: Ability[];
}

let selectedGod: God | null = null;

export const getSelectedGod = (): God | null => selectedGod;

export const setSelectedGod = (god: God): void => {
    selectedGod = god;
};  