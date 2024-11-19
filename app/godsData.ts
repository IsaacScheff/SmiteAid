interface Ability {
    name: string;
    description: string;
    buffs: string[];
    imageUrl: any; 
}
export enum GodClass {
    Assassin = "Assassin",
    Guardian = "Guardian",
    Hunter = "Hunter",
    Mage = "Mage",
    Warrior = "Warrior",
}
export interface God {
    name: string;
    class: GodClass;
    blurb: string;
    imageUrl: any;  // 'any' is used here for image require
    description?: string
    abilities: Ability[];
}

const gods: God[] = [
    {
        name: "Achilles",
        class: GodClass.Warrior,
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
                name: "Shield of Achilles",
                description: "Achilles punches forward with the edge of his Shield, inflicting massive damage and stunning enemy targets hit by the impact. The force of his punch continues to radiate past his initial target area, dealing 70% damage to targets farther away. Lane Minions take an additional 15% damage.",
                buffs: [
                    "Damage: 100/155/210/265/320 (80% of your Physical Power)",
                    "Stun Duration: 1s",
                ],
                imageUrl: require('../assets/images/achilles_1.png'),
            },
            {
                name: "Radiant Glory",
                description: "Achilles is blessed by the gods, giving him bonus Physical Power, Protections, and Crowd Control Reduction for 6 seconds. While this blessing is active, Achilles will heal himself upon successfully damaging enemies with abilities.",
                buffs: [
                    "Heal: 18/21/24/27/30",
                    "Physical Power: +6/7/8/9/10%",
                    "Crowd Control Reduction: 20%",
                    "Max Heals per Ability: 4",
                    "Protections: +10/12.5/15/17.5/20%"
                ],
                imageUrl: require('../assets/images/achilles_2.png'),
            },
            {
                name: "Combat Dodge",
                description: "Achilles dodges his enemies' attacks before striking them in swift response. If Achilles successfully hits an enemy god with this strike, Achilles can use this ability once more before it goes on Cooldown.",
                buffs: [
                    "Damage: 65/100/135/170/205 (+45% of your Physical Power)",
                ],
                imageUrl: require('../assets/images/achilles_3.png'),
            },
            {
                name: "Fatal Strike (Ultimate)",
                description: "Achilles dashes forward and attacks. While dashing, Achilles will pass through minions, stop and hit the first enemy god he encounters, dealing damage to all he hits and executing gods below 35% Health. If Achilles kills a god with this ability, he can use it again, up to 5 times. As Achilles successfully Executes his enemies, he becomes more reckless in combat and leaves his heel exposed. Achilles will become more susceptible to damage, stacking up to 5 times.",
                buffs: [
                    "Damage: 180/270/360/450/540 (100% of your Physical Power)",
                    "Execute Threshold: 35%",
                    "Damage Taken Increase: 5%"
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
