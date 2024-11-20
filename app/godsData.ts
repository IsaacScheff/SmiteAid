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
    {
        name: "Ah Puch",
        class: GodClass.Mage,
        blurb: "hockey puch",
        imageUrl: require('../assets/images/ah_puch.png'),
        abilities: [
            {
                name: "Hollow Ground (Passive)",
                description: "Ah Puch is closely attuned with the dead and may exhume corpses at his will. When walking over a decaying corpse, Ah Puch lowers the cooldown of Undead Surge and Corpse Explosion by 1s, restores 4% of his maximum Health and 3% of his maximum Mana.",
                buffs: [
                    "Enemy gods and the Fire Giant can destroy the corpses with 2 Basic Attacks.",
                    "Ah Puch can have up to 6 corpses (with a maximum duration of 45s) and placing more than 6 will cause the oldest ones to disappear."
                ],
                imageUrl: require('../assets/images/ah_puch_p.png'),
            },
            {
                name: "Undead Surge",
                description: "Ah Puch raises up to two decaying corpses from the underworld that surge forward exploding on anything they touch, when they reach max distance, or when Ah Puch reactivates Undead Surge dealing damage and slowing targets hit. Enemies hit also have their healing reduced by 40% for 5s. The corpses collapse after exploding remaining behind.",
                buffs: [
                    "Damage: 90/110/130/150/170 (+35% of your Magical Power)",
                    "Slow: 20/25/30/35/40%",
                    "Slow Duration: 2s",
                    "Range/Radius: 60/20",
                    "Cooldown: 11 seconds"
                ],
                imageUrl: require('../assets/images/ah_puch_1.png'),
            },
            {
                name: "Corpse Explosion",
                description: "Ah Puch causes the target area to explode dealing damage. Corpse Explosion also causes any decaying corpses in the area to explode.",
                buffs: [
                    "Initial Damage: 60/70/80/90/100 (+30% of your Magical Power)",
                    "Damage per Corpse: 55/80/105/130/155 (+25% of your Magical Power)",
                    "Range/Radius: 55/20, 25",
                    "Cooldown: 8 seconds"
                ],
                imageUrl: require('../assets/images/ah_puch_2.png'),
            },
            {
                name: "Fleeting Breath",
                description: "Ah Puch throws a charm from the underworld which awakens a decaying corpse that applies miasma to targets in an area and falls to the ground, remaining behind. Targets take damage every second. After the duration, targets take additional damage and are stunned if they were healed by an ability during the initial duration.",
                buffs: [
                    "Damage per Tick: 30/40/50/60/70 (+20% of your Magical Power)",
                    "Additional Damage: 50/100/150/200/250 (+40% of your Magical Power)",
                    "Stun Duration: 1.5s",
                    "Duration: 4s",
                    "Range/Radius: 55/13",
                    "Cooldown: 10 seconds"
                ],
                imageUrl: require('../assets/images/ah_puch_3.png'),
            },
            {
                name: "Empty the Crypts (Ultimate)",
                description: "Ah Puch unleashes an army of Wraiths from the Ninth Hell that swarm forward, damaging enemies and reducing their Healing and Damage Dealt.",
                buffs: [
                    "Damage per Wraith: 50/60/70/80/90 (+15% of your Magical Power)",
                    "Duration: 6s",
                    "Damage Reduction: 3% per Stack",
                    "Healing Reduction: 20% per Stack",
                    "Max Stacks: 3",
                    "Range: 75",
                    "Cooldown: 90 seconds"
                ],
                imageUrl: require('../assets/images/ah_puch_ult.png'),
            },
        ]
    },
    {
        name: "Amaterasu",
        class: GodClass.Warrior,
        blurb: "Ama <3",
        imageUrl: require('../assets/images/amaterasu.png'),
        abilities: [
            {
                name: "Illuminating Strike (Passive)",
                description: "Amaterasu illuminates enemies she hits with basic attacks. After 3 hits on the same target the enemy gains an aura, exposing their weaknesses and causing them to take more damage from all sources. Any other enemies that come near the afflicted target are weakened as well.",
                buffs: [
                    "Weakening Aura: 10% Increased Damage Taken",
                    "Stack/Aura Duration: 6s",
                    "Max Auras Possible: 3",
                    "Radius: 30",
                    "Stacks up to 30% increased damage taken."
                ],
                imageUrl: require('../assets/images/amaterasu_p.png'),
            },
            {
                name: "Divine Presence",
                description: "Amaterasu harnesses the power of her jewel, gaining Attack Speed and healing herself every second for 4 seconds. She also creats a persistent aura that buffs nearby allied gods. Every time this ability is activated the aura switches between Valor and Benevolence.",
                buffs: [
                    "Heal Per Tick: 15/25/35/45/55",
                    "Attack Speed: 15/17.5/20/22.5/25%",
                    "Benevolence Aura: 9/12/15/18/21% Move Speed",
                    "Valor Aura: 14/18/22/26/30 Bonus Power",
                    "Radius: 30",
                    "Cooldown: 9 seconds"
                ],
                imageUrl: require('../assets/images/amaterasu_1.png'),
            },
            {
                name: "Heavenly Reflection",
                description: "Amaterasu charges her mirror for 5 seconds. While the mirror is charging she takes decreased damage. By activating the ability again or at the end of 5 seconds she will fire her mirror straight ahead, dealing damage. The mirror can be charged by successfully attacking enemies or from taking damage, and will deal up to double the base damage when fully charged.",
                buffs: [
                    "Self Damage Mitigation: 7/9/11/13/15%",
                    "Mirror Damage: 70/105/140/175/210 (+60% of your Physical Power)",
                    "Full Charge Damage: 140/210/280/350/420",
                    "Range: 55",
                    "Cooldown: 12/11.5/11/10.5/10 seconds"
                ],
                imageUrl: require('../assets/images/amaterasu_2.png'),
            },
            {
                name: "Glorious Charge",
                description: "Amaterasu shines light off of her sacred blade, silencing all enemies in front of her. She then dashes forward while dealing damage, piercing through minions or stopping at the first god hit.",
                buffs: [
                    "Silence Duration: 1s",
                    "Dash Damage: 80/135/190/245/300 (+60% of your Physical Power)",
                    "Range: 55",
                    "Cooldown: 15 seconds"
                ],
                imageUrl: require('../assets/images/amaterasu_3.png'),
            },
            {
                name: "Dazzling Offense (Ultimate)",
                description: "Amaterasu focuses the power of the heavens into an impressive 3 strike combination attack. The 2nd hit will do 20% more base damage and slow enemies by 30%. The 3rd hit will do 40% more base damage and stun enemies. She must hit an enemy with the 1st hit to receive the increased damage and CC on the 2nd hit. The same rule applies to the 2nd and 3rd hits.",
                buffs: [
                    "Damage per Strike: 100/140/180/220/260 (+50% of your Physical Power)",
                    "Slow Duration: 2s",
                    "Stun Duration: 2s",
                    "Radius: 35",
                    "Cooldown: 90/85/80/75/70 seconds"
                ],
                imageUrl: require('../assets/images/amaterasu_ult.png'),
            },
        ]
    },
    {
        name: "Anhur",
        class: GodClass.Hunter,
        blurb: "",
        imageUrl: require('../assets/images/anhur.png'),
        abilities: [
            {
                name: "Enfeeble (Passive)",
                description: "Anhur's spear attacks reduce the enemy target's Physical Protection for 3 seconds.",
                buffs: [
                    "Physical Protection Debuff: 20",
                    "The debuff duration refreshes per (spear) attack."
                ],
                imageUrl: require('../assets/images/anhur_p.png'),
            },
            {
                name: "Shifting Sands",
                description: "Anhur erects an obelisk from the ground, blocking all player movement. The surrounding sands Slow enemies and increase the damage of Anhur's Basic Attacks against targets in the sands.",
                buffs: [
                    "Slow: 15/20/25/30/35%",
                    "Damage Buff: 8/11/14/17/20%",
                    "Lifetime: 7s",
                    "Range/Radius: 70/30",
                    "Cooldown: 14 seconds"
                ],
                imageUrl: require('../assets/images/anhur_1.png'),
            },
            {
                name: "Impale",
                description: "Anhur hurls his spear with great might. If the spear hits a god, they take damage and are knocked back. Gods knocked back into a wall are Stunned. Enemies hit by the pushed god take damage. The spear passes through minions, doing damage to them as well.",
                buffs: [
                    "Damage: 105/170/235/300/365 (+80% of your Physical Power)",
                    "Stun Duration: 1.1/1.2/1.3/1.4/1.5s",
                    "Range: 55",
                    "Cooldown: 12 seconds"
                ],
                imageUrl: require('../assets/images/anhur_2.png'),
            },
            {
                name: "Disperse",
                description: "Anhur leaps to his ground target location, doing damage and knocking back all enemies in the radius where he lands.",
                buffs: [
                    "Damage: 70/110/150/190/230 (+60% of your Physical Power)",
                    "Range/Radius: 55/15",
                    "Cooldown: 15/14.5/14/13.5/13 seconds",
                    "This ability's knockup and damage can be canceled if hit by CC on landing.",
                    "This ability has a setup time of 0.15s and leap time of 0.85s."
                ],
                imageUrl: require('../assets/images/anhur_3.png'),
            },
            {
                name: "Desert Fury (Ultimate)",
                description: "Summoning the fury of the desert, Anhur hunkers down and throws empowered spears that pass through everything, doing damage to all enemies in their path. He is immune to Crowd Control for the duration.",
                buffs: [
                    "Damage per Spear: 65/90/115/140/165 (+30% of your Physical Power)",
                    "Spears Thrown: 8",
                    "Range: 80",
                    "Cooldown: 90 seconds",
                    "This ability can go through walls.",
                    "Has a duration of 2s (with a 0.25s prefire and spears thrown every 0.22s)."
                ],
                imageUrl: require('../assets/images/anhur_ult.png'),
            },
        ]
    },
    {
        name: "Anubis",
        class: GodClass.Mage,
        blurb: "",
        imageUrl: require('../assets/images/anubis.png'),
        abilities: [
            {
                name: "Sorrow (Passive)",
                description: "All of Anubis' abilities steal Physical and Magical Protection from the target and increase his Healing obtained from Magical Lifesteal. These effects stack on every tick of Anubis' abilities. Sorrow also grants Anubis an additional 30% reduction to all Crowd Control durations.",
                buffs: [
                    "Protections Stolen Per Stack: 5",
                    "Increased Healing per Stack: 20%",
                    "Duration: 6s",
                    "Max Stacks: 3",
                    "Grants 15 Protections and 60% Lifesteal Healing bonus at max stacks."
                ],
                imageUrl: require('../assets/images/anubis_p.png'),
            },
            {
                name: "Plague of Locusts",
                description: "A plague of locusts bellows forth from Anubis' mouth, smothering all enemies in the area and doing damage every .25s for 3s. Anubis is immune to knockback while channeling and moves at 50% speed.",
                buffs: [
                    "Damage per Tick: 18/26/34/42/50 (+22% of your Magical Power)",
                    "Range: 35",
                    "Cooldown: 10 seconds",
                    "Can be cancelled early."
                ],
                imageUrl: require('../assets/images/anubis_1.png'),
            },
            {
                name: "Mummify",
                description: "Anubis fires a bandage projectile, mummifying and Stunning his target.",
                buffs: [
                    "Stun Duration: 2s",
                    "Range: 70",
                    "Cooldown: 17/16/15/14/13 seconds"
                ],
                imageUrl: require('../assets/images/anubis_2.png'),
            },
            {
                name: "Grasping Hands",
                description: "Anubis calls for help from the underworld as hands penetrate the ground and claw at his enemies, doing damage and Slowing every .5s for 2s.",
                buffs: [
                    "Damage per Tick: 25/40/55/70/85 (+35% of your Magical Power)",
                    "Slow: 25%",
                    "Range/Radius: 55/20",
                    "Cooldown: 14/13.5/13/12.5/12 seconds"
                ],
                imageUrl: require('../assets/images/anubis_3.png'),
            },
            {
                name: "Death Gaze (Ultimate)",
                description: "Anubis focuses all of his energy into a piercing gaze, doing damage to all enemies in the path, every 0.1 seconds for 3 seconds.",
                buffs: [
                    "Damage per Tick: 20/25/30/35/40 (+13% of your Magical Power)",
                    "Range: 70",
                    "Cooldown: 90/85/80/75/70 seconds",
                    "Anubis is stationary, CC immune and can rotate while casting this ability.",
                    "Can be cancelled early."
                ],
                imageUrl: require('../assets/images/anubis_ult.png'),
            },
        ]
    },
    {
        name: "Ao Kuang",
        class: GodClass.Mage,
        blurb: "",
        imageUrl: require('../assets/images/ao_kuang.png'),
        abilities: [
            {
                name: "Dragon King's Sword (Passive)",
                description: "Every 10 seconds Ao Kuang gets a stack of Dragon King's Sword. With a stack available, his next non-ultimate ability that deals damage to an Enemy god has a reduced cooldown and heals Ao Kuang. Successfully executing an Enemy god with King of the Eastern Seas fully charges Dragon King's Sword.",
                buffs: [
                    "Cooldown Reduction: 2s",
                    "Max Stacks: 3",
                    "Heal: 3% of maximum Health"
                ],
                imageUrl: require('../assets/images/ao_kuang_p.png'),
            },
            {
                name: "Water Illusion",
                description: "Ao Kuang Teleports forward into Stealth, leaving behind a watery form of himself. He remains in Stealth for 5s or until he attacks or takes damage.  Ao Kuang may activate this ability again to detonate the watery form, dealing damage to nearby enemies.",
                buffs: [
                    "Damage: 70/120/170/220/270 (+70% of your Magical Power)",
                    "Range/Radius: 30/20",
                    "Cooldown: 15 seconds",
                    "The watery form automatically detonates after 5s regardless of Ao Kuang's status."
                ],
                imageUrl: require('../assets/images/ao_kuang_1.png'),
            },
            {
                name: "Dragon Call",
                description: "Ao Kuang summons 6 dragons to his side. For every successful Basic Attack Ao Kuang makes, a dragon will dive to the target dealing additional damage. This ability ends after all dragons are used, or after 10s. Ao Kuang may activate this ability again to send forward any remaining dragons in a ranged attack. The dragons damage and Slow the first enemy they hit.",
                buffs: [
                    "Attack Damage: 35/50/65/80/95 (+30% of your Magical Power) per hit",
                    "Ranged Damage: 20/25/30/35/40 (+13% of your Magical Power) per remaining dragon",
                    "Slow: 30%, for 1s + 0.25s per remaining dragon",
                    "Range: 55",
                    "Cooldown: 15/14/13/12/11 seconds"
                ],
                imageUrl: require('../assets/images/ao_kuang_2.png'),
            },
            {
                name: "Wild Storm",
                description: "Ao Kuang unleashes a storm of lightning from his sword, damaging all enemies in front of him. This hit will send a Dragon from Dragon's Call forth, dealing damage to hit targets.",
                buffs: [
                    "Damage: 90/135/180/225/270 (+40% of your Magical Power)",
                    "Range: 30",
                    "Cooldown: 6 seconds"
                ],
                imageUrl: require('../assets/images/ao_kuang_3.png'),
            },
            {
                name: "King of the Eastern Seas (Ultimate)",
                description: "Ao Kuang grabs a single target, damaging and knocking them into the air. If the target is below a Health threshold, Ao Kuang will also reveal his true form, becoming an airborne Dragon and executing them restoring Health. After transforming Ao Kuang then picks a new location to land, dealing damage to enemies within 20 units.",
                buffs: [
                    "Damage: 90/140/190/240/290 (+50% of your Magical Power)",
                    "Execute Threshold: 30%",
                    "Heal: 10/15/20/25/30% of maximum Health",
                    "Landing Damage: 100/150/200/250/300 (+50% of your Magical Power)",
                    "Range: 15",
                    "Cooldown: 100 seconds",
                    "The target can avoid being executed by cleansing the knockup effect before reaching the halfway point of going up into the air.",
                    "Ao Kuang is CC immune while he is grabbing a target, even if the ability does not result in an execute."
                ],
                imageUrl: require('../assets/images/ao_kuang_ult.png'),
            },
        ]
    }
  
    //{
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
