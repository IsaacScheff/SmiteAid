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
        blurb: "Bruiser warrior, can be anywhere from full tank to damage dealer",
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
                    "Range: 50",
                    "Cooldown: 14 seconds",
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
                    "Protections: +10/12.5/15/17.5/20%",
                    "Cooldown: 9 seconds"
                ],
                imageUrl: require('../assets/images/achilles_2.png'),
            },
            {
                name: "Combat Dodge",
                description: "Achilles dodges his enemies' attacks before striking them in swift response. If Achilles successfully hits an enemy god with this strike, Achilles can use this ability once more before it goes on Cooldown.",
                buffs: [
                    "Damage: 65/100/135/170/205 (+45% of your Physical Power)",
                    "Range: 35",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ],
                imageUrl: require('../assets/images/achilles_3.png'),
            },
            {
                name: "Fatal Strike (Ultimate)",
                description: "Achilles dashes forward and attacks. While dashing, Achilles will pass through minions, stop and hit the first enemy god he encounters, dealing damage to all he hits and executing gods below 35% Health. If Achilles kills a god with this ability, he can use it again, up to 5 times. As Achilles successfully Executes his enemies, he becomes more reckless in combat and leaves his heel exposed. Achilles will become more susceptible to damage, stacking up to 5 times.",
                buffs: [
                    "Damage: 180/270/360/450/540 (100% of your Physical Power)",
                    "Execute Threshold: 35%",
                    "Damage Taken Increase: 5%",
                    "Range: 35",
                    "Cooldown: 90 seconds"
                ],
                imageUrl: require('../assets/images/achilles_ult.png'),
            },
        ]
    },
    {
        name: "Agni",
        class: GodClass.Mage,
        blurb: "Description of Agni here",
        imageUrl: require('../assets/images/agni.png'),
        abilities: [
            {
                name: "Combustion (Passive)",
                description: "Hitting an enemy with a Basic Attack provides 1 stack of Combustion. Hitting an enemy god provides 2. At 4 stacks Agni's next Flame Wave or Rain Fire will ignite all enemies hit, dealing damage every .5s for 3s.",
                buffs: [
                    "Damage per Tick: 5 (+6% of your Magical Power)"
                ],
                imageUrl: require('../assets/images/agni_p.png'),
            },
            {
                name: "Noxious Fumes",
                description: "Agni summons a cloud of noxious fumes at his ground target location, doing damage every second. Firing any of Agni's abilities into the fumes detonates the gas, Stunning and damaging all enemies in the radius.",
                buffs: [
                    "Damage per Tick: 10/20/30/40/50 (+5% of your Magical Power)",
                    "Explosion Damage: 20/40/60/80/100 (+20% of your Magical Power)",
                    "Fumes Duration: 10s",
                    "Stun Duration: 1s",
                    "Range/Radius: 55/20",
                    "Cooldown: 13 seconds"
                ],
                imageUrl: require('../assets/images/agni_1.png'),
            },
            {
                name: "Flame Wave",
                description: "Agni summons a wave of fire in front of him that scorches all enemies in its path. Ignites Noxious Fumes.",
                buffs: [
                    "Damage: 100/155/210/265/320 (+65% of your Magical Power)",
                    "Range: 50",
                    "Cooldown: 15/14.5/14/13.5/13 seconds"
                ],
                imageUrl: require('../assets/images/agni_2.png'),
            },
            {
                name: "Path of Flames",
                description: "Agni blazes a path forward in a quick dash, leaving flames trailing behind him. Any enemies passing through the flames catch fire and burn for damage every .5s for 2s. Ignites Noxious Fumes. Agni is immune to Knockback while dashing.",
                buffs: [
                    "Damage per Tick: 20/30/40/50/60 (+15% of your Magical Power)",
                    "Path Duration: 3s",
                    "Range: 60",
                    "Cooldown: 16 seconds"
                ],
                imageUrl: require('../assets/images/agni_3.png'),
            },
            {
                name: "Rain Fire (Ultimate)",
                description: "Every 18 seconds, Agni gains a flaming halo that can be expended to summon a giant meteor at his ground target location. He can summon 1 every .8 seconds. Ignites Noxious Fumes.",
                buffs: [
                    "Damage: 135/175/215/255/295 (+60% of your Magical Power)",
                    "Max Halos: 3",
                    "Range/Radius: 65/20",
                    "Cooldown: Dependant on halos"
                ],
                imageUrl: require('../assets/images/agni_ult.png'),
            },
        ]
    },
    {
        name: "Ah Muzen Cab",
        class: GodClass.Hunter,
        blurb: "blurb",
        imageUrl: require('../assets/images/ah_muzen_cab.png'),
        abilities: [
            {
                name: "Bees! (Passive)",
                description: "Enemies afflicted by Bees! take damage every .5s for 2s, are revealed on the minimap, and swarm nearby enemies. Basic Attacks refresh and extend the duration of Bees! by 1s. This damage does not trigger Item effects.",
                buffs: [
                    "Damage: 9 (+5% of your Physical Power)",
                    "Radius: 20",
                    "The debuff reveals stealthed enemies."
                ],
                imageUrl: require('../assets/images/ah_muzen_cab_p.png'),
            },
            {
                name: "Hive",
                description: "Bees swarm at the ground target location, creating a new Hive that provides Movement Speed, Attack Speed and HP5 Buffs to Ah Muzen Cab. Hives reveal enemies within 30 units of them. The Hives can only be destroyed by Basic Attacks.",
                buffs: [
                    "Enemy gods can DESTROY them with one BASIC ATTACK.",
                    "HP5: 20/25/30/35/40",
                    "Movement Speed: 10/14/18/22/26%",
                    "Attack Speed: 10/20/30/40/50%",
                    "Max Hives: 7/8/9/10/11",
                    "Radius: 90",
                    "Deploy range of 55.",
                    "Cooldown: 12 seconds"

                ],
                imageUrl: require('../assets/images/ah_muzen_cab_1.png'),
            },
            {
                name: "Swarm",
                description: "Ah Muzen Cab summons a large swarm of bees that fly forward in a path in front of him, dealing damage to all enemies hit and applying Bees to them.",
                buffs: [
                    "Damage: 60/100/140/180/220 (+70% of your Physical Power)",
                    "Range: 70",
                    "Cooldown: 15/14/13/12/11 seconds"
                ],
                imageUrl: require('../assets/images/ah_muzen_cab_2.png'),
            },
            {
                name: "Honey",
                description: "Ah Muzen Cab sprays honey that lasts for 4s at a moveable ground target location, Slowing all enemies in the area. Bees from Hives within 90 units and Swarm will fly over to protect the honey, dealing damage every .5 second and applying Bees! to all enemies as they leave the honey.",
                buffs: [
                    "Damage per Tick: 13/25/37/49/61 (+15% of your Physical Power)",
                    "Slow: 20/22.5/25/27.5/30%",
                    "Maximum honey range of 70",
                    "Range/Radius: 55/10",
                    "Cooldown: 12 seconds"
                ],
                imageUrl: require('../assets/images/ah_muzen_cab_3.png'),
            },
            {
                name: "Stinger (Ultimate)",
                description: "Ah Muzen Cab fires off an enormous stinger that deals damage to all enemies in a line, sticking into the first god that is hit, applying Bees!, Slowing, Crippling, and decreasing their Physical Protections for 3 seconds. If the target dies or after 3 seconds, the stinger falls onto the ground for 4 seconds. If Ah Muzen Cab picks up his stinger, he gains a significant reduction to Stinger's Cooldown.",
                buffs: [
                    "Damage: 275/355/435/515/595 (+90% of your Physical Power)",
                    "Slow: 20%",
                    "Physical Protection Reduction: 10%",
                    "Retrieval Cooldown Reduction: 60%",
                    "Range: 70",
                    "Cooldown: 100 seconds"
                ],
                imageUrl: require('../assets/images/ah_muzen_cab_ult.png'),
            },
        ]
    },
  
    // {
    //     name: "God Template",
    //     class: GodClass.,
    //     blurb: "",
    //     imageUrl: require('../assets/images/.png'),
    //     abilities: [
    //         {
    //             name: " (Passive)",
    //             description: "",
    //             buffs: [
    //                 ""
    //             ],
    //             imageUrl: require('../assets/images/_p.png'),
    //         },
    //         {
    //             name: "",
    //             description: "",
    //             buffs: [
    //                 ""
    //             ],
    //             imageUrl: require('../assets/images/_1.png'),
    //         },
    //         {
    //             name: "",
    //             description: "",
    //             buffs: [
    //                 ""
    //             ],
    //             imageUrl: require('../assets/images/_2.png'),
    //         },
    //         {
    //             name: "",
    //             description: "",
    //             buffs: [
    //                 ""
    //             ],
    //             imageUrl: require('../assets/images/_3.png'),
    //         },
    //         {
    //             name: " (Ultimate)",
    //             description: "",
    //             buffs: [
    //                 ""
    //             ],
    //             imageUrl: require('../assets/images/_ult.png'),
    //         },
    //     ]
    //}
];

export default gods;
