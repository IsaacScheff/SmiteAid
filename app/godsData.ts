interface Ability {
    name: string;
    description: string;
    buffs: string[];
    imageUrl: any; 
}
export interface God {
    name: string;
    blurb: string;
    imageUrl: any;  // 'any' is used here for image require
    description?: string
    abilities: Ability[];
}

const gods: God[] = [
    {
        name: "Achilles",
        blurb: "Description of Achilles here",
        imageUrl: require('../assets/images/achilles.png'),
        abilities: [
            {
                name: "Gift of the Gods (Passive)",
                description: "Achilles adapts to the tide of Battle. While in the Fountain, Achilles can choose to wear armor, granting him bonus Health and Protections, or forgo it, granting him bonus Movement Speed and Physical Power. To swap, use Achilles' Basic Attack while the Passive targeter is active.",
                buffs: [
                    "Health Bonus: 25 +15 per Level",
                    "Protections Bonus: 5 +2 per Level",
                    "Movement Speed Bonus: 1% +.25% per Level",
                    "Physical Power Bonus: 3 +1.5 per Level",
                ],
                imageUrl: require('../assets/images/achilles_p.png'),
            },
            {
                name: "Ach 1",
                description: "Achilles dashes forward, striking enemies with his shield.",
                buffs: [
                    "Health Bonus: 25 +15 per Level",
                    "Protections Bonus: 5 +2 per Level",
                    "Movement Speed Bonus: 1% +.25% per Level",
                    "Physical Power Bonus: 3 +1.5 per Level",
                ],
                imageUrl: require('../assets/images/achilles_1.png'),
            },
            {
                name: "Ach 2",
                description: "Achilles dodges in the direction of his choice.",
                buffs: [
                    "Health Bonus: 25 +15 per Level",
                    "Protections Bonus: 5 +2 per Level",
                    "Movement Speed Bonus: 1% +.25% per Level",
                    "Physical Power Bonus: 3 +1.5 per Level",
                ],
                imageUrl: require('../assets/images/achilles_2.png'),
            },
            {
                name: "Ach 3",
                description: "Achilles gains bonus damage and healing.",
                buffs: [
                    "Health Bonus: 25 +15 per Level",
                    "Protections Bonus: 5 +2 per Level",
                    "Movement Speed Bonus: 1% +.25% per Level",
                    "Physical Power Bonus: 3 +1.5 per Level",
                ],
                imageUrl: require('../assets/images/achilles_3.png'),
            },
            {
                name: "Ach (Ultimate)",
                description: "Achilles executes enemies below a health threshold.",
                buffs: [
                    "Health Bonus: 25 +15 per Level",
                    "Protections Bonus: 5 +2 per Level",
                    "Movement Speed Bonus: 1% +.25% per Level",
                    "Physical Power Bonus: 3 +1.5 per Level",
                ],
                imageUrl: require('../assets/images/achilles_ult.png'),
            },
        ]
    },
    // {
    //     name: "Agni",
    //     blurb: "Description of Agni here",
    //     imageUrl: require('../assets/images/agni.png')
    // },
    // {
    //     name: "Ah Muzen Cab",
    //     blurb: "Description of Muzzy Cab face here",
    //     imageUrl: require('../assets/images/ah_muzen_cab.png')
    // },
    // {
    //     name: "Ah Puch",
    //     blurb: "Description of Poochy here",
    //     imageUrl: require('../assets/images/ah_puch.png')
    // },
    // // Add more gods here
];

export default gods;
