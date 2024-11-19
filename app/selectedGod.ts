export interface God {
    name: string;
    blurb: string;
    imageUrl: any;
    description?: string;
}

let selectedGod: God | null = null;

export const getSelectedGod = (): God | null => selectedGod;

export const setSelectedGod = (god: God): void => {
    selectedGod = god;
};  